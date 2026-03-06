import Image from "next/image";
import { FOOTER } from "@/lib/constants";
import t1iconLogo from "@/assets/logos/t1-icon.svg";

export default function Footer() {
  return (
    <footer className="bg-black px-4 pt-16 pb-8 tablet:px-6">
      <div className="mx-auto max-w-[1018px]">
        {/* Top */}
        <div className="mb-10 grid grid-cols-1 gap-8 tablet:grid-cols-[1.5fr_1fr_1fr] tablet:gap-12">
          {/* Brand */}
          <div>
            <div className="mb-2 flex items-center font-[family-name:var(--font-sora)] text-2xl font-bold text-white">
              <Image
                src={t1iconLogo}
                alt="T1"
                height={28}
                className="h-7 w-auto brightness-0 invert"
              />
              <span className="ml-2 font-normal text-base text-[#9CA3AF]">
                {FOOTER.brand.tagline}
              </span>
            </div>
            <p className="font-[family-name:var(--font-inter)] text-[13px] leading-[1.6] text-[#9CA3AF]">
              {FOOTER.brand.desc}
            </p>
            <p className="mt-1 font-[family-name:var(--font-inter)] text-[13px] leading-[1.6] text-[#9CA3AF]">
              {FOOTER.brand.version}
            </p>
          </div>

          {/* Link columns */}
          {FOOTER.columns.map((col) => (
            <div key={col.title}>
              <h5 className="mb-4 font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.08em] text-white">
                {col.title}
              </h5>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mb-2.5 block font-[family-name:var(--font-inter)] text-sm text-[#9CA3AF] no-underline transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center gap-4 border-t border-white/[0.08] pt-6 text-center tablet:flex-row tablet:justify-between tablet:text-left">
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#9CA3AF]">
            {FOOTER.bottom.country}
          </p>
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#9CA3AF]">
            {FOOTER.bottom.legal.map((item, i) => (
              <span key={item.label}>
                <a
                  href={item.href}
                  className="text-[#9CA3AF] no-underline transition-colors hover:text-white"
                >
                  {item.label}
                </a>
                {i < FOOTER.bottom.legal.length - 1 && " | "}
              </span>
            ))}
          </p>
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#9CA3AF]">
            {FOOTER.bottom.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
