import { HERO } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden px-4 pt-[110px] pb-[60px] tablet:px-6 tablet:pt-[140px] tablet:pb-[100px]"
      style={{
        background: "linear-gradient(to bottom, #E59086, #F2B5AE, #FFFFFF)",
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
        <div className="mb-8 inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-white/50 bg-white/75 px-5 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-[16px] font-[family-name:var(--font-sora)] text-xs font-semibold text-[#E26153]">
          {HERO.badge}
        </div>

        <h1
          className="mb-5 font-[family-name:var(--font-sora)] font-light leading-[1.2] text-gray-900 animate-fade-in-up"
          style={{
            fontSize: "clamp(36px, 6vw, 60px)",
            animationDelay: "0.1s",
            animationFillMode: "both",
          }}
        >
          {HERO.title} <span className="text-[#E26153]">{HERO.titleAccent}</span>
        </h1>

        <p
          className="mx-auto mb-10 max-w-[540px] font-[family-name:var(--font-inter)] text-base leading-[1.7] text-gray-500 animate-fade-in-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          {HERO.subtitle}
        </p>

        <div
          className="inline-block rounded-full border border-white/40 bg-white/55 px-7 py-2.5 font-[family-name:var(--font-inter)] text-[13px] font-medium tracking-[0.02em] text-gray-700 backdrop-blur-[8px] animate-fade-in-up"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          {HERO.ribbonStats}
        </div>
      </div>
    </section>
  );
}
