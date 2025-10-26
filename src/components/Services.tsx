import { ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Social Ads",
      description:
        "Design eye-catching social media advertisements that capture attention and drive engagement across all platforms.",
    },
    {
      title: "Search Engineer",
      description:
        "Optimize search experiences with cutting-edge engineering solutions that enhance discoverability and user satisfaction.",
    },
    {
      title: "Content Marketing",
      description:
        "Craft compelling content strategies that tell your story and convert audiences into loyal customers.",
    },
    {
      title: "Soap Marketing",
      description:
        "Strategic marketing solutions that cleanse your brand presence and leave a lasting impression on your target market.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="scroll-reveal mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Services
          </span>
          <h2 className="section-title mt-4">
            A Comprehensive look at what we offer and how we deliver
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`scroll-reveal p-8 rounded-3xl border border-border hover:border-foreground transition-all group cursor-pointer ${
                index === services.length - 1 ? "bg-accent text-accent-foreground" : "glass-card"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <p className={index === services.length - 1 ? "text-accent-foreground/80" : "text-muted-foreground"}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
