import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI-57 - Khóa học Kỹ sư AI Toàn năng",
  description:
    "Khóa học Kỹ sư AI Toàn năng dành cho Tài năng trẻ - Được biên soạn theo khung năng lực của NVIDIA và kiểm định bởi Đại học Bách Khoa Hà Nội",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
