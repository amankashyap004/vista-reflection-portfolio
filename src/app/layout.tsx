import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Vista Reflection Portfolio",
    default: "Vista Reflection Portfolio",
  },
  description:
    "Vista Reflection Portfolio is a highly responsive, pixel-perfect portfolio landing page, meticulously crafted to showcase my design and development skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
