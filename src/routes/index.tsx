import { createFileRoute } from "@tanstack/react-router";
import {
  Radar,
  FileSearch,
  TrendingUp,
  ShieldCheck,
  Check,
  ArrowRight,
  Sparkles,
  Building2,
  AlertTriangle,
  Trophy,
  Clock,
  FileX,
  HelpCircle,
  Star,
  Award,
  Zap,
  BookOpen,
  Headphones,
  Database,
  ChevronDown,
} from "lucide-react";
import logoAsset from "@/assets/licitacao-app-logo.jpg.asset.json";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Licitação App — Venda para o governo com inteligência de dados" },
      {
        name: "description",
        content:
          "O Licitação App encontra oportunidades compatíveis com sua empresa, analisa a concorrência e mostra suas chances reais de ganhar licitações públicas.",
      },
      { property: "og:title", content: "Licitação App — Venda para o governo com inteligência" },
      {
        property: "og:description",
        content:
          "Radar inteligente de licitações, análise de editais e inteligência de concorrência para sua empresa vender mais para o governo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Licitação App" },
      {
        name: "twitter:description",
        content: "Pare de perder licitações no escuro. Oportunidades, dados e estratégia em um só lugar.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Licitação App",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Plataforma SaaS para encontrar, analisar e vencer licitações públicas no Brasil.",
          offers: [
            { "@type": "Offer", name: "Essencial", price: "197", priceCurrency: "BRL" },
            { "@type": "Offer", name: "Estratégico", price: "397", priceCurrency: "BRL" },
            { "@type": "Offer", name: "Profissional", price: "797", priceCurrency: "BRL" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <DashboardSection />
        <Differentials />
        <Authority />
        <Pricing />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <a href="#" className="flex items-center min-w-0">
          <img src={logoAsset.url} alt="Licitação App" className="h-8 sm:h-9 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#solucao" className="hover:text-foreground transition-colors">Solução</a>
          <a href="#dashboard" className="hover:text-foreground transition-colors">Plataforma</a>
          <a href="#planos" className="hover:text-foreground transition-colors">Planos</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a href="#planos" className="hidden sm:inline text-sm font-medium text-foreground/80 hover:text-foreground">Entrar</a>
          <a
            href="#planos"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow-sm whitespace-nowrap"
          >
            Testar <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(circle_at_50%_-10%,oklch(0.55_0.21_263/0.15),transparent_60%)]" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="animate-float-up">
            <div className="inline-flex items-start sm:items-center gap-2 rounded-2xl sm:rounded-full border border-border bg-background/80 backdrop-blur px-3 py-1.5 text-[11px] sm:text-xs font-medium text-muted-foreground max-w-full">
              <Sparkles className="h-3.5 w-3.5 text-brand shrink-0 mt-0.5 sm:mt-0" />
              <span>Baseado em mais de 20 anos de experiência em licitações públicas</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.05]">
              Pare de perder
              <br />
              <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">
                licitações no escuro.
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              O Licitação App encontra oportunidades compatíveis com sua empresa, analisa a
              concorrência, mostra suas chances reais e ajuda você a vender para o governo com
              mais segurança.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="#planos"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow-[var(--shadow-elegant)]"
              >
                TESTAR AGORA <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary transition"
              >
                Ver demonstração
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-success" />
                Cancelamento a qualquer momento
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                Sem fidelidade
              </div>
            </div>
          </div>

          {/* Dashboard mockup */}
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <div className="relative animate-float-up [animation-delay:150ms]">
      <div className="absolute -inset-4 bg-[var(--gradient-brand)] opacity-20 blur-3xl rounded-3xl" aria-hidden />
      <div className="relative rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)] overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/40">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          <span className="ml-3 text-[10px] sm:text-xs text-muted-foreground truncate">app.licitacaoapp.com.br/oportunidades</span>
        </div>
        <div className="p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Oportunidades hoje</p>
              <p className="text-xl sm:text-2xl font-bold text-primary">42 licitações</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-success/10 text-success px-2.5 py-1 text-xs font-semibold">
              <TrendingUp className="h-3 w-3" /> +18%
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "R$ 50.000", sub: "Materiais limpeza" },
              { label: "R$ 300.000", sub: "Refeições escolares" },
              { label: "R$ 1.000.000", sub: "Suporte de TI" },
            ].map((c) => (
              <div key={c.label} className="rounded-lg border border-border p-2 sm:p-3 bg-background min-w-0">
                <p className="text-xs sm:text-sm font-bold text-primary truncate">{c.label}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{c.sub}</p>
              </div>
            ))}
          </div>

          {[
            { n: "Pregão Eletrônico 045/2025", org: "Prefeitura de Campinas", score: 92, color: "bg-success" },
            { n: "Pregão Eletrônico 112/2025", org: "Ministério da Saúde", score: 74, color: "bg-brand" },
            { n: "Concorrência 008/2025", org: "Secretaria de Educação", score: 48, color: "bg-yellow-500" },
          ].map((row) => (
            <div key={row.n} className="flex items-center justify-between gap-3 rounded-lg border border-border p-3 hover:bg-secondary/30 transition">
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-foreground truncate">{row.n}</p>
                <p className="text-xs text-muted-foreground truncate">{row.org}</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <div className="w-14 sm:w-24 h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div className={`h-full ${row.color}`} style={{ width: `${row.score}%` }} />
                </div>
                <span className="text-xs font-bold text-primary w-8 text-right">{row.score}</span>
              </div>
            </div>
          ))}

          <div className="flex items-center gap-2 rounded-lg bg-yellow-50 border border-yellow-200 p-3 text-xs text-yellow-900">
            <AlertTriangle className="h-4 w-4 shrink-0" />
            Certidão Negativa Federal vence em 12 dias.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- PROBLEM ---------------- */
