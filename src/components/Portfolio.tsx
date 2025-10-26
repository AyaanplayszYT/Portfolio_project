import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const Portfolio = () => {
  const projects = [
    { image: project1, title: "Mobile App Design" },
    { image: project2, title: "Web Platform" },
    { image: project3, title: "Responsive Design" },
    { image: project4, title: "Productivity App" },
    { image: project5, title: "Website Homepage" },
    { image: project6, title: "E-commerce Platform" },
  ];

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="scroll-reveal mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="section-title mt-4">
            Explore my portfolio of creative solutions
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Explore my 40+ YEARS of Creative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="scroll-reveal portfolio-card group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center justify-between text-white">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
