"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteContent } from "@/lib/types";

export function Hero({ hero }: { hero: SiteContent["hero"] }) {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const t = (delay: number) => (reduce ? { duration: 0 } : { duration: 1.2, delay, ease });
  return (
    <section className="relative flex h-[100svh] min-h-[560px] items-center justify-center overflow-hidden text-center text-cream">
      <motion.div className="absolute inset-0" initial={reduce ? false : { scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease }}>
        <Image src={hero.image.src} alt={hero.image.alt} fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink/60" />
      <div className="relative px-6">
        <motion.h1 initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={t(0.3)}
          className="mx-auto max-w-4xl font-display text-4xl font-medium leading-tight tracking-[0.08em] sm:text-5xl md:text-7xl">{hero.title}</motion.h1>
        <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={t(0.9)}
          className="mt-6 text-base font-normal tracking-[0.25em] text-cream/90 md:text-lg">{hero.subtitle}</motion.p>
        <motion.a href="#dat-lich" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={t(1.4)}
          className="mt-12 inline-block rounded-full bg-gold px-10 py-4 text-sm font-semibold text-ink transition hover:bg-sand">{hero.cta}</motion.a>
      </div>
    </section>
  );
}
