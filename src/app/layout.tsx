import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bug Bounty | BIAS Coding Club",
  description:
    "Bug Bounty – A team-based bug bounty and DB mystery competition by the Coding Club of Birla Institute of Applied Sciences. Investigate and solve the mystery in a 3-hour sprint.",
  keywords: [
    "Bug Bounty",
    "fiftyville",
    "SQL database challenge",
    "BIAS Coding Club",
    "database competition",
    "hackathon",
    "Birla Institute of Applied Sciences",
  ],
  openGraph: {
    title: "Bug Bounty | BIAS Coding Club",
    description:
      "A database mystery competition. Investigate and solve the Fiftyville mystery in 3 hours.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