function Problem() {
  const items = [
    { icon: Radar, text: "Não sabem onde encontrar oportunidades" },
    { icon: Trophy, text: "Perdem para concorrentes experientes" },
    { icon: Clock, text: "Gastam horas lendo editais" },
    { icon: FileX, text: "Descobrem problemas de documentação tarde demais" },
    { icon: HelpCircle, text: "Não sabem se vale a pena participar" },
  ];
  return (
    <section className="py-16 sm:py-24 border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider">O problema</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Por que a maioria das empresas desiste das licitações?
          </h2>
        </div>
        <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <div
              key={it.text}
              className="group rounded-2xl border border-border bg-card p-6 hover:shadow-[var(--shadow-soft)] hover:-translate-y-0.5 transition-all"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <it.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 font-semibold text-foreground">{it.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 sm:mt-12 text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
          O problema não é falta de oportunidade. O governo compra <strong className="text-foreground">bilhões de reais todos os anos</strong>. O problema é saber quais oportunidades realmente
          fazem sentido para sua empresa.
        </p>
      </div>
    </section>
  );
}

/* ---------------- SOLUTION ---------------- */
function Solution() {
  const cards = [
    {
      icon: Radar,
      title: "Radar Inteligente",
      desc: "Monitora licitações em todo o Brasil e encontra oportunidades compatíveis com seu negócio.",
    },
    {
      icon: FileSearch,
      title: "Análise Automática",
      desc: "Lê o edital e identifica requisitos, prazos e pontos críticos.",
    },
    {
      icon: TrendingUp,
      title: "Inteligência de Mercado",
      desc: "Mostra quem venceu licitações parecidas, quantas vezes venceu e por qual faixa de preço.",
    },
    {
      icon: ShieldCheck,
      title: "Gestão de Documentos",
      desc: "Controla vencimentos e alerta antes que você seja desclassificado.",
    },
  ];
  return (
    <section id="solucao" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider">A solução</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Como o Licitação App resolve isso
          </h2>
        </div>
        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative rounded-2xl border border-border bg-card p-7 hover:border-brand/40 hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--gradient-brand)] text-brand-foreground shadow-[var(--shadow-soft)] group-hover:scale-110 transition-transform">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-primary">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Cadastre sua empresa", desc: "Em poucos minutos definimos seu perfil de atuação, regiões e segmentos de interesse.", icon: Building2 },
    { n: "02", title: "Receba oportunidades filtradas", desc: "Nosso radar monitora portais públicos 24/7 e entrega apenas o que faz sentido para você.", icon: Radar },
    { n: "03", title: "Decida com base em dados reais", desc: "Score de viabilidade, histórico de concorrentes e faixa de preço competitivo na palma da mão.", icon: TrendingUp },
  ];
  return (
    <section className="py-16 sm:py-24 border-t border-border bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-success uppercase tracking-wider">Como funciona</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">Funciona em 3 passos</h2>
        </div>
        <div className="mt-10 sm:mt-14 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 h-full">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-extrabold text-white/15">{s.n}</span>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                    <s.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-white/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DASHBOARD SECTION ---------------- */
function DashboardSection() {
  return (
    <section id="dashboard" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider">A plataforma</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Veja exatamente o que você recebe
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Dados objetivos para decidir em segundos, não em horas.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid lg:grid-cols-3 gap-4 sm:gap-5">
          {/* Score */}
          <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-[var(--shadow-soft)]">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-primary">Score de viabilidade</h3>
              <span className="text-xs text-muted-foreground">Pregão 045/2025</span>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <ScoreRing value={87} />
              <div className="flex-1 w-full space-y-3">
                {[
                  { label: "Mercado Aberto", value: 80, color: "var(--success)" },
                  { label: "Mercado Moderado", value: 55, color: "var(--brand)" },
                  { label: "Mercado Dominado", value: 18, color: "oklch(0.6 0.18 30)" },
                ].map((b) => (
                  <div key={b.label}>
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-foreground">{b.label}</span>
                      <span className="text-muted-foreground">{b.value}%</span>
                    </div>
                    <div className="mt-1.5 h-2 rounded-full bg-secondary overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${b.value}%`, background: b.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Price range */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="font-bold text-primary">Faixa de preço competitiva</h3>
            <p className="mt-1 text-xs text-muted-foreground">Baseado em 28 vitórias similares</p>
            <div className="mt-8">
              <div className="relative h-2 rounded-full bg-secondary">
                <div className="absolute inset-y-0 left-[25%] right-[25%] rounded-full bg-[var(--gradient-brand)]" />
                <div className="absolute -top-1 left-[50%] -translate-x-1/2 h-4 w-4 rounded-full bg-success border-2 border-background shadow" />
              </div>
              <div className="mt-3 flex justify-between text-xs text-muted-foreground">
                <span>R$ 142k</span>
                <span className="font-bold text-success">R$ 198k</span>
                <span>R$ 254k</span>
              </div>
            </div>
          </div>

          {/* Historic winners */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="font-bold text-primary">Histórico de vencedores</h3>
            <div className="mt-5 space-y-3">
              {[
                { n: "Alfa Suprimentos LTDA", w: 14 },
                { n: "Beta Comércio S/A", w: 9 },
                { n: "Gama Soluções", w: 6 },
              ].map((c) => (
                <div key={c.n} className="flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-primary shrink-0">
                      {c.n[0]}
                    </div>
                    <span className="text-sm font-medium truncate">{c.n}</span>
                  </div>
                  <span className="text-xs font-bold text-brand">{c.w} vitórias</span>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="font-bold text-primary">Checklist documental</h3>
            <div className="mt-5 space-y-2.5">
              {[
                { d: "CND Federal", ok: true },
                { d: "CND Estadual", ok: true },
                { d: "FGTS", ok: true },
                { d: "Atestado de capacidade técnica", ok: false },
              ].map((d) => (
                <div key={d.d} className="flex items-center gap-2 text-sm">
                  <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${d.ok ? "bg-success/15 text-success" : "bg-destructive/10 text-destructive"}`}>
                    {d.ok ? <Check className="h-3 w-3" /> : <FileX className="h-3 w-3" />}
                  </span>
                  <span className={d.ok ? "text-foreground" : "text-muted-foreground line-through"}>{d.d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="font-bold text-primary">Alertas de vencimento</h3>
            <div className="mt-5 space-y-3">
              <div className="flex items-start gap-2 rounded-lg bg-destructive/5 border border-destructive/20 p-3">
                <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-destructive">CND Federal</p>
                  <p className="text-[11px] text-muted-foreground">Vence em 12 dias</p>
                </div>
              </div>
              <div className="flex items-start gap-2 rounded-lg bg-yellow-50 border border-yellow-200 p-3">
                <Clock className="h-4 w-4 text-yellow-700 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-yellow-900">FGTS</p>
                  <p className="text-[11px] text-muted-foreground">Vence em 28 dias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScoreRing({ value }: { value: number }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="relative h-32 w-32 shrink-0">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={r} stroke="var(--secondary)" strokeWidth="8" fill="none" />
        <circle
          cx="50" cy="50" r={r}
          stroke="url(#g)"
          strokeWidth="8" strokeLinecap="round" fill="none"
          strokeDasharray={c} strokeDashoffset={offset}
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.17 150)" />
            <stop offset="100%" stopColor="oklch(0.55 0.21 263)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-extrabold text-primary">{value}</span>
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Score</span>
      </div>
    </div>
  );
}

/* ---------------- DIFFERENTIALS ---------------- */
function Differentials() {
  const items = [
    { icon: Database, text: "Banco de dados próprio" },
    { icon: TrendingUp, text: "Inteligência de concorrência" },
    { icon: FileSearch, text: "Análise automática dos editais" },
    { icon: BookOpen, text: "Curso completo de licitações" },
    { icon: ShieldCheck, text: "Certificados digitais" },
    { icon: Zap, text: "Alertas inteligentes" },
    { icon: Headphones, text: "Suporte especializado" },
    { icon: Award, text: "Experiência real de mercado" },
  ];
  return (
    <section className="py-16 sm:py-24 border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider">Diferenciais</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            O que torna o Licitação App diferente
          </h2>
        </div>
        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((it) => (
            <div key={it.text} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 hover:border-brand/40 transition">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-success/10 text-success shrink-0">
                <Check className="h-4 w-4" />
              </div>
              <div>
                <div className="flex items-center gap-2 text-foreground">
                  <it.icon className="h-4 w-4 text-brand" />
                  <p className="font-semibold text-sm">{it.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- AUTHORITY ---------------- */
function Authority() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative rounded-3xl border border-border bg-card p-6 sm:p-10 md:p-16 overflow-hidden shadow-[var(--shadow-elegant)]">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--gradient-brand)] opacity-10 blur-3xl" aria-hidden />
          <div className="relative grid md:grid-cols-[auto,1fr] gap-6 sm:gap-10 items-center">
            <div className="flex items-center justify-center h-24 w-24 sm:h-32 sm:w-32 rounded-2xl bg-[var(--gradient-brand)] text-brand-foreground shadow-[var(--shadow-elegant)] mx-auto md:mx-0">
              <Award className="h-12 w-12 sm:h-14 sm:w-14" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand uppercase tracking-wider">Autoridade</p>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                Conhecimento construído em décadas
              </h2>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                O sistema foi criado por um especialista com mais de <strong className="text-foreground">20 anos de atuação em licitações públicas</strong>, incluindo mais de uma década como pregoeiro responsável por julgamentos e contratações.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4 text-sm">
                <Stat n="20+" label="anos de experiência" />
                <Stat n="10+" label="anos como pregoeiro" />
                <Stat n="R$ 1B+" label="em contratos analisados" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-extrabold text-primary">{n}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  const plans = [
    {
      name: "Essencial",
      price: "197",
      desc: "Para começar a participar de licitações com método.",
      features: ["Radar de oportunidades", "Academia de licitações", "Gestão documental", "Análise básica de editais"],
      cta: "Começar agora",
      featured: false,
    },
    {
      name: "Estratégico",
      price: "397",
      desc: "Para empresas que querem ganhar mais vezes.",
      features: ["Tudo do Essencial", "Inteligência de concorrência", "Análise completa de editais", "Alertas prioritários"],
      cta: "Começar agora",
      featured: true,
    },
    {
      name: "Profissional",
      price: "797",
      desc: "Acompanhamento de alta performance.",
      features: ["Tudo do Estratégico", "Suporte durante pregões", "Recursos e contrarrazões", "Consultoria mensal"],
      cta: "Começar agora",
      featured: false,
    },
  ];
  return (
    <section id="planos" className="py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider">Planos</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Escolha o plano certo para sua empresa
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">Sem fidelidade. Cancele quando quiser.</p>
        </div>
        <div className="mt-12 sm:mt-14 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col ${
                p.featured
                  ? "border-brand bg-primary text-primary-foreground shadow-[var(--shadow-elegant)] md:scale-105"
                  : "border-border bg-card"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-success px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  <Star className="h-3 w-3 fill-current" /> Mais popular
                </span>
              )}
              <h3 className={`text-lg font-bold ${p.featured ? "text-white" : "text-primary"}`}>{p.name}</h3>
              <p className={`mt-1 text-sm ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className={`text-sm font-medium ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>R$</span>
                <span className={`text-5xl font-extrabold ${p.featured ? "text-white" : "text-primary"}`}>{p.price}</span>
                <span className={`text-sm ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>/mês</span>
              </div>
              <ul className="mt-8 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "text-success" : "text-success"}`} />
                    <span className={p.featured ? "text-white/90" : "text-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                  p.featured
                    ? "bg-success text-white hover:bg-success/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {p.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQSection() {
  const faqs = [
    { q: "Preciso ter experiência prévia em licitações?", a: "Não. O Licitação App foi feito justamente para empresas que estão começando agora. Você recebe oportunidades já filtradas e tem acesso à nossa academia com aulas passo a passo." },
    { q: "Funciona para MEI?", a: "Sim. MEIs, microempresas e empresas de pequeno porte são o público que mais se beneficia de licitações públicas, graças a benefícios legais como empate ficto e exclusividade em itens até R$ 80 mil." },
    { q: "O sistema garante que eu vou vencer licitações?", a: "Não existe garantia de vitória em licitação — quem prometer isso está sendo desonesto. O que garantimos é que você vai disputar com inteligência: oportunidades certas, preços competitivos e documentação em dia." },
    { q: "Como recebo os alertas de oportunidade?", a: "Por e-mail, WhatsApp e dentro da própria plataforma. Você define a frequência e o nível de prioridade que quer receber." },
    { q: "Posso cancelar quando quiser?", a: "Sim. Não há fidelidade, multa ou taxas escondidas. Cancela direto no painel, em 2 cliques." },
    { q: "De onde vêm os dados de licitações?", a: "Monitoramos diariamente portais oficiais — ComprasNet, BEC, Licitações-e, BLL, BNC e portais municipais e estaduais — consolidando tudo em uma única plataforma." },
    { q: "Vocês ajudam com a parte burocrática (certidões, documentos)?", a: "Sim. O módulo de Gestão Documental controla validades e alerta antes do vencimento. Nos planos Estratégico e Profissional, oferecemos suporte direto na elaboração." },
    { q: "Funciona para qualquer ramo de atividade?", a: "Sim. Atendemos fornecedores de alimentação, limpeza, informática, manutenção, logística, materiais, serviços para iFood e dezenas de outros segmentos." },
    { q: "Os planos têm reajuste automático?", a: "O valor que você contratar permanece o mesmo enquanto a assinatura estiver ativa, com até 12 meses de proteção contra reajustes." },
    { q: "Como funciona o suporte durante pregões (plano Profissional)?", a: "Você tem acesso a um especialista por chat ao vivo no horário do pregão, para tirar dúvidas estratégicas em tempo real e revisar lances." },
  ];
  return (
    <section id="faq" className="py-16 sm:py-24 border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider">Dúvidas frequentes</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-primary">Perguntas frequentes</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 sm:mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-4 sm:px-5"
            >
              <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-foreground hover:no-underline py-4">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section id="cta" className="py-20 sm:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.55 0.21 263 / 0.35), transparent 60%)" }} aria-hidden />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.05]">
          Seu próximo contrato com o governo<br />
          <span className="bg-gradient-to-r from-success to-brand bg-clip-text text-transparent">
            pode estar publicado hoje.
          </span>
        </h2>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
          Pare de procurar oportunidades manualmente. Deixe o Licitação App fazer isso por você.
        </p>
        <div className="mt-8 sm:mt-10">
          <a
            href="#planos"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-success px-6 sm:px-10 py-4 sm:py-5 text-sm sm:text-base md:text-lg font-bold text-white hover:bg-success/90 transition shadow-[0_20px_60px_-15px_oklch(0.72_0.17_150/0.5)] hover:scale-[1.02] active:scale-100 duration-200 w-full sm:w-auto"
          >
            QUERO COMEÇAR AGORA <ArrowRight className="h-5 w-5" />
          </a>
        </div>
        <p className="mt-5 text-xs text-primary-foreground/60">Sem fidelidade • Cancele quando quiser • Suporte humano</p>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border py-10 sm:py-12 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-[1fr,auto] gap-8 items-start">
        <div>
          <div className="flex items-center">
            <img src={logoAsset.url} alt="Licitação App" className="h-8 sm:h-9 w-auto" />
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-md">
            Inteligência de dados para vencer licitações públicas no Brasil.
          </p>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">Sobre</a>
          <a href="#planos" className="hover:text-foreground">Planos</a>
          <a href="#" className="hover:text-foreground">Contato</a>
          <a href="#" className="hover:text-foreground">Termos de Uso</a>
          <a href="#" className="hover:text-foreground">Política de Privacidade</a>
        </nav>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-10 pt-6 border-t border-border text-xs text-muted-foreground flex flex-wrap justify-between gap-3">
        <p>© {new Date().getFullYear()} Licitação App. Todos os direitos reservados.</p>
        <p>Feito com método, dados e mais de 20 anos de experiência em licitações.</p>
      </div>
    </footer>
  );
}
