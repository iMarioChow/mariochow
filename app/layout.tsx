import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mario Chow",
  description: "Mario Chow (Chow Yik Hong) — crypto research & investing. Experience, research, and links.",
  openGraph: {
    title: "Mario Chow",
    description: "Crypto research & investing — experience, research, and links.",
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
      <body>{children}</body>
    </html>
  );
}
