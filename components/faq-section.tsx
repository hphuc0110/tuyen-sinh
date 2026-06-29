"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Con chưa biết gì về AI có học được không?",
    answer:
      "Hoàn toàn được. Lộ trình xây từ nền tảng, phù hợp cả học sinh chưa có kiến thức lập trình.",
  },
  {
    question: "Con đang học lớp mấy thì phù hợp?",
    answer:
      "Chương trình dành cho học sinh lớp 9–12, có lộ trình điều chỉnh theo năng lực từng em.",
  },
  {
    question: "Học xong con nhận được gì?",
    answer:
      "Chứng chỉ hoàn thành, hướng tới chứng chỉ NVIDIA quốc tế, cùng portfolio dự án thật để bổ sung hồ sơ.",
  },
];

export default function FaqSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-72px" });

  return (
    <section className="mx-auto w-full px-4 py-12 lg:px-12 lg:py-16">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl"
      >
        <h2 className="mb-8 text-center text-3xl font-bold leading-tight text-slate-700 md:text-4xl">
          Câu hỏi thường gặp (FAQ)
        </h2>

        <Accordion type="single" collapsible className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 shadow-sm">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-base font-semibold text-slate-800 hover:no-underline md:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
