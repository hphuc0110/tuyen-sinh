"use client"

import type React from "react"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function RegistrationForm() {
  const prefersReducedMotion = useReducedMotion()
  const { toast } = useToast()
  const router = useRouter()
  const [formData, setFormData] = useState({
    studentName: "",
    phone: "",
    email: "",
    parentName: "",
    school: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Lấy URL của Google Apps Script từ biến môi trường
  const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ""

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.studentName.trim()) {
      newErrors.studentName = "Vui lòng nhập họ tên phụ huynh"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại"
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Số điện thoại không hợp lệ"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ"
    }

    if (!formData.parentName.trim()) {
      newErrors.parentName = "Vui lòng nhập họ tên học sinh"
    }

    if (!formData.school.trim()) {
      newErrors.school = "Vui lòng nhập tên trường"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast({
        variant: "destructive",
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ và đúng thông tin",
      })
      return
    }

    if (!GOOGLE_SCRIPT_URL) {
      toast({
        variant: "destructive",
        title: "Lỗi cấu hình",
        description: "Chưa cấu hình Google Apps Script URL. Vui lòng liên hệ quản trị viên.",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Gửi dữ liệu dưới dạng form data để tránh CORS
      const formDataToSend = new FormData()
      formDataToSend.append("studentName", formData.studentName)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("parentName", formData.parentName)
      formDataToSend.append("school", formData.school)
      formDataToSend.append("timestamp", new Date().toISOString())

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend,
      })

      // Vì mode: "no-cors" nên không thể kiểm tra response
      // Nhưng nếu không có lỗi thì coi như thành công
      // Đợi một chút để đảm bảo request được gửi
      await new Promise((resolve) => setTimeout(resolve, 500))

      toast({
        title: "Đăng ký thành công!",
        description: "Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên hệ với bạn sớm nhất.",
      })

      router.push("/cam-on")

      // Reset form
      setFormData({
        studentName: "",
        phone: "",
        email: "",
        parentName: "",
        school: "",
      })
      setErrors({})
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        variant: "destructive",
        title: "Lỗi",
        description: "Có lỗi xảy ra khi gửi form. Vui lòng thử lại sau.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative"
    >

      <div className="bg-linear-to-br from-[#4F8FF6] via-[#5A9FFF] to-[#3B7AE6] rounded-2xl border-2 border-white/20 p-4 shadow-xl sm:rounded-3xl sm:p-6 sm:shadow-2xl md:p-10">
        <h2 className="mb-4 text-balance text-center text-lg font-bold text-white drop-shadow-lg sm:mb-6 sm:text-2xl md:mb-8 md:text-3xl">
          ĐĂNG KÝ TƯ VẤN
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> </span>
          LỘ TRÌNH & KHÓA HỌC
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="studentName" className="text-sm font-semibold text-white sm:text-base">
              1. Họ và tên Phụ huynh:{" "}
              <span className="text-red-300">*</span>
            </Label>
            <Input
              id="studentName"
              placeholder="Nhập họ tên cha/mẹ..."
              value={formData.studentName}
              onChange={(e) => {
                setFormData({ ...formData, studentName: e.target.value })
                if (errors.studentName) {
                  setErrors({ ...errors, studentName: "" })
                }
              }}
              className={`bg-white border-[#4F8FF6] focus:border-[#3B7AE6] focus:ring-2 focus:ring-[#4F8FF6]/50 ${
                errors.studentName ? "border-red-500" : ""
              }`}
              required
            />
            {errors.studentName && (
              <p className="text-red-300 text-sm">{errors.studentName}</p>
            )}
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="phone" className="text-sm font-semibold text-white sm:text-base">
              2. Số điện thoại:{" "}
              <span className="text-red-300">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Số điện thoại liên hệ..."
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value })
                if (errors.phone) {
                  setErrors({ ...errors, phone: "" })
                }
              }}
              className={`bg-white border-[#4F8FF6] focus:border-[#3B7AE6] focus:ring-2 focus:ring-[#4F8FF6]/50 ${
                errors.phone ? "border-red-500" : ""
              }`}
              required
            />
            {errors.phone && (
              <p className="text-red-300 text-sm">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold text-white sm:text-base">
              3. Email: <span className="text-red-300">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email để được nhận thông tin sớm nhất "
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value })
                if (errors.email) {
                  setErrors({ ...errors, email: "" })
                }
              }}
              className={`bg-white border-[#4F8FF6] focus:border-[#3B7AE6] focus:ring-2 focus:ring-[#4F8FF6]/50 ${
                errors.email ? "border-red-500" : ""
              }`}
              required
            />
            {errors.email && (
              <p className="text-red-300 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="parentName" className="text-sm font-semibold text-white sm:text-base">
              4. Họ và tên Học sinh: <span className="text-red-300">*</span>
            </Label>
            <Input
              id="parentName"
              placeholder="Nhập tên con..."
              value={formData.parentName}
              onChange={(e) => {
                setFormData({ ...formData, parentName: e.target.value })
                if (errors.parentName) {
                  setErrors({ ...errors, parentName: "" })
                }
              }}
              className={`bg-white border-[#4F8FF6] focus:border-[#3B7AE6] focus:ring-2 focus:ring-[#4F8FF6]/50 ${
                errors.parentName ? "border-red-500" : ""
              }`}
              required
            />
            {errors.parentName && (
              <p className="text-red-300 text-sm">{errors.parentName}</p>
            )}
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="school" className="text-sm font-semibold text-white sm:text-base">
              5. Trường đang theo học: <span className="text-red-300">*</span>
            </Label>
            <Input
              id="school"
              placeholder="Nhập tên trường..."
              value={formData.school}
              onChange={(e) => {
                setFormData({ ...formData, school: e.target.value })
                if (errors.school) {
                  setErrors({ ...errors, school: "" })
                }
              }}
              className={`bg-white border-[#4F8FF6] focus:border-[#3B7AE6] focus:ring-2 focus:ring-[#4F8FF6]/50 ${
                errors.school ? "border-red-500" : ""
              }`}
              required
            />
            {errors.school && (
              <p className="text-red-300 text-sm">{errors.school}</p>
            )}
          </div>

          <motion.div whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: isSubmitting ? 1 : 0.98 }}>
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="h-auto min-h-11 w-full whitespace-normal rounded-xl border-2 border-white/50 bg-linear-to-r from-white to-gray-50 px-3 py-3 text-sm font-bold leading-snug text-[#4F8FF6] shadow-xl transition-all hover:from-gray-50 hover:to-white hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50 sm:min-h-12 sm:rounded-2xl sm:py-5 sm:text-base md:text-lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Đang gửi...
                </>
              ) : (
                "NHẬN TƯ VẤN LỘ TRÌNH MIỄN PHÍ CHO CON"
              )}
            </Button>
          </motion.div>
        </form>
      </div>
    </motion.div>
  )
}
