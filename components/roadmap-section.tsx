"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import FlipCard from "./flip-card"

const modules = [
  {
    level: "LEVEL A: NỀN TẢNG & TƯ DUY (Foundation)",
    description: "Trang bị hệ thống kiến thức nền tảng về kỹ thuật và tư duy AI, giúp học viên hiểu rõ bản chất các khái niệm cốt lõi, thuật toán và mô hình cơ bản trong trí tuệ nhân tạo. Giai đoạn này tập trung xây dựng tư duy logic, tư duy giải quyết vấn đề theo hướng dữ liệu, đồng thời củng cố nền tảng lập trình vững chắc để học viên có thể tự tin tiếp cận các nội dung chuyên sâu và ứng dụng AI ở các giai đoạn tiếp theo.",
    items: [
      { title: "Module 1:", content: "Tổng quan AI & Prompt Engineering" },
      { title: "Module 2:", content: "Toán học cho Machine Learning" },
    ],
  },
  {
    level: "LEVEL B: KỸ THUẬT & ỨNG DỤNG (Implementation)",
    description:"Xây dựng nền tảng vững chắc về Toán học, Python, Data Science và hạ tầng GPU nhằm trang bị đầy đủ công cụ và kỹ năng cần thiết cho quá trình học tập . Giai đoạn này giúp học viên nắm cách xử lý dữ liệu, xây dựng mô hình, tối ưu hiệu năng tính toán và ứng dụng kiến thức vào các bài toán thực tế, tạo tiền đề cho việc phát triển và triển khai các hệ thống AI hiệu quả.",
    items: [
      { title: "Module 3:", content: "Làm chủ lập trình Python cho AI" },
      { title: "Module 4:", content: "Làm việc với các mô hình AI tiêu biểu" },
    ],
  },
  {
    level: "LEVEL C: CHUYÊN SÂU & DỰ ÁN (Project & Certification)",
    description: 
    "Giúp học viên đào sâu kiến thức chuyên ngành thông qua việc triển khai các dự án AI ứng dụng thực tế, qua đó tổng hợp và vận dụng toàn bộ kiến thức đã học từ nền tảng đến chuyên sâu. Học viên được hướng dẫn xây dựng sản phẩm theo quy trình chuẩn, xử lý dữ liệu, phát triển mô hình đến đánh giá và trình bày kết quả, đồng thời hoàn thiện hồ sơ năng lực và chứng nhận",     items: [
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
