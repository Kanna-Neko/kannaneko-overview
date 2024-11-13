import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "kannaneko",
  description: "overview of kannaneko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
