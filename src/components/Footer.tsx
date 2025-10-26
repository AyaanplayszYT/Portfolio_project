import { ArrowUpRight, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    Home: ["Personal", "Business", "Partner", "About Us"],
    "Web Pages": ["Blog", "Portfolio", "About", "Contact"],
    "User Affairs": ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
    "Social": ["Twitter", "LinkedIn", "GitHub", "Instagram"],
  };

  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-white">
      {/* Contact Section */}
      <div className="py-24 px-6">
        <div className="container mx-auto">
          <div className="scroll-reveal max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              Let's Connect
              <br />
              There
            </h2>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-full group"
            >
              <span>Take the Start</span>
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-white/10 py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo Column */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black text-sm font-bold">P</span>
                </div>
                <span className="text-xl font-bold">Portfolio</span>
              </div>
              <p className="text-white/60 text-sm mb-4">
                Innovate. Create. Inspire. Crafting digital experiences since 2015.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white/80 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white/80 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white/80 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white/80 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-bold mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/60 hover:text-white transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6 px-6">
        <div className="container mx-auto text-center text-white/60 text-sm">
          <p>© 2025 Product Designer Portfolio. Made by Mistizz911. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
