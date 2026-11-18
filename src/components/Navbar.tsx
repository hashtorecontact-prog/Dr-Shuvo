import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CalendarCheck, Menu, Phone, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { to: '/', label: translations.nav.home, end: true },
    { to: '/about', label: translations.nav.about },
    { to: '/treatments', label: translations.nav.treatments },
    { to: '/journals', label: translations.nav.journals },
    { to: '/blogs', label: translations.nav.blogs },
    { to: '/contact', label: translations.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#0B2D5C]/10 shadow-xs'
          : 'bg-white border-b border-[#0B2D5C]/8'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Doctor Brand Wordmark */}
        <Link
          to="/"
          className="flex items-center gap-2.5 text-[#0B2D5C] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1769D2] rounded-md"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0B2D5C] text-white shrink-0"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
          <span className="text-sm sm:text-base font-bold tracking-tight whitespace-nowrap">
            {t(siteConfig.doctor.shortBrand)}
          </span>
        </Link>

        {/* Zone 2: Clean Typography Navigation Links */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#172B4D]/80"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1769D2] rounded-sm ${
                  isActive
                    ? 'text-[#0B2D5C] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1769D2] after:rounded-full'
                    : 'hover:text-[#0B2D5C]'
                }`
              }
            >
              {t(item.label)}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Language Switcher + Primary Appointment CTA + Mobile Trigger */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <div
            role="group"
            aria-label="Language switcher"
            className="flex items-center rounded-lg bg-[#F6F8FB] p-0.5 border border-[#0B2D5C]/10"
          >
            <button
              type="button"
              onClick={() => setLang('bn')}
              className={`min-h-[34px] px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                lang === 'bn'
                  ? 'bg-[#0B2D5C] text-white'
                  : 'text-[#172B4D]/75 hover:text-[#0B2D5C]'
              }`}
            >
              বাংলা
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`min-h-[34px] px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#0B2D5C] text-white'
                  : 'text-[#172B4D]/75 hover:text-[#0B2D5C]'
              }`}
            >
              English
            </button>
          </div>

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#1769D2] px-4 py-2 text-xs sm:text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#0B2D5C] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2D5C]"
          >
            <CalendarCheck className="h-4 w-4 shrink-0" />
            <span>{t(translations.nav.bookAppointment)}</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={
              mobileOpen ? t(translations.nav.menuClose) : t(translations.nav.menuOpen)
            }
            className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-lg border border-[#0B2D5C]/12 text-[#0B2D5C] transition-colors hover:bg-[#F6F8FB] cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-[#0B2D5C]/10 bg-white lg:hidden"
          >
            <div className="mx-auto max-w-[1200px] px-4 py-4 sm:px-6">
              <nav aria-label="Mobile" className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `flex min-h-[44px] items-center rounded-xl px-3.5 py-2.5 text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#EAF4FF] text-[#0B2D5C] font-semibold'
                          : 'text-[#172B4D] hover:bg-[#F6F8FB]'
                      }`
                    }
                  >
                    {t(item.label)}
                  </NavLink>
                ))}
              </nav>

              <div className="mt-4 flex flex-col gap-2.5 border-t border-[#0B2D5C]/10 pt-4">
                <Link
                  to="/contact"
                  className="flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#1769D2] px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <CalendarCheck className="h-4 w-4" />
                  <span>{t(translations.nav.bookAppointment)}</span>
                </Link>
                <a
                  href={siteConfig.chamber.phones[0].tel}
                  className="flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-[#0B2D5C]/15 bg-[#F6F8FB] px-4 py-2.5 text-sm font-semibold text-[#0B2D5C] tabular-nums"
                >
                  <Phone className="h-4 w-4 text-[#1769D2]" />
                  <span>
                    {t(translations.nav.callNow)}:{' '}
                    {lang === 'bn'
                      ? siteConfig.chamber.phones[0].displayBn
                      : siteConfig.chamber.phones[0].display}
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
