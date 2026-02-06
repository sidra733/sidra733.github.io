import { TrendingUp, BarChart3, Package, Laptop, Users, Award } from "lucide-react";

const Experience = () => {
  const goldenHourHighlights = [
    {
      icon: TrendingUp,
      title: "Product Research",
      description: "Conducted trend analysis using Keepa and SellerAmp to identify high-margin products and improve sales strategy.",
    },
    {
      icon: BarChart3,
      title: "Dashboard Design",
      description: "Designed Power BI dashboards tracking revenue, inventory, and profit margins. Improved reporting accuracy by 25%.",
    },
    {
      icon: Package,
      title: "Operations",
      description: "Collaborated with suppliers and logistics partners to ensure consistent stock availability and cost efficiency.",
    },
  ];

  const dellHighlights = [
    {
      icon: Laptop,
      title: "Case Study Analysis",
      description: "Analyzed 6 weekly business and technology case studies, applying data-driven reasoning to analyze results and constraints.",
    },
    {
      icon: Users,
      title: "Professional Coaching",
      description: "Incorporated feedback from Dell professionals through case studies and one-on-one coaching sessions.",
    },
    {
      icon: Award,
      title: "Digital Credential",
      description: "Earned an industry-recognized digital credential validating technical and professional competencies.",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Professional</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">Experience</h2>
        </div>

        {/* Dell Technologies */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border mb-8" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="text-center mb-10">
            <p className="font-serif text-2xl md:text-3xl text-foreground mb-2">Technology Program Trainee</p>
            <p className="text-lg text-muted-foreground">Dell Technologies · Develop with Dell Program · Remote</p>
            <p className="text-sm text-muted-foreground mt-2">Jan 2026 – Present</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {dellHighlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>
                <p className="font-medium text-foreground mb-2">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Golden Hour Beauty */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="text-center mb-10">
            <p className="font-serif text-2xl md:text-3xl text-foreground mb-2">Data / Operations Analyst Intern</p>
            <p className="text-lg text-muted-foreground">Golden Hour Beauty LLC · Owings Mills, MD</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {goldenHourHighlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>
                <p className="font-medium text-foreground mb-2">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
