import { AUDIENCIA } from "@/lib/constants";

export default function Audiencia() {
  return (
    <section className="relative overflow-hidden bg-white py-10 px-4 tablet:py-14 tablet:px-6" id="audiencia">
      {/* Glow blob */}
      <div
        className="absolute -bottom-[60px] -left-20 h-[350px] w-[350px] rounded-full pointer-events-none z-0 animate-pulse-soft"
        style={{ background: "rgba(249,210,210,0.35)", filter: "blur(80px)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1018px]" data-animate>
        <p className="mb-3 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400">
          {AUDIENCIA.eyebrow}
        </p>
        <h2
          className="mb-4 font-[family-name:var(--font-sora)] font-light leading-[1.2] text-gray-900"
          style={{ fontSize: "clamp(32px, 4vw, 44px)" }}
        >
          {AUDIENCIA.title}{" "}
          <span className="text-[#E26153]">{AUDIENCIA.titleAccent}</span>
          {AUDIENCIA.titleEnd}
        </h2>
        <p className="mb-6 tablet:mb-8 font-[family-name:var(--font-inter)] font-light text-base leading-[1.7] text-black">
          {AUDIENCIA.desc}
        </p>
        <p className="mt-[-20px] text-xs italic leading-[1.5] text-gray-400">
          <span className="not-italic font-semibold text-[#E26153]">
            {AUDIENCIA.importante.label}
          </span>{" "}
          {AUDIENCIA.importante.text}
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-[1018px]" data-animate>
        <div
          className="mt-8 grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
        >
          {AUDIENCIA.profiles.map((profile) => (
            <div
              key={profile.title}
              className="rounded-[24px] border border-gray-200 bg-white p-5 tablet:p-7 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
            >
              <h4 className="mb-2 font-[family-name:var(--font-sora)] text-base font-semibold text-gray-900">
                {profile.emoji} {profile.title}
              </h4>
              <p className="font-[family-name:var(--font-inter)] text-sm leading-[1.7] text-gray-500">
                {profile.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
