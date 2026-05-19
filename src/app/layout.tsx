import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://triody.ink"),
  title: "Triody — 10x Your Business with Agents",
  description: "Triody deploys AI agents that 10x your business. 15-minute diagnostic. One-week deployment. Ten-year guarantee.",
  openGraph: {
    title: "Triody — 10x Your Business with Agents",
    description: "Triody deploys AI agents that 10x your business. 15-minute diagnostic. One-week deployment. Ten-year guarantee.",
    url: "https://triody.ink",
    siteName: "Triody",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Triody — 10x Your Business with Agents",
    description: "Triody deploys AI agents that 10x your business. 15-minute diagnostic. One-week deployment. Ten-year guarantee."
  },
  icons: {
    icon: "/favicon.svg",
  }
};

export const viewport: Viewport = {
  themeColor: "#f7f5ef",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
