"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import FlipCard from "./flip-card"

const modules = [
  {
    level: "LEVEL A: NỀN TẢNG & TƯ DUY (Foundation)",
    description:
      "Trang bị nền tảng kỹ thuật và tư duy AI, tập trung vào các lý thuyết cơ bản và xây dựng nền tảng lập trình vững chắc cho những bước tiếp tục sau.",
    items: [
      { title: "Module 1:", content: "Tổng quan AI & Prompt Engineering" },
      { title: "Module 2:", content: "Toán học cho Machine Learning" },
    ],
  },
  {
    level: "LEVEL B: KỸ THUẬT & ỨNG DỤNG (Implementation)",
    description:
      "Xây dựng nền tảng Toán – Python – Data Science – GPU cho công cụ học tập các chuyên về AI/DS chuyên sâu.",
    items: [
      { title: "Module 3:", content: "Làm chủ lập trình Python cho AI" },
      { title: "Module 4:", content: "Làm việc với các mô hình AI tiêu biểu" },
    ],
  },
  {
    level: "LEVEL C: CHUYÊN SÂU & DỰ ÁN (Project & Certification)",
    description: "Giúp học sinh hoàn thiện sản phẩm AI ứng dụng (capstone) đảm bảo toàn bộ kiến thức đã học.",
    items: [
      { title: "Module 5:", content: "Thực thi dự án thực tế" },
      { title: "Module 6:", content: "Ôn thi chứng chỉ Nvidia & Bảo vệ đồ án" },
    ],
  },
]

export default function RoadmapSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#4F8FF6] to-[#3B7AE6] bg-clip-text text-transparent"
        >
          LỘ TRÌNH ĐÀO TẠO 360 GIỜ:
          <br />
          TỪ NỀN TẢNG ĐẾN CHỨNG CHỈ QUỐC TẾ
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12 mb-12">
          {modules.map((level, levelIndex) => (
            <FlipCard
              key={levelIndex}
              level={level.level}
              description={level.description}
              items={level.items}
              index={levelIndex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
