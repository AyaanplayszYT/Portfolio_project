import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation on scroll
    const revealElements = () => {
      const elements = document.querySelectorAll(".scroll-reveal");
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add("revealed");
        }
      });
    };

    window.addEventListener("scroll", revealElements);
    revealElements(); // Initial check

    return () => window.removeEventListener("scroll", revealElements);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Portfolio />
        <Testimonial />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
