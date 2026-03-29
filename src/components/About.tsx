const skillGroups = [
  {
    title: "Analytics Stack",
    items: ["Power BI", "Tableau", "Excel", "Google Analytics", "Power Query"],
  },
  {
    title: "Technical Tools",
    items: ["SQL", "Python", "Java", "C/C++", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Data Systems",
    items: ["SQL Server", "Oracle", "MongoDB", "Data modeling", "Validation"],
  },
];

const highlights = [
  {
    label: "Education",
    value: "B.S. in Computer Science",
    detail: "UMBC graduate combining technical depth with business-facing analysis.",
  },
  {
    label: "Leadership",
    value: "PAKSA President",
    detail: "Led a 15-member board and coordinated events serving 200 to 300+ attendees.",
  },
  {
    label: "Style",
    value: "Builder + communicator",
    detail: "I like translating metrics into decisions that non-technical teams can act on.",
  },
];

const About = () => {
  return (
    <section id="about" className="px-4 py-8 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="section-shell px-6 py-10 md:px-10 md:py-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="eyebrow">About</div>
              <h2 className="mt-5 max-w-lg text-4xl font-bold leading-tight text-foreground md:text-5xl">
                About Me
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
                My background is strongest where systems, data, and operations overlap. I enjoy
                making reporting more reliable, finding patterns in performance data, and turning
                that work into dashboards or process recommendations people can use quickly.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-border bg-secondary/35 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">{item.label}</p>
                  <p className="mt-4 text-2xl font-semibold text-foreground">{item.value}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-[1.5rem] border border-border bg-background/60 p-6">
                <p className="text-sm font-semibold text-foreground">{group.title}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-secondary/80 px-3 py-1.5 text-sm text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
