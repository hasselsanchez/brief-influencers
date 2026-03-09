import { useState } from "react";
import { PRODUCTOS } from "@/lib/constants";
import t1tiendaLogo from "@/assets/logos/t1tienda.svg";
import t1pagosLogo from "@/assets/logos/t1pagos.svg";
import t1enviosLogo from "@/assets/logos/t1envios.svg";
const logos: Record<string, string> = {
  t1tienda: t1tiendaLogo,
  t1pagos: t1pagosLogo,
  t1envios: t1enviosLogo,
};

/* t1pagos SVG has a taller viewBox (41px vs ~35px) because of the
   descender on the "g", so we compensate with a slightly taller height
   to keep the visual cap-height aligned with the other logos. */
const logoHeight: Record<string, string> = {
  t1tienda: "h-[20px]",
  t1pagos: "h-[23px]",
  t1envios: "h-[20px]",
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Productos() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section
      className="relative overflow-hidden bg-[#FFFAFA] py-8 px-4 tablet:py-12 tablet:px-6"
      id="productos"
    >
      {/* Header */}
      <div
        className="relative z-10 mx-auto max-w-[1018px] text-center"
        data-animate
      >
        <p className="mb-3 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400">
          {PRODUCTOS.eyebrow}
        </p>
        <h2
          className="mb-4 font-[family-name:var(--font-sora)] font-extralight leading-[1.2] text-gray-900"
          style={{ fontSize: "clamp(30px, 3.8vw, 42px)" }}
        >
          {PRODUCTOS.title}{" "}
          <span className="text-[#E26153]">{PRODUCTOS.titleAccent}</span>
        </h2>
        <p className="mx-auto mb-8 max-w-[540px] font-[family-name:var(--font-inter)] font-light text-base leading-[1.7] text-black">
          {PRODUCTOS.desc}
        </p>
      </div>

      {/* Accordion cards */}
      <div className="relative z-10 mx-auto max-w-[1018px] flex flex-col gap-4">
        {PRODUCTOS.blocks.map((block, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={block.name}
              className="overflow-hidden rounded-[20px] border border-gray-200 bg-white transition-shadow duration-300"
              style={
                isOpen
                  ? {
                      boxShadow:
                        "0 8px 30px rgba(226,97,83,0.08), 0 0 0 1px rgba(226,97,83,0.08)",
                      borderColor: "rgba(226,97,83,0.15)",
                    }
                  : undefined
              }
              data-animate
            >
              {/* Clickable header bar */}
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between px-5 py-5 tablet:px-7 tablet:py-6 transition-colors hover:bg-gray-50/50 cursor-pointer"
              >
                <div className="flex h-[24px] items-center gap-3">
                  <img
                    src={logos[block.name]}
                    alt={block.name}
                    className={`${logoHeight[block.name]} w-auto`}
                  />
                  <span className="hidden tablet:inline font-[family-name:var(--font-inter)] text-[13px] text-gray-400">
                    {block.pairs.length} problemas y soluciones
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-[family-name:var(--font-inter)] text-[11px] font-medium text-[#E26153]/60 tablet:text-[12px]">
                    {isOpen ? "Cerrar" : "Ver más"}
                  </span>
                  <ChevronIcon open={isOpen} />
                </div>
              </button>

              {/* Collapsible content */}
              <div
                className="grid transition-all duration-300 ease-out"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-gray-100 px-5 pb-6 pt-5 tablet:px-7 tablet:pb-7 tablet:pt-6">
                    {/* Subtitle */}
                    <p className="mb-5 max-w-[640px] font-[family-name:var(--font-inter)] text-[14px] font-light leading-[1.65] text-gray-500">
                      {block.subtitle}
                    </p>

                    {/* Column headers (desktop only) */}
                    <div className="mb-2 hidden grid-cols-2 gap-3 tablet:grid">
                      <p className="px-4 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-400">
                        El problema
                      </p>
                      <p className="px-4 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.1em] text-[#E26153]">
                        T1 lo resuelve
                      </p>
                    </div>

                    {/* Problem / Solution pairs */}
                    <div className="flex flex-col gap-3">
                      {block.pairs.map((pair, j) => (
                        <div
                          key={j}
                          className="grid grid-cols-1 gap-2 tablet:grid-cols-2"
                        >
                          <div className="card-problem flex flex-col justify-center rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 font-[family-name:var(--font-inter)] text-sm leading-[1.7] text-gray-500 tablet:rounded-xl">
                            {pair.problem}
                            {pair.example && (
                              <span className="card-example">
                                {pair.example}
                              </span>
                            )}
                          </div>
                          <div className="card-solution flex flex-col justify-center rounded-2xl border border-[rgba(226,97,83,0.15)] bg-[rgba(226,97,83,0.06)] px-5 py-4 font-[family-name:var(--font-inter)] text-sm font-medium leading-[1.6] text-gray-800 tablet:rounded-xl">
                            {pair.solution}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
