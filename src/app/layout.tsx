import type { Metadata } from "next";
import { Open_Sans } from "next/font/google"; // Import OpenSans from next/font/google
import Navbar from "@/components/Navbar";
import "./globals.css";
 

const openSans = Open_Sans({ subsets: ["latin"] }); // Configure OpenSans with desired subsets

export const metadata: Metadata = {
  title: "Brand Gains",
  description: "Expert Short Form Videos Editing Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
          <Navbar />
          {children}
      </body>
    </html>
  );
}
