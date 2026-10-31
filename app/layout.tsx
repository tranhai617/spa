import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({ subsets: ["latin", "latin-ext", "vietnamese"], weight: ["400", "500", "600"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin", "latin-ext", "vietnamese"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Lumière Spa | Luxury Beauty Experience",
  description: "Chăm sóc da, massage trị liệu và thư giãn toàn thân trong không gian sang trọng. Đặt lịch ngay.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
