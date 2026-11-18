import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  MapPin,
  Phone,
} from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { treatmentsData } from '../data/treatments';
import { blogsData } from '../data/blogs';
import { SeoHead } from '../components/SeoHead';
import { DoctorPortrait } from '../components/DoctorPortrait';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { TreatmentIcon } from '../components/TreatmentIcon';
import { JointExplorer } from '../components/JointExplorer';
import { CarePathway } from '../components/CarePathway';
import { ConferenceGallery } from '../components/ConferenceGallery';
import { AppointmentBanner } from '../components/AppointmentBanner';

const FEATURED_TREATMENT_SLUGS = [
  'knee-pain-joint-problems',
  'acl-injury',
  'meniscus-injury',
  'frozen-shoulder',
  'rotator-cuff-injuries',
  'back-neck-pain',
];

export function HomePage() {
  const { lang, t, tn } = useLanguage();

  const featuredTreatments = treatmentsData.filter((item) =>
    FEATURED_TREATMENT_SLUGS.includes(item.slug)
  );
  const latestBlogs = blogsData.slice(0, 3);

  return (
    <>
      <SeoHead
        title={`${t(siteConfig.doctor.name)} | ${t(siteConfig.doctor.specialization)}`}
        description={t(translations.home.heroSubheading)}
        path="/"
        includeClinicSchema
      />

      {/* Deep Navy Architectural Orthopedic Hero */}
      <section className="relative overflow-hidden bg-[#0B2D5C] text-white pt-10 pb-14 sm:pt-14 sm:pb-20">
        {/* Subtle Clinical Geometric Arcs */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 600"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle
            cx="980"
            cy="120"
            r="340"
            fill="none"
            stroke="#EAF4FF"
            strokeWidth="1"
          />
          <circle
            cx="980"
            cy="120"
            r="230"
            fill="none"
            stroke="#1769D2"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
          <circle
            cx="140"
            cy="520"
            r="260"
            fill="none"
            stroke="#EAF4FF"
            strokeWidth="1"
          />
        </svg>

        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-5">
            {/* Block 1: Eyebrow & Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:self-end"
            >
              <p className="text-xs sm:text-sm font-semibold text-[#EAF4FF]/90">
                {t(translations.home.heroEyebrow)}
              </p>

              <h1
                className="mt-3 font-bold tracking-tight text-white leading-[1.16]"
                style={{ fontSize: 'clamp(2rem, 3.8vw, 3.35rem)' }}
              >
                {t(translations.home.heroHeadline)}
              </h1>
            </motion.div>

            {/* Block 2: Clean Doctor Portrait (Appears immediately after h1 on mobile, right column on desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 lg:self-center"
            >
              <DoctorPortrait
                variant="hero"
                priority
                aspectClass="aspect-square max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] mx-auto w-full"
              />
            </motion.div>

            {/* Block 3: Supporting Copy, Doctor Credentials & Aligned Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 lg:col-start-1 lg:row-start-2 lg:self-start"
            >
              <p className="max-w-2xl text-base sm:text-lg text-[#EAF4FF]/85 leading-relaxed">
                {t(translations.home.heroSubheading)}
              </p>

              <div className="mt-5 border-t border-white/15 pt-4">
                <p className="text-lg font-bold text-white">
                  {t(siteConfig.doctor.name)}
                </p>
                <p className="mt-0.5 text-sm text-[#EAF4FF]/80">
                  {t(siteConfig.doctor.specialization)}
                </p>
              </div>

              {/* Action Buttons (Even full-width stack on mobile, crisp aligned row on sm+) */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#1769D2] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[#0B2D5C] whitespace-nowrap shadow-lg shadow-black/15"
                >
                  <CalendarCheck className="h-4 w-4 shrink-0" />
                  <span>{t(translations.home.primaryCta)}</span>
                </Link>

                <a
                  href="#joint-explorer"
                  className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20 whitespace-nowrap"
                >
                  <span>
                    {lang === 'bn'
                      ? 'জয়েন্ট অনুযায়ী খুঁজুন'
                      : 'Explore by Joint'}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>

                <a
                  href={siteConfig.chamber.phones[0].tel}
                  className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#0B2D5C] transition-colors hover:bg-[#EAF4FF] whitespace-nowrap tabular-nums"
                >
                  <Phone className="h-4 w-4 text-[#1769D2] shrink-0" />
                  <span>
                    {lang === 'bn'
                      ? siteConfig.chamber.phones[0].displayBn
                      : siteConfig.chamber.phones[0].display}
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* 4-Column Chamber Quick Info Strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 grid gap-4 rounded-2xl bg-white p-5 text-[#172B4D] shadow-xl shadow-black/15 sm:grid-cols-2 lg:grid-cols-4 sm:p-6"
          >
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#1769D2]" />
              <div>
                <p className="text-xs font-medium text-[#172B4D]/65">
                  {t(translations.home.addressLabel)}
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0B2D5C]">
                  {tn(siteConfig.chamber.addressLine1)}
                </p>
                <p className="text-xs text-[#172B4D]/70">
                  {t(siteConfig.chamber.addressLandmark)}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CalendarCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#1769D2]" />
              <div>
                <p className="text-xs font-medium text-[#172B4D]/65">
                  {t(translations.home.visitingDaysLabel)}
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0B2D5C]">
                  {t(siteConfig.chamber.visitingDays)}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#1769D2]" />
              <div>
                <p className="text-xs font-medium text-[#172B4D]/65">
                  {t(translations.home.visitingHoursLabel)}
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0B2D5C] tabular-nums">
                  {t(siteConfig.chamber.visitingHours)}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#1769D2]" />
              <div>
                <p className="text-xs font-medium text-[#172B4D]/65">
                  {t(translations.home.appointmentLabel)}
                </p>
                <div className="mt-1 flex flex-col gap-0.5 text-sm font-bold text-[#0B2D5C] tabular-nums">
                  {siteConfig.chamber.phones.map((phone) => (
                    <a
                      key={phone.tel}
                      href={phone.tel}
                      className="hover:text-[#1769D2] transition-colors"
                    >
                      {lang === 'bn' ? phone.displayBn : phone.display}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Orthopedic Joint & Pain Explorer */}
      <JointExplorer />

      {/* Doctor Introduction Section (Profile Image with Name & Designation) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <DoctorPortrait
                variant="profile-badge"
                aspectClass="aspect-square max-w-[420px] mx-auto w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <p className="text-xs sm:text-sm font-semibold text-[#1769D2]">
                {t(translations.home.introSectionKicker)}
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0B2D5C] leading-snug">
                {t(translations.home.introHeadline)}
              </h2>
              <p className="mt-4 text-base text-[#172B4D]/85 leading-relaxed">
                {t(translations.home.introBody1)}
              </p>
              <p className="mt-3 text-base text-[#172B4D]/80 leading-relaxed">
                {t(translations.home.introBody2)}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#0B2D5C] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1769D2]"
                >
                  <span>{t(translations.home.readFullProfile)}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/treatments"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#0B2D5C]/20 bg-[#F6F8FB] px-5 py-2.5 text-sm font-semibold text-[#0B2D5C] transition-colors hover:bg-[#EAF4FF]"
                >
                  <span>{tn(translations.home.viewAllTreatments)}</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Orthopedic Treatments Grid */}
      <section className="py-16 sm:py-20 bg-[#F6F8FB]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-semibold text-[#1769D2]">
                {t(translations.home.treatmentsSectionKicker)}
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0B2D5C]">
                {t(translations.home.treatmentsSectionHeading)}
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-[#172B4D]/80 leading-relaxed">
                {t(translations.home.treatmentsSectionSub)}
              </p>
            </div>

            <Link
              to="/treatments"
              className="inline-flex min-h-[44px] items-center gap-2 self-start rounded-xl bg-white border border-[#0B2D5C]/15 px-4 py-2.5 text-sm font-semibold text-[#0B2D5C] transition-colors hover:bg-[#EAF4FF] whitespace-nowrap shrink-0"
            >
              <span>{tn(translations.home.viewAllTreatments)}</span>
              <ArrowRight className="h-4 w-4 text-[#1769D2]" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTreatments.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className="group flex flex-col justify-between rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 shadow-xs transition-shadow hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4FF] text-[#1769D2] transition-colors group-hover:bg-[#1769D2] group-hover:text-white">
                      <TreatmentIcon name={item.iconName} className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-[#0B2D5C]/45 tabular-nums">
                      {item.orderNumber}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#0B2D5C] group-hover:text-[#1769D2] transition-colors">
                    <Link to={`/treatments/${item.slug}`}>{t(item.title)}</Link>
                  </h3>

                  <p className="mt-2.5 text-sm text-[#172B4D]/80 leading-relaxed">
                    {t(item.shortSummary)}
                  </p>
                </div>

                <div className="mt-5 border-t border-[#0B2D5C]/8 pt-4">
                  <Link
                    to={`/treatments/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1769D2] hover:text-[#0B2D5C] transition-colors"
                  >
                    <span>{t(translations.home.learnMore)}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive 4-Step Patient Care Pathway */}
      <CarePathway />

      {/* Why Consult an Orthopedic Specialist */}
      <section className="py-16 sm:py-20 bg-[#EAF4FF]/55">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold text-[#1769D2]">
              {t(translations.home.whySectionKicker)}
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0B2D5C]">
              {t(translations.home.whyHeadline)}
            </h2>
            <p className="mt-3 text-base text-[#172B4D]/80 leading-relaxed">
              {t(translations.home.whySubheading)}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {translations.home.whyPillars.map((pillar, index) => (
              <motion.div
                key={pillar.numberEn}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 sm:p-7"
              >
                <p className="text-sm font-bold text-[#1769D2] tabular-nums">
                  {lang === 'bn' ? pillar.number : pillar.numberEn}
                </p>
                <h3 className="mt-2 text-lg font-bold text-[#0B2D5C]">
                  {t(pillar.title)}
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-[#172B4D]/80 leading-relaxed">
                  {t(pillar.description)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Events & Medical Conferences Gallery */}
      <ConferenceGallery />

      {/* Featured Educational Blogs Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-semibold text-[#1769D2]">
                {t(translations.home.blogsSectionKicker)}
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0B2D5C]">
                {t(translations.home.blogsSectionHeading)}
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-[#172B4D]/80 leading-relaxed">
                {t(translations.home.blogsSectionSub)}
              </p>
            </div>

            <Link
              to="/blogs"
              className="inline-flex min-h-[44px] items-center gap-2 self-start rounded-xl bg-[#F6F8FB] border border-[#0B2D5C]/15 px-4 py-2.5 text-sm font-semibold text-[#0B2D5C] transition-colors hover:bg-[#EAF4FF] whitespace-nowrap shrink-0"
            >
              <span>{t(translations.home.viewAllBlogs)}</span>
              <ArrowRight className="h-4 w-4 text-[#1769D2]" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {latestBlogs.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#0B2D5C]/10 bg-white shadow-xs transition-shadow hover:shadow-md"
              >
                <Link
                  to={`/blogs/${post.slug}`}
                  className="aspect-[4/3] overflow-hidden bg-[#EAF4FF]"
                >
                  <ResponsiveImage
                    imageKey={post.imageKey}
                    alt={t(post.imageAlt)}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#172B4D]/65">
                      <span className="font-semibold text-[#1769D2]">
                        {t(post.categoryLabel)}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{tn(post.publishedDateDisplay)}</span>
                      <span aria-hidden="true">·</span>
                      <span>{tn(post.readingTime)}</span>
                    </div>

                    <h3 className="mt-2.5 text-lg font-bold text-[#0B2D5C] leading-snug group-hover:text-[#1769D2] transition-colors">
                      <Link to={`/blogs/${post.slug}`}>{t(post.title)}</Link>
                    </h3>

                    <p className="mt-2.5 text-sm text-[#172B4D]/80 leading-relaxed">
                      {t(post.excerpt)}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#0B2D5C]/8">
                    <Link
                      to={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1769D2] hover:text-[#0B2D5C] transition-colors"
                    >
                      <span>{t(translations.home.readMore)}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <AppointmentBanner />
    </>
  );
}
