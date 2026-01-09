import HeroSection from "@/components/hero-section"
import RoadmapSection from "@/components/roadmap-section"
import VisionSection from "@/components/vision-section"
import RoadmapInfographic from "@/components/roadmap-infographic"
import Footer from "@/components/footer"
import LearningPathSection from "@/components/learning-path-section"
import NewsSection from "@/components/news-section"
import NvidiaProgramSection from "@/components/nvidia-program-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <RoadmapSection />
      <LearningPathSection
        desktopHeight="450px"
        desktopWidth="1500px"
        mobileHeight="auto"
        mobileMinHeight="120px"
        mobileMaxHeight="200px"
        fullWidth={false} />
      <div className="relative flex flex-col gap-8 bg-black py-8 lg:gap-16 lg:py-16">
        <NvidiaProgramSection />
      </div>
      <NewsSection />
      <Footer />
    </main>
  )
}
