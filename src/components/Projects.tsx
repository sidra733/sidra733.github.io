import { BarChart3, Calendar, Truck } from "lucide-react";
import beautyBookHome from "@/assets/beauty-book-home.png";
import supplyChainDashboard from "@/assets/supply-chain-dashboard.png";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-3 md:px-6 bg-primary text-primary-foreground">
      <div className="w-full max-w-none px-4 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60 mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-medium text-primary-foreground mb-4">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-primary-foreground/70 leading-relaxed">
            A selection of analytics and application projects focused on business insights,
            operations improvement, and user-centered design.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full">

          {/* E-Commerce */}
          <div className="h-full rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm hover:bg-primary-foreground/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary-foreground/80" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-primary-foreground/50">
                Data Analytics
              </p>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl mb-4">
              E-Commerce Sales Dashboard
            </h3>

            <p className="text-primary-foreground/70 leading-8 mb-6">
              Interactive dashboard built to track monthly sales, expenses, and product performance
              while improving reporting consistency through automated data updates.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="chip">Power BI</span>
              <span className="chip">Excel</span>
              <span className="chip">Power Query</span>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-primary-foreground/10 text-center">
              <div>
                <p className="text-2xl font-serif">25%</p>
                <p className="text-xs text-primary-foreground/50 mt-1">Accuracy</p>
              </div>
              <div>
                <p className="text-2xl font-serif">Auto</p>
                <p className="text-xs text-primary-foreground/50 mt-1">Updates</p>
              </div>
              <div>
                <p className="text-2xl font-serif">Live</p>
                <p className="text-xs text-primary-foreground/50 mt-1">Tracking</p>
              </div>
            </div>
          </div>

          {/* Supply Chain */}
          <div className="h-full rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm hover:bg-primary-foreground/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                <Truck className="w-5 h-5 text-primary-foreground/80" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-primary-foreground/50">
                Operations Analytics
              </p>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl mb-5">
              Supply Chain Performance Dashboard
            </h3>

            <div className="mb-6 rounded-2xl overflow-hidden border border-primary-foreground/15 bg-white p-4 shadow-lg">
              <img
                src={supplyChainDashboard}
                alt="Supply Chain Dashboard"
                className="w-full h-72 object-contain"
              />
            </div>

            <p className="text-primary-foreground/70 leading-8 mb-6">
              Built 4 dashboards and pivot tables to evaluate supplier performance, shipping costs,
              fulfillment time trends, and operational efficiency.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="chip">Excel</span>
              <span className="chip">Pivot Tables</span>
              <span className="chip">Dashboard Design</span>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-primary-foreground/10 text-center">
              <div>
                <p className="text-2xl font-serif">4</p>
                <p className="text-xs text-primary-foreground/50 mt-1">Dashboards</p>
              </div>
              <div>
                <p className="text-2xl font-serif">4</p>
                <p className="text-xs text-primary-foreground/50 mt-1">Pivot Tables</p>
              </div>
              <div>
                <p className="text-2xl font-serif">Multi</p>
                <p className="text-xs text-primary-foreground/50 mt-1">Insights</p>
              </div>
            </div>
          </div>

          {/* Beauty Book */}
          <div className="h-full rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm hover:bg-primary-foreground/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary-foreground/80" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-primary-foreground/50">
                Web Application
              </p>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl mb-5">
              Beauty Book
            </h3>

            <div className="mb-6 rounded-2xl overflow-hidden border border-primary-foreground/15 bg-white p-4 shadow-lg">
              <img
                src={beautyBookHome}
                alt="Beauty Book"
                className="w-full h-72 object-contain"
              />
            </div>

            <p className="text-primary-foreground/70 leading-8 mb-6">
              Appointment and client management application designed to streamline scheduling,
              service tracking, and approval workflows.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="chip">HTML</span>
              <span className="chip">CSS</span>
              <span className="chip">JavaScript</span>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-primary-foreground/10 text-center">
              <div>
                <p className="text-2xl font-serif">Multi</p>
                <p className="text-xs text-primary-foreground/50 mt-1">Pages</p>
              </div>
              <div>
                <p className="text-2xl font-serif">UI</p>
                <p className="text-xs text-primary-foreground/50 mt-1">Design</p>
              </div>
              <div>
                <p className="text-2xl font-serif">Live</p>
                <p className="text-xs text-primary-foreground/50 mt-1">Project</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;