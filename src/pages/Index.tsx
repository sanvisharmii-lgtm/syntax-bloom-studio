import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CourseOverview from "@/components/CourseOverview";
import LearningFormat from "@/components/LearningFormat";
import WhyDifferent from "@/components/WhyDifferent";
import Curriculum from "@/components/Curriculum";
import StudentFeatures from "@/components/StudentFeatures";
import Outcomes from "@/components/Outcomes";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

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
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
