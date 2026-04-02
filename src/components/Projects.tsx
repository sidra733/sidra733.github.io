import { BarChart3, Calendar, ChevronRight, Truck } from "lucide-react";
import { Link } from "react-router-dom";

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
    image: "/images/supply-chain-dashboard-new.png",
    imageShellClassName: "p-2",
    imageClassName: "h-48 object-contain object-center bg-slate-950",
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
    image: "/images/beauty-book-home.png",
    imageShellClassName: "p-3",
    imageClassName: "h-56 object-cover object-top",
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
      <div className="mx-auto max-w-7xl">
        <div className="section-shell px-6 py-10 md:px-10 md:py-12">
          <div className="max-w-2xl">
            <div className="eyebrow">Projects</div>
            <h2 className="mt-5 text-4xl font-bold text-foreground md:text-5xl">Projects</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              These projects are strongest when they show how I approach problems: clarify the
              metric, structure the data, and present the result in a way a team can actually use.
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
                  <div
                    className={`mt-6 overflow-hidden rounded-[1.4rem] border border-border bg-slate-950/80 ${
                      project.imageShellClassName ?? "p-3"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full rounded-[1rem] ${project.imageClassName ?? "h-56 object-cover object-top"}`}
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

                {project.title === "Supply Chain Performance Dashboard" && (
                  <div className="mt-6">
                    <Link
                      to="/supply-chain-dashboard"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
                    >
                      View dashboard
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
