"use client";
import { useEffect, useState } from "react";

const links = [["Giới thiệu", "#gioi-thieu"], ["Dịch vụ", "#dich-vu"], ["Bảng giá", "#bang-gia"], ["Liên hệ", "#lien-he"]];

export function Header({ brand }: { brand: string }) {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid ? "bg-cream/90 text-ink backdrop-blur" : "text-cream"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#" className="font-display text-2xl tracking-wide">{brand}</a>
        <nav className="hidden gap-9 text-sm font-medium md:flex">
          {links.map(([l, h]) => <a key={h} href={h} className="opacity-80 transition hover:opacity-100">{l}</a>)}
        </nav>
        <a href="#dat-lich" className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${solid ? "border-ink/30 hover:bg-ink hover:text-cream" : "border-cream/60 hover:bg-cream hover:text-ink"}`}>Đặt lịch ngay</a>
      </div>
    </header>
  );
}
