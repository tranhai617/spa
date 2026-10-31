// These shapes map 1:1 to Sanity schemas / Payload collections.
export type Img = { src: string; alt: string; width: number; height: number };
export type Service = { id: string; title: string; description: string; image: Img };
export type Plan = { id: string; name: string; price: number; duration: string; includes: string[]; popular?: boolean };
export type Review = { id: string; name: string; service: string; rating: number; text: string };
export type SiteContent = {
  brand: string;
  hero: { title: string; subtitle: string; cta: string; image: Img };
  about: { title: string; text: string; image: Img; highlights: { title: string; text: string }[] };
  services: Service[];
  plans: Plan[];
  reviews: Review[];
  gallery: Img[];
  booking: { title: string; text: string; cta: string };
  contact: { phone: string; facebook: string; zalo: string; address: string; hours: string; mapQuery: string };
};
