import { NextResponse } from "next/server";
import { Pool } from "@neondatabase/serverless";

// Query security checks
const isQuerySafe = (sql: string) => {
  const upperSql = sql.trim().toUpperCase();
  
  // Must begin with a SELECT or WITH statement
  if (!upperSql.startsWith("SELECT") && !upperSql.startsWith("WITH")) {
    return false;
  }
  
  // Remove string literals to prevent false positives when checking for restricted keywords
  const strippedSql = upperSql.replace(/'[^']*'/g, "");
  
  // Check against dangerous DDL/DML keywords
  const forbiddenKeywords = /\b(INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|TRUNCATE|GRANT|REVOKE|EXEC|EXECUTE|MERGE)\b/i;
  
  if (forbiddenKeywords.test(strippedSql)) {
    return false;
  }
  
  return true;
};

export async function POST(req: Request) {
  try {
    const { query, instance = "1" } = await req.json();

    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { error: "Query is required and must be a string." },
        { status: 400 }
      );
    }

    if (!isQuerySafe(query)) {
      return NextResponse.json(
        { error: "OPERATION BLOCKED: Only SELECT queries are permitted. Destructive or schema-altering commands are restricted by the system firewall." },
        { status: 403 }
      );
    }

    // Map instance IDs to their respective connection strings
    const dbUrls: Record<string, string | undefined> = {
      "1": process.env.DATABASE_URL_1 || process.env.DATABASE_URL,
      "2": process.env.DATABASE_URL_2,
      "3": process.env.DATABASE_URL_3,
      "4": process.env.DATABASE_URL_4,
    };

    const connectionString = dbUrls[instance];

    if (!connectionString) {
      return NextResponse.json(
        { error: `SERVER ERROR: Network routing to Database Instance ${instance} failed. Connection string not configured.` },
        { status: 500 }
      );
    }

    // Connect to Neon based on selected instance
    const pool = new Pool({ connectionString });

    // Execute query
    const result = await pool.query(query);

    // Close the pool connection to clean up
    await pool.end();

    return NextResponse.json({
      fields: result.fields.map((f) => f.name),
      rowCount: result.rowCount,
      rows: result.rows,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "An unknown error occurred" }, { status: 500 });
  }
}
