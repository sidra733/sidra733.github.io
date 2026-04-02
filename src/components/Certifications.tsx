import { Award, BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    completed: "February 2026",
  },
  {
    title: "Salesforce Sales Operations Professional Certificate",
    issuer: "Salesforce",
    completed: "February 2026",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="px-4 py-8 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="section-shell px-6 py-10 md:px-10 md:py-12">
          <div>
            <div>
              <div className="eyebrow">Credentials</div>
              <h2 className="mt-5 text-4xl font-bold text-foreground md:text-5xl">Certifications</h2>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="rounded-[1.75rem] border border-border bg-background/60 p-6 transition duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-foreground">{cert.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-accent" />
                </div>
                <p className="mt-6 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                  Completed {cert.completed}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
