import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interactive 3D Portfolio",
  description: "A premium 3D portfolio showcasing interactive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
