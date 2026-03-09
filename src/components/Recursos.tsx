import { RECURSOS } from "@/lib/constants";

export default function Recursos() {
  return (
    <section className="relative overflow-hidden bg-white py-8 px-4 tablet:py-12 tablet:px-6">
      <div className="relative z-10 mx-auto max-w-[1018px] text-center" data-animate>
        <p className="mb-3 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400">
          {RECURSOS.eyebrow}
        </p>
        <h2
          className="mb-4 font-[family-name:var(--font-sora)] font-extralight leading-[1.2] text-gray-900"
          style={{ fontSize: "clamp(30px, 3.8vw, 42px)" }}
        >
          {RECURSOS.title}{" "}
          <span className="text-[#E26153]">{RECURSOS.titleAccent}</span>
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-[1018px]">
        <div
          className="mt-8 mx-auto grid max-w-[700px] grid-cols-1 items-stretch gap-5 tablet:grid-cols-2"
          data-animate
        >
          {RECURSOS.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[24px] bg-white p-5 tablet:p-7 text-center shadow-[0px_2px_20px_0px_rgba(226,97,83,0.12),0px_0px_0px_1px_rgba(226,97,83,0.06)]"
            >
              <h4 className="mb-4 flex items-center justify-center gap-2 font-[family-name:var(--font-sora)] text-base font-semibold text-gray-900">
                {card.icon} {card.title}
              </h4>
              <p className="mb-5 font-[family-name:var(--font-inter)] text-sm leading-[1.6] text-gray-500">
                {card.desc}
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {card.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`resource-link inline-flex h-10 items-center justify-center rounded-[18px] border border-[rgba(226,97,83,0.3)] px-4 tablet:px-6 font-[family-name:var(--font-inter)] text-[13px] font-semibold text-[#E26153] no-underline${
                      link.disabled ? " pointer-events-none opacity-50" : ""
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
