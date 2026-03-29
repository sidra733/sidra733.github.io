import { BarChart3, Calendar, ChevronRight, Truck } from "lucide-react";
import beautyBookHome from "@/assets/beauty-book-home.png";
import supplyChainDashboard from "@/assets/supply-chain-dashboard.png";

const projects = [
  {
    title: "E-Commerce Sales Dashboard",
    tag: "Data Analytics",
    icon: BarChart3,
    description:
      "Built an interactive Power BI dashboard to track monthly sales, expenses, and product performance with cleaner reporting and faster visibility into demand patterns.",
    impact: [
      "Centralized monthly KPI reporting",
      "Automated refreshes with Power Query",
      "Improved reporting accuracy by 25%",
    ],
    stack: ["Power BI", "Excel", "Power Query"],
  },
  {
    title: "Supply Chain Performance Dashboard",
    tag: "Operations Analytics",
    icon: Truck,
    image: supplyChainDashboard,
    description:
      "Analyzed supplier, transportation, and regional performance to surface delivery bottlenecks, shipping cost issues, and fulfillment inefficiencies.",
    impact: [
      "4 supplier dashboards",
      "4 supporting pivot tables",
      "Trend analysis across 3 product categories",
    ],
    stack: ["Excel", "Pivot Tables", "Dashboard Design"],
  },
  {
    title: "Beauty Book",
    tag: "Workflow Application",
    icon: Calendar,
    image: beautyBookHome,
    description:
      "Designed a service scheduling and client management app to streamline appointment handling, customer support workflows, and approval processes.",
    impact: [
      "Multi-page client flow",
      "Workflow-focused UI patterns",
      "Operational support for salon bookings",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-4 py-8 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="section-shell px-6 py-10 md:px-10 md:py-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="eyebrow">Projects</div>
              <h2 className="mt-5 text-4xl font-bold text-foreground md:text-5xl">Projects</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                These projects are strongest when they show how I approach problems: clarify the
                metric, structure the data, and present the result in a way a team can actually use.
              </p>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              My portfolio mixes analysis, operations thinking, and interface work because I often
              operate between the data layer and the people consuming it.
            </p>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-[1.75rem] border border-border bg-background/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/35"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <project.icon className="h-5 w-5" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.3em] text-primary">{project.tag}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-foreground">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.description}</p>

                {project.image && (
                  <div className="mt-6 overflow-hidden rounded-[1.4rem] border border-border bg-slate-950/80 p-3">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-56 w-full rounded-[1rem] object-cover object-top"
                    />
                  </div>
                )}

                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Impact</p>
                  <div className="mt-4 space-y-3">
                    {project.impact.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
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

export default Projects;
