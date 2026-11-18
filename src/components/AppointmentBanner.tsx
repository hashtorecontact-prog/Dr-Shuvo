import { Link } from 'react-router-dom';
import { CalendarCheck, Clock, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export function AppointmentBanner() {
  const { lang, t, tn } = useLanguage();

  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0B2D5C] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs sm:text-sm font-medium text-[#EAF4FF]/90">
                {t(translations.home.ctaBannerKicker)}
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white leading-tight">
                {t(translations.home.ctaBannerTitle)}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#EAF4FF]/85 leading-relaxed max-w-2xl">
                {tn(translations.home.ctaBannerDesc)}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#0B2D5C] transition-colors hover:bg-[#EAF4FF] whitespace-nowrap"
                >
                  <CalendarCheck className="h-4 w-4 text-[#1769D2]" />
                  <span>{t(translations.nav.bookAppointment)}</span>
                </Link>

                <a
                  href={siteConfig.chamber.phones[0].tel}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20 whitespace-nowrap tabular-nums"
                >
                  <Phone className="h-4 w-4" />
                  <span>
                    {lang === 'bn'
                      ? siteConfig.chamber.phones[0].displayBn
                      : siteConfig.chamber.phones[0].display}
                  </span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-white/15 bg-white/8 p-5 sm:p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#EAF4FF]" />
                  <div className="text-sm">
                    <p className="font-semibold text-white">
                      {t(siteConfig.chamber.name)}
                    </p>
                    <p className="mt-0.5 text-[#EAF4FF]/85">
                      {tn(siteConfig.chamber.addressLine1)}
                    </p>
                    <p className="text-[#EAF4FF]/70 text-xs mt-0.5">
                      {t(siteConfig.chamber.addressLandmark)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-white/12 pt-4">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#EAF4FF]" />
                  <div className="text-sm">
                    <p className="text-[#EAF4FF]/85">
                      {t(siteConfig.chamber.visitingDays)}
                    </p>
                    <p className="mt-0.5 font-semibold text-white tabular-nums">
                      {t(siteConfig.chamber.visitingHours)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-white/12 pt-4">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#EAF4FF]" />
                  <div className="flex flex-col gap-1 text-sm tabular-nums">
                    {siteConfig.chamber.phones.map((phone) => (
                      <a
                        key={phone.tel}
                        href={phone.tel}
                        className="font-semibold text-white hover:underline underline-offset-4"
                      >
                        {lang === 'bn' ? phone.displayBn : phone.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
