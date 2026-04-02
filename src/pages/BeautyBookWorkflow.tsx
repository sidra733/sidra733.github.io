import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Database, ShieldCheck, Sparkles } from "lucide-react";

const metrics = [
  {
    label: "Core flow",
    value: "Request -> Survey -> Approval",
    copy: "The strongest product story in the app is the client intake path into admin review.",
    tone: "bg-fuchsia-400/10",
  },
  {
    label: "Captured data",
    value: "Name, phone, date, time, services",
    copy: "The request form stores booking details before the app routes the client forward.",
    tone: "bg-rose-300/10",
  },
  {
    label: "Admin view",
    value: "Approval queue",
    copy: "The approval page reads saved request and survey responses and presents them together.",
    tone: "bg-cyan-400/10",
  },
] as const;

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

const proofPoints = [
  {
    title: "Client Request",
    items: [
      "Request page captures name, phone, date, time, and service selection.",
      "Selected services and client details are written to localStorage on submit.",
    ],
    icon: Database,
  },
  {
    title: "Adaptive Survey",
    items: [
      "Survey questions are shown only for the services the client selected.",
      "Responses are saved separately, then routed into the thank-you flow.",
    ],
    icon: Sparkles,
  },
  {
    title: "Admin Approval",
    items: [
      "Approval screen combines saved client details, services, and survey responses.",
      "Admin can approve the request into a visible list or delete it from storage.",
    ],
    icon: ShieldCheck,
  },
] as const;

const BeautyBookWorkflow = () => {
  return (
    <main className="min-h-screen bg-background px-4 pb-8 pt-24 md:px-6">
      <section className="mx-auto max-w-7xl rounded-[2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(16,12,26,0.97),rgba(8,9,17,0.98))] p-4 shadow-[0_40px_120px_-70px_rgba(0,0,0,0.95)] md:p-6">
        <div className="grid gap-4 border-b border-border/70 pb-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
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

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {[
              ["Frontend", "React App"],
              ["Storage", "localStorage"],
              ["Admin login", "test / test"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[1.4rem] border border-border/70 bg-white/5 p-4">
                <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">{label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {metrics.map((item) => (
            <article key={item.label} className={`rounded-[1.5rem] border border-border/70 p-4 ${item.tone}`}>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">{item.label}</p>
              <p className="mt-4 text-xl font-bold text-white md:text-2xl">{item.value}</p>
              <p className="mt-3 text-sm leading-6 text-white/75">{item.copy}</p>
            </article>
          ))}
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
              <div key={shot.title} className="rounded-[1.3rem] border border-border/70 bg-background/40 p-4">
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

        <div className="mt-4 grid gap-3 xl:grid-cols-[1fr_1fr]">
          <article className="rounded-[1.5rem] border border-border/70 bg-white/5 p-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">Why It Works</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Portfolio-Ready Story</h2>
            <div className="mt-4 space-y-4">
              {proofPoints.map((point) => (
                <div key={point.title} className="rounded-[1.2rem] border border-border/70 bg-background/40 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <point.icon className="h-5 w-5" />
                    </div>
                    <strong className="text-base text-white">{point.title}</strong>
                  </div>
                  <div className="mt-4 space-y-3">
                    {point.items.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.5rem] border border-border/70 bg-white/5 p-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">Run It Locally</p>
            <h2 className="mt-2 text-2xl font-bold text-white">How To Open The Real App</h2>

            <div className="mt-4 space-y-3">
              {[
                "Project folder: /Users/sidrafiaz/CMSC447-BeautyBook-5",
                "Start command: npm start",
                "Local URL: http://127.0.0.1:3000",
                "Admin login: test / test",
                "Best demo path: /request -> /surveys -> /login -> /approval",
              ].map((item) => (
                <div key={item} className="rounded-[1rem] border border-border/70 bg-background/40 px-4 py-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.2rem] border border-fuchsia-400/20 bg-fuchsia-400/10 p-4">
              <p className="text-sm leading-7 text-slate-100">
                Best interview talking point: this project is strongest when framed as a workflow
                app, not just a salon UI. The value is that the client request is captured, enriched,
                and surfaced to the admin for action.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default BeautyBookWorkflow;
