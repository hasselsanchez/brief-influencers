import { QUE_ES } from "@/lib/constants";
import t1tiendaLogo from "@/assets/logos/t1tienda.svg";
import t1pagosLogo from "@/assets/logos/t1pagos.svg";
import t1enviosLogo from "@/assets/logos/t1envios.svg";

const logos: Record<string, typeof t1tiendaLogo> = {
  t1tienda: t1tiendaLogo,
  t1pagos: t1pagosLogo,
  t1envios: t1enviosLogo,
};

const logoHeights: Record<string, number> = {
  t1tienda: 26,
  t1pagos: 30,
  t1envios: 26,
};

export default function QueEsT1() {
  return (
    <section className="relative overflow-hidden bg-white py-10 px-4 tablet:py-14 tablet:px-6" id="que-es">
      <div className="relative z-10 mx-auto max-w-[1018px]" data-animate>
        <p className="mb-3 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400">
          {QUE_ES.eyebrow}
        </p>
        <h2
          className="mb-4 font-[family-name:var(--font-sora)] font-light leading-[1.2] text-gray-900"
          style={{ fontSize: "clamp(32px, 4vw, 44px)" }}
        >
          {QUE_ES.title} <span className="text-[#E26153]">{QUE_ES.titleAccent}</span>
        </h2>
        <p className="mb-6 tablet:mb-8 font-[family-name:var(--font-inter)] font-light text-base leading-[1.7] text-black">
          {QUE_ES.descParts.map((part, i) =>
            part.red ? (
              <span key={i} className="text-[#E26153]">{part.text}</span>
            ) : (
              <span key={i}>{part.text}</span>
            )
          )}
        </p>
      </div>

      <div className="mx-auto max-w-[1018px]">
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))" }}
          data-animate
        >
          {QUE_ES.products.map((product) => (
            <div
              key={product.name}
              className="group relative overflow-hidden rounded-[24px] bg-white p-5 tablet:p-8 shadow-[0px_0px_25px_2px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              <div
                className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full opacity-0 blur-[30px] transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: product.glowColor }}
              />
              <h3 className="mb-2">
                <img
                  src={logos[product.name]}
                  alt={product.name}
                  className="w-auto"
                  style={{ height: logoHeights[product.name] }}
                />
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-sm leading-[1.7] text-gray-500">
                {product.intro && (
                  <span className="font-medium text-gray-900">
                    {product.intro}{" "}
                    <span className="text-[#E26153]">{product.introAccent}</span>{" "}
                    {product.introEnd}
                  </span>
                )}
                {product.intro && <><br /><br /></>}
                {product.desc}
              </p>
              <div className="mt-5 flex flex-col gap-2">
                {product.features.map((feature) => (
                  <div
                    key={feature}
                    className="card-feature flex items-start gap-2 font-[family-name:var(--font-inter)] text-sm leading-[1.5] text-gray-600"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="highlight-statement relative mx-auto mt-6 max-w-[680px] pt-6 text-center tablet:mt-6 tablet:pt-6"
          data-animate
        >
          <p
            className="font-[family-name:var(--font-sora)] font-light leading-[1.55] tracking-[-0.01em] text-gray-900"
            style={{ fontSize: "clamp(20px, 2.8vw, 26px)" }}
          >
            <span className="font-normal text-[#E26153]">
              {QUE_ES.highlightStatement.before}
            </span>
            {QUE_ES.highlightStatement.middle}
            <span className="font-normal text-[#E26153]">
              {QUE_ES.highlightStatement.after}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
