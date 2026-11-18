import { Link } from 'react-router-dom';
import { Clock, ExternalLink, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export function Footer() {
  const { lang, t, tn } = useLanguage();
  const currentYear = new Date().getFullYear();

  const links = [
    { to: '/', label: translations.nav.home },
    { to: '/about', label: translations.nav.about },
    { to: '/treatments', label: translations.nav.treatments },
    { to: '/journals', label: translations.nav.journals },
    { to: '/blogs', label: translations.nav.blogs },
    { to: '/contact', label: translations.nav.contact },
  ];

  return (
    <footer className="bg-[#0B2D5C] text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Specialist & Chamber Overview */}
          <div className="lg:col-span-5">
            <p className="text-lg font-bold text-white">
              {t(siteConfig.doctor.name)}
            </p>
            <p className="mt-1.5 text-sm text-[#EAF4FF]/90">
              {t(siteConfig.doctor.specialization)}
            </p>
            <p className="mt-4 text-sm text-white/75 leading-relaxed max-w-md">
              {t(translations.footer.medicalDisclaimer)}
            </p>

            {siteConfig.socialLinks.facebook && (
              <div className="mt-5">
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/20"
                >
                  <span>
                    {lang === 'bn'
                      ? 'ফেসবুক পেজ: ডা. আশিকুর রহমান শুভ'
                      : 'Facebook: Dr. Ashikur Rahman Shuvo'}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold text-[#EAF4FF]">
              {t(translations.footer.quickLinks)}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              {links.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="transition-colors hover:text-white underline-offset-4 hover:underline"
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Chamber Contact & Schedule */}
          <div className="lg:col-span-4">
            <h2 className="text-sm font-semibold text-[#EAF4FF]">
              {t(translations.footer.clinicInfo)}
            </h2>
            <div className="mt-4 space-y-3.5 text-sm text-white/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#EAF4FF]" />
                <div>
                  <p className="font-semibold text-white">
                    {t(siteConfig.chamber.name)}
                  </p>
                  <p className="mt-0.5 text-white/80">
                    {tn(siteConfig.chamber.addressLine1)}
                  </p>
                  <p className="text-white/70">
                    {t(siteConfig.chamber.addressLandmark)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#EAF4FF]" />
                <div>
                  <p>{t(siteConfig.chamber.visitingDays)}</p>
                  <p className="font-medium text-white tabular-nums">
                    {t(siteConfig.chamber.visitingHours)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#EAF4FF]" />
                <div className="flex flex-col gap-1 tabular-nums">
                  {siteConfig.chamber.phones.map((phone) => (
                    <a
                      key={phone.tel}
                      href={phone.tel}
                      className="font-semibold text-white hover:text-[#EAF4FF] transition-colors"
                    >
                      {lang === 'bn' ? phone.displayBn : phone.display}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <span className="font-num">{currentYear}</span>{' '}
            {t(siteConfig.chamber.name)}. {t(translations.footer.copyright)}
          </p>
          <p>{t(siteConfig.doctor.name)}</p>
        </div>
      </div>
    </footer>
  );
}
