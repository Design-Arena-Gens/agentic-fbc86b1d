import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devine AI Backend Capabilities",
  description: "Discover how Devine AI engineers robust backends in Java and Python."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
