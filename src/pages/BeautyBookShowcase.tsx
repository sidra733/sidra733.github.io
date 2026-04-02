import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const screenshots = [
  {
    title: "Request Form",
    copy: "Client details, date, time, and service selections are entered here.",
    image: "/images/beauty-book-request.png",
  },
  {
    title: "Service Survey",
    copy: "Only the selected services continue into follow-up questions.",
    image: "/images/beauty-book-survey.png",
  },
  {
    title: "Thank You Step",
    copy: "The client-facing flow closes with confirmation messaging.",
    image: "/images/beauty-book-thank-you.png",
  },
  {
    title: "Admin Login",
    copy: "The project includes a simple admin handoff through a login screen.",
    image: "/images/beauty-book-login.png",
  },
  {
    title: "Pending Approval",
    copy: "Submitted request data is shown to the admin before approval.",
    image: "/images/beauty-book-approval-pending.png",
  },
  {
    title: "Approved Record",
    copy: "After approval, the request moves into the approved list view.",
    image: "/images/beauty-book-approved.png",
  },
] as const;

const BeautyBookShowcase = () => {
  return (
    <main className="min-h-screen bg-background px-4 pb-8 pt-24 md:px-6">
      <section className="mx-auto max-w-7xl rounded-[2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(16,12,26,0.97),rgba(8,9,17,0.98))] p-4 shadow-[0_40px_120px_-70px_rgba(0,0,0,0.95)] md:p-6">
        <div className="border-b border-border/70 pb-5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Portfolio
          </Link>

          <p className="mt-5 text-[11px] uppercase tracking-[0.28em] text-primary">
            Workflow Application
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-[0.94] text-white md:text-6xl">
            Beauty Book Workflow
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
            A salon booking project built around a simple but useful workflow: capture client
            requests, branch into service-specific surveys, and surface the final submission to an
            admin approval screen. This page focuses on the strongest evidence from the actual app.
          </p>
        </div>

        <div className="mt-4 grid gap-3 xl:grid-cols-[1.08fr_0.92fr]">
          <article className="rounded-[1.5rem] border border-border/70 bg-white/5 p-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">Client View</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Landing And Request Entry</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              The request page is the strongest entry screenshot because it shows the actual data
              capture flow clearly: client info, appointment slot, and service selection.
            </p>

            <div className="mt-4 overflow-hidden rounded-[1.3rem] border border-border/70 bg-background/50 p-3">
              <img
                src="/images/beauty-book-request.png"
                alt="Beauty Book request page"
                className="w-full rounded-[1rem] object-contain object-center"
              />
            </div>
          </article>

          <article className="rounded-[1.5rem] border border-border/70 bg-white/5 p-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">Admin View</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Submitted Data Shown For Approval</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              This is the strongest admin screenshot because it proves the project does more than
              collect input. It shows the saved request and survey data surfaced for review.
            </p>

            <div className="mt-4 overflow-hidden rounded-[1.3rem] border border-border/70 bg-background/50 p-3">
              <img
                src="/images/beauty-book-approval-pending.png"
                alt="Beauty Book approval page"
                className="w-full rounded-[1rem] object-contain object-center"
              />
            </div>
          </article>
        </div>

        <article className="mt-4 rounded-[1.5rem] border border-border/70 bg-white/5 p-5">
          <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">Walkthrough</p>
          <h2 className="mt-2 text-2xl font-bold text-white">End-To-End Screenshots</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
            These are the real screens from the working app, sequenced to show the full client to
            admin workflow.
          </p>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {screenshots.map((shot) => (
              <div
                key={shot.title}
                className="rounded-[1.3rem] border border-border/70 bg-background/40 p-4"
              >
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-white">{shot.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{shot.copy}</p>
                </div>
                <div className="overflow-hidden rounded-[1rem] border border-border/70 bg-slate-950/80 p-2">
                  <img
                    src={shot.image}
                    alt={shot.title}
                    className="w-full rounded-[0.9rem] object-contain object-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
};

export default BeautyBookShowcase;
