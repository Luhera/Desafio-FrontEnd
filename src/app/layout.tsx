import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projeto- Desafio FrontEnd",
  description: "Projeto de frontEnd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body w-full h-screen bg-white className={inter.className}>
        {children}
      </body>
    </html>
  );
}
