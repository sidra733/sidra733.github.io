import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const kpis = [
  {
    title: "Total Revenue",
    value: "$577.6K",
    copy: "Sum of revenue generated across all records.",
    tone: "bg-blue-400/10",
  },
  {
    title: "Avg Fulfillment",
    value: "21.71d",
    copy: "Lead times plus shipping times.",
    tone: "bg-cyan-400/10",
  },
  {
    title: "Avg Defect Rate",
    value: "2.28%",
    copy: "Average defect rate across the dataset.",
    tone: "bg-amber-300/10",
  },
  {
    title: "Estimated Profit",
    value: "$519.4K",
    copy: "Revenue minus costs, shipping, and manufacturing.",
    tone: "bg-emerald-400/10",
  },
] as const;

const supplierPerformance = [
  { name: "Supplier 1", fulfillmentTime: 22.85 },
  { name: "Supplier 4", fulfillmentTime: 22.56 },
  { name: "Supplier 2", fulfillmentTime: 21.73 },
  { name: "Supplier 5", fulfillmentTime: 20.94 },
  { name: "Supplier 3", fulfillmentTime: 19.53 },
];

const transportPerformance = [
  { mode: "Air", shippingCost: 6.02, defectRate: 1.82 },
  { mode: "Road", shippingCost: 5.54, defectRate: 2.62 },
  { mode: "Rail", shippingCost: 5.47, defectRate: 2.32 },
  { mode: "Sea", shippingCost: 4.97, defectRate: 2.32 },
];

const productPerformance = [
  { productType: "Skincare", revenue: 241628, defectRate: 2.33 },
  { productType: "Haircare", revenue: 174455, defectRate: 2.48 },
  { productType: "Cosmetics", revenue: 161521, defectRate: 1.92 },
];

const topDefectSkus = [
  { sku: "SKU42", supplier: "Supplier 5", defectRate: 4.94, fulfillment: 31 },
  { sku: "SKU65", supplier: "Supplier 5", defectRate: 4.91, fulfillment: 32 },
  { sku: "SKU1", supplier: "Supplier 3", defectRate: 4.85, fulfillment: 32 },
  { sku: "SKU84", supplier: "Supplier 5", defectRate: 4.84, fulfillment: 36 },
];

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const totalRevenue = 577605;

const SupplyChainDashboard = () => {
  return (
    <main className="min-h-screen bg-background px-4 pb-8 pt-24 md:px-6">
      <section className="mx-auto max-w-7xl rounded-[2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(11,20,33,0.97),rgba(5,11,18,0.98))] p-4 shadow-[0_40px_120px_-70px_rgba(0,0,0,0.95)] md:p-6">
        <div className="grid gap-4 border-b border-border/70 pb-5 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Portfolio
            </Link>

            <p className="mt-5 text-[11px] uppercase tracking-[0.28em] text-primary">
              Operations Analytics
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-[0.94] text-white md:text-6xl">
              Supply Chain Performance Dashboard
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
              A compact, interview-ready dashboard built from the Kaggle supply chain dataset. This
              version keeps only the strongest metrics: revenue, fulfillment, quality, supplier
              comparison, transport efficiency, and top defect-risk SKUs.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {[
              ["Dataset", "100 Records"],
              ["Categories", "3 Product Lines"],
              ["Purpose", "Executive View"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[1.4rem] border border-border/70 bg-white/5 p-4">
                <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">{label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {kpis.map((item) => (
            <article key={item.title} className={`rounded-[1.5rem] border border-border/70 p-4 ${item.tone}`}>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">{item.title}</p>
              <p className="mt-4 text-3xl font-bold text-white md:text-4xl">{item.value}</p>
              <p className="mt-3 text-sm leading-6 text-white/75">{item.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-4 grid gap-3 xl:grid-cols-[1.35fr_1fr_0.92fr]">
          <article className="rounded-[1.5rem] border border-border/70 bg-white/5 p-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">
              Supplier Benchmark
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white">Average Fulfillment By Supplier</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Calculated as lead times plus shipping times.
            </p>

            <div className="mt-4 h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={supplierPerformance}>
                  <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: "#91a0b8", fontSize: 12 }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fill: "#91a0b8", fontSize: 12 }} />
                  <Tooltip
                    cursor={{ fill: "rgba(255,255,255,0.04)" }}
                    contentStyle={{
                      background: "rgba(7,17,29,0.95)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "12px",
                      color: "#fff",
                    }}
                  />
                  <Bar dataKey="fulfillmentTime" fill="#4ea4ff" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </article>

          <article className="rounded-[1.5rem] border border-border/70 bg-white/5 p-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">
              Transport Efficiency
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white">Shipping Cost Vs Defect Rate</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Grouped by transportation mode from the dataset.
            </p>

            <div className="mt-4 h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={transportPerformance}>
                  <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="mode" tickLine={false} axisLine={false} tick={{ fill: "#91a0b8", fontSize: 12 }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fill: "#91a0b8", fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      background: "rgba(7,17,29,0.95)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "12px",
                      color: "#fff",
                    }}
                  />
                  <Bar dataKey="shippingCost" fill="#3dd9ff" radius={[8, 8, 0, 0]} />
                  <Line type="monotone" dataKey="defectRate" stroke="#ffb84d" strokeWidth={3} dot={false} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </article>

          <div className="grid gap-3">
            <article className="rounded-[1.5rem] border border-border/70 bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">Product Mix</p>
              <h2 className="mt-2 text-2xl font-bold text-white">Revenue By Category</h2>

              <div className="mt-4 space-y-3">
                {productPerformance.map((item) => (
                  <div key={item.productType} className="rounded-[1rem] border border-border/70 bg-background/40 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <strong className="text-sm text-white">{item.productType}</strong>
                      <span className="text-sm text-slate-300">{currencyFormatter.format(item.revenue)}</span>
                    </div>
                    <div className="mt-3 h-[7px] overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                        style={{ width: `${(item.revenue / totalRevenue) * 100}%` }}
                      />
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Defect rate {item.defectRate.toFixed(2)}%
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[1.5rem] border border-border/70 bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">Quality Watch</p>
              <h2 className="mt-2 text-2xl font-bold text-white">Highest Defect SKUs</h2>

              <div className="mt-4 space-y-3">
                {topDefectSkus.map((item) => (
                  <div key={item.sku} className="rounded-[1rem] border border-border/70 bg-background/40 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <strong className="text-sm text-white">{item.sku}</strong>
                      <span className="text-sm font-semibold text-rose-300">
                        {item.defectRate.toFixed(2)}%
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {item.supplier} · Fulfillment {item.fulfillment}d
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SupplyChainDashboard;
