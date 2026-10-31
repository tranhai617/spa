/** Add your CMS image host here later (cdn.sanity.io / your Payload domain). */
const nextConfig = {
  images: { formats: ["image/avif", "image/webp"], remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }, { protocol: "https", hostname: "cdn.sanity.io" }] },
};
export default nextConfig;
