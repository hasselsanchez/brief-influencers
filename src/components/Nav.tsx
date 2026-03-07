import { useEffect, useState, useRef } from "react";
import { NAV_LINKS } from "@/lib/constants";
import t1iconLogo from "@/assets/logos/t1-icon.svg";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Open with animation
  const openMenu = () => {
    setMenuOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setMenuVisible(true);
      });
    });
  };

  // Close with animation
  const closeMenu = () => {
    setMenuVisible(false);
    setTimeout(() => {
      setMenuOpen(false);
    }, 300);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex h-[70px] items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-[12px] shadow-[0px_0px_25px_2px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1018px] items-center justify-between px-4 tablet:px-6">
          <a href="#" className="flex items-center">
            <img
              src={t1iconLogo}
              alt="T1"
              className="h-8 w-auto"
            />
          </a>
          <div className="flex items-center gap-8">
            {/* Desktop links */}
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
            {/* Desktop CTA */}
            <a
              href="https://t1.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden tablet:inline-flex h-[45px] items-center justify-center rounded-[18px] bg-[#E26153] px-7 font-[family-name:var(--font-inter)] text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#DB3B2B]"
            >
              Explorar T1 →
            </a>
            {/* Hamburger button (mobile only) */}
            <button
              onClick={openMenu}
              className="flex tablet:hidden items-center justify-center w-10 h-10"
              aria-label="Abrir menú"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] tablet:hidden">
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
              menuVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMenu}
          />
          {/* Drawer — slides down */}
          <div
            ref={drawerRef}
            className={`absolute top-0 left-0 right-0 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-out ${
              menuVisible ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            {/* Header with close */}
            <div className="flex h-[70px] items-center justify-between px-4">
              <a href="#" className="flex items-center" onClick={closeMenu}>
                <img src={t1iconLogo} alt="T1" className="h-8 w-auto" />
              </a>
              <button
                onClick={closeMenu}
                className="flex items-center justify-center w-10 h-10"
                aria-label="Cerrar menú"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
            </div>
            {/* Links */}
            <div className="px-4 pb-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block border-b border-gray-100 py-4 font-[family-name:var(--font-inter)] font-light text-base text-gray-800 transition-colors hover:text-[#E26153]"
                >
                  {link.label}
                </a>
              ))}
              {/* CTA */}
              <a
                href="https://t1.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-5 inline-flex h-[45px] items-center justify-center rounded-[18px] bg-[#E26153] px-7 font-[family-name:var(--font-inter)] text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#DB3B2B]"
              >
                Explorar T1 →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
