"use client";
import Icon from "@/components/icon-component";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import nvidiaIcon from "@/public/image/nvidia-1.png";
import nvidiaCompany from "@/public/image/nvidia-company.jpg";
import signing1 from "@/public/image/BK.jpg";
import signing2 from "@/public/image/AIUNI.jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { nvidiaContentList, nvidiaBenefit } from "@/mocks/nvidia-content";
import type { NvidiaCertificationContent } from "@/mocks/nvidia-content";

const certIconVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      delay: 0.08 + i * 0.08,
    },
  }),
};

const NvidiaProgramSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-72px" });
  const [selectedCert, setSelectedCert] = useState<NvidiaCertificationContent | null>(null);
  const [selectedSigning, setSelectedSigning] = useState<{
    src: any;
    alt: string;
    caption: string;
  } | null>(null);

  const devIcons = [
    "nvidiaCert1",
    "nvidiaCert2",
    "nvidiaCert3",
    "nvidiaCert4",
    "nvidiaCert5",
    "nvidiaCert6",
    "nvidiaCert7",
    "nvidiaCert8",
    "nvidiaCert9",
    "nvidiaCert10",
  ];

  const handleIconClick = (index: number) => {
    if (index < nvidiaContentList.length) {
      setSelectedCert(nvidiaContentList[index]);
    }
  };

  return (
    <section className="mx-auto w-full bg-transparent px-4 pb-8 pt-2 lg:pb-12 lg:pt-4">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 32 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.16 }}
        >
          <Image
            src={nvidiaCompany}
            alt="NVIDIA Company"
            className="absolute h-full w-full object-cover opacity-10 bottom-0 left-0 z-10 blur-xs"
            priority
          />

        </motion.div>

        {/* Two cards: Learning Path & Certification */}
        <motion.div
          className="mx-auto flex flex-col gap-5 relative py-6  lg:py-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.17 }}
        >

          {/* Certification badges placeholder */}
          <motion.div
            className="container bg-white mx-auto mt-8 flex flex-col items-center justify-center space-y-6 z-20 rounded-xl p-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-1 text-center text-3xl font-bold leading-tight text-black md:text-4xl lg:text-5xl"
            >
              <span>
                CHỨNG CHỈ <span className="text-[#88C200]">NVIDIA</span>
              </span>{" "}
            </motion.h2>
            {/* Subtitle/Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl text-pretty text-center text-base text-black"
            >
              <span className="font-bold text-black">Chứng chỉ</span> là bằng chứng cụ thể về
              chuyên môn, năng lực và cam kết học hỏi không ngừng của bạn. Hãy chứng
              minh kỹ năng của bạn và nâng tầm sự nghiệp bằng cách nhận{" "}
              <span className="font-bold text-[#88C200]">chứng chỉ từ NVIDIA.</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="text-center font-bold text-black"
            >
              Là sự cam kết của chương trình AI57 dành cho bạn, một chứng chỉ có tầm
              ảnh hưởng và đảm bảo vững chắc cho tương lai.{" "}
            </motion.p>
            <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 relative z-20">
              {devIcons.map((icon, i) => (
                <motion.div
                  key={icon}
                  custom={i}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={certIconVariants}
                  className="flex items-center justify-center cursor-pointer"
                  onClick={() => handleIconClick(i)}
                >
                  <Icon icon={icon as any} className="h-40 w-40 bg-white p-4 rounded-lg shadow-[0_0_10px_#fff] hover:shadow-[0_0_20px_#88C200] transition-all hover:scale-105 duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefit Section */}
          <motion.div
            className="container mx-auto mt-16 flex flex-col items-center justify-center space-y-8 z-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-3xl font-bold text-[#a4eb00] text-center"
            >
              {nvidiaBenefit.title}
            </motion.h2>

            {/* Benefits Grid */}
            <div className="flex flex-wrap justify-center gap-6 w-full mt-8">
              {nvidiaBenefit.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-linear-to-br lg:max-w-[400px] max-w-[300px] from-white to-green-50 rounded-xl p-6 shadow-lg border border-green-200/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-[#88C200] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-white-700 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Strategic Partnership Signing Section */}
            <motion.div
              className="mt-14 flex w-full flex-col items-center justify-center space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.h3
                initial={{ opacity: 0, y: -14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.05 }}
                className="text-2xl font-bold text-[#a4eb00] text-center"
              >
                Lễ ký kết hợp tác chiến lược giữa Hồng Lĩnh Education và các đối tác
              </motion.h3>

              <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  {
                    src: signing1,
                    alt: "LỄ KÍ KẾT BIÊN BẢN GHI NHỚ HỢP TÁC",
                    caption:
                      "TRUNG TÂM ĐỔI MỚI SÁNG TẠO QUỐC GIA, ĐẠI HỌC BÁCH KHOA HÀ NỘI VÀ HỒNG LĨNH EDUCATION HỢP TÁC TRIỂN KHAI 'CHƯƠNG TRÌNH HỌC VIỆN AI CHO VIỆT NAM.'",
                  },
                  {
                    src: signing2,
                    alt: "LỄ KÝ KẾT HỢP TÁC CHIẾN LƯỢC HỒNG LĨNH EDUCATION VÀ HỌC VIỆN AIUNI",
                    caption:
                      "LỄ KÝ KẾT HỢP TÁC CHIẾN LƯỢC HỒNG LĨNH EDUCATION VÀ HỌC VIỆN AIUNI",
                  },
                ].map((item, idx) => (
                  <motion.button
                    type="button"
                    key={idx}
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.15 + idx * 0.1 }}
                    onClick={() => setSelectedSigning(item)}
                    className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="relative aspect-16/10 w-full">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-4 text-left">
                      <p className="mt-1 line-clamp-2 fotn text-sm text-black">{item.caption}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Income Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="w-full mt-12"
            >
              <h3 className="text-2xl font-bold text-[#a4eb00]  text-center mb-6">
                {nvidiaBenefit.income.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {nvidiaBenefit.income.levels.map((level, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                    className="bg-linear-to-br from-[#ffffff] to-[#ffffff] rounded-xl p-6 border-2 border-[#88C200]/30 hover:border-[#88C200]/50 transition-all duration-300"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold bg-[#88C200] text-white px-3 py-1 rounded-full">
                          {level.level}
                        </span>
                        {level.experience && (
                          <span className="text-xs text-gray-600">
                            ({level.experience})
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-gray-800 text-lg">
                        {level.position}
                      </h4>
                      <p className="text-2xl font-bold text-[#9de000]">
                        {level.salary_vnd_per_month}
                      </p>
                      {level.note && (
                        <p className="text-xs text-gray-600 italic">
                          {level.note}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </motion.div>

      </motion.div>

      {/* Certification Details Dialog */}
      <Dialog open={selectedCert !== null} onOpenChange={(open) => !open && setSelectedCert(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedCert && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-[#88C200]">
                  {selectedCert.certificationName}
                </DialogTitle>
                <DialogDescription className="text-base">
                  <span className="font-semibold">Code:</span> {selectedCert.certificationCode} |{" "}
                  <span className="font-semibold">Level:</span> {selectedCert.level}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Blueprint Section */}
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#88C200]">Blueprint</h3>
                  <div className="space-y-2">
                    {selectedCert.blueprint.map((topic, index) => (
                      <div key={index} className="flex items-start gap-3">
                        {topic.percentage !== undefined && (
                          <span className="font-semibold text-[#88C200] min-w-12">
                            {topic.percentage}%
                          </span>
                        )}
                        <div className="flex-1">
                          <span className="font-medium">{topic.name}</span>
                          {topic.description && (
                            <p className="text-sm text-gray-600 mt-1">{topic.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requirements Section */}
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#88C200]">Yêu cầu (Requirements)</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    {selectedCert.requirements.map((req, index) => (
                      <li key={index} className="text-gray-700">
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications Section */}
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#88C200]">
                    Output/ứng dụng (Applications)
                  </h3>
                  <ul className="space-y-2 list-disc list-inside">
                    {selectedCert.applications.map((app, index) => (
                      <li key={index} className="text-gray-700">
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Signing Photos Dialog */}
      <Dialog open={selectedSigning !== null} onOpenChange={(open) => !open && setSelectedSigning(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedSigning && (
            <>
              <DialogHeader>
                <DialogDescription className="text-base text-gray-700">
                  {selectedSigning.caption}
                </DialogDescription>
              </DialogHeader>
              <div className="relative mt-4 aspect-16/10 w-full overflow-hidden rounded-xl border">
                <Image
                  src={selectedSigning.src}
                  alt={selectedSigning.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default NvidiaProgramSection;
