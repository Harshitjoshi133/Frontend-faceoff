import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Faceoff | BIAS Coding Club",
  description:
    "Frontend Faceoff – A team-based frontend development competition by the Coding Club of Birla Institute of Applied Sciences. Design and build creative web interfaces in a 3-hour sprint.",
  keywords: [
    "Frontend Faceoff",
    "BIAS Coding Club",
    "web development competition",
    "hackathon",
    "Birla Institute of Applied Sciences",
  ],
  openGraph: {
    title: "Frontend Faceoff | BIAS Coding Club",
    description:
      "A team-based frontend development competition. Build stunning web UIs in 3 hours.",
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
