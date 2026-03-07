import { DOS_DONTS } from "@/lib/constants";

export default function DosDonts() {
  return (
    <section
      className="relative overflow-hidden bg-white py-10 px-4 tablet:py-14 tablet:px-6"
      id="reglas"
    >
      <div className="relative z-10 mx-auto max-w-[1018px]" data-animate>
        <p className="mb-3 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400">
          {DOS_DONTS.eyebrow}
        </p>
        <h2
          className="mb-4 font-[family-name:var(--font-sora)] font-extralight leading-[1.2] text-gray-900"
          style={{ fontSize: "clamp(32px, 4vw, 44px)" }}
        >
          {DOS_DONTS.title}{" "}
          <span className="text-[#E26153]">{DOS_DONTS.titleAccent}</span>
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-[1018px]">
        {/* Do's & Don'ts columns */}
        <div className="mt-8 grid grid-cols-1 gap-5 tablet:grid-cols-2" data-animate>
          {/* Do's */}
          <div className="rounded-[24px] border border-[rgba(79,193,83,0.15)] bg-green-100 p-5 tablet:p-8">
            <h3 className="mb-5 flex items-center gap-2 font-[family-name:var(--font-sora)] text-xl font-semibold text-green-700">
              {DOS_DONTS.dosHeading}
            </h3>
            {DOS_DONTS.dos.map((item, i) => (
              <div
                key={i}
                className="border-b border-black/[0.04] py-2.5 font-[family-name:var(--font-inter)] text-sm leading-[1.7] text-gray-600 last:border-b-0"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </div>

          {/* Don'ts */}
          <div className="rounded-[24px] border border-[rgba(204,0,0,0.1)] bg-brand-red-50 p-5 tablet:p-8">
            <h3 className="mb-5 flex items-center gap-2 font-[family-name:var(--font-sora)] text-xl font-semibold text-brand-red-900">
              {DOS_DONTS.dontsHeading}
            </h3>
            {DOS_DONTS.donts.map((item, i) => (
              <div
                key={i}
                className="border-b border-black/[0.04] py-2.5 font-[family-name:var(--font-inter)] text-sm leading-[1.7] text-gray-600 last:border-b-0"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </div>
        </div>

        {/* Examples */}
        <div className="mt-8" data-animate>
          <h3 className="mb-4 font-[family-name:var(--font-sora)] text-lg font-semibold text-gray-900">
            {DOS_DONTS.examplesTitle}
          </h3>
          <div className="flex flex-col gap-3">
            {DOS_DONTS.examples.map((example, i) => (
              <div
                key={i}
                className="grid grid-cols-1 gap-3 tablet:grid-cols-2"
              >
                <div className="rounded-2xl border border-[rgba(79,193,83,0.12)] bg-green-100 px-5 py-5 font-[family-name:var(--font-inter)] text-sm leading-[1.6] text-gray-700">
                  {example.good}
                </div>
                <div className="example-bad rounded-2xl border border-[rgba(204,0,0,0.08)] bg-brand-red-50 px-5 py-5 font-[family-name:var(--font-inter)] text-sm leading-[1.6] text-gray-400">
                  {example.bad}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
