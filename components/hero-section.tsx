"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Check } from "lucide-react"
import RegistrationForm from "@/components/registration-form"

const benefits = [
  "Giảng viên Đại Học Bách Khoa Hà Nội trực tiếp giảng dạy — không phải video thu sẵn",
  "Lộ trình chuẩn NVIDIA, thực hành trên hệ thống GPU thật",
  "Con học giữa cộng đồng học sinh ưu tú, cùng định hướng",
  "Kết thúc với chứng chỉ quốc tế + portfolio dự án thật cho hồ sơ du học, xét tuyển",
] as const

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden px-3 py-8 sm:px-4 sm:py-10 md:px-8 md:py-12 lg:min-h-screen lg:px-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: "url('/image/background.png')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-white/85 via-white/88 to-white/95 sm:from-white/70 sm:via-white/80 sm:to-white/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 space-y-4 sm:space-y-6 lg:order-1"
          >
            {/* Logos */}
            <div className="mb-2 flex flex-wrap items-center gap-3 sm:mb-4 sm:gap-6">
              <img
                src="/image/ai57-logone.png"
                alt="AI57 Logo"
                className="h-9 w-auto object-contain sm:h-12 md:h-16"
              />
              <img
                src="/image/bk-logo.png"
                alt="Bách Khoa Hà Nội Logo"
                className="h-9 w-auto object-contain sm:h-12 md:h-16"
              />
            </div>

            <h1 className="text-balance bg-linear-to-r from-[#4F8FF6] to-[#3B7AE6] bg-clip-text text-[1.625rem] font-bold leading-snug text-transparent sm:text-3xl sm:leading-tight md:text-5xl lg:text-6xl">
              Cho con bước vào thế giới AI — bằng lộ trình bài bản chuẩn quốc tế NVIDIA
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Chương trình AI độc quyền dành cho học sinh THPT (lớp 9–12). Học trực tiếp cùng giảng viên Đại Học Bách Khoa Hà Nội, hướng tới chứng chỉ NVIDIA quốc tế và một hồ sơ năng lực khác biệt cho tương lai của con.
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-4">
              {benefits.map((text) => (
                <div
                  key={text}
                  className="flex items-start gap-2.5 rounded-xl border border-[#4F8FF6]/20 bg-white/90 p-3 shadow-md backdrop-blur-sm transition-colors sm:items-center sm:gap-3 sm:p-4 md:hover:border-[#4F8FF6]/40 md:hover:shadow-lg"
                >
                  <div className="shrink-0 rounded-lg bg-[#4F8FF6] p-1.5 shadow-md">
                    <Check className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" />
                  </div>
                  <p className="text-xs font-medium leading-snug text-gray-800 sm:text-sm sm:leading-normal">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Registration Form — ưu tiên hiển thị trước trên mobile */}
          <div id="dang-ky" className="order-1 lg:order-2">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  )
}
