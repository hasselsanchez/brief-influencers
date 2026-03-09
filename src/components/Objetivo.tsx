import { OBJETIVO } from "@/lib/constants";

const icons = [
  // Rayo — Descubrimiento
  <svg key="bolt" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>,
  // Globo — Relevancia
  <svg key="globe" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>,
  // Laptop — Consideración
  <svg key="laptop" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M2 20h20" />
  </svg>,
];

export default function Objetivo() {
  return (
    <section
      className="relative overflow-hidden py-8 px-4 tablet:py-12 tablet:px-6"
      id="objetivo"
      style={{
        background: `
          radial-gradient(ellipse at 25% 35%, rgba(226,97,83,0.07), transparent 50%),
          radial-gradient(ellipse at 75% 80%, rgba(33,128,255,0.04), transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(226,97,83,0.03), transparent 60%),
          #0f1219
        `,
      }}
    >
      {/* Noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Glow blob top */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 z-0 h-[400px] w-[600px] animate-pulse-soft"
        style={{
          background: "rgba(226,97,83,0.06)",
          filter: "blur(100px)",
          borderRadius: "50%",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1018px]">
        {/* Header — centrado */}
        <div className="text-center" data-animate>
          <p className="mb-3 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500">
            {OBJETIVO.eyebrow}
          </p>
          <h2
            className="mb-4 font-[family-name:var(--font-sora)] font-extralight leading-[1.2] text-white"
            style={{ fontSize: "clamp(25px, 3.2vw, 37px)" }}
          >
            {OBJETIVO.title}{" "}
            <span className="text-[#E26153]">{OBJETIVO.titleAccent}</span>
          </h2>
          <p className="mx-auto mb-12 max-w-[540px] font-[family-name:var(--font-inter)] font-light text-sm leading-[1.7] text-gray-400">
            {OBJETIVO.desc}
          </p>
        </div>

        {/* 3 columnas con ícono + texto centrado */}
        <div className="grid gap-10 tablet:grid-cols-3 tablet:gap-8" data-animate>
          {OBJETIVO.cards.map((card, i) => (
            <div key={card.title} className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-[56px] w-[56px] items-center justify-center rounded-[16px] bg-[#E26153]/10 text-[#E26153]">
                {icons[i]}
              </div>
              <h3 className="mb-2 font-[family-name:var(--font-sora)] text-lg font-semibold text-white">
                {card.title}
              </h3>
              <p className="max-w-[280px] font-[family-name:var(--font-inter)] text-sm leading-[1.7] text-gray-400">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Guide phrase — subtexto centrado sin card */}
        <div className="mx-auto mt-12 max-w-[540px] text-center" data-animate>
          <p className="mb-2 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#E26153]/70">
            {OBJETIVO.guidePhrase.label}
          </p>
          <p className="font-[family-name:var(--font-inter)] text-sm font-light italic leading-[1.7] text-gray-500">
            {OBJETIVO.guidePhrase.text}
          </p>
        </div>
      </div>
    </section>
  );
}
