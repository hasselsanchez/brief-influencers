import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import t1iconLogo from "@/assets/logos/t1-icon.svg";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex h-[70px] items-center justify-between bg-white/90 backdrop-blur-[12px] transition-shadow duration-300 ${
        scrolled ? "shadow-[0px_0px_25px_2px_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1018px] items-center justify-between px-6">
        <a href="#" className="flex items-center">
          <img
            src={t1iconLogo}
            alt="T1"
            className="h-8 w-auto"
          />
        </a>
        <div className="flex items-center gap-8">
          <ul className="hidden gap-7 tablet:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-[family-name:var(--font-inter)] text-sm font-medium text-oxford transition-colors duration-200 hover:text-[#E26153]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://t1.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[45px] items-center justify-center rounded-[18px] bg-[#E26153] px-7 font-[family-name:var(--font-inter)] text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#DB3B2B]"
          >
            Explorar T1 →
          </a>
        </div>
      </div>
    </nav>
  );
}
