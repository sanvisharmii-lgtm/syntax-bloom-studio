import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CourseOverview from "@/components/CourseOverview";
import LearningFormat from "@/components/LearningFormat";
import WhyDifferent from "@/components/WhyDifferent";
import Curriculum from "@/components/Curriculum";
import StudentFeatures from "@/components/StudentFeatures";
import Outcomes from "@/components/Outcomes";
import Reviews from "@/components/Reviews";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyEnrollBar from "@/components/StickyEnrollBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CourseOverview />
      <LearningFormat />
      <WhyDifferent />
      <Curriculum />
      <StudentFeatures />
      <Outcomes />
      <Reviews />
      <FAQSection />
      <Footer />
      <StickyEnrollBar />
    </div>
  );
};

export default Index;
