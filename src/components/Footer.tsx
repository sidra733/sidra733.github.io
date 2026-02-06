const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sidra Fiaz
        </p>
        <p className="text-xs text-muted-foreground">
          Data Analytics · Operations · Business Intelligence
        </p>
      </div>
    </footer>
  );
};

export default Footer;
