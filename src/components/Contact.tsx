import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Connect</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Open to discussing opportunities in data analytics and operations roles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a 
            href="mailto:sidraf1@umbc.edu" 
            className="group bg-background rounded-2xl p-6 border border-border text-center hover:border-primary/30 transition-all duration-300"
          >
            <Mail className="w-5 h-5 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
            <p className="text-sm text-foreground">sidraf1@umbc.edu</p>
          </a>
          <a 
            href="tel:443-897-9577" 
            className="group bg-background rounded-2xl p-6 border border-border text-center hover:border-primary/30 transition-all duration-300"
          >
            <Phone className="w-5 h-5 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
            <p className="text-sm text-foreground">443-897-9577</p>
          </a>
          <div className="bg-background rounded-2xl p-6 border border-border text-center">
            <MapPin className="w-5 h-5 mx-auto mb-3 text-muted-foreground" />
            <p className="text-sm text-foreground">Owings Mills, MD</p>
          </div>
        </div>

        <div className="flex justify-center">
          <a 
            href="https://www.linkedin.com/in/sidra-fiaz-b6b4aa229/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300"
          >
            <Linkedin className="w-4 h-4" />
            <span className="text-sm">Connect on LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
