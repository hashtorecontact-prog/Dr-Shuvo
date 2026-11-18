import { useState } from 'react';
import { Phone, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export function FloatingCallButton() {
  const { lang, t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40 md:hidden">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="mb-2.5 w-64 rounded-2xl border border-[#0B2D5C]/15 bg-white p-3.5 shadow-xl"
          >
            <div className="mb-2.5 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#0B2D5C]">
                {t(translations.home.appointmentLabel)}
              </span>
              <button
                type="button"
                onClick={() => setExpanded(false)}
                aria-label={t(translations.nav.menuClose)}
                className="flex h-7 w-7 items-center justify-center rounded-lg text-[#172B4D]/60 hover:bg-[#F6F8FB]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {siteConfig.chamber.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={phone.tel}
                  className="flex min-h-[44px] items-center justify-between rounded-xl bg-[#EAF4FF] px-3.5 py-2.5 text-sm font-semibold text-[#0B2D5C] transition-colors hover:bg-[#1769D2] hover:text-white tabular-nums"
                >
                  <span>{lang === 'bn' ? phone.displayBn : phone.display}</span>
                  <Phone className="h-4 w-4 shrink-0" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-label={t(translations.nav.callNow)}
        className="flex min-h-[48px] items-center gap-2.5 rounded-full bg-[#1769D2] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0B2D5C]/25 transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2D5C]"
      >
        <Phone className="h-4 w-4 shrink-0" />
        <span className="whitespace-nowrap">{t(translations.nav.callNow)}</span>
      </button>
    </div>
  );
}
