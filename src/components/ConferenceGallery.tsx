import { useState } from 'react';
import { ExternalLink, Maximize2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { mediaAssets, type MediaAssetKey } from '../data/media';
import { useLanguage } from '../context/LanguageContext';
import type { BilingualText } from '../types/content';

interface GalleryItem {
  id: string;
  imageKey: MediaAssetKey;
  title: BilingualText;
  caption: BilingualText;
}

const CONFERENCE_ITEMS: GalleryItem[] = [
  {
    id: 'event-1',
    imageKey: 'event1',
    title: {
      bn: 'ক্লিনিক্যাল ও একাডেমিক কনফারেন্স অংশগ্রহণ',
      en: 'Medical Conference & Academic Participation',
    },
    caption: {
      bn: 'অর্থোপেডিক ও স্পোর্টস মেডিসিন বিষয়ক বৈজ্ঞানিক সেমিনার ও পেশাগত মতবিনিময়।',
      en: 'Scientific seminar participation and specialist orthopedic knowledge exchange.',
    },
  },
  {
    id: 'event-2',
    imageKey: 'event2',
    title: {
      bn: 'বিশেষজ্ঞ চিকিৎসক সম্মেলন ও কর্মশালা',
      en: 'Orthopedic Symposium & Workshop',
    },
    caption: {
      bn: 'আধুনিক জয়েন্ট ও ট্রমা কেয়ার নিয়ে সহকর্মী চিকিৎসকদের সাথে একাডেমিক সেশন।',
      en: 'Collaborative academic session covering modern joint and musculoskeletal care.',
    },
  },
  {
    id: 'event-3',
    imageKey: 'event3',
    title: {
      bn: 'মেডিকেল ইভেন্ট ও পেশাগত উপস্থিতি',
      en: 'Clinical Event & Specialist Engagement',
    },
    caption: {
      bn: 'চিকিৎসাবিজ্ঞানের চলমান অগ্রগতির সাথে যুক্ত থাকার নিয়মিত একাডেমিক অংশগ্রহণ।',
      en: 'Ongoing engagement in clinical forums and continuing orthopedic education.',
    },
  },
];

export function ConferenceGallery() {
  const { lang, t } = useLanguage();
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-[#F6F8FB]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold text-[#1769D2]">
              {lang === 'bn'
                ? 'কনফারেন্স ও মেডিকেল ইভেন্ট'
                : 'Conferences & Medical Events'}
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0B2D5C]">
              {lang === 'bn'
                ? 'একাডেমিক ও ক্লিনিক্যাল কার্যক্রমের মুহূর্ত'
                : 'Academic Seminars & Clinical Community'}
            </h2>
          </div>

          {siteConfig.socialLinks.facebook && (
            <a
              href={siteConfig.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center gap-2 self-start rounded-xl border border-[#0B2D5C]/15 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#0B2D5C] transition-colors hover:bg-[#EAF4FF] whitespace-nowrap"
            >
              <span>
                {lang === 'bn'
                  ? 'অফিশিয়াল ফেসবুক পেজ'
                  : 'Official Facebook Page'}
              </span>
              <ExternalLink className="h-4 w-4 text-[#1769D2]" />
            </a>
          )}
        </div>

        {/* Asymmetric 3-Photo Bento Showcase */}
        <div className="mt-8 grid gap-5 md:grid-cols-12">
          {CONFERENCE_ITEMS.map((item, index) => {
            const isFeature = index === 0;
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setSelected(item)}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className={`group relative overflow-hidden rounded-2xl border border-[#0B2D5C]/12 bg-[#0B2D5C] text-left cursor-pointer ${
                  isFeature
                    ? 'md:col-span-6 aspect-[4/3]'
                    : 'md:col-span-3 aspect-[4/3] md:aspect-auto md:min-h-[320px]'
                }`}
              >
                <img
                  src={mediaAssets[item.imageKey]}
                  alt={t(item.title)}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0B2D5C]/90 via-[#0B2D5C]/30 to-transparent"
                />
                <div className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm opacity-90 group-hover:bg-[#1769D2] transition-colors">
                  <Maximize2 className="h-4 w-4" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-sm sm:text-base font-bold leading-snug">
                    {t(item.title)}
                  </p>
                  <p className="mt-1 text-xs text-[#EAF4FF]/85 line-clamp-2">
                    {t(item.caption)}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B2D5C]/85 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label={lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B2D5C]/80 text-white hover:bg-[#0B2D5C] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="max-h-[75vh] overflow-hidden bg-[#0B2D5C]/5">
                <img
                  src={mediaAssets[selected.imageKey]}
                  alt={t(selected.title)}
                  className="max-h-[70vh] w-full object-contain bg-[#0B2D5C]"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-bold text-[#0B2D5C]">
                  {t(selected.title)}
                </h3>
                <p className="mt-1 text-sm text-[#172B4D]/80">
                  {t(selected.caption)}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
