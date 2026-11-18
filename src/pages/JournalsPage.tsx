import { useState } from 'react';
import { BookOpen, CheckCircle2, ExternalLink, FileText } from 'lucide-react';
import { journalEntries } from '../data/journals';
import { siteConfig } from '../config/siteConfig';
import { translations } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import type { JournalEntryType } from '../types/content';
import { SeoHead } from '../components/SeoHead';
import { ConferenceGallery } from '../components/ConferenceGallery';
import { AppointmentBanner } from '../components/AppointmentBanner';

type JournalFilter = 'all' | JournalEntryType;

export function JournalsPage() {
  const { t, tList } = useLanguage();
  const [filter, setFilter] = useState<JournalFilter>('all');

  const filteredEntries =
    filter === 'all'
      ? journalEntries
      : journalEntries.filter((entry) => entry.type === filter);

  return (
    <>
      <SeoHead
        title={t(translations.journals.pageTitle)}
        description={t(translations.journals.subheading)}
        path="/journals"
      />

      <section className="bg-gradient-to-b from-[#EAF4FF]/70 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold text-[#1769D2]">
              {t(translations.journals.kicker)}
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0B2D5C] leading-tight">
              {t(translations.journals.heading)}
            </h1>
            <p className="mt-3 text-base text-[#172B4D]/80 leading-relaxed">
              {t(translations.journals.subheading)}
            </p>
          </div>

          <div className="mt-8 inline-flex flex-wrap items-center gap-1.5 rounded-xl bg-[#F6F8FB] p-1.5 border border-[#0B2D5C]/10">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#0B2D5C] text-white'
                  : 'text-[#172B4D]/75 hover:text-[#0B2D5C] hover:bg-white'
              }`}
            >
              {t(translations.journals.allRecords)}
            </button>
            {translations.journals.categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id as JournalEntryType)}
                className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  filter === cat.id
                    ? 'bg-[#0B2D5C] text-white'
                    : 'text-[#172B4D]/75 hover:text-[#0B2D5C] hover:bg-white'
                }`}
              >
                {t(cat.label)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          {filteredEntries.length === 0 ? (
            <div className="rounded-2xl border border-[#0B2D5C]/12 bg-[#F6F8FB] p-8 sm:p-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#1769D2]">
                <BookOpen className="h-7 w-7" strokeWidth={1.6} />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-[#0B2D5C]">
                {t(translations.journals.emptyTitle)}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-[#172B4D]/80 leading-relaxed">
                {t(translations.journals.emptyBody)}
              </p>
              <p className="mt-4 text-xs font-medium text-[#0B2D5C]/65">
                {t(siteConfig.doctor.name)} · {t(siteConfig.doctor.specialization)}
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {filteredEntries.map((entry) => (
                <article
                  key={entry.id}
                  className="rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#172B4D]/65">
                    <span className="font-semibold text-[#1769D2]">
                      {entry.journalName}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{entry.publicationYear}</span>
                  </div>

                  <h2 className="mt-2.5 text-xl font-bold text-[#0B2D5C]">
                    {entry.title}
                  </h2>

                  <p className="mt-2 text-sm font-medium text-[#172B4D]/80">
                    {t(translations.journals.fields.authors)}: {entry.authors}
                  </p>

                  <p className="mt-3 text-sm sm:text-base text-[#172B4D]/85 leading-relaxed">
                    {entry.abstract}
                  </p>

                  {entry.doiOrUrl && (
                    <div className="mt-4 pt-4 border-t border-[#0B2D5C]/10">
                      <a
                        href={entry.doiOrUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1769D2] hover:text-[#0B2D5C]"
                      >
                        <FileText className="h-4 w-4" />
                        <span>{t(translations.journals.fields.doi)}</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}

          <div className="mt-14">
            <h2 className="text-2xl font-bold text-[#0B2D5C]">
              {t(translations.journals.academicInterestsHeading)}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {tList(translations.journals.academicInterests).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-2xl border border-[#0B2D5C]/10 bg-[#F6F8FB] p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1769D2]" />
                  <p className="text-sm sm:text-base text-[#0B2D5C] font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConferenceGallery />

      <AppointmentBanner />
    </>
  );
}
