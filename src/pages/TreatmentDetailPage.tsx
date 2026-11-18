import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Phone,
} from 'lucide-react';
import { getTreatmentBySlug, treatmentsData } from '../data/treatments';
import { siteConfig } from '../config/siteConfig';
import { translations } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { SeoHead } from '../components/SeoHead';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { TreatmentIcon } from '../components/TreatmentIcon';
import { AppointmentBanner } from '../components/AppointmentBanner';

export function TreatmentDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t, tn, formatNum, tList } = useLanguage();
  const treatment = slug ? getTreatmentBySlug(slug) : undefined;

  if (!treatment) {
    return (
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[800px] px-4 text-center">
          <h1 className="text-2xl font-bold text-[#0B2D5C]">
            {lang === 'bn' ? 'চিকিৎসা তথ্য পাওয়া যায়নি' : 'Treatment Guide Not Found'}
          </h1>
          <Link
            to="/treatments"
            className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#1769D2] px-5 py-2.5 text-sm font-semibold text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{t(translations.treatments.backToDirectory)}</span>
          </Link>
        </div>
      </section>
    );
  }

  const currentIdx = treatmentsData.findIndex((item) => item.slug === treatment.slug);
  const nextTreatment =
    treatmentsData[(currentIdx + 1) % treatmentsData.length];

  return (
    <>
      <SeoHead
        title={`${t(treatment.title)} | ${t(siteConfig.doctor.name)}`}
        description={t(treatment.shortSummary)}
        path={`/treatments/${treatment.slug}`}
      />

      {/* Breadcrumb & Hero Header */}
      <section className="bg-gradient-to-b from-[#EAF4FF]/70 to-white py-10 sm:py-14">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
          <Link
            to="/treatments"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1769D2] hover:text-[#0B2D5C] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{t(translations.treatments.backToDirectory)}</span>
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-[#0B2D5C]/10 text-[#1769D2]">
                  <TreatmentIcon name={treatment.iconName} className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold text-[#0B2D5C]/55 tabular-nums">
                  {treatment.orderNumber} / 14
                </span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-[#0B2D5C] leading-tight">
                {t(treatment.title)}
              </h1>

              <p className="mt-3 text-base text-[#172B4D]/85 leading-relaxed">
                {t(treatment.shortSummary)}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
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

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-[#0B2D5C]/10 aspect-[4/3] bg-[#F6F8FB]">
                <ResponsiveImage
                  imageKey={treatment.imageKey}
                  alt={t(treatment.title)}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured 6-Part Clinical Guide */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8 space-y-8">
          {/* 1. What is the condition? */}
          <div className="rounded-2xl border border-[#0B2D5C]/10 bg-[#F6F8FB] p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#0B2D5C]">
              {t(translations.treatments.sections.whatIsIt)}
            </h2>
            <p className="mt-3 text-base text-[#172B4D]/85 leading-relaxed">
              {tn(treatment.whatIsIt)}
            </p>
          </div>

          {/* 2 & 3. Symptoms and Possible Causes */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 sm:p-7">
              <h2 className="text-lg font-bold text-[#0B2D5C]">
                {t(translations.treatments.sections.symptoms)}
              </h2>
              <ul className="mt-4 space-y-3">
                {tList(treatment.commonSymptoms).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#172B4D]/85">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#1769D2]" />
                    <span>{formatNum(item)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 sm:p-7">
              <h2 className="text-lg font-bold text-[#0B2D5C]">
                {t(translations.treatments.sections.causes)}
              </h2>
              <ul className="mt-4 space-y-3">
                {tList(treatment.possibleCauses).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#172B4D]/85">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#1769D2]" />
                    <span>{formatNum(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4. How is it diagnosed? */}
          <div className="rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#0B2D5C]">
              {t(translations.treatments.sections.diagnosis)}
            </h2>
            <p className="mt-3 text-base text-[#172B4D]/85 leading-relaxed">
              {tn(treatment.diagnosis)}
            </p>
          </div>

          {/* 5 & 6. Treatment Approaches and When to Consult */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#0B2D5C]/10 bg-[#F6F8FB] p-6 sm:p-7">
              <h2 className="text-lg font-bold text-[#0B2D5C]">
                {t(translations.treatments.sections.approaches)}
              </h2>
              <ul className="mt-4 space-y-3">
                {tList(treatment.treatmentApproaches).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#172B4D]/85">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#1769D2]" />
                    <span>{formatNum(item)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#1769D2]/25 bg-[#EAF4FF]/55 p-6 sm:p-7">
              <h2 className="text-lg font-bold text-[#0B2D5C]">
                {t(translations.treatments.sections.whenToConsult)}
              </h2>
              <ul className="mt-4 space-y-3">
                {tList(treatment.whenToConsult).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#0B2D5C]">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#1769D2]" />
                    <span>{formatNum(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Medical Responsibility Disclaimer */}
          <div className="rounded-2xl border border-[#0B2D5C]/12 bg-[#F6F8FB] p-5 sm:p-6">
            <p className="text-xs sm:text-sm text-[#172B4D]/80 leading-relaxed">
              {t(translations.treatments.medicalNotice)}
            </p>
          </div>

          {/* Next Treatment Navigation */}
          <div className="flex items-center justify-between border-t border-[#0B2D5C]/10 pt-6">
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2D5C] hover:text-[#1769D2]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{t(translations.treatments.backToDirectory)}</span>
            </Link>

            <Link
              to={`/treatments/${nextTreatment.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1769D2] hover:text-[#0B2D5C]"
            >
              <span>{t(nextTreatment.title)}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <AppointmentBanner />
    </>
  );
}
