"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RulesModal from "@/components/RulesModal";
import { TerminalSquare, Play, Database, ShieldAlert, CheckCircle2, ChevronRight, Download } from "lucide-react";
import { motion } from "framer-motion";

const schemas = {
  crime_scene_reports: `CREATE TABLE crime_scene_reports (
    id INTEGER,
    year INTEGER,
    month INTEGER,
    day INTEGER,
    street TEXT,
    description TEXT,
    PRIMARY KEY(id)
);`,
  interviews: `CREATE TABLE interviews (
    id INTEGER,
    name TEXT,
    year INTEGER,
    month INTEGER,
    day INTEGER,
    transcript TEXT,
    PRIMARY KEY(id)
);`,
  atm_transactions: `CREATE TABLE atm_transactions (
    id INTEGER,
    account_number INTEGER,
    year INTEGER,
    month INTEGER,
    day INTEGER,
    atm_location TEXT,
    transaction_type TEXT,
    amount INTEGER,
    PRIMARY KEY(id)
);`,
  bank_accounts: `CREATE TABLE bank_accounts (
    account_number INTEGER,
    person_id INTEGER,
    creation_year INTEGER,
    FOREIGN KEY(person_id) REFERENCES people(id)
);`,
  airports: `CREATE TABLE airports (
    id INTEGER,
    abbreviation TEXT,
    full_name TEXT,
    city TEXT,
    PRIMARY KEY(id)
);`,
  flights: `CREATE TABLE flights (
    id INTEGER,
    origin_airport_id INTEGER,
    destination_airport_id INTEGER,
    year INTEGER,
    month INTEGER,
    day INTEGER,
    hour INTEGER,
    minute INTEGER,
    PRIMARY KEY(id),
    FOREIGN KEY(origin_airport_id) REFERENCES airports(id),
    FOREIGN KEY(destination_airport_id) REFERENCES airports(id)
);`,
  passengers: `CREATE TABLE passengers (
    flight_id INTEGER,
    passport_number INTEGER,
    seat TEXT,
    FOREIGN KEY(flight_id) REFERENCES flights(id)
);`,
  phone_calls: `CREATE TABLE phone_calls (
    id INTEGER,
    caller TEXT,
    receiver TEXT,
    year INTEGER,
    month INTEGER,
    day INTEGER,
    duration INTEGER,
    PRIMARY KEY(id)
);`,
  people: `CREATE TABLE people (
    id INTEGER,
    name TEXT,
    phone_number TEXT,
    passport_number INTEGER,
    license_plate TEXT,
    PRIMARY KEY(id)
);`,
  bakery_security_logs: `CREATE TABLE bakery_security_logs (
    id INTEGER,
    year INTEGER,
    month INTEGER,
    day INTEGER,
    hour INTEGER,
    minute INTEGER,
    activity TEXT,
    license_plate TEXT,
    PRIMARY KEY(id)
);`
};

