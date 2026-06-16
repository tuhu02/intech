import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ProcessSection from "./components/ProcessSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <hr className="section-divider" />
        <AboutSection />
        <hr className="section-divider" />
        <ServicesSection />
        <hr className="section-divider" />
        <PortfolioSection />
        <hr className="section-divider" />
        <ProcessSection />
        <hr className="section-divider" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
