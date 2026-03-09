import { HOOKS } from "@/lib/constants";
import t1tiendaLogo from "@/assets/logos/t1tienda.svg";
import t1pagosLogo from "@/assets/logos/t1pagos.svg";
import t1enviosLogo from "@/assets/logos/t1envios.svg";
import t1iconLogo from "@/assets/logos/t1-icon.svg";

const logos: Record<string, typeof t1tiendaLogo> = {
  t1tienda: t1tiendaLogo,
  t1pagos: t1pagosLogo,
  t1envios: t1enviosLogo,
  t1: t1iconLogo,
};

export default function Hooks() {
  return (
    <section
      className="relative overflow-hidden bg-white py-8 px-4 tablet:py-12 tablet:px-6"
      id="hooks"
    >
      <div className="relative z-10 mx-auto max-w-[1018px] text-center" data-animate>
        <p className="mb-3 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400">
          {HOOKS.eyebrow}
        </p>
        <h2
          className="mb-4 font-[family-name:var(--font-sora)] font-extralight leading-[1.2] text-gray-900"
          style={{ fontSize: "clamp(30px, 3.8vw, 42px)" }}
        >
          {HOOKS.title}{" "}
          <span className="text-[#E26153]">{HOOKS.titleAccent}</span>
        </h2>
        <p className="mb-6 tablet:mb-8 font-[family-name:var(--font-inter)] font-light text-base leading-[1.7] text-black">
          {HOOKS.desc}
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-[1018px]">
        {HOOKS.groups.map((group) => (
          <div key={group.product} className="mb-8 tablet:mb-12" data-animate>
            <div className="mb-4 flex items-center gap-3">
              <img
                src={logos[group.product]}
                alt={group.product}
                className="h-5 w-auto"
              />
              <span className="rounded-full bg-brand-red-50 px-3.5 py-1 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.08em] text-[#E26153]">
                {group.tag}
              </span>
            </div>
            <div>
              {group.items.map((item, i) => (
                <div key={i} className="hook-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
