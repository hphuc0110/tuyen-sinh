"use client";
import duan from "@/public/image/news/du-an.webp";
import hocbong from "@/public/image/news/hoc-bong.webp";
import kysuai from "@/public/image/news/ky-su-ai.webp";
import nghiquyet from "@/public/image/news/nghi-quyet.webp";
import trungtamdulieu from "@/public/image/news/trung-tam-du-lieu.webp";
import tuyendung from "@/public/image/news/tuyen-dung.webp";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// List content, each will be active for 5s with a progress bar above it
const newsList = [
  {
    title: "KĨ SƯ TOÀN NĂNG NVIDIA",
    titleDetail:
      "AI57 CÔNG BỐ CHƯƠNG TRÌNH HỌC BỔNG HƯỚNG TỚI PHÁT HIỆN TÀI NĂNG AI TRẺ VIỆT NAM",
    content: "NVIDIA phối hợp với Đại học Bách khoa ra mắt chương trình AI57",
    contentDetail:
      "Dự án AI57 do ĐH Bách Khoa Hà Nội, NVIDIA và Hồng Lĩnh phối hợp triển khai học bổng AI từ 11/2025, nhằm phát hiện, bồi dưỡng tài năng trẻ và xây dựng nguồn nhân lực trí tuệ nhân tạo cho Việt Nam.",
    image: kysuai.src,
    link: "/vi/blog/ky-su-toan-nang",
  },
  {
    title: "Nghị quyết 57-NQ/TW",
    titleDetail:
      "NGHỊ QUYẾT 57 – TẦM NHÌN TÁO BẠO ĐƯA VIỆT NAM VÀO KỶ NGUYÊN SỐ",
    content:
      "Tổng Bí thư Tô Lâm ký ban hành Nghị quyết số 57-NQ/TW  của Bộ Chính trị về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia.",
    contentDetail:
      "Nghị quyết 57-NQ/TW mở ra bước ngoặt cho Việt Nam trong kỷ nguyên số, thúc đẩy khoa học, công nghệ và đổi mới sáng tạo, hướng tới mục tiêu kinh tế số chiếm 50% GDP và trở thành quốc gia phát triển vào năm 2045.",
    image: nghiquyet.src,
    link: "/vi/blog/nghi-quyet-57-nq-tw",
  },
  {
    title: "Trung tâm Dữ liệu AI",
    titleDetail:
      "CHÍNH PHỦ VIỆT NAM VÀ NVIDIA HỢP TÁC THÀNH LẬP TRUNG TÂM NGHIÊN CỨU VÀ PHÁT TRIỂN, TRUNG TÂM DỮ LIỆU AI",
    content:
      "Chính phủ Việt Nam và NVIDIA hợp tác thành lập Trung tâm Nghiên cứu và Phát triển, Trung tâm Dữ liệu AI",
    contentDetail:
      "Chính phủ Việt Nam và NVIDIA ký kết hợp tác thành lập Trung tâm Nghiên cứu & Phát triển AI và Trung tâm Dữ liệu AI, đánh dấu bước ngoặt chiến lược đưa Việt Nam trở thành điểm sáng mới trên bản đồ AI toàn cầu.",
    image: trungtamdulieu.src,
    link: "/vi/blog/chung-chi-nvidia",
  },
  {
    title: "Tuyển dụng",
    titleDetail:
      "30 TẬP ĐOÀN CÔNG NGHỆ QUỐC TẾ ƯU TIÊN CHỨNG CHỈ CỦA NVIDIA - BƯỚC ĐỘT PHÁ TRONG TUYỂN DỤNG ĐỘT PHÁ",
    content:
      "30 tập đoàn công nghệ quốc tế chấp nhận và ưu tiên chứng chỉ NVIDIA.",
    contentDetail:
      "Hơn 30 tập đoàn công nghệ hàng đầu thế giới như Google, Microsoft, Tesla ưu tiên chứng chỉ NVIDIA trong tuyển dụng. Đây được xem là “tấm hộ chiếu nghề nghiệp” khẳng định năng lực AI chuẩn quốc tế, mở ra cơ hội làm việc toàn cầu cho nhân lực Việt Nam.",
    image: tuyendung.src,
    link: "/vi/blog/tuyen-dung-nvidia",
  },
  {
    title: "DỰ ÁN",
    titleDetail:
      "VIETTEL, FPT MỞ 30 SUẤT THỰC TẬP AI TẠI VIỆT NAM: CHỈ CẦN CHỨNG CHỈ NVIDIA GENERATIVE AI LLMs",
    content:
      "Viettel, FPT công bố 30 suất thực tập dự án phát triển AI tại Việt Nam chỉ yêu cầu chứng chỉ NVIDIA Generative AI LLMs ",
    contentDetail:
      "Viettel và FPT mở 30 suất thực tập AI cho sinh viên và kỹ sư trẻ, chỉ cần chứng chỉ NVIDIA Generative AI LLMs. Chương trình giúp ứng viên trực tiếp tham gia dự án thực tế, tiếp cận hạ tầng GPU mạnh nhất và được đào tạo bởi chuyên gia hàng đầu.",
    image: duan.src,
    link: "/vi/blog/thuc-tap-ai",
  },
];

const NewsSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % newsList.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [activeIdx]);

  // Simple fade and slide variants for main content
  const variants = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -24, transition: { duration: 0.4 } },
  };

  const handleClickActiveIdx = (idx: number) => {
    setActiveIdx(idx);
  };

  return (
    <section className="mx-auto w-full p-8 lg:p-12">
      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row lg:gap-12 xl:gap-24">
        {/* Left (text) */}
        <div className="flex min-w-0 flex-1 flex-col items-start space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full space-y-6"
            >
              <h2 className="text-xl font-bold uppercase leading-tight text-slate-700 md:text-2xl lg:text-3xl xl:text-4xl">
                {newsList[activeIdx].titleDetail}
              </h2>
              <p className="text-sm text-muted-foreground">
                {newsList[activeIdx].contentDetail}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Right (image) */}
        <div className="flex w-full items-center justify-center sm:mt-6 md:mt-0 md:w-2/5">
          <div className="relative aspect-square w-full max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={newsList[activeIdx].image}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0"
                style={{ willChange: "opacity, transform" }}
              >
                {/* Use 'next/image' for optimization */}
                <Image
                  src={newsList[activeIdx].image}
                  alt="NVIDIA AI Glow"
                  layout="fill"
                  className="border-primary-400/50 rounded-xl border object-cover object-top shadow-2xl"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      {/* Bottom List Carousel */}
      <div className="container mx-auto mt-10 w-full max-w-7xl">
        <div className="mx-auto rounded-xl p-0.5">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-5">
            {newsList.map((item, idx) => (
              <div
                key={idx}
                className={`flex h-full flex-col rounded-lg p-3 transition-all duration-300 hover:cursor-pointer hover:bg-gray-100/50`}
                onClick={() => handleClickActiveIdx(idx)}
              >
                {/* Progress bar */}
                <div className="mb-2 h-1.5 w-full rounded bg-gray-700">
                  {idx === activeIdx && (
                    <motion.div
                      key={`progress-bar-${activeIdx}`}
                      className="h-full rounded bg-gradient-to-r from-primary to-primary/90"
                      variants={{
                        initial: { width: "0%" },
                        animate: {
                          width: "100%",
                          transition: { duration: 10, ease: "linear" },
                        },
                      }}
                      initial="initial"
                      animate="animate"
                    />
                  )}
                </div>
                <div className="min-h-[26px] text-[15px] font-bold uppercase text-primary">
                  {item.title}
                </div>
                <div className="mt-1 min-h-[44px] text-xs text-muted-foreground">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
