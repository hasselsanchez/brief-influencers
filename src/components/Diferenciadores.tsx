import { DIFERENCIADORES } from "@/lib/constants";
import DotPattern from "./ui/DotPattern";

export default function Diferenciadores() {
  return (
    <section className="relative overflow-hidden bg-[#FFFAFA] py-10 px-4 tablet:py-14 tablet:px-6">
      <DotPattern />
      <div className="relative z-10 mx-auto max-w-[1018px]" data-animate>
        <p className="mb-3 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400">
          {DIFERENCIADORES.eyebrow}
        </p>
        <h2
          className="mb-4 font-[family-name:var(--font-sora)] font-light leading-[1.2] text-gray-900"
          style={{ fontSize: "clamp(32px, 4vw, 44px)" }}
        >
          {DIFERENCIADORES.title}{" "}
          <span className="text-[#E26153]">{DIFERENCIADORES.titleAccent1}</span>{" "}
          {DIFERENCIADORES.titleMid}{" "}
          <span className="text-[#E26153]">{DIFERENCIADORES.titleAccent2}</span>{" "}
          {DIFERENCIADORES.titleEnd}
        </h2>
        <p className="mb-8 font-[family-name:var(--font-inter)] text-base leading-[1.7] text-gray-500">
          {DIFERENCIADORES.desc}
        </p>
      </div>
      <div className="relative z-10 mx-auto max-w-[1018px]">
        <div className="flex flex-col gap-4 mt-8" data-animate>
          {DIFERENCIADORES.items.map((item) => (
            <div
              key={item.number}
              className="diff-item"
              style={{
                "--accent": item.accent,
                "--accent-light": item.accentLight,
                "--accent-border": item.accentBorder,
              } as React.CSSProperties}
            >
              <div
                className="mb-2 font-[family-name:var(--font-sora)] text-xs font-semibold tracking-[0.05em] opacity-70"
                style={{ color: item.accent }}
              >
                {item.number}
              </div>
              <h4 className="mb-2 font-[family-name:var(--font-sora)] text-[17px] font-semibold text-gray-900">
                {item.title}
              </h4>
              <p className="font-[family-name:var(--font-inter)] text-[15px] leading-[1.6] text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
