import type { Metadata } from "next";
import ClientThemeProvider from "@/app/cdc/ClientThemeProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_TITLE ?? "CDC HOME STARTER",
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION ?? "Next static homepage starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} full-viewport`}>
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  );
}