import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Search,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { treatmentsData } from '../data/treatments';
import { translations } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import type { TreatmentGroupId } from '../types/content';
import { SeoHead } from '../components/SeoHead';
import { TreatmentIcon } from '../components/TreatmentIcon';
import { AppointmentBanner } from '../components/AppointmentBanner';

type FilterId = 'all' | TreatmentGroupId;

export function TreatmentsPage() {
  const { t, tn, tList } = useLanguage();
  const [activeGroup, setActiveGroup] = useState<FilterId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filterTabs: Array<{ id: FilterId; label: { bn: string; en: string } }> = [
    { id: 'all', label: translations.treatments.groups.all },
    { id: 'knee', label: translations.treatments.groups.knee },
    { id: 'shoulder', label: translations.treatments.groups.shoulder },
    { id: 'spine', label: translations.treatments.groups.spine },
    { id: 'general', label: translations.treatments.groups.general },
  ];

  const filteredTreatments = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return treatmentsData.filter((item) => {
      const matchesGroup = activeGroup === 'all' || item.group === activeGroup;
      if (!matchesGroup) return false;
      if (!q) return true;
      return (
        item.title.en.toLowerCase().includes(q) ||
        item.title.bn.toLowerCase().includes(q) ||
        item.shortSummary.en.toLowerCase().includes(q) ||
        item.shortSummary.bn.toLowerCase().includes(q)
      );
    });
  }, [activeGroup, searchQuery]);

  return (
    <>
      <SeoHead
        title={t(translations.treatments.pageTitle)}
        description={t(translations.treatments.subheading)}
        path="/treatments"
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#EAF4FF]/70 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold text-[#1769D2]">
              {t(translations.treatments.kicker)}
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0B2D5C] leading-tight">
              {t(translations.treatments.heading)}
            </h1>
            <p className="mt-3 text-base text-[#172B4D]/80 leading-relaxed">
              {t(translations.treatments.subheading)}
            </p>
          </div>

          {/* Search and Category Filter Controls */}
          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-1.5 rounded-xl bg-[#F6F8FB] p-1.5 border border-[#0B2D5C]/10">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveGroup(tab.id)}
                  className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                    activeGroup === tab.id
                      ? 'bg-[#0B2D5C] text-white'
                      : 'text-[#172B4D]/75 hover:text-[#0B2D5C] hover:bg-white'
                  }`}
                >
                  {tn(tab.label)}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-80">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#172B4D]/45" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t(translations.treatments.searchPlaceholder)}
                className="min-h-[44px] w-full rounded-xl border border-[#0B2D5C]/15 bg-white pl-10 pr-4 text-sm text-[#172B4D] placeholder:text-[#172B4D]/45 focus:border-[#1769D2] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Directory List */}
      <section className="pb-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {filteredTreatments.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <article
                  key={item.id}
                  className="flex flex-col justify-between rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 transition-colors hover:border-[#1769D2]/35"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4FF] text-[#1769D2]">
                        <TreatmentIcon name={item.iconName} className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold text-[#0B2D5C]/45 tabular-nums">
                        {item.orderNumber}
                      </span>
                    </div>

                    <h2 className="mt-4 text-xl font-bold text-[#0B2D5C]">
                      <Link
                        to={`/treatments/${item.slug}`}
                        className="hover:text-[#1769D2] transition-colors"
                      >
                        {t(item.title)}
                      </Link>
                    </h2>

                    <p className="mt-2 text-sm text-[#172B4D]/80 leading-relaxed">
                      {t(item.shortSummary)}
                    </p>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 space-y-3 border-t border-[#0B2D5C]/10 pt-4 text-sm text-[#172B4D]/85">
                            <div>
                              <p className="font-semibold text-[#0B2D5C]">
                                {t(translations.treatments.sections.whatIsIt)}
                              </p>
                              <p className="mt-1 leading-relaxed">
                                {t(item.whatIsIt)}
                              </p>
                            </div>
                            <div>
                              <p className="font-semibold text-[#0B2D5C]">
                                {t(translations.treatments.sections.symptoms)}
                              </p>
                              <ul className="mt-1 list-disc space-y-1 pl-5">
                                {tList(item.commonSymptoms).map((sym, i) => (
                                  <li key={i}>{sym}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#0B2D5C]/8 pt-4">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedId(isExpanded ? null : item.id)
                      }
                      className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-[#F6F8FB] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#0B2D5C] transition-colors hover:bg-[#EAF4FF] cursor-pointer"
                    >
                      <span>
                        {isExpanded
                          ? t(translations.treatments.collapseSummary)
                          : t(translations.treatments.expandSummary)}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>

                    <Link
                      to={`/treatments/${item.slug}`}
                      className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#1769D2] hover:text-[#0B2D5C] transition-colors"
                    >
                      <span>{t(translations.treatments.openDetailPage)}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Medical Responsibility Notice */}
          <div className="mt-10 rounded-2xl border border-[#0B2D5C]/12 bg-[#F6F8FB] p-6">
            <p className="text-xs sm:text-sm text-[#172B4D]/80 leading-relaxed">
              {t(translations.treatments.medicalNotice)}
            </p>
          </div>
        </div>
      </section>

      <AppointmentBanner />
    </>
  );
}
