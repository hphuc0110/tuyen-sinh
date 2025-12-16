import { loadMDXContent } from "./load-mdx-content";

// Blog posts metadata
export const BLOG_POSTS = [
  {
    id: "hoc-bong-ai-toan-dan",
    title:
      "ĐH BÁCH KHOA KẾT HỢP AI57 TÀI TRỢ 100% HỌC PHÍ CHO HÀNG NGÀN HỌC SINH CẤP 3",
    image: "/image/news/hoc-bong.webp",
    date: "Oct 31, 2023",
    mdxContent: loadMDXContent("hoc-bong-ai-toan-dan.mdx"),
  },
  {
    id: "ky-su-toan-nang",
    title:
      "AI57 CÔNG BỐ CHƯƠNG TRÌNH HỌC BỔNG HƯỚNG TỚI PHÁT HIỆN TÀI NĂNG AI TRẺ VIỆT NAM",
    image: "/image/news/ky-su-ai.webp",
    date: "Oct 31, 2023",
    mdxContent: loadMDXContent("ky-su-toan-nang.mdx"),
  },
  {
    id: "nghi-quyet-57-nq-tw",
    title: "NGHỊ QUYẾT 57 – TẦM NHÌN TÁO BẠO ĐƯA VIỆT NAM VÀO KỶ NGUYÊN SỐ",
    image: "/image/news/nghi-quyet.webp",
    date: "Oct 31, 2023",
    mdxContent: loadMDXContent("nghi-quyet-57-nq-tw.mdx"),
  },
  {
    id: "chung-chi-nvidia",
    title:
      "Chính phủ Việt Nam và NVIDIA hợp tác thành lập Trung tâm Nghiên cứu và Phát triển, Trung tâm Dữ liệu AI",
    image: "/image/news/trung-tam-du-lieu.webp",
    date: "Oct 31, 2023",
    mdxContent: loadMDXContent("chung-chi-nvidia.mdx"),
  },
  {
    id: "tuyen-dung-nvidia",
    title:
      "30 Tập đoàn công nghệ quốc tế ưu tiên chứng chỉ NVIDIA – Bước đột phá trong tuyển dụng toàn cầu",
    image: "/image/news/tuyen-dung.webp",
    date: "Oct 31, 2023",
    mdxContent: loadMDXContent("tuyen-dung-nvidia.mdx"),
  },
  {
    id: "thuc-tap-ai",
    title:
      "Viettel, FPT mở 30 suất thực tập AI tại Việt Nam: Chỉ cần chứng chỉ NVIDIA Generative AI LLMs",
    image: "/image/news/du-an.webp",
    date: "Oct 31, 2023",
    mdxContent: loadMDXContent("thuc-tap-ai.mdx"),
  },
];
