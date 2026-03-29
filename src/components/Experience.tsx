import { Award, BarChart3, Laptop, Package, TrendingUp, Users } from "lucide-react";

const experienceItems = [
  {
    role: "Technology Program Trainee",
    company: "Dell Technologies",
    meta: "Develop with Dell Program · Remote · January 2026 to Present",
    summary:
      "Hands-on case study program centered on analytical thinking, stakeholder communication, and structured problem solving in technology environments.",
    highlights: [
      {
        icon: Laptop,
        title: "Case study analysis",
        description:
          "Worked through six business and technology case studies with a focus on constraints, tradeoffs, and data-backed recommendations.",
      },
      {
        icon: Users,
        title: "Professional feedback loops",
        description:
          "Refined presentation and reasoning through one-on-one coaching and review sessions with Dell professionals.",
      },
      {
        icon: Award,
        title: "Credential earned",
        description:
          "Completed the program with a digital credential validating analytical and professional readiness.",
      },
    ],
  },
  {
    role: "Data / Operations Analyst Intern",
    company: "Golden Hour Beauty LLC",
    meta: "Owings Mills, Maryland · August 2023 to May 2025",
    summary:
      "Supported operational decisions across inventory, supplier coordination, and reporting by translating day-to-day business activity into usable dashboards and performance insights.",
    highlights: [
      {
        icon: TrendingUp,
        title: "Performance reporting",
        description:
          "Built Power BI dashboards for revenue, inventory turnover, and profit margins, increasing reporting accuracy by 25%.",
      },
      {
        icon: BarChart3,
        title: "Order-level analysis",
        description:
          "Improved decision-making across 4,282+ orders by analyzing inventory, fulfillment, and supplier performance trends.",
      },
      {
        icon: Package,
        title: "Issue resolution",
        description:
          "Resolved 150+ supplier and logistics issues, helping maintain product availability and reduce operational friction.",
      },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="px-4 py-8 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="section-shell px-6 py-10 md:px-10 md:py-12">
          <div className="max-w-2xl">
            <div className="eyebrow">Experience</div>
            <h2 className="mt-5 text-4xl font-bold text-foreground md:text-5xl">Experience</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              The strongest thread across my experience is making business activity easier to
              monitor and act on, whether that means building dashboards, investigating trends, or
              packaging technical findings into clear recommendations.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {experienceItems.map((item) => (
              <article
                key={item.role}
                className="rounded-[1.75rem] border border-border bg-background/60 p-6 md:p-8"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-sm uppercase tracking-[0.28em] text-primary">{item.company}</p>
                    <h3 className="mt-3 text-3xl font-bold text-foreground">{item.role}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.meta}</p>
                    <p className="mt-5 text-base leading-8 text-muted-foreground">{item.summary}</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {item.highlights.map((highlight) => (
                    <div key={highlight.title} className="rounded-[1.5rem] border border-border bg-secondary/40 p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                        <highlight.icon className="h-5 w-5" />
                      </div>
                      <p className="mt-5 text-lg font-semibold text-foreground">{highlight.title}</p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
