"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const logos = [
  { 
    name: "Logo HLE", 
    description: "Học Lập Trình",
    image: "/image/hle-logo.png"
  },
  { 
    name: "Logo AI57", 
    description: "AI57 Toàn Năng",
    image: "/image/ai57-logo.png" // Thay bằng đường dẫn logo AI57 khi có
  },
  { 
    name: "Logo BKHN", 
    description: "Bách Khoa Hà Nội",
    image: "/image/bk-logo.png" // Thay bằng đường dẫn logo BKHN khi có
  },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#4F8FF6]/10 to-white">
      <div className="max-w-7xl mx-auto">

        {/* Logos */}
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="aspect-square bg-white border-2 border-[#4F8FF6]/40 rounded-2xl flex items-center justify-center p-6 hover:border-[#4F8FF6] hover:shadow-xl transition-all shadow-md"
            >
              <Image
                src={logo.image}
                alt={logo.name}
                width={120}
                height={120}
                className="object-contain w-full h-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-[#4F8FF6]/5 border-2 border-[#4F8FF6]/30 rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-3"
              >
                <div className="w-3 h-3 bg-[#4F8FF6] rounded-full mt-1.5 flex-shrink-0 shadow-md" />
                <p className="text-lg md:text-xl font-bold text-[#4F8FF6]">AI-57 KỸ SƯ AI TOÀN NĂNG</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3"
              >
                <div className="w-3 h-3 bg-[#4F8FF6] rounded-full mt-1.5 flex-shrink-0 shadow-md" />
                <p className="text-base md:text-lg text-gray-700">Inbox để tìm hiểu chi tiết về khóa học</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-3"
              >
                <div className="w-3 h-3 bg-[#4F8FF6] rounded-full mt-1.5 flex-shrink-0 shadow-md" />
                <p className="text-base md:text-lg font-semibold text-[#4F8FF6]">Hotline: 099 696 3399</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-3"
              >
                <div className="w-3 h-3 bg-[#4F8FF6] rounded-full mt-1.5 flex-shrink-0 shadow-md" />
                <p className="text-base md:text-lg font-semibold text-[#4F8FF6]">Địa chỉ: 1 Ngụy Như Kon Tum, Thanh Xuân, Hà Nội</p>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center lg:justify-end"
            >
              <Button
                onClick={scrollToTop}
                size="lg"
                className="bg-gradient-to-r from-[#4F8FF6] to-[#3B7AE6] hover:from-[#3B7AE6] hover:to-[#4F8FF6] text-white border-2 border-transparent hover:border-white/30 font-bold px-8 py-6 text-base rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-center">
                  <div>Đăng ký ngay!</div>
                </div>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-600 mt-8"
        >
          <p>© 2025 AI-57. Khóa học Kỹ sư AI Toàn năng dành cho Tài năng trẻ.</p>
        </motion.div>
      </div>
    </footer>
  )
}
