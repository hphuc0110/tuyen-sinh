"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

type LearningPathSectionProps = {
  // Desktop sizes
  desktopHeight?: string | number;
  desktopWidth?: string | number;
  desktopMinHeight?: string | number;
  desktopMaxHeight?: string | number;
  desktopMinWidth?: string | number;
  desktopMaxWidth?: string | number;
  // Mobile sizes (responsive)
  mobileHeight?: string | number;
  mobileWidth?: string | number;
  mobileMinHeight?: string | number;
  mobileMaxHeight?: string | number;
  // Common props
  svgAspectRatio?: string;
  containerClassName?: string;
  fullWidth?: boolean;
  // Legacy props (for backward compatibility)
  svgHeight?: string | number;
  svgMinHeight?: string | number;
  svgMaxHeight?: string | number;
  svgWidth?: string | number;
  svgMinWidth?: string | number;
  svgMaxWidth?: string | number;
};

const LearningPathSection = ({
  // Desktop props
  desktopHeight,
  desktopWidth,
  desktopMinHeight,
  desktopMaxHeight,
  desktopMinWidth,
  desktopMaxWidth,
  // Mobile props
  mobileHeight = "auto",
  mobileWidth = "100%",
  mobileMinHeight = "200px",
  mobileMaxHeight = "none",
  // Common props
  svgAspectRatio = "3000/342",
  containerClassName = "",
  fullWidth = true,
  // Legacy props (backward compatibility)
  svgHeight,
  svgMinHeight,
  svgMaxHeight,
  svgWidth,
  svgMinWidth,
  svgMaxWidth,
}: LearningPathSectionProps = {}) => {
  // Use desktop props if provided, otherwise fall back to legacy props
  const height = desktopHeight ?? svgHeight ?? "auto";
  const width = desktopWidth ?? svgWidth ?? "100%";
  const minHeight = desktopMinHeight ?? svgMinHeight ?? "200px";
  const maxHeight = desktopMaxHeight ?? svgMaxHeight ?? "none";
  const minWidth = desktopMinWidth ?? svgMinWidth ?? "auto";
  const maxWidth = desktopMaxWidth ?? svgMaxWidth ?? "none";
  const sectionRef = useRef<HTMLDivElement>(null);

  // Use framer-motion's useInView to detect the section visibility
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section className="w-full bg-transparent py-12">
      <div className="w-full">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto flex max-w-7xl flex-col items-center justify-center space-y-6 px-4"
        >
          {/* Title */}
          <motion.h2
            className="mb-1 text-center text-3xl font-bold leading-tight text-slate-700 md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            LỘ TRÌNH TRỞ THÀNH KỸ SƯ AI TOÀN NĂNG
          </motion.h2>

        </motion.div>

        {/* Image Full Width Container - Responsive Desktop/Mobile */}
        <motion.div
          className={`relative overflow-hidden ${containerClassName} ${fullWidth ? "w-screen" : ""}`}
          style={{
            ...(fullWidth
              ? { marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }
              : {}),
          }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.68, delay: 0.3 }}
        >
          <div
            className="relative w-full roadmap-image-responsive"
            style={{
              aspectRatio: svgAspectRatio,
              // Mobile styles (default - applied on small screens)
              height: mobileHeight,
              minHeight: mobileMinHeight,
              maxHeight: mobileMaxHeight,
              width: mobileWidth,
              // CSS variables for desktop (will be used in media query)
              "--desktop-height": typeof height === "string" ? height : `${height}px`,
              "--desktop-width": typeof width === "string" ? width : `${width}px`,
              "--desktop-min-height": typeof minHeight === "string" ? minHeight : `${minHeight}px`,
              "--desktop-max-height": typeof maxHeight === "string" ? maxHeight : maxHeight,
              "--desktop-min-width": typeof minWidth === "string" ? minWidth : `${minWidth}px`,
              "--desktop-max-width": typeof maxWidth === "string" ? maxWidth : `${maxWidth}px`,
            } as React.CSSProperties}
          >
            <style jsx global>{`
              @media (min-width: 768px) {
                .roadmap-image-responsive {
                  height: var(--desktop-height) !important;
                  min-height: var(--desktop-min-height) !important;
                  max-height: var(--desktop-max-height) !important;
                  width: ${fullWidth ? "100%" : "var(--desktop-width)"} !important;
                  min-width: var(--desktop-min-width) !important;
                  max-width: var(--desktop-max-width) !important;
                }
              }
            `}</style>
            <Image
              src="/image/roadmap-extend.jpg"
              alt="Lộ trình trở thành kỹ sư AI toàn năng"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningPathSection;