export default function ActivityPage() {
  const [query, setQuery] = useState("");
  const [output, setOutput] = useState<{ type: "success" | "error" | "info", text: string } | null>(null);
  const [activeSchema, setActiveSchema] = useState<{ name: string; content: string } | null>(null);
  const [instance, setInstance] = useState("1");
  const [rulesOpen, setRulesOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleExecute = async () => {
    if (!query.trim()) {
      setOutput({ type: "error", text: "Error: Query cannot be empty "});
      return;
    }
    
    setLoading(true);
    setOutput({ type: "info", text: "Connecting to secure Neon DB cluster..." });
    
    try {
      const response = await fetch("/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, instance }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        setOutput({ type: "error", text: `PostgreSQL Error:\n${data.error}` });
      } else {
        // Format the output
        let outText = `Query executed successfully.\nRows returned: ${data.rowCount ?? data.rows?.length ?? 0}\n\n`;
        
        if (data.rows && data.rows.length > 0) {
          // Calculate column widths
          const colWidths: Record<string, number> = {};
          data.fields.forEach((f: string) => {
            colWidths[f] = f.length;
          });
          
          data.rows.forEach((row: any) => {
            data.fields.forEach((f: string) => {
              const valLen = row[f] !== null && row[f] !== undefined ? String(row[f]).length : 4; // "NULL" is 4
              colWidths[f] = Math.max(colWidths[f], valLen);
            });
          });
          
          // Generate header
          const separator = data.fields.map((f: string) => "-".repeat(colWidths[f] + 2)).join("+");
          const header = data.fields.map((f: string) => ` ${f.padEnd(colWidths[f])} `).join("|");
          
          outText += `${separator}\n${header}\n${separator}\n`;
          
          // Generate rows
          data.rows.forEach((row: any) => {
            outText += data.fields.map((f: string) => {
              const val = row[f] !== null && row[f] !== undefined ? String(row[f]) : "NULL";
              return ` ${val.padEnd(colWidths[f])} `;
            }).join("|") + "\n";
          });
          
          outText += `${separator}\n`;
        }
        
        setOutput({ type: "success", text: outText });
      }
    } catch (err: any) {
      setOutput({ type: "error", text: `Network Error:\n${err.message}` });
    } finally {
      setLoading(false);
    }
  };

  const copyOutput = () => {
    if (output) {
      navigator.clipboard.writeText(output.text);
      alert("Output copied to clipboard!");
    }
  };

  return (
    <>
      <Navbar onRulesClick={() => setRulesOpen(true)} />
      <main style={{ minHeight: "100vh", padding: "120px 40px 80px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "40px", maxWidth: "800px" }}
        >
          <div className="section-tag section-tag-purple glass" style={{ marginBottom: "20px", display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(188, 19, 254, 0.3)" }}>
            <Database size={16} /> Secure SQL Terminal
          </div>
          <h1 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "800", color: "var(--on-surface)", marginBottom: "16px", textShadow: "0 0 30px rgba(0, 251, 251, 0.3)" }}>
            Terminal Interface
          </h1>
          <p style={{ color: "var(--on-surface-muted)", fontSize: "1.1rem", marginBottom: "24px" }}>
            Write and execute SQL queries securely against the live <code style={{ color: "var(--primary)", background: "rgba(188, 19, 254, 0.1)", padding: "2px 6px", borderRadius: "4px" }}>fiftyville.db</code> database. Find the thief!
          </p>
          
          {/* Mystery Prompt */}
          <div className="glass hover-glow" style={{ padding: "24px", borderRadius: "12px", border: "1px solid rgba(0, 251, 251, 0.3)", background: "rgba(0, 251, 251, 0.05)", textAlign: "left", boxShadow: "insert 0 0 20px rgba(0, 251, 251, 0.1)" }}>
            <h3 style={{ color: "var(--secondary)", display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", fontSize: "1.3rem" }}>
              <ShieldAlert size={20} /> Case File: The Fiftyville Mystery
            </h3>
            <p style={{ color: "var(--on-surface-muted)", fontSize: "1.05rem", lineHeight: "1.6" }}>
              A massive theft of the prized golden duck mascot took place on <strong style={{ color: "var(--on-surface)" }}>July 28, 2025</strong>, at the <strong style={{ color: "var(--on-surface)" }}>Humphrey Street bakery</strong>. 
              The Fiftyville police have compiled a sprawling database of town records, interviews, flights, and ATM transactions. 
              Your objective is to explore the DB using SQL. You must identify the <strong style={{ color: "#ff5f56" }}>Thief</strong>, the town the thief <strong style={{ color: "#ffbd2e" }}>Escaped To</strong>, and the <strong style={{ color: "#27c93f" }}>Accomplice</strong> who helped them!
            </p>
          </div>
        </motion.div>

        {/* Terminal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass hover-glow"
          style={{ width: "100%", maxWidth: "1000px", background: "rgba(10, 10, 15, 0.9)", border: "1px solid rgba(0, 251, 251, 0.3)", borderRadius: "16px", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr", boxShadow: "0 20px 50px rgba(0,0,0,0.5), inset 0 0 20px rgba(0, 251, 251, 0.05)" }}
        >
          {/* Top Bar */}
          <div style={{ background: "rgba(0, 0, 0, 0.5)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <TerminalSquare size={18} color="var(--primary)" />
              <span style={{ color: "var(--on-surface-muted)", fontSize: "0.9rem", fontFamily: "monospace", display: "flex", alignItems: "center", gap: "8px" }}>
                fiftyville@neon-cluster:~/
                <select 
                  value={instance} 
                  onChange={(e) => setInstance(e.target.value)}
                  style={{ background: "rgba(10, 10, 15, 0.8)", color: "var(--primary)", border: "1px solid rgba(188, 19, 254, 0.4)", borderRadius: "4px", padding: "2px 6px", outline: "none", fontSize: "0.85rem", fontFamily: "monospace", cursor: "pointer" }}
                >
                  <option value="1">Node-1</option>
                  <option value="2">Node-2</option>
                  <option value="3">Node-3</option>
                </select>
              </span>
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
              <motion.div whileHover={{ scale: 1.2 }} style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f56" }} />
              <motion.div whileHover={{ scale: 1.2 }} style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
              <motion.div whileHover={{ scale: 1.2 }} style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f" }} />
            </div>
          </div>

          <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* Database Explorer */}
            <div>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--on-surface)", fontSize: "0.95rem", fontWeight: "600", marginBottom: "12px", fontFamily: "monospace" }}>
                <Database size={16} color="var(--primary)" /> AVAILABLE TABLES
              </label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                 {Object.keys(schemas).map(table => {
                    const isSelected = activeSchema?.name === table;
                    return (
                      <button 
                         key={table}
                         onClick={() => setActiveSchema(isSelected ? null : { name: table, content: schemas[table as keyof typeof schemas] })}
                         style={{ 
                            background: isSelected ? "rgba(188, 19, 254, 0.2)" : "rgba(255,255,255,0.05)", 
                            border: isSelected ? "1px solid var(--primary)" : "1px solid rgba(255,255,255,0.1)", 
                            borderRadius: "6px", padding: "6px 12px", 
                            color: isSelected ? "var(--primary)" : "var(--on-surface-muted)", 
                            fontSize: "0.85rem", cursor: "pointer", fontFamily: "monospace", transition: "all 0.2s" 
                         }}
                         onMouseEnter={e => { if (!isSelected) { e.currentTarget.style.color = "var(--primary)"; e.currentTarget.style.border = "1px solid var(--primary)"; } }}
                         onMouseLeave={e => { if (!isSelected) { e.currentTarget.style.color = "var(--on-surface-muted)"; e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)"; } }}
                      >
                         {table}
                      </button>
                    );
                 })}
              </div>

              {activeSchema && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: "auto" }} 
                  style={{ marginTop: "16px", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(188, 19, 254, 0.4)", borderRadius: "8px", padding: "16px", boxShadow: "inset 0 4px 10px rgba(0,0,0,0.5)" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--primary)", fontFamily: "monospace", fontWeight: "600" }}>
                      Schema: {activeSchema.name}
                    </span>
                    <button 
                      onClick={() => setActiveSchema(null)}
                      style={{ background: "transparent", border: "none", color: "var(--on-surface-muted)", cursor: "pointer", fontSize: "0.8rem" }}
                      onMouseEnter={e => e.currentTarget.style.color = "#ff5f56"}
                      onMouseLeave={e => e.currentTarget.style.color = "var(--on-surface-muted)"}
                    >
                      Close [x]
                    </button>
                  </div>
                  <pre style={{ margin: 0, color: "var(--on-surface-muted)", fontFamily: "monospace", fontSize: "0.85rem", whiteSpace: "pre-wrap" }}>
                    {activeSchema.content}
                  </pre>
                </motion.div>
              )}
            </div>

            {/* Editor */}
            <div>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--secondary)", fontSize: "0.95rem", fontWeight: "600", marginBottom: "12px", fontFamily: "monospace", textShadow: "0 0 10px rgba(0, 251, 251, 0.3)" }}>
                <ChevronRight size={16} /> ENTER QUERY
              </label>
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="-- Write your SQL query here...&#10;SELECT * FROM crime_scene_reports WHERE date='2025-07-28';"
                spellCheck={false}
                style={{
                  width: "100%", height: "180px", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "16px", color: "var(--on-surface)", fontSize: "1.05rem", fontFamily: "monospace", resize: "vertical", outline: "none", transition: "border 0.3s", boxShadow: "inset 0 4px 10px rgba(0,0,0,0.5)"
                }}
                onFocus={(e) => e.target.style.border = "1px solid var(--secondary)"}
                onBlur={(e) => e.target.style.border = "1px solid rgba(255,255,255,0.1)"}
              />
            </div>

            {/* Actions */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleExecute}
                style={{
                  display: "flex", alignItems: "center", gap: "10px", background: "var(--primary)", border: "none", padding: "14px 28px", borderRadius: "8px", color: "#fff", fontWeight: "600", fontSize: "1rem", cursor: "pointer", boxShadow: "0 0 20px rgba(188, 19, 254, 0.4)", transition: "background 0.2s"
                }}
              >
                <Play size={18} fill="currentColor" /> Execute Script
              </motion.button>
            </div>

            {/* Output */}
            {output && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                   <label style={{ display: "flex", alignItems: "center", gap: "8px", color: output.type === "error" ? "#ff5f56" : "var(--primary)", fontSize: "0.95rem", fontWeight: "600", fontFamily: "monospace" }}>
                    {output.type === "error" ? <ShieldAlert size={16} /> : output.type === "info" ? <Database size={16} className="animate-pulse" /> : <CheckCircle2 size={16} />} 
                    OUTPUT LOG
                   </label>
                   {output.type === "success" && (
                    <motion.button 
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      whileTap={{ scale: 0.9 }}
                      onClick={copyOutput} 
                      style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "6px", color: "var(--on-surface)", padding: "6px 12px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", transition: "all 0.2s" }}>
                       <Download size={14} /> Copy Output
                    </motion.button>
                   )}
                </div>
                <div style={{ background: "#000", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)", minHeight: "120px", color: output.type === "error" ? "#ff5f56" : "var(--on-surface-muted)", fontFamily: "monospace", fontSize: "0.95rem", whiteSpace: "pre-wrap", boxShadow: "inset 0 4px 10px rgba(0,0,0,0.5)" }}>
                  {output.text}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

      </main>
      <Footer />
      <RulesModal isOpen={rulesOpen} onClose={() => setRulesOpen(false)} />
    </>
  );
}
