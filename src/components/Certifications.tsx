import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Coursera",
      completed: "Feb 2026",
    },
    {
      title: "Ask Questions to Make Data-Driven Decisions Certificate",
      issuer: "Coursera",
      completed: "Feb 2026",
    },
  ];

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Credentials</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
              style={{ boxShadow: 'var(--shadow-soft)' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="font-serif text-lg text-foreground mb-1">{cert.title}</p>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-2">Completed: {cert.completed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
