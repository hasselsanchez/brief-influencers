import { RECURSOS } from "@/lib/constants";

export default function Recursos() {
  return (
    <section
      className="relative overflow-hidden py-8 px-4 tablet:py-12 tablet:px-6"
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <div
        className="relative z-10 mx-auto max-w-[1018px] text-center"
        data-animate
      >
        <p className="mb-3 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400">
          {RECURSOS.eyebrow}
        </p>
        <h2
          className="mb-4 font-[family-name:var(--font-sora)] font-extralight leading-[1.2] text-white"
          style={{ fontSize: "clamp(30px, 3.8vw, 42px)" }}
        >
          {RECURSOS.title}{" "}
          <span className="text-[#E26153]">{RECURSOS.titleAccent}</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="relative z-10 mx-auto max-w-[1018px]">
        <div
          className="mx-auto mt-8 grid max-w-[700px] grid-cols-1 items-stretch gap-5 tablet:grid-cols-2"
          data-animate
        >
          {RECURSOS.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[24px] border border-white/[0.08] bg-white/[0.04] p-5 text-center backdrop-blur-sm transition-all duration-500 hover:border-white/[0.16] hover:bg-white/[0.08] tablet:p-7"
            >
              <h4 className="mb-4 flex items-center justify-center gap-2 font-[family-name:var(--font-sora)] text-base font-semibold text-white">
                {card.icon} {card.title}
              </h4>
              <p className="mb-5 font-[family-name:var(--font-inter)] text-sm leading-[1.6] text-gray-400">
                {card.desc}
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {card.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`inline-flex h-[40px] items-center justify-center rounded-[18px] bg-[#E26153] px-5 font-[family-name:var(--font-inter)] text-[13px] font-semibold text-white no-underline transition-colors hover:bg-[#DB3B2B]${
                      link.disabled
                        ? " pointer-events-none opacity-40"
                        : ""
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
