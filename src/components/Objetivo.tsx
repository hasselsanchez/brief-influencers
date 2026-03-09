import { OBJETIVO } from "@/lib/constants";

export default function Objetivo() {
  return (
    <section
      className="relative overflow-hidden py-14 px-4 tablet:py-20 tablet:px-6"
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
        {/* Header */}
        <div data-animate>
          <p className="mb-3 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500">
            {OBJETIVO.eyebrow}
          </p>
          <h2
            className="mb-4 font-[family-name:var(--font-sora)] font-extralight leading-[1.2] text-white"
            style={{ fontSize: "clamp(32px, 4vw, 44px)" }}
          >
            {OBJETIVO.title}{" "}
            <span className="text-[#E26153]">{OBJETIVO.titleAccent}</span>
          </h2>
          <p className="mb-8 max-w-[640px] font-[family-name:var(--font-inter)] font-light text-base leading-[1.7] text-gray-400">
            {OBJETIVO.desc}
          </p>
        </div>

        {/* Objective cards */}
        <div
          className="grid gap-4 tablet:grid-cols-3"
          data-animate
        >
          {OBJETIVO.cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-[24px] border border-white/[0.08] bg-white/[0.04] p-6 tablet:p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/[0.16] hover:bg-white/[0.08]"
            >
              <h3 className="mb-3 font-[family-name:var(--font-sora)] text-lg font-semibold text-white">
                {card.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-sm leading-[1.7] text-gray-400">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Guide phrase */}
        <div
          className="mx-auto mt-10 max-w-[640px] rounded-[24px] border border-[#E26153]/20 bg-[#E26153]/[0.06] px-5 py-6 text-center tablet:px-10 tablet:py-8"
          data-animate
        >
          <p className="mb-3 font-[family-name:var(--font-sora)] text-xs font-semibold uppercase tracking-[0.1em] text-[#E26153]">
            {OBJETIVO.guidePhrase.label}
          </p>
          <p
            className="font-[family-name:var(--font-sora)] font-light italic leading-[1.65] text-gray-300"
            style={{ fontSize: "clamp(16px, 2vw, 19px)" }}
          >
            {OBJETIVO.guidePhrase.text}
          </p>
        </div>
      </div>
    </section>
  );
}
