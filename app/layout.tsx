import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";

const inter = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lightning Proxy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' text-[#1E1E1E]'}>{children}</body>
    </html>
  );
}
