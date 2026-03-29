import { ArrowUpRight, Database, Github, Linkedin, Sparkles } from "lucide-react";

const signals = [
  "SQL + Power BI reporting",
  "Operations and process analytics",
  "Dashboard design with measurable outcomes",
];

const metrics = [
  { value: "4,282+", label: "Orders analyzed" },
  { value: "25%", label: "Reporting accuracy gain" },
  { value: "150+", label: "Supplier issues resolved" },
];

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-12 pt-28 md:px-6 md:pb-16 md:pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-[10%] top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="section-shell section-grid mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_0.9fr]">
          <div>
            <div className="eyebrow mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Analyst portfolio with a product mindset
            </div>

            <p className="mb-4 text-sm uppercase tracking-[0.42em] text-muted-foreground">
              Sidra Fiaz
            </p>
            <h1 className="text-balance max-w-3xl text-5xl font-bold leading-[0.95] text-foreground md:text-7xl">
              Building cleaner decisions from messy operational data.
            </h1>

            <p className="text-balance mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              I turn spreadsheets, workflows, and performance metrics into dashboards and
              recommendations teams can actually use. My work sits at the intersection of
              analytics, business operations, and practical problem solving.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {signals.map((signal) => (
                <span key={signal} className="rounded-full border border-border bg-secondary/70 px-4 py-2 text-sm text-foreground">
                  {signal}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.01] hover:shadow-lg"
              >
                Explore projects
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/sidra733"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sidra-fiaz-b6b4aa229/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="glass-panel p-5 md:p-6">
            <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/70 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-primary">Current focus</p>
                  <p className="mt-2 text-xl font-semibold text-white">Data analytics for real business workflows</p>
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                  <Database className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <p className="text-3xl font-bold text-white">{metric.value}</p>
                    <p className="mt-1 text-sm text-slate-300">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/10 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Role targets</p>
                <p className="mt-2 text-sm leading-7 text-slate-100">
                  Data Analyst, Business Analyst, Operations Analyst, and entry-level product
                  or insights roles where technical fluency matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
