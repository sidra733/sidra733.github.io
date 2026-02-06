import { BarChart3, Calendar } from "lucide-react";
import beautyBookHome from "@/assets/beauty-book-home.png";
import beautyBookApproval from "@/assets/beauty-book-approval.png";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60 mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-medium text-primary-foreground">Featured Projects</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* E-Commerce Sales Dashboard */}
          <div className="bg-primary-foreground/5 rounded-3xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary-foreground/80" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50">Data Analytics</span>
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground mb-4">
              E-Commerce Sales Dashboard
            </h3>
            
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Interactive dashboard visualizing monthly sales, expenses, and product performance. 
              Automated data updates using Power Query to maintain a single source of truth for business tracking.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs px-4 py-1.5 bg-primary-foreground/10 rounded-full text-primary-foreground border border-primary-foreground/20">Power BI</span>
              <span className="text-xs px-4 py-1.5 bg-primary-foreground/10 rounded-full text-primary-foreground border border-primary-foreground/20">Excel</span>
              <span className="text-xs px-4 py-1.5 bg-primary-foreground/10 rounded-full text-primary-foreground border border-primary-foreground/20">Power Query</span>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-serif text-primary-foreground">25%</p>
                <p className="text-xs text-primary-foreground/50">Accuracy Improved</p>
              </div>
              <div>
                <p className="text-2xl font-serif text-primary-foreground">Auto</p>
                <p className="text-xs text-primary-foreground/50">Data Updates</p>
              </div>
              <div>
                <p className="text-2xl font-serif text-primary-foreground">Live</p>
                <p className="text-xs text-primary-foreground/50">Tracking</p>
              </div>
            </div>
          </div>

          {/* Beauty Book */}
          <div className="bg-primary-foreground/5 rounded-3xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary-foreground/80" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50">Web Application</span>
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground mb-4">
              Beauty Book
            </h3>
            
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Salon management app for small business owners to streamline appointment scheduling, 
              customer check-ins, and manage client information efficiently.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs px-4 py-1.5 bg-primary-foreground/10 rounded-full text-primary-foreground border border-primary-foreground/20">HTML5</span>
              <span className="text-xs px-4 py-1.5 bg-primary-foreground/10 rounded-full text-primary-foreground border border-primary-foreground/20">CSS3</span>
              <span className="text-xs px-4 py-1.5 bg-primary-foreground/10 rounded-full text-primary-foreground border border-primary-foreground/20">JavaScript</span>
              <span className="text-xs px-4 py-1.5 bg-primary-foreground/10 rounded-full text-primary-foreground border border-primary-foreground/20">JSON</span>
            </div>

            {/* Screenshot Images */}
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-[4/3] rounded-xl border border-primary-foreground/15 overflow-hidden">
                <img 
                  src={beautyBookHome} 
                  alt="Beauty Book Home Page"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl border border-primary-foreground/15 overflow-hidden">
                <img 
                  src={beautyBookApproval} 
                  alt="Beauty Book Approval Page"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
