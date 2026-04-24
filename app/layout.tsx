import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Protein After 50 — Cascadia Fitness",
  description:
    "Strength, protein, and longevity coaching for adults over 50. Built in the Pacific Northwest.",
  openGraph: {
    title: "Protein After 50 — Cascadia Fitness",
    description:
      "Strength, protein, and longevity coaching for adults over 50. Built in the Pacific Northwest.",
    type: "website",
    siteName: "Cascadia Fitness",
  },
  twitter: {
    card: "summary_large_image",
    title: "Protein After 50 — Cascadia Fitness",
    description:
      "Strength, protein, and longevity coaching for adults over 50. Built in the Pacific Northwest.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
