import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const contactCards = [
  {
    label: "Email",
    value: "sidraf1@umbc.edu",
    href: "mailto:sidraf1@umbc.edu",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "443-897-9577",
    href: "tel:443-897-9577",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Owings Mills, MD",
    icon: MapPin,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="px-4 py-8 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="section-shell px-6 py-10 md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="eyebrow">Contact</div>
              <h2 className="mt-5 text-4xl font-bold text-foreground md:text-5xl">Contact</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
                I’m most interested in analyst and operations roles where I can combine data work,
                reporting, and practical business problem solving. If that sounds aligned, I’d love
                to connect.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/sidra-fiaz-b6b4aa229/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.01]"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/sidra733"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/35 hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                  View GitHub
                </a>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {contactCards.map((card) => {
                const content = (
                  <div className="rounded-[1.5rem] border border-border bg-background/60 p-5 transition duration-300 hover:border-primary/35 hover:bg-background/80">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <card.icon className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">{card.label}</p>
                    <p className="mt-2 text-lg font-semibold text-foreground">{card.value}</p>
                  </div>
                );

                return card.href ? (
                  <a key={card.label} href={card.href}>
                    {content}
                  </a>
                ) : (
                  <div key={card.label}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
