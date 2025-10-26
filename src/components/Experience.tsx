const Experience = () => {
  const experiences = [
    {
      year: "2015 - 2017",
      title: "Graphic Designer at Duwe-Duwe Tech",
      description:
        "Kicked off my career creating visual identities and learning the fundamentals of design thinking.",
    },
    {
      year: "2017 - 2019",
      title: "UI/UX Designer at Orland's Group",
      description:
        "Evolved into UI/UX design, crafting user-centered interfaces and delightful digital experiences.",
    },
    {
      year: "2018 - 2021",
      title: "UX Researcher at Lotus Studio",
      description:
        "Deep-dived into user research, uncovering insights that shaped product strategy and design decisions.",
    },
    {
      year: "2021 - Now",
      title: "Product Designer at Apple, Inc",
      description:
        "Leading design at Apple, creating innovative products that blend stunning aesthetics with exceptional usability.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-card">
      <div className="container mx-auto">
        <div className="scroll-reveal mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Experience
          </span>
          <h2 className="section-title mt-4">A Yearly snapshot of my creative growth</h2>
        </div>

        <div className="max-w-4xl">
          {experiences.map((exp, index) => (
            <div
              key={exp.year}
              className="scroll-reveal timeline-item"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute left-0 top-0 w-3 h-3 bg-foreground rounded-full -translate-x-[7px]" />
              <div className="grid md:grid-cols-[200px_1fr] gap-6">
                <div className="text-2xl font-bold">{exp.year}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
