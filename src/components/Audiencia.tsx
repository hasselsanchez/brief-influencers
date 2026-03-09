import { useState, useEffect, useCallback } from "react";
import { AUDIENCIA } from "@/lib/constants";

export default function Audiencia() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const profiles = AUDIENCIA.profiles;

  useEffect(() => {
    const update = () =>
      setCardsPerView(window.innerWidth >= 768 ? 3 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxSlideIndex = Math.max(0, profiles.length - cardsPerView);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
  }, [maxSlideIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxSlideIndex : prev - 1));
  }, [maxSlideIndex]);

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, goNext]);

  // Clamp index when cardsPerView changes
  useEffect(() => {
    if (currentIndex > maxSlideIndex) setCurrentIndex(maxSlideIndex);
  }, [maxSlideIndex, currentIndex]);

  const cardWidthPercent = 100 / cardsPerView;
  const translateX = -(currentIndex * cardWidthPercent);

  return (
    <section
      className="relative overflow-hidden bg-white py-8 px-4 tablet:py-12 tablet:px-6"
      id="audiencia"
    >
      {/* Header */}
      <div
        className="relative z-10 mx-auto max-w-[1018px] text-center"
        data-animate
      >
        <p className="mb-3 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400">
          {AUDIENCIA.eyebrow}
        </p>
        <h2
          className="mb-4 font-[family-name:var(--font-sora)] font-extralight leading-[1.2] text-gray-900"
          style={{ fontSize: "clamp(30px, 3.8vw, 42px)" }}
        >
          {AUDIENCIA.title}{" "}
          <span className="text-[#E26153]">{AUDIENCIA.titleAccent}</span>
          {AUDIENCIA.titleEnd}
        </h2>
        <p className="mx-auto max-w-[540px] font-[family-name:var(--font-inter)] font-light text-base leading-[1.7] text-black">
          {AUDIENCIA.desc}
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative z-10 mx-auto mt-8 max-w-[1018px]"
        data-animate
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {profiles.map((profile) => (
              <div
                key={profile.title}
                className="flex-shrink-0 px-2"
                style={{ width: `${cardWidthPercent}%` }}
              >
                <div className="h-full rounded-[20px] border border-gray-200 bg-white p-5 tablet:p-6 transition-all duration-300 hover:border-gray-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)]">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[12px] bg-brand-red-50 text-xl">
                    {profile.emoji}
                  </div>
                  <h4 className="mb-2 font-[family-name:var(--font-sora)] text-sm font-semibold text-gray-900">
                    {profile.title}
                  </h4>
                  <p className="font-[family-name:var(--font-inter)] text-[13px] leading-[1.6] text-gray-500">
                    {profile.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation: arrows + dots */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={goPrev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-gray-300 hover:text-gray-600"
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
            {Array.from({ length: maxSlideIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === currentIndex ? "bg-[#E26153]" : "bg-gray-200"
                }`}
                aria-label={`Ir a slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-gray-300 hover:text-gray-600"
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
      </div>

      {/* IMPORTANTE — footnote */}
      <div
        className="relative z-10 mx-auto mt-6 max-w-[540px] text-center"
        data-animate
      >
        <p className="text-[11px] leading-[1.5] text-gray-400">
          <span className="font-semibold text-[#E26153]">
            {AUDIENCIA.importante.label}
          </span>{" "}
          <span className="italic">{AUDIENCIA.importante.text}</span>
        </p>
      </div>
    </section>
  );
}
