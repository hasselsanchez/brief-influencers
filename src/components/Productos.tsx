import Image from "next/image";
import { PRODUCTOS } from "@/lib/constants";
import DotPattern from "./ui/DotPattern";
import t1tiendaLogo from "@/assets/logos/t1tienda.svg";
import t1pagosLogo from "@/assets/logos/t1pagos.svg";
import t1enviosLogo from "@/assets/logos/t1envios.svg";

const logos: Record<string, typeof t1tiendaLogo> = {
  t1tienda: t1tiendaLogo,
  t1pagos: t1pagosLogo,
  t1envios: t1enviosLogo,
};

export default function Productos() {
  return (
    <section
      className="relative overflow-hidden bg-[#FFFAFA] py-10 px-4 tablet:py-14 tablet:px-6"
      id="productos"
    >
      <DotPattern />
      <div className="relative z-10 mx-auto max-w-[1018px]" data-animate>
        <p className="mb-3 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400">
          {PRODUCTOS.eyebrow}
        </p>
        <h2
          className="mb-4 font-[family-name:var(--font-sora)] font-light leading-[1.2] text-gray-900"
          style={{ fontSize: "clamp(32px, 4vw, 44px)" }}
        >
          {PRODUCTOS.title}{" "}
          <span className="text-[#E26153]">{PRODUCTOS.titleAccent}</span>
        </h2>
        <p className="mb-8 font-[family-name:var(--font-inter)] text-base leading-[1.7] text-gray-500">
          {PRODUCTOS.desc}
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-[1018px]">
        {PRODUCTOS.blocks.map((block, blockIdx) => (
          <div
            key={block.name}
            className={blockIdx < PRODUCTOS.blocks.length - 1 ? "mb-12" : ""}
            data-animate
          >
            {/* Product header */}
            <div className="mb-3 mt-14 flex items-center gap-4">
              <Image
                src={logos[block.name]}
                alt={block.name}
                height={24}
                className="h-6 w-auto"
              />
            </div>
            <p className="mb-6 max-w-[600px] font-[family-name:var(--font-inter)] text-[15px] leading-[1.6] text-gray-500">
              {block.subtitle}
            </p>

            {/* Column labels (desktop only) */}
            <div className="mb-1 hidden grid-cols-2 gap-3 tablet:grid">
              <p className="px-5 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-400">
                El problema
              </p>
              <p className="px-5 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.1em] text-[#E26153]">
                T1 lo resuelve
              </p>
            </div>

            {/* Problem/Solution pairs */}
            <div className="flex flex-col gap-3">
              {block.pairs.map((pair, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 gap-2 overflow-hidden rounded-2xl tablet:grid-cols-2"
                >
                  <div className="card-problem flex flex-col justify-center rounded-2xl border border-gray-200 bg-gray-50 px-5 py-5 font-[family-name:var(--font-inter)] text-sm leading-[1.7] text-gray-500 tablet:rounded-none tablet:border-0">
                    {pair.problem}
                  </div>
                  <div className="card-solution flex flex-col justify-center rounded-2xl border border-[rgba(226,97,83,0.15)] bg-[rgba(226,97,83,0.06)] px-5 py-5 font-[family-name:var(--font-inter)] text-sm font-medium leading-[1.6] text-gray-800 tablet:rounded-none tablet:border-0">
                    {pair.solution}
                  </div>
                </div>
              ))}
            </div>

            {/* Credibility badge */}
            <div className="mt-5 rounded-2xl border border-[rgba(226,97,83,0.12)] bg-gradient-to-br from-brand-red-50 to-[rgba(226,97,83,0.06)] px-5 py-4 font-[family-name:var(--font-inter)] text-sm italic leading-[1.6] text-[#E26153]">
              {block.badge}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
