import type { SiteContent } from "./types";
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
const img = (id: string, alt: string, width: number, height: number) => ({ src: u(id, width), alt, width, height });

const content: SiteContent = {
  brand: "Lumière Spa",
  hero: { title: "LUXURY BEAUTY EXPERIENCE", subtitle: "Relax, Rejuvenate, Renew", cta: "Đặt lịch ngay", image: img("photo-1540555700478-4be289fbecef", "Không gian spa sang trọng", 1920, 1280) },
  about: {
    title: "Một không gian dành riêng cho bạn",
    text: "Lumière Spa là nơi nhịp sống chậm lại. Từng liệu trình được thiết kế riêng theo làn da và nhu cầu của bạn, trong không gian yên tĩnh, ấm áp và tinh tế.",
    image: img("photo-1600334089648-b0d9d3028eb2", "Phòng trị liệu", 1000, 1250),
    highlights: [
      { title: "Dịch vụ chuyên nghiệp", text: "Quy trình chuẩn, tư vấn rõ ràng, tận tâm từ lần đầu." },
      { title: "Vệ sinh tuyệt đối", text: "Khăn, dụng cụ và phòng được làm sạch sau mỗi khách." },
      { title: "Thư giãn trọn vẹn", text: "Hương thơm dịu nhẹ, ánh sáng ấm, âm nhạc êm." },
      { title: "Kỹ thuật viên giàu kinh nghiệm", text: "Đội ngũ được đào tạo bài bản, tay nghề nhiều năm." },
    ],
  },
  services: [
    { id: "s1", title: "Chăm sóc da mặt", description: "Làm sạch sâu, cấp ẩm và phục hồi cho làn da sáng khỏe.", image: img("photo-1570172619644-dfd03ed5d881", "Chăm sóc da mặt", 800, 1000) },
    { id: "s2", title: "Massage trị liệu", description: "Giảm đau mỏi vai gáy, lưng bằng kỹ thuật bấm huyệt.", image: img("photo-1544161515-4ab6ce6db874", "Massage trị liệu", 800, 1000) },
    { id: "s3", title: "Gội đầu dưỡng sinh", description: "Gội thảo dược kết hợp massage đầu giúp ngủ ngon hơn.", image: img("photo-1596178060671-7a80dc8059ea", "Gội đầu dưỡng sinh", 800, 1000) },
    { id: "s4", title: "Chăm sóc body", description: "Tẩy tế bào chết và ủ dưỡng cho làn da mềm mịn.", image: img("photo-1600334129128-685c5582fd35", "Chăm sóc body", 800, 1000) },
    { id: "s5", title: "Điều trị mụn", description: "Liệu trình nhẹ nhàng, giảm mụn và ngăn ngừa thâm.", image: img("photo-1570172619644-dfd03ed5d881", "Điều trị mụn", 800, 1000) },
    { id: "s6", title: "Thư giãn toàn thân", description: "Trọn gói từ đầu đến chân để tái tạo năng lượng.", image: img("photo-1515377905703-c4788e51af15", "Thư giãn toàn thân", 800, 1000) },
  ],
  plans: [
    { id: "p1", name: "Chăm sóc da mặt", price: 590000, duration: "60 phút", includes: ["Làm sạch & tẩy tế bào chết", "Đắp mặt nạ dưỡng", "Massage mặt"] },
    { id: "p2", name: "Massage trị liệu", price: 790000, duration: "90 phút", popular: true, includes: ["Massage toàn thân", "Đá nóng", "Trà thảo mộc"] },
    { id: "p3", name: "Thư giãn toàn thân", price: 1290000, duration: "120 phút", includes: ["Gội đầu dưỡng sinh", "Chăm sóc body", "Massage trị liệu"] },
  ],
  reviews: [
    { id: "r1", name: "Ngọc Anh", service: "Chăm sóc da mặt", rating: 5, text: "Không gian rất yên tĩnh, da mình sáng và mềm hơn hẳn sau một buổi." },
    { id: "r2", name: "Minh Thư", service: "Massage trị liệu", rating: 5, text: "Kỹ thuật viên rất chuyên nghiệp, vai gáy nhẹ hẳn. Chắc chắn quay lại." },
    { id: "r3", name: "Hải Yến", service: "Gội đầu dưỡng sinh", rating: 5, text: "Mùi thảo mộc dễ chịu, mình ngủ ngon cả tuần sau đó." },
  ],
  gallery: [
    img("photo-1540555700478-4be289fbecef", "Spa", 800, 1100), img("photo-1544161515-4ab6ce6db874", "Massage", 800, 600),
    img("photo-1600334089648-b0d9d3028eb2", "Phòng trị liệu", 800, 1000), img("photo-1515377905703-c4788e51af15", "Nến thơm", 800, 700),
    img("photo-1596178060671-7a80dc8059ea", "Khăn spa", 800, 1000), img("photo-1600334129128-685c5582fd35", "Đá nóng", 800, 600),
  ],
  booking: { title: "Sẵn sàng để thư giãn?", text: "Chọn khung giờ phù hợp, chúng tôi sẽ chuẩn bị phần còn lại.", cta: "Đặt lịch ngay" },
  contact: { phone: "0900 000 000", facebook: "https://facebook.com/", zalo: "https://zalo.me/0900000000", address: "123 Phố Huế, Hai Bà Trưng, Hà Nội", hours: "Hằng ngày, 09:00 – 21:30", mapQuery: "123 Phố Huế, Hà Nội" },
};

/** CMS swap point: replace the body with a Sanity (GROQ) or Payload (local API) fetch returning SiteContent. */
export async function getSiteContent(): Promise<SiteContent> {
  return content;
}
