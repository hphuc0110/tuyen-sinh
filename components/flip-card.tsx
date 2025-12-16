"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface Module {
  title: string
  content: string
}

interface FlipCardProps {
  level: string
  description: string
  items: Module[]
  index: number
}

export default function FlipCard({ level, description, items, index }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="h-[400px] perspective-1000 cursor-pointer"
      onClick={handleClick}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-700 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full backface-hidden bg-gradient-to-br from-[#4F8FF6]/10 via-[#4F8FF6]/5 to-white border-4 border-[#4F8FF6]/30 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-[#4F8FF6]/50 transition-all"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div>
            <div className="bg-gradient-to-r from-[#4F8FF6] to-[#3B7AE6] text-white font-bold text-sm px-4 py-2 rounded-lg mb-4 inline-block shadow-md">
              {level.split(":")[0]}
            </div>
            <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-[#4F8FF6] to-[#3B7AE6] bg-clip-text text-transparent">{level.split(":")[1]}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-[#4F8FF6] font-semibold">Nhấn để xem các Module</p>
            <div className="text-2xl mt-2 text-[#4F8FF6]">↻</div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full backface-hidden bg-gradient-to-br from-[#4F8FF6] via-[#3B7AE6] to-[#2D6BD9] border-4 border-[#4F8FF6] rounded-2xl p-6 shadow-xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="h-full flex flex-col">
            <div className="bg-white/20 backdrop-blur-sm text-white font-bold text-sm px-4 py-2 rounded-lg mb-4 inline-block border border-white/30">
              {level.split(":")[0]}
            </div>
            <h4 className="font-bold text-white mb-4 text-lg">Các Module:</h4>
            <div className="space-y-3 flex-grow">
              {items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: itemIndex * 0.1 }}
                  className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/50"
                >
                  <p className="text-sm text-gray-900">
                    <span className="font-bold text-[#4F8FF6]">{item.title}</span>
                    <br />
                    {item.content}
                  </p>
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
  )
}
