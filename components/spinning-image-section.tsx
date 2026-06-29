"use client"

import { motion } from "framer-motion"

type SpinningImageSectionProps = {
  title?: string
  images?: { src: string; alt: string }[]
  speedSeconds?: number
}

export default function SpinningImageSection({
  title = "Học viên AI57 thực hành trực tiếp cùng giảng viên Đại Học Bách Khoa Hà Nội.",
  images = [
    { src: "/image/quay/quay1.jpg", alt: "AI57" },
    { src: "/image/quay/quay2.jpg", alt: "Bách Khoa Hà Nội" },
    { src: "/image/quay/quay3.jpg", alt: "NVIDIA" },
    { src: "/image/quay/quay4.jpg", alt: "HLE" },
    { src: "/image/quay/quay5.jfif", alt: "AI57 Logo" },
    { src: "/image/quay/quay6.jfif", alt: "Bách Khoa Hà Nội" },
    { src: "/image/quay/quay7.jfif", alt: "NVIDIA" },
  ],
  speedSeconds = 20,
}: SpinningImageSectionProps) {
  const rowImages = images.slice(0, 7)
  const marqueeImages = [...rowImages, ...rowImages]

  return (
    <section className="relative px-4 py-10 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-4">
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex w-max items-center gap-4 md:gap-6"
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{
                duration: speedSeconds,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {marqueeImages.map((img, idx) => (
                <div
                  key={`${img.src}-${idx}`}
                  className="size-50 shrink-0 md:size-50 lg:size-50"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full rounded-xl object-contain bg-white shadow-lg ring-1 ring-black/5"
                    draggable={false}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <p className="text-center text-sm md:text-base font-semibold text-gray-900">
            {title}
          </p>
        </div>
      </div>
    </section>
  )
}

