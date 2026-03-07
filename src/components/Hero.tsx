import { HERO } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden px-4 pt-[120px] pb-[50px] tablet:px-6 tablet:pt-[160px] tablet:pb-[100px]"
      style={{
        background: "radial-gradient(ellipse 120% 70% at 50% 55%, #E59086 0%, #F2B5AE 30%, #F9D2D2 50%, #FFFFFF 80%)",
      }}
    >
      {/* Glow blobs */}
      <div
        className="absolute -top-[100px] -right-[100px] h-[500px] w-[500px] rounded-full pointer-events-none animate-pulse-soft"
        style={{ background: "rgba(229,144,134,0.2)", filter: "blur(120px)" }}
      />
      <div
        className="absolute -bottom-[50px] -left-[150px] h-[400px] w-[400px] rounded-full pointer-events-none animate-pulse-soft"
        style={{
          background: "rgba(249,210,210,0.35)",
          filter: "blur(80px)",
          animationDelay: "2s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[721px] text-center">
        <div className="mb-6 tablet:mb-8 inline-flex animate-fade-in-up items-center rounded-full border border-white/40 bg-white/60 px-3.5 py-1 backdrop-blur-[12px] font-[family-name:var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.12em] text-[#E26153]">
          {HERO.badge}
        </div>

        <h1
          className="mb-6 tablet:mb-8 font-[family-name:var(--font-sora)] font-extralight leading-[1.15] text-gray-900 animate-fade-in-up"
          style={{
            fontSize: "clamp(38px, 6vw, 60px)",
            animationDelay: "0.1s",
            animationFillMode: "both",
          }}
        >
          {HERO.title} <span className="text-[#E26153]">{HERO.titleAccent}</span>
        </h1>

        <p
          className="mx-auto mb-8 tablet:mb-12 max-w-[540px] font-[family-name:var(--font-inter)] font-light text-base leading-[1.7] text-gray-500 animate-fade-in-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          {HERO.subtitle}
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-[family-name:var(--font-inter)] text-sm tracking-[-0.01em] text-gray-700 animate-fade-in-up"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          {HERO.stats.map((stat, i) => (
            <span key={i} className="inline-flex items-center gap-3 whitespace-nowrap">
              {i > 0 && <span className="text-gray-400 text-[8px]">●</span>}
              <span>
                <strong className="font-semibold text-gray-900">{stat.number}</strong>{" "}
                {stat.label}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
