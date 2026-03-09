import { useState, useEffect, useCallback } from "react";
import { HOOKS } from "@/lib/constants";
import t1tiendaLogo from "@/assets/logos/t1tienda.svg";
import t1pagosLogo from "@/assets/logos/t1pagos.svg";
import t1enviosLogo from "@/assets/logos/t1envios.svg";
import t1iconLogo from "@/assets/logos/t1-icon.svg";

const logos: Record<string, string> = {
  t1tienda: t1tiendaLogo,
  t1pagos: t1pagosLogo,
  t1envios: t1enviosLogo,
  t1: t1iconLogo,
};

const logoHeight: Record<string, string> = {
  t1tienda: "h-[18px]",
  t1pagos: "h-[21px]",
  t1envios: "h-[18px]",
  t1: "h-[18px]",
};

export default function Hooks() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeHook, setActiveHook] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const group = HOOKS.groups[activeProduct];
  const totalHooks = group.items.length;

  const goNextHook = useCallback(() => {
    setActiveHook((prev) => (prev >= totalHooks - 1 ? 0 : prev + 1));
  }, [totalHooks]);

  const goPrevHook = useCallback(() => {
    setActiveHook((prev) => (prev <= 0 ? totalHooks - 1 : prev - 1));
  }, [totalHooks]);

  // Reset hook index when product changes
  useEffect(() => {
    setActiveHook(0);
  }, [activeProduct]);

  // Auto-rotate hooks
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goNextHook, 4500);
    return () => clearInterval(interval);
  }, [isPaused, goNextHook]);

  return (
    <section
      className="relative overflow-hidden bg-white py-8 px-4 tablet:py-12 tablet:px-6"
      id="hooks"
    >
      {/* Header */}
      <div
        className="relative z-10 mx-auto max-w-[1018px] text-center"
        data-animate
      >
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
        <p className="mx-auto max-w-[540px] font-[family-name:var(--font-inter)] font-light text-base leading-[1.7] text-black">
          {HOOKS.desc}
        </p>
      </div>

      {/* Logo navigation buttons */}
      <div className="relative z-10 mx-auto mt-8 max-w-[1018px]" data-animate>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {HOOKS.groups.map((g, i) => {
            const isActive = activeProduct === i;
            return (
              <button
                key={g.product}
                onClick={() => setActiveProduct(i)}
                className={`flex h-[44px] items-center gap-2 rounded-full border px-5 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "border-[#E26153]/30 bg-brand-red-50 shadow-[0_2px_12px_rgba(226,97,83,0.1)]"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <img
                  src={logos[g.product]}
                  alt={g.product}
                  className={`${logoHeight[g.product]} w-auto`}
                />
                {g.product === "t1" && (
                  <span
                    className={`font-[family-name:var(--font-sora)] text-[13px] font-semibold ${
                      isActive ? "text-[#E26153]" : "text-gray-600"
                    }`}
                  >
                    general
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tag badge */}
        <div className="mt-5 flex justify-center">
          <span className="rounded-full bg-brand-red-50 px-4 py-1.5 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.08em] text-[#E26153]">
            {group.tag}
          </span>
        </div>

        {/* Carousel */}
        <div
          className="mt-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Hook card */}
          <div className="relative mx-auto min-h-[120px] max-w-[700px] flex items-center justify-center">
            {group.items.map((item, i) => (
              <div
                key={`${group.product}-${i}`}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-400 ${
                  i === activeHook
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <p className="text-center font-[family-name:var(--font-inter)] text-lg font-light leading-[1.7] text-gray-700 tablet:text-xl">
                  "{item}"
                </p>
              </div>
            ))}
          </div>

          {/* Navigation: arrows + dots */}
          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              onClick={goPrevHook}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-gray-300 hover:text-gray-600 cursor-pointer"
              aria-label="Anterior"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <div className="flex gap-2">
              {group.items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveHook(i)}
                  className={`h-2 w-2 rounded-full transition-colors cursor-pointer ${
                    i === activeHook ? "bg-[#E26153]" : "bg-gray-200"
                  }`}
                  aria-label={`Hook ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNextHook}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-gray-300 hover:text-gray-600 cursor-pointer"
              aria-label="Siguiente"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Counter */}
          <p className="mt-3 text-center font-[family-name:var(--font-inter)] text-[11px] text-gray-400">
            {activeHook + 1} / {totalHooks}
          </p>
        </div>
      </div>
    </section>
  );
}
