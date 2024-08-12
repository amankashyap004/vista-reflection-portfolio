import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

import { ThemeProviders } from "@/utils/ThemeProviders";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
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
      <body
        className={`${poppins.variable} ${montserrat.variable} font-poppins bg-white dark:bg-black text-black dark:text-white`}
      >
        <ThemeProviders>
          <Header />
          <div className="pt-16 lg:pt-20"></div>
          {children}
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}
