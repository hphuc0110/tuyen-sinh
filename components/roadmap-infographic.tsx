"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function RoadmapInfographic() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#4F8FF6] to-[#3B7AE6] bg-clip-text text-transparent"
        >
          LỘ TRÌNH TRỞ THÀNH KỸ SƯ AI TOÀN NĂNG
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-pretty"
        >
          Theo nghiên cứu, chỉ 5% dân số thế giới có thiên phú phù hợp với ngành công nghệ AI, tuy nhiên, kể cả khi bạn
          có tài năng thiên bẩm, con đường bạn đi cũng không hề dễ dàng
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[2/1] max-w-6xl mx-auto"
        >
          <Image src="/images/image.png" alt="Lộ trình AI Engineering" fill className="object-contain" priority />
        </motion.div>
      </div>
    </section>
  )
}
