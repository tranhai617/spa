import Image from "next/image";
import { Reveal } from "./Reveal";
import type { SiteContent } from "@/lib/types";

const wrap = "mx-auto w-full max-w-6xl px-6 md:px-10";
const h2 = "font-display text-4xl font-light leading-tight md:text-5xl";
const vnd = (n: number) => n.toLocaleString("vi-VN") + "đ";
const sizes = "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw";

export function About({ about }: { about: SiteContent["about"] }) {
  return (
    <section id="gioi-thieu" className={`${wrap} grid items-center gap-12 py-24 md:py-36 lg:grid-cols-2 lg:gap-20`}>
      <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
        <Image src={about.image.src} alt={about.image.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display text-4xl font-medium leading-[1.15] text-ink md:text-6xl">{about.title}</h2>
        <p className="mt-8 max-w-lg text-lg leading-8 text-[#3a3a3a] md:text-xl md:leading-9">{about.text}</p>
        <dl className="mt-14 divide-y divide-gold/60 border-y border-gold/60">
          {about.highlights.map((h) => (
            <div key={h.title} className="grid gap-2 py-7 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <dt className="font-display text-2xl font-semibold leading-snug text-ink">{h.title}</dt>
              <dd className="text-base leading-7 text-[#3a3a3a]">{h.text}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}

export function Services({ services }: { services: SiteContent["services"] }) {
  return (
    <section id="dich-vu" className="bg-sand/50 py-24 md:py-36">
      <div className={wrap}>
        <Reveal><h2 className={`${h2} max-w-xl`}>Dịch vụ của chúng tôi</h2></Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.id}>
              <Reveal delay={(i % 3) * 0.08}>
                <article className="group overflow-hidden bg-cream">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image src={s.image.src} alt={s.image.alt} fill sizes={sizes} className="object-cover transition duration-[1400ms] ease-out group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl">{s.title}</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-ink/70">{s.description}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Pricing({ plans }: { plans: SiteContent["plans"] }) {
  return (
    <section id="bang-gia" className={`${wrap} py-24 md:py-36`}>
      <Reveal><h2 className={h2}>Bảng giá liệu trình</h2></Reveal>
      <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
        {plans.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08} className="h-full">
            <article className={`relative flex h-full flex-col p-8 md:p-10 ${p.popular ? "bg-ink text-cream mt-4 md:mt-0 md:-my-4" : "border border-gold/50"}`}>
              {p.popular && <span className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-gold px-4 py-1 text-xs font-medium text-ink">Được chọn nhiều nhất</span>}
              <h3 className="font-display text-2xl">{p.name}</h3>
              <p className="mt-6 font-display text-4xl text-gold">{vnd(p.price)}</p>
              <p className={`mt-1 text-sm ${p.popular ? "text-cream/70" : "text-ink/60"}`}>{p.duration}</p>
              <ul className={`mt-8 flex-1 space-y-3 border-t pt-6 text-sm font-light ${p.popular ? "border-cream/20" : "border-gold/40"}`}>
                {p.includes.map((x) => <li key={x}>{x}</li>)}
              </ul>
              <a href="#dat-lich" className={`mt-8 rounded-full border py-3 text-center text-sm transition ${p.popular ? "border-gold bg-gold text-ink hover:bg-sand" : "border-ink/30 hover:bg-ink hover:text-cream"}`}>Đặt lịch ngay</a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Testimonials({ reviews }: { reviews: SiteContent["reviews"] }) {
  return (
    <section className="bg-sand/50 py-24 md:py-36">
      <div className={wrap}>
        <Reveal><h2 className={h2}>Khách hàng nói gì</h2></Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.id} delay={i * 0.08}>
              <figure className="flex h-full flex-col bg-cream p-8">
                <div role="img" aria-label={`${r.rating} trên 5 sao`} className="text-gold">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</div>
                <blockquote className="mt-5 flex-1 font-display text-xl leading-snug">"{r.text}"</blockquote>
                <figcaption className="mt-6 border-t border-gold/40 pt-4 text-sm">
                  <span className="font-medium">{r.name}</span>
                  <span className="block font-light text-ink/60">{r.service}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery({ gallery }: { gallery: SiteContent["gallery"] }) {
  return (
    <section className={`${wrap} overflow-hidden py-24 md:py-36`}>
      <Reveal><h2 className={h2}>Không gian Lumière</h2></Reveal>
      <div className="mt-14 columns-2 gap-4 md:columns-3">
        {gallery.map((g, i) => (
          <Reveal key={i} className="mb-4 break-inside-avoid overflow-hidden">
            <Image src={g.src} alt={g.alt} width={g.width} height={g.height} sizes="(min-width:768px) 33vw, 50vw" className="h-auto w-full" loading="lazy" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Booking({ booking, zalo }: { booking: SiteContent["booking"]; zalo: string }) {
  return (
    <section id="dat-lich" className="bg-gold/25 py-20 text-center sm:py-28 md:py-44">
      <Reveal className={wrap}>
        <h2 className="font-display text-4xl font-light sm:text-5xl md:text-7xl">{booking.title}</h2>
        <p className="mx-auto mt-6 max-w-md font-light text-ink/75">{booking.text}</p>
        <a href={zalo} className="mt-10 inline-block rounded-full bg-ink px-12 py-4 text-sm text-cream transition hover:bg-gold hover:text-ink">{booking.cta}</a>
      </Reveal>
    </section>
  );
}

export function Contact({ c }: { c: SiteContent["contact"] }) {
  const rows: [string, React.ReactNode][] = [
    ["Điện thoại", <a key="p" href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone}</a>],
    ["Zalo", <a key="z" href={c.zalo}>Nhắn tin Zalo</a>],
    ["Facebook", <a key="f" href={c.facebook}>Fanpage</a>],
    ["Địa chỉ", c.address],
    ["Giờ mở cửa", c.hours],
  ];
  return (
    <section id="lien-he" className={`${wrap} grid gap-12 py-24 md:py-36 lg:grid-cols-2`}>
      <Reveal>
        <h2 className={h2}>Liên hệ</h2>
        <dl className="mt-10 divide-y divide-gold/40 border-y border-gold/40">
          {rows.map(([k, v]) => (
            <div key={k} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr]">
              <dt className="text-sm text-ink/60">{k}</dt><dd className="font-light">{v}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
      <Reveal delay={0.1} className="min-h-[260px] overflow-hidden bg-sand sm:min-h-[320px]">
        <iframe title="Bản đồ Google" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[260px] w-full grayscale-[40%] sm:min-h-[320px]"
          src={`https://www.google.com/maps?q=${encodeURIComponent(c.mapQuery)}&output=embed`} />
      </Reveal>
    </section>
  );
}

export function Footer({ brand, c }: { brand: string; c: SiteContent["contact"] }) {
  return (
    <footer className="bg-ink py-14 text-cream/80">
      <div className={`${wrap} flex flex-col gap-8 md:flex-row md:items-end md:justify-between`}>
        <div>
          <p className="font-display text-3xl text-cream">{brand}</p>
          <p className="mt-3 text-sm font-light">{c.address}<br />{c.hours}</p>
        </div>
        <div className="flex gap-6 text-sm">
          <a href={c.facebook} className="hover:text-gold">Facebook</a>
          <a href={c.zalo} className="hover:text-gold">Zalo</a>
          <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="hover:text-gold">{c.phone}</a>
        </div>
      </div>
      <p className={`${wrap} mt-10 text-xs text-cream/50`}>© {new Date().getFullYear()} {brand}. All rights reserved.</p>
    </footer>
  );
}
