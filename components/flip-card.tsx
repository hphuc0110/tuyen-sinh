"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

interface Module {
  title: string
  content: string | string[]
}

interface FlipCardProps {
  level: string
  description: string[]
  items: Module[]
  index: number
}

export default function FlipCard({ level, description, items, index }: FlipCardProps) {
  const isMobile = useIsMobile()
  const FRONT_HEIGHT = isMobile ? 500 : 500 // Chiều cao cố định cho front side
  const [isFlipped, setIsFlipped] = useState(false)
  const [cardHeight, setCardHeight] = useState(isMobile ? 500 : 500)
  const backSideRef = useRef<HTMLDivElement>(null)
  const frontSideRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLDivElement>(null)
  const frontMeasureRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setCardHeight(isMobile ? 500 : 500)
  }, [isMobile])


  useEffect(() => {
    // Đo chiều cao của back side (mặt có nhiều nội dung hơn)
    const measureBackHeight = () => {
      if (measureRef.current) {
        const height = measureRef.current.scrollHeight
        // Chỉ cập nhật nếu đang ở trạng thái flipped
        if (isFlipped) {
          setCardHeight(Math.max(height, FRONT_HEIGHT))
        }
      }
    }

    // Đo ngay khi component mount
    measureBackHeight()

    // Đo lại sau một khoảng thời gian ngắn để đảm bảo DOM đã render xong
    const timeout = setTimeout(measureBackHeight, 100)

    return () => clearTimeout(timeout)
  }, [items, isFlipped])

  const handleClick = () => {
    const newFlippedState = !isFlipped
    setIsFlipped(newFlippedState)

    if (newFlippedState) {
      // Khi lật sang back side, mở rộng card
      setTimeout(() => {
        if (measureRef.current) {
          const height = measureRef.current.scrollHeight
          setCardHeight(Math.max(height, FRONT_HEIGHT))
        }
      }, 350) // Đợi một nửa thời gian animation để đo
    } else {
      // Khi quay về front side, thu nhỏ về kích thước ban đầu
      setCardHeight(FRONT_HEIGHT)
    }
  }

  return (
    <div className="relative">
      {/* Element ẩn để đo chiều cao của back side */}
      <div
        ref={measureRef}
        className="absolute top-0 left-0 w-full invisible pointer-events-none"
        style={{ visibility: "hidden" }}
      >
        <div className="bg-gradient-to-br from-[#4F8FF6] via-[#3B7AE6] to-[#2D6BD9] rounded-2xl p-6 border-4 border-[#4F8FF6]">
          <div className="flex flex-col">
            <div className="bg-white/20 backdrop-blur-sm text-white font-bold text-sm px-4 py-2 rounded-lg mb-4 inline-block border border-white/30">
              {level.split(":")[0]}
            </div>
            <h4 className="font-bold text-white mb-4 text-lg">Các Module:</h4>
            <div className="space-y-3">
              {items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/50"
                >
                  <p className="text-sm text-gray-900 mb-2">
                    <span className="font-bold text-[#4F8FF6]">{item.title}</span>
                  </p>
                  {Array.isArray(item.content) ? (
                    <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-800 ml-2">
                      {item.content.map((point, pointIndex) => (
                        <li key={pointIndex} className="leading-relaxed">{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-gray-800">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-xs text-white/90 font-semibold">Nhấn để quay lại</p>
              <div className="text-2xl mt-1 text-white">↻</div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="perspective-1000 cursor-pointer"
        onClick={handleClick}
        animate={{ height: cardHeight }}
        style={{ minHeight: FRONT_HEIGHT + "px" }}
      >
        <motion.div
          className="relative w-full transition-transform duration-700 preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          style={{ transformStyle: "preserve-3d", height: "100%" }}
        >
          {/* Front Side */}
          <div
            ref={frontSideRef}
            className="absolute overflow-hidden  w-full backface-hidden bg-gradient-to-br from-[#4F8FF6]/10 via-[#4F8FF6]/5 to-white border-4 border-[#4F8FF6]/30 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-[#4F8FF6]/50 transition-all"
            style={{
              backfaceVisibility: "hidden",
              height: "100%"
            }}
          >
            <div>
              <div className="bg-gradient-to-r from-[#4F8FF6] to-[#3B7AE6] text-white font-bold text-sm px-4 py-2 rounded-lg mb-4 inline-block shadow-md">
                {level.split(":")[0]}
              </div>
              <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-[#4F8FF6] to-[#3B7AE6] bg-clip-text text-transparent">{level.split(":")[1]}</h3>
              <div className="text-sm text-gray-700 leading-relaxed ">
                {description.map((item, index) => (
                  <p key={index} className="mb-2 leading-relaxed m-0! ">{item}</p>
                ))}</div>
            </div>
            <div className="text-center">
              <p className="text-xs text-[#4F8FF6] font-semibold">Nhấn để xem các Module</p>
              <div className="text-2xl mt-2 text-[#4F8FF6]">↻</div>
            </div>
          </div>

          {/* Back Side */}
          <div
            ref={backSideRef}
            className="absolute w-full backface-hidden bg-gradient-to-br from-[#4F8FF6] via-[#3B7AE6] to-[#2D6BD9] border-4 border-[#4F8FF6] rounded-2xl p-6 shadow-xl"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              height: "100%"
            }}
          >
            <div className="h-full flex flex-col">
              <div className="bg-white/20 backdrop-blur-sm text-white font-bold text-sm px-4 py-2 rounded-lg mb-4 inline-block border border-white/30">
                {level.split(":")[0]}
              </div>
              <h4 className="font-bold text-white mb-4 text-lg">Các Module:</h4>
              <div className="space-y-3 flex-grow overflow-hidden">
                {items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: itemIndex * 0.1 }}
                    className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/50"
                  >
                    <p className="text-sm text-gray-900 mb-2">
                      <span className="font-bold text-[#4F8FF6]">{item.title}</span>
                    </p>
                    {Array.isArray(item.content) ? (
                      <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-800 ml-2">
                        {item.content.map((point, pointIndex) => (
                          <li key={pointIndex} className="leading-relaxed">{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-gray-800">{item.content}</p>
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-4">
                <p className="text-xs text-white/90 font-semibold">Nhấn để quay lại</p>
                <div className="text-2xl mt-1 text-white">↻</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
