const Testimonial = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="scroll-reveal text-center">
          <div className="mb-12">
            <span className="text-8xl text-muted-foreground/20 font-serif">"</span>
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-12">
            "Without Journey Commerce, we wouldn't have been able to implement this system ourselves. Being a small team we don't have enough hours in the day. The team at Journey Commerce researched our brand, planned the content and provided weekly feedback to improve the performance. The results have been amazing and we couldn't ask for a better partner."
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <span className="text-xl font-bold">M</span>
            </div>
            <div className="text-left">
              <div className="font-bold">Mistizz</div>
              <div className="text-sm text-muted-foreground">Product designer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
