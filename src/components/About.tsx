const About = () => {
  const skills = [
    { category: "Analysis", items: ["Power BI", "Tableau", "Excel", "Google Analytics"] },
    { category: "Programming", items: ["SQL", "Python", "Java", "C/C++", "HTML/CSS"] },
    { category: "Database", items: ["SQL Server", "Oracle", "MongoDB"] },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Background</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">About Me</h2>
        </div>
        
        <div className="max-w-2xl mx-auto mb-20">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            I'm a Computer Science graduate with strong data-driven skills, 
            applying analytical thinking to solve complex business problems 
            through visualization, research, and strategic decision-making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-background rounded-2xl p-8 border border-border" style={{ boxShadow: 'var(--shadow-soft)' }}>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Education</p>
            <div className="space-y-6">
              <div>
                <p className="font-serif text-xl text-foreground">Bachelor of Science</p>
                <p className="text-muted-foreground">Computer Science · UMBC</p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-2xl p-8 border border-border" style={{ boxShadow: 'var(--shadow-soft)' }}>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Leadership</p>
            <div className="space-y-6">
              <div>
                <p className="font-serif text-xl text-foreground">PAKSA President</p>
                <p className="text-muted-foreground">Led 15-member board, 300+ attendee events</p>
              </div>
              <div>
                <p className="font-serif text-xl text-foreground">CWIT Member</p>
                <p className="text-muted-foreground">Center for Women in Technology</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 text-center">Technical Skills</p>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-lg text-foreground mb-4">{skill.category}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="text-sm text-muted-foreground px-3 py-1 bg-secondary rounded-full">
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
