import { Play } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="scroll-reveal">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              About Me
            </span>
            <h2 className="section-title mt-4">
              Design has always been more than just a job - it's my passion.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Design is not just a job for me, it's a passion that drives me to create beautiful and functional digital experiences that make a difference.
            </p>

            {/* Video placeholder with play button */}
            <div className="relative rounded-3xl overflow-hidden group cursor-pointer glass-card p-1">
              <img
                src={aboutImage}
                alt="Designer working on tablet"
                className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500 rounded-3xl"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-black ml-1" fill="black" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="scroll-reveal space-y-12">
            <div>
              <h3 className="text-6xl font-light tracking-tight mb-2">+320</h3>
              <p className="text-muted-foreground">
                I've crafted over 320 beautifully functional designs, blending creativity with purpose.
              </p>
            </div>
            <div>
              <h3 className="text-6xl font-light tracking-tight mb-2">+280</h3>
              <p className="text-muted-foreground">
                More than 280 happy clients have trusted me to elevate their brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
