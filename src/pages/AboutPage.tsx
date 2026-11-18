import { Link } from 'react-router-dom';
import {
  Award,
  BriefcaseMedical,
  CalendarCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
} from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { SeoHead } from '../components/SeoHead';
import { DoctorPortrait } from '../components/DoctorPortrait';
import { ConferenceGallery } from '../components/ConferenceGallery';
import { AppointmentBanner } from '../components/AppointmentBanner';

export function AboutPage() {
  const { lang, t, tn, tList } = useLanguage();

  return (
    <>
      <SeoHead
        title={t(translations.about.pageTitle)}
        description={t(translations.about.bioLead)}
        path="/about"
        includeClinicSchema
      />

      <section className="bg-gradient-to-b from-[#EAF4FF]/70 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Profile Badge Image Column (With Name & Designation) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-5"
            >
              <DoctorPortrait
                variant="profile-badge"
                priority
                aspectClass="aspect-square max-w-[440px] mx-auto w-full"
              />
            </motion.div>

            {/* Introduction Column */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="lg:col-span-7"
            >
              <p className="text-xs sm:text-sm font-semibold text-[#1769D2]">
                {t(translations.about.kicker)}
              </p>
              <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0B2D5C] leading-tight">
                {t(translations.about.introTitle)}
              </h1>
              <p className="mt-2 text-base sm:text-lg font-medium text-[#1769D2]">
                {t(siteConfig.doctor.specialization)}
              </p>

              <p className="mt-6 text-base text-[#172B4D]/90 leading-relaxed">
                {t(translations.about.bioLead)}
              </p>
              <p className="mt-4 text-base text-[#172B4D]/80 leading-relaxed">
                {t(translations.about.bioBody)}
              </p>

              {/* Chamber Snapshot Card */}
              <div className="mt-8 rounded-2xl border border-[#0B2D5C]/12 bg-[#F6F8FB] p-6 space-y-4">
                <h2 className="text-base font-bold text-[#0B2D5C]">
                  {t(siteConfig.chamber.name)}
                </h2>

                <div className="grid gap-4 sm:grid-cols-2 text-sm text-[#172B4D]/85">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1769D2]" />
                    <div>
                      <p>{tn(siteConfig.chamber.addressLine1)}</p>
                      <p className="text-xs text-[#172B4D]/65 mt-0.5">
                        {t(siteConfig.chamber.addressLandmark)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#1769D2]" />
                    <div>
                      <p>{t(siteConfig.chamber.visitingDays)}</p>
                      <p className="font-semibold text-[#0B2D5C] tabular-nums mt-0.5">
                        {t(siteConfig.chamber.visitingHours)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[#0B2D5C]/10">
                  <Link
                    to="/contact"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#1769D2] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0B2D5C]"
                  >
                    <CalendarCheck className="h-4 w-4" />
                    <span>{t(translations.nav.bookAppointment)}</span>
                  </Link>

                  <a
                    href={siteConfig.chamber.phones[0].tel}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#0B2D5C]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#0B2D5C] transition-colors hover:bg-[#EAF4FF] tabular-nums"
                  >
                    <Phone className="h-4 w-4 text-[#1769D2]" />
                    <span>
                      {lang === 'bn'
                        ? siteConfig.chamber.phones[0].displayBn
                        : siteConfig.chamber.phones[0].display}
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academic Qualifications & Experience (Editable Placeholders Only) */}
      <section className="py-14 sm:py-16 bg-[#F6F8FB]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF4FF] text-[#1769D2]">
                  <Award className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-[#0B2D5C]">
                  {t(translations.about.qualificationsHeading)}
                </h2>
              </div>

              <div className="mt-6 space-y-4">
                {siteConfig.doctor.qualifications.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#0B2D5C]/10 bg-[#F6F8FB] p-4"
                  >
                    <p className="text-sm font-semibold text-[#0B2D5C]">
                      {t(item.degree)}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#172B4D]/75">
                      {t(item.institution)}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-[#172B4D]/65 leading-relaxed">
                {t(translations.about.qualificationsNote)}
              </p>
            </div>

            <div className="rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF4FF] text-[#1769D2]">
                  <BriefcaseMedical className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-[#0B2D5C]">
                  {t(translations.about.experienceHeading)}
                </h2>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-[#0B2D5C]/10 bg-[#F6F8FB] p-4">
                  <p className="text-sm text-[#172B4D]/85 leading-relaxed">
                    {t(siteConfig.doctor.experiencePlaceholder)}
                  </p>
                </div>
                <div className="rounded-xl border border-[#0B2D5C]/10 bg-[#F6F8FB] p-4">
                  <p className="text-sm text-[#172B4D]/85 leading-relaxed">
                    {t(siteConfig.doctor.affiliationsPlaceholder)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Clinical Interest */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2D5C]">
              {t(translations.about.interestsHeading)}
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tList(translations.about.clinicalInterests).map((interest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className="flex items-start gap-3 rounded-2xl border border-[#0B2D5C]/10 bg-[#F6F8FB] p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1769D2]" />
                <p className="text-sm sm:text-base font-medium text-[#0B2D5C] leading-relaxed">
                  {interest}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Conference & Medical Event Photos */}
      <ConferenceGallery />

      <AppointmentBanner />
    </>
  );
}
