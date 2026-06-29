"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import FlipCard from "./flip-card"

const modules = [
  {
    level: "LEVEL A: NỀN TẢNG & TƯ DUY (Foundation)",
    description: [
      `Trang bị kiến thức cốt lõi và tư duy AI theo chuẩn NVIDIA, giúp học viên hiểu bản chất AI, dữ liệu, GPU và hình thành tư duy logic, tư duy dữ liệu làm nền tảng cho các nội dung nâng cao.`,
    ],
    items: [
      {
        title: "Module 1:",
        content: [
          "Tổng quan về trí tuệ nhân tạo: Lịch sử, xu hướng và ứng dụng thực tế",
          "Các khái niệm cốt lõi: Machine Learning, Deep Learning, Neural Networks",
          "Prompt Engineering cơ bản: Kỹ thuật viết prompt hiệu quả cho các mô hình AI",
          "Làm việc với ChatGPT, Claude và các công cụ AI phổ biến",
          "Thực hành xây dựng hệ thống AI đơn giản và ứng dụng vào bài toán thực tế"
        ]
      },
      {
        title: "Module 2:",
        content: [
          "Toán học cơ bản cho AI: Đại số tuyến tính, Giải tích và Xác suất thống kê",
          "Vector và ma trận: Các phép toán cơ bản và ứng dụng trong Machine Learning",
          "Hàm số và đạo hàm: Gradient descent và tối ưu hóa",
          "Xác suất và phân phối: Bayes Theorem, phân phối chuẩn và ứng dụng",
          "Thực hành tính toán và giải các bài toán toán học liên quan đến AI"
        ]
      },
    ],
  },
  {
    level: "LEVEL B: KỸ THUẬT & ỨNG DỤNG (Implementation)",
    description: [
      `Đào tạo bài bản về Python, Data Science, AI tạo sinh và hạ tầng GPU; tập trung xử lý dữ liệu, xây dựng – triển khai mô hình AI, tối ưu hiệu năng và ứng dụng AI vào các bài toán thực tế thông qua hệ thống lab mô phỏng.`
    ],
    items: [
      {
        title: "Module 3:",
        content: [
          "Lập trình Python từ cơ bản đến nâng cao: Cú pháp, cấu trúc dữ liệu và hàm",
          "Thư viện chuyên dụng: NumPy, Pandas, Matplotlib cho xử lý dữ liệu",
          "Làm việc với dữ liệu: Đọc, làm sạch, chuyển đổi và phân tích dữ liệu",
          "Xây dựng pipeline xử lý dữ liệu tự động và tối ưu hóa hiệu năng",
          "Thực hành xây dựng các script Python cho các tác vụ AI phổ biến"
        ]
      },
      {
        title: "Module 4:",
        content: [
          "Giới thiệu các mô hình AI tiêu biểu: GPT, BERT, ResNet, YOLO",
          "Làm việc với thư viện TensorFlow và PyTorch để xây dựng mô hình",
          "Fine-tuning mô hình: Cách tùy chỉnh mô hình pre-trained cho bài toán cụ thể",
          "Đánh giá và tối ưu mô hình: Metrics, validation và hyperparameter tuning",
          "Triển khai mô hình: Export, deploy và tích hợp vào ứng dụng thực tế"
        ]
      },
    ],
  },
  {
    level: "LEVEL C: CHUYÊN SÂU & DỰ ÁN (Project & Certification)",
    description: [
      `Giải quyết các bài toán AI phức tạp theo chuẩn NVIDIA DLI, luyện thi sát đề thật, tối ưu mô hình chuyên sâu, đồng thời hoàn thiện portfolio và Mock Test để sẵn sàng chinh phục chứng chỉ NVIDIA Professional.`
    ],
    items: [
      {
        title: "Module 5:",
        content: [
          "Quy trình phát triển dự án AI: Từ ý tưởng đến sản phẩm hoàn chỉnh",
          "Xây dựng dự án thực tế: Chọn bài toán, thu thập dữ liệu và thiết kế giải pháp",
          "Phát triển và tối ưu mô hình: Training, evaluation và improvement",
          "Triển khai sản phẩm: Deploy lên cloud, tạo API và xây dựng giao diện",
          "Documentation và presentation: Viết tài liệu kỹ thuật và trình bày dự án"
        ]
      },
      {
        title: "Module 6:",
        content: [
          "Ôn tập toàn diện kiến thức: Tổng hợp lại các nội dung đã học",
          "Chuẩn bị thi chứng chỉ Nvidia: Làm quen với format đề và kỹ năng làm bài",
          "Thực hành các bài thi mẫu và giải đề thi các năm trước",
          "Bảo vệ đồ án tốt nghiệp: Trình bày dự án và trả lời câu hỏi từ hội đồng",
          "Hoàn thiện hồ sơ năng lực: Portfolio, GitHub và các chứng chỉ đạt được"
        ]
      },
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
