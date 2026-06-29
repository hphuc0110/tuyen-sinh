import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cảm ơn - AI57",
  description:
    "Cảm ơn anh/chị đã đăng ký tư vấn. Chuyên viên AI57 sẽ liên hệ trong thời gian sớm nhất.",
}

export default function CamOnLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
