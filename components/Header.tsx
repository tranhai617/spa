"use client";
import { useEffect, useState } from "react";

const links = [["Giới thiệu", "#gioi-thieu"], ["Dịch vụ", "#dich-vu"], ["Bảng giá", "#bang-gia"], ["Liên hệ", "#lien-he"]];

export function Header({ brand }: { brand: string }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid || open ? "bg-cream/95 text-ink backdrop-blur" : "text-cream"}`}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
          <a href="#" className="font-display text-2xl tracking-wide" onClick={close}>{brand}</a>

          {/* Desktop nav */}
          <nav className="hidden gap-9 text-sm font-medium md:flex">
            {links.map(([l, h]) => (
              <a key={h} href={h} className="opacity-80 transition hover:opacity-100">{l}</a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#dat-lich"
            className={`hidden rounded-full border px-5 py-2 text-sm font-semibold transition md:inline-block ${solid ? "border-ink/30 hover:bg-ink hover:text-cream" : "border-cream/60 hover:bg-cream hover:text-ink"}`}
          >
            Đặt lịch ngay
          </a>

          {/* Mobile: hamburger */}
          <button
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span className={`block h-[2px] w-6 transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""} ${solid || open ? "bg-ink" : "bg-cream"}`} />
            <span className={`block h-[2px] w-6 transition-all duration-300 ${open ? "opacity-0" : ""} ${solid || open ? "bg-ink" : "bg-cream"}`} />
            <span className={`block h-[2px] w-6 transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""} ${solid || open ? "bg-ink" : "bg-cream"}`} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-cream pt-16 md:hidden">
          <nav className="flex flex-col items-center gap-8 py-12 text-lg font-medium text-ink">
            {links.map(([l, h]) => (
              <a key={h} href={h} onClick={close} className="opacity-80 transition hover:opacity-100">
                {l}
              </a>
            ))}
            <a
              href="#dat-lich"
              onClick={close}
              className="mt-4 rounded-full border border-ink/30 px-8 py-3 text-sm font-semibold transition hover:bg-ink hover:text-cream"
            >
              Đặt lịch ngay
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
