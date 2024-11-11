import HeroSection from "./components/homepage/HeroSection";
import AboutSection from "./components/homepage/AboutSection";
import WorkSection from "./components/homepage/WorkSection";
import ContactSection from "./components/homepage/ContactSection";

export default function Home() {
  return (
    <div>
        <HeroSection/>
        <AboutSection/>
        <WorkSection/>
        <ContactSection/>
    </div>
  );
}
