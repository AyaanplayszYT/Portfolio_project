import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const companies = [
    "Meta", "Apple", "Google", "Microsoft", "Amazon", 
    "Spotify", "Netflix", "Adobe", "Tesla", "Coinbase",
    "Stripe", "Figma", "Slack", "Dropbox", "Zoom"
  ];

  return (
    <section id="home" className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Large Title */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h1 className="hero-title mb-6">
              Product
              <br />
              Designer
            </h1>
          </div>

          {/* Right: Image and Description */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="relative mb-8 glass-card rounded-3xl p-1">
              <img
                src={heroImage}
                alt="Product designer at work"
                className="rounded-3xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                A UI/UX Designer Creating Intuitive Digital Experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Animated Company Strip - Enhanced with hover pause */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="w-full overflow-hidden py-8">
            <div className="group flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
              {[...companies, ...companies, ...companies].map((company, index) => (
                <span 
                  key={`${company}-${index}`} 
                  className="inline-flex items-center justify-center px-8 py-4 mx-3 glass-card rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
