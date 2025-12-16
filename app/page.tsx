import HeroSection from "@/components/hero-section"
import RoadmapSection from "@/components/roadmap-section"
import VisionSection from "@/components/vision-section"
import RoadmapInfographic from "@/components/roadmap-infographic"
import Footer from "@/components/footer"
import LearningPathSection from "@/components/learning-path-section"
import NewsSection from "@/components/news-section"

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
        fullWidth={false}/>
      <NewsSection />
      <Footer />
    </main>
  )
}
