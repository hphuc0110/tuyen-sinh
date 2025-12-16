"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import RegistrationForm from "@/components/registration-form"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen py-12 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: "url('/image/background.png')",
        }}
      >
        {/* Overlay để làm ảnh nền chìm hơn */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/80 to-white/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto z-10">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Logos */}
            <div className="flex items-center gap-6 mb-4">
              <img 
                src="/image/ai57-logone.png" 
                alt="AI57 Logo" 
                className="h-12 md:h-16 object-contain"
              />
              <img 
                src="/image/bk-logo.png" 
                alt="Bách Khoa Hà Nội Logo" 
                className="h-12 md:h-16 object-contain"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance bg-gradient-to-r from-[#4F8FF6] to-[#3B7AE6] bg-clip-text text-transparent">
              KHÓA HỌC KỸ SƯ AI TOÀN NĂNG DÀNH CHO HỌC SINH THPT
            </h1>

            <div className="flex flex-col gap-4 pt-4">
  <motion.div
    whileHover={{ scale: 1.05, y: -2 }}
    className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-md border border-[#4F8FF6]/20 hover:border-[#4F8FF6]/40 transition-all"
  >
    <div className="bg-[#4F8FF6] rounded-lg p-1.5 shadow-md flex-shrink-0">
      <Check className="w-4 h-4 text-white" />
    </div>
    <p className="text-sm text-gray-800 font-medium">
      Đủ kiến thức & kỹ năng để thi chứng chỉ quốc tế về AI & GPU
    </p>
  </motion.div>

  <motion.div
    whileHover={{ scale: 1.05, y: -2 }}
    className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-md border border-[#4F8FF6]/20 hover:border-[#4F8FF6]/40 transition-all"
  >
    <div className="bg-[#4F8FF6] rounded-lg p-1.5 shadow-md flex-shrink-0">
      <Check className="w-4 h-4 text-white" />
    </div>
    <p className="text-sm text-gray-800 font-medium">
      Chuẩn đầu ra Junior AI Engineer
    </p>
  </motion.div>

  <motion.div
    whileHover={{ scale: 1.05, y: -2 }}
    className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-md border border-[#4F8FF6]/20 hover:border-[#4F8FF6]/40 transition-all"
  >
    <div className="bg-[#4F8FF6] rounded-lg p-1.5 shadow-md flex-shrink-0">
      <Check className="w-4 h-4 text-white" />
    </div>
    <p className="text-sm text-gray-800 font-medium">
      Hỗ trợ thực tập doanh nghiệp lớn (Viettel, FPT, VNPT, ...) ngay từ trên ghế nhà trường
    </p>
  </motion.div>

  <motion.div
    whileHover={{ scale: 1.05, y: -2 }}
    className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-md border border-[#4F8FF6]/20 hover:border-[#4F8FF6]/40 transition-all"
  >
    <div className="bg-[#4F8FF6] rounded-lg p-1.5 shadow-md flex-shrink-0">
      <Check className="w-4 h-4 text-white" />
    </div>
    <p className="text-sm text-gray-800 font-medium">
      Tham gia các dự án thực tế trọng điểm trong chương trình học
    </p>
  </motion.div>
</div>

          </motion.div>

          {/* Right Content - Registration Form */}
          <RegistrationForm />
        </div>
      </div>
    </section>
  )
}
