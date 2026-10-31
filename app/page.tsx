import { getSiteContent } from "@/lib/content";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About, Services, Pricing, Testimonials, Gallery, Booking, Contact, Footer } from "@/components/Sections";

export const revalidate = 3600; // ISR: CMS edits go live within an hour (or use on-demand revalidation via webhook)

export default async function Page() {
  const d = await getSiteContent();
  return (
    <>
      <Header brand={d.brand} />
      <main>
        <Hero hero={d.hero} />
        <About about={d.about} />
        <Services services={d.services} />
        <Pricing plans={d.plans} />
        <Testimonials reviews={d.reviews} />
        <Gallery gallery={d.gallery} />
        <Booking booking={d.booking} zalo={d.contact.zalo} />
        <Contact c={d.contact} />
      </main>
      <Footer brand={d.brand} c={d.contact} />
    </>
  );
}
