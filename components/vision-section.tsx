"use client"

import { motion } from "framer-motion"

const pressLogos = [
  { name: "VnExpress", placeholder: "Hình blog #1" },
  { name: "Dân Trí", placeholder: "Hình blog #2" },
  { name: "Vietnamnet, VTV", placeholder: "Hình blog #3" },
]

export default function VisionSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-[#4F8FF6]/5">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-1 gap-8 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance bg-gradient-to-r from-[#4F8FF6] to-[#3B7AE6] bg-clip-text text-transparent">SỨ MỆNH KIẾN TẠO THẾ HỆ KỸ SƯ AI VIỆT NAM</h2>

            <p className="text-base text-gray-700 leading-relaxed">
              AI57 ra đời với sứ mệnh đồng hành cùng Nghị quyết 57 của Chính phủ, đưa tư duy công nghệ lõi đến với học
              sinh THPT. Chúng tôi không chỉ dạy kiến thức, chúng tôi xây dựng bệ phóng cho tương lai công nghệ nước
              nhà.
            </p>

            <div className="space-y-4 pt-4">
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#4F8FF6]">BÁO CHÍ VÀ CHUYÊN GIA NÓI GÌ VỀ CHÚNG TÔI?</h3>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-[#4F8FF6]">Logo Báo chí:</span> VnExpress, Dân Trí, Vietnamnet, VTV.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Press Logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {pressLogos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white border-2 border-[#4F8FF6]/30 rounded-2xl p-8 flex items-center justify-center min-h-[200px] shadow-md hover:shadow-xl hover:border-[#4F8FF6]/60 transition-all"
            >
              <p className="text-lg font-semibold text-gray-700 text-center">{logo.placeholder}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
