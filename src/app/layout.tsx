import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Your Name - Software Engineer & Designer",
  description: "Personal portfolio showcasing software engineering projects and design work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen bg-background font-sans">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}