import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prism Example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex w-screen h-screen items-center justify-center">
        {children}
      </body>
    </html>
  );
}
