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
    <section className="relative overflow-x-hidden px-4 py-6 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:min-h-screen lg:px-16 lg:py-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: "url('/image/background.png')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-white/80 via-white/85 to-white/92 sm:from-white/70 sm:via-white/80 sm:to-white/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-start gap-5 sm:gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Cột trái: wrapper dùng contents để sắp xếp lại thứ tự trên mobile */}
          <div className="contents lg:block lg:space-y-6">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 space-y-3 sm:space-y-5"
            >
              <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-6">
                <img
                  src="/image/ai57-logone.png"
                  alt="AI57 Logo"
                  className="h-8 w-auto object-contain sm:h-12 md:h-16"
                />
                <img
                  src="/image/bk-logo.png"
                  alt="Bách Khoa Hà Nội Logo"
                  className="h-8 w-auto object-contain sm:h-12 md:h-16"
                />
              </div>

              <h1 className="text-balance bg-linear-to-r from-[#4F8FF6] to-[#3B7AE6] bg-clip-text text-center text-[1.375rem] font-bold leading-tight text-transparent sm:text-left sm:text-3xl sm:leading-tight md:text-5xl lg:text-6xl">
                Cho con bước vào thế giới AI — bằng lộ trình bài bản chuẩn quốc tế NVIDIA
              </h1>

              <p className="mx-auto max-w-xl text-center text-[0.8125rem] leading-relaxed text-gray-600 sm:mx-0 sm:text-left sm:text-base">
                Chương trình AI độc quyền dành cho học sinh THPT (lớp 9–12). Học trực tiếp cùng giảng viên Đại Học Bách Khoa Hà Nội, hướng tới chứng chỉ NVIDIA quốc tế và một hồ sơ năng lực khác biệt cho tương lai của con.
              </p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="order-3 flex flex-col gap-2 pt-1 sm:gap-3 sm:pt-3 lg:order-2 lg:gap-4 lg:pt-4"
            >
              {benefits.map((text) => (
                <div
                  key={text}
                  className="flex items-start gap-2 rounded-lg border border-[#4F8FF6]/15 bg-white/85 px-2.5 py-2 shadow-sm backdrop-blur-sm transition-colors sm:items-center sm:gap-3 sm:rounded-xl sm:border-[#4F8FF6]/20 sm:bg-white/90 sm:p-3 sm:shadow-md md:p-4 md:hover:border-[#4F8FF6]/40 md:hover:shadow-lg"
                >
                  <div className="mt-0.5 shrink-0 rounded-md bg-[#4F8FF6] p-1 shadow-sm sm:mt-0 sm:rounded-lg sm:p-1.5 sm:shadow-md">
                    <Check className="h-3 w-3 text-white sm:h-4 sm:w-4" />
                  </div>
                  <p className="text-[0.6875rem] font-medium leading-snug text-gray-800 sm:text-xs md:text-sm md:leading-normal">
                    {text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Form — sau headline, trước benefits trên mobile */}
          <div
            id="dang-ky"
            className="order-2 mx-auto w-full max-w-md lg:row-span-2 lg:max-w-none lg:mx-0 lg:self-center"
          >
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  )
}
