import { OBJETIVO } from "@/lib/constants";

export default function Objetivo() {
  return (
    <section className="relative overflow-hidden bg-white py-10 px-4 tablet:py-14 tablet:px-6" id="objetivo">
      {/* Glow blob */}
      <div
        className="absolute -top-20 -right-[100px] h-[400px] w-[400px] rounded-full pointer-events-none z-0 animate-pulse-soft"
        style={{ background: "rgba(229,144,134,0.12)", filter: "blur(120px)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1018px]" data-animate>
        <p className="mb-3 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400">
          {OBJETIVO.eyebrow}
        </p>
        <h2
          className="mb-4 font-[family-name:var(--font-sora)] font-light leading-[1.2] text-gray-900"
          style={{ fontSize: "clamp(32px, 4vw, 44px)" }}
        >
          {OBJETIVO.title}{" "}
          <span className="text-[#E26153]">{OBJETIVO.titleAccent}</span>
        </h2>
        <p className="mb-6 tablet:mb-8 font-[family-name:var(--font-inter)] font-light text-base leading-[1.7] text-black">
          {OBJETIVO.desc}
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-[1018px]">
        {/* Guide phrase */}
        <div
          className="mx-auto mt-8 max-w-[640px] rounded-[24px] border border-[rgba(226,97,83,0.2)] bg-[rgba(226,97,83,0.03)] px-5 py-6 text-center tablet:px-10 tablet:py-8"
          data-animate
        >
          <p className="mb-3 font-[family-name:var(--font-sora)] text-xs font-semibold uppercase tracking-[0.1em] text-[#E26153]">
            {OBJETIVO.guidePhrase.label}
          </p>
          <p
            className="font-[family-name:var(--font-sora)] font-light italic leading-[1.65] text-gray-900"
            style={{ fontSize: "clamp(16px, 2vw, 19px)" }}
          >
            {OBJETIVO.guidePhrase.text}
          </p>
        </div>

        {/* Objective cards */}
        <div
          className="mt-8 grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))" }}
          data-animate
        >
          {OBJETIVO.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[24px] p-5 tablet:p-8 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(226,97,83,0.3)]"
              style={{
                background:
                  "linear-gradient(135deg, #E26153 0%, #E59086 50%, #F2B5AE 100%)",
              }}
            >
              <h3 className="mb-2 font-[family-name:var(--font-sora)] text-lg font-semibold text-white">
                {card.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-sm leading-[1.7] text-white/85">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
