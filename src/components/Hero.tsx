const Hero = () => {
  return (
    <section className="min-h-[75vh] flex items-center justify-center px-6 py-32 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
      <div className="inline-block mb-6">
  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground border border-border rounded-full px-6 py-2 bg-card/80 backdrop-blur-sm">
    Software • Data • Technology
  </p>
</div>
        <h1 className="text-5xl md:text-6xl font-medium text-foreground mb-8 tracking-tight leading-tight">
          Sidra Fiaz
        </h1>
        <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
          Transforming data into actionable insights through business intelligence, 
          process optimization, and strategic analysis.
        </p>
        
        <div className="mt-14 flex justify-center">
          <div className="text-center">
            <p className="text-3xl font-serif text-primary">BS</p>
            <p className="text-xs text-muted-foreground mt-1">Computer Science</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
