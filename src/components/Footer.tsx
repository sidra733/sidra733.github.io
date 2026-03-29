const Footer = () => {
  return (
    <footer className="px-4 pb-10 pt-4 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-border/80 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Sidra Fiaz</p>
        <p>Data Analytics, Operations, Dashboards, and business-facing technical work</p>
      </div>
    </footer>
  );
};

export default Footer;
