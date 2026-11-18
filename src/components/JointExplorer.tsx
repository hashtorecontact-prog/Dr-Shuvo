import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarCheck, CheckCircle2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { treatmentsData } from '../data/treatments';
import { ResponsiveImage } from './ResponsiveImage';
import type { MediaAssetKey } from '../data/media';
import type { BilingualList, BilingualText } from '../types/content';

interface JointRegion {
  id: 'knee' | 'shoulder' | 'spine' | 'ankle' | 'fracture';
  label: BilingualText;
  subtitle: BilingualText;
  imageKey: MediaAssetKey;
  symptoms: BilingualList;
  treatmentSlugs: string[];
  hotspot: { cx: number; cy: number };
}

const JOINT_REGIONS: JointRegion[] = [
  {
    id: 'knee',
    label: { bn: 'হাঁটু ও লিগামেন্ট', en: 'Knee & Ligament' },
    subtitle: {
      bn: 'সিঁড়ি ভাঙতে ব্যথা, ফোলা, এসিএল (ACL) বা মেনিস্কাস আঘাত এবং অস্টিওআর্থ্রাইটিস',
      en: 'Stair pain, swelling, ACL or meniscal tears, and knee osteoarthritis',
    },
    imageKey: 'kneeAnatomy',
    symptoms: {
      bn: [
        'সিঁড়ি ওঠানামা বা নামাজে বসতে হাঁটুতে ব্যথা',
        'হাঁটু হঠাৎ আটকে যাওয়া (লকিং) বা ফুলে ওঠা',
        'খেলার মাঠে মোচড়ের পর হাঁটু অস্থির মনে হওয়া',
      ],
      en: [
        'Pain when climbing stairs, squatting, or rising from a chair',
        'Joint locking, clicking, or delayed knee swelling',
        'Instability or “giving way” after a sports twist',
      ],
    },
    treatmentSlugs: [
      'knee-pain-joint-problems',
      'acl-injury',
      'meniscus-injury',
      'osteoarthritis',
    ],
    hotspot: { cx: 120, cy: 274 },
  },
  {
    id: 'shoulder',
    label: { bn: 'কাঁধ ও রোটেটর কাফ', en: 'Shoulder & Arm' },
    subtitle: {
      bn: 'ফ্রোজেন শোল্ডার, হাত তুলতে ব্যথা, রাতের ব্যথা এবং রোটেটর কাফ ইনজুরি',
      en: 'Frozen shoulder, overhead reaching pain, night ache, and rotator cuff tears',
    },
    imageKey: 'shoulderRehab',
    symptoms: {
      bn: [
        'মাথার ওপর হাত তুলতে বা পোশাক পরতে কাঁধে ব্যথা',
        'রাতে আক্রান্ত কাঁধের ওপর কাত হয়ে শুলে ঘুম ভেঙে যাওয়া',
        'হাত নাড়াতে শক্ত ভাব বা শক্তি কমে যাওয়া',
      ],
      en: [
        'Pain reaching overhead, combing hair, or reaching behind the back',
        'Nighttime shoulder aching that disrupts sleep',
        'Progressive stiffness or weakness when lifting objects',
      ],
    },
    treatmentSlugs: [
      'shoulder-pain',
      'frozen-shoulder',
      'rotator-cuff-injuries',
    ],
    hotspot: { cx: 162, cy: 112 },
  },
  {
    id: 'spine',
    label: { bn: 'কোমর ও ঘাড় (মেরুদণ্ড)', en: 'Back & Neck Spine' },
    subtitle: {
      bn: 'ডিস্ক প্রোল্যাপ্স, সায়াটিকা, ঘাড়-কোমর ব্যথা এবং পেশী-স্নায়ুজনিত টান',
      en: 'Disc irritation, sciatica, cervical posture strain, and nerve-related pain',
    },
    imageKey: 'clinic',
    symptoms: {
      bn: [
        'কোমর বা ঘাড় শক্ত হওয়া ও নড়াচড়ায় ব্যথা',
        'ব্যথা কোমর থেকে পায়ে বা ঘাড় থেকে হাতে ছড়িয়ে পড়া',
        'হাত-পায়ে ঝিনঝিন, অবশ ভাব বা টান অনুভব',
      ],
      en: [
        'Localized lower back or neck stiffness aggravated by sitting',
        'Radiating pain down the leg (sciatica) or arm',
        'Tingling, numbness, or muscle spasm along the spine',
      ],
    },
    treatmentSlugs: ['back-neck-pain', 'joint-pain-musculoskeletal'],
    hotspot: { cx: 120, cy: 158 },
  },
  {
    id: 'ankle',
    label: { bn: 'গোড়ালি ও পায়ের আঘাত', en: 'Ankle & Foot' },
    subtitle: {
      bn: 'গোড়ালি মচকানো, বারবার পা উল্টে যাওয়া, হিল ব্যথা এবং স্পোর্টস ইনজুরি',
      en: 'Ankle sprains, recurrent instability, plantar heel pain, and athletic injuries',
    },
    imageKey: 'ankleCare',
    symptoms: {
      bn: [
        'পা মচকানোর পর গোড়ালিতে দ্রুত ফোলা ও ব্যথা',
        'অসমতল রাস্তায় হাঁটতে গেলে পা উল্টে যাওয়ার ভয়',
        'সকালে ঘুম থেকে উঠে পায়ের তলায় প্রথম পদক্ষেপে ব্যথা',
      ],
      en: [
        'Swelling, bruising, and tenderness after rolling an ankle',
        'Feeling of ankle looseness on uneven ground',
        'Sharp heel soreness with the first steps of the morning',
      ],
    },
    treatmentSlugs: ['ankle-sprain-foot-injuries', 'sports-injuries'],
    hotspot: { cx: 120, cy: 344 },
  },
  {
    id: 'fracture',
    label: { bn: 'ফ্র্যাকচার ও সাধারণ অর্থোপেডিক', en: 'Fractures & Ligaments' },
    subtitle: {
      bn: 'হাড় ভাঙা বা চিড়, প্লাস্টার পরবর্তী যত্ন এবং সকল লিগামেন্ট-জয়েন্টের সমস্যা',
      en: 'Bone fractures, post-cast stiffness, ligament sprains, and general orthopedic care',
    },
    imageKey: 'sportsKnee',
    symptoms: {
      bn: [
        'আঘাতের পর অঙ্গ নাড়াতে বা ভর দিতে না পারা',
        'প্লাস্টার খোলার পর জয়েন্ট শক্ত হয়ে যাওয়া',
        'হাত-পায়ের আঙুল, কনুই বা কব্জির দীর্ঘমেয়াদি ব্যথা',
      ],
      en: [
        'Acute localized bone pain and swelling following a fall or impact',
        'Joint stiffness requiring physiotherapy after cast removal',
        'Repetitive strain in wrist, elbow, or peripheral joints',
      ],
    },
    treatmentSlugs: [
      'fracture-management',
      'ligament-injuries',
      'general-orthopedic-problems',
    ],
    hotspot: { cx: 78, cy: 192 },
  },
];

export function JointExplorer() {
  const { lang, t, tList } = useLanguage();
  const [selectedId, setSelectedId] = useState<JointRegion['id']>('knee');

  const activeRegion =
    JOINT_REGIONS.find((r) => r.id === selectedId) || JOINT_REGIONS[0];

  const matchingTreatments = treatmentsData.filter((item) =>
    activeRegion.treatmentSlugs.includes(item.slug)
  );

  return (
    <section
      id="joint-explorer"
      className="py-16 sm:py-20 bg-[#F6F8FB] border-y border-[#0B2D5C]/8"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-semibold text-[#1769D2]">
            {lang === 'bn'
              ? 'সহজ সমস্যা ও চিকিৎসা অনুসন্ধান'
              : 'Interactive Orthopedic Guide'}
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0B2D5C]">
            {lang === 'bn'
              ? 'আপনার শরীরের কোন অংশে ব্যথা বা আঘাত?'
              : 'Where Are You Experiencing Pain or Injury?'}
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#172B4D]/80 leading-relaxed">
            {lang === 'bn'
              ? 'চিত্রের বিন্দুতে অথবা নিচের বোতামে ক্লিক করে সংশ্লিষ্ট উপসর্গ এবং চিকিৎসা নির্দেশিকা সহজেই দেখে নিন।'
              : 'Select a joint region on the anatomical map or tabs below to explore symptoms and matching treatment guides.'}
          </p>
        </div>

        {/* Interactive Region Selector Pills/Tabs */}
        <div className="mt-7 flex flex-wrap gap-2">
          {JOINT_REGIONS.map((region) => {
            const isActive = region.id === selectedId;
            return (
              <button
                key={region.id}
                type="button"
                onClick={() => setSelectedId(region.id)}
                className={`relative min-h-[42px] rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'bg-white text-[#0B2D5C] border border-[#0B2D5C]/12 hover:bg-[#EAF4FF]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="joint-tab-bg"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-xl bg-[#0B2D5C]"
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">
                  {t(region.label)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Explorer Panel */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Anatomical Joint SVG Selector */}
          <div className="lg:col-span-4 rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 flex flex-col items-center justify-between">
            <div className="w-full flex items-center justify-between text-xs font-medium text-[#172B4D]/60">
              <span>
                {lang === 'bn' ? 'অ্যানাটমিক্যাল গাইড' : 'Anatomical Selector'}
              </span>
              <span className="text-[#1769D2] font-semibold">
                {t(activeRegion.label)}
              </span>
            </div>

            <svg
              viewBox="0 0 240 380"
              className="my-4 h-72 sm:h-80 w-full max-w-[230px]"
              role="img"
              aria-label={
                lang === 'bn'
                  ? 'মানবদেহের জয়েন্ট নির্বাচন চিত্র'
                  : 'Interactive human musculoskeletal joint diagram'
              }
            >
              {/* Subtle clinical grid circles */}
              <circle
                cx="120"
                cy="190"
                r="112"
                fill="none"
                stroke="#EAF4FF"
                strokeWidth="1.5"
              />
              <circle
                cx="120"
                cy="190"
                r="82"
                fill="none"
                stroke="#EAF4FF"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              {/* Clean Musculoskeletal Silhouette */}
              <g
                fill="#EAF4FF"
                stroke="#0B2D5C"
                strokeOpacity="0.28"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Head & Neck */}
                <circle cx="120" cy="46" r="21" />
                <path d="M112 67v14M128 67v14" />
                {/* Torso & Pelvis */}
                <path d="M84 88 C95 80, 145 80, 156 88 L166 112 L152 192 L144 206 L96 206 L88 192 L74 112 Z" />
                {/* Spine centerline */}
                <line
                  x1="120"
                  y1="88"
                  x2="120"
                  y2="198"
                  stroke="#1769D2"
                  strokeOpacity="0.35"
                  strokeWidth="3"
                  strokeDasharray="5 5"
                />
                {/* Left & Right Arms */}
                <path d="M80 94 L60 156 L52 214" fill="none" strokeWidth="14" stroke="#EAF4FF" />
                <path d="M80 94 L60 156 L52 214" fill="none" strokeWidth="2" stroke="#0B2D5C" strokeOpacity="0.28" />
                <path d="M160 94 L180 156 L188 214" fill="none" strokeWidth="14" stroke="#EAF4FF" />
                <path d="M160 94 L180 156 L188 214" fill="none" strokeWidth="2" stroke="#0B2D5C" strokeOpacity="0.28" />
                {/* Legs */}
                <path d="M102 206 L98 278 L96 348" fill="none" strokeWidth="18" stroke="#EAF4FF" />
                <path d="M102 206 L98 278 L96 348" fill="none" strokeWidth="2" stroke="#0B2D5C" strokeOpacity="0.28" />
                <path d="M138 206 L142 278 L144 348" fill="none" strokeWidth="18" stroke="#EAF4FF" />
                <path d="M138 206 L142 278 L144 348" fill="none" strokeWidth="2" stroke="#0B2D5C" strokeOpacity="0.28" />
              </g>

              {/* Interactive Joint Hotspots */}
              {JOINT_REGIONS.map((region) => {
                const isSelected = region.id === selectedId;
                return (
                  <g
                    key={region.id}
                    onClick={() => setSelectedId(region.id)}
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label={t(region.label)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedId(region.id);
                      }
                    }}
                  >
                    {isSelected && (
                      <motion.circle
                        cx={region.hotspot.cx}
                        cy={region.hotspot.cy}
                        r="18"
                        fill="#1769D2"
                        fillOpacity="0.2"
                        initial={{ scale: 0.7, opacity: 0.9 }}
                        animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0.15, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    )}
                    <circle
                      cx={region.hotspot.cx}
                      cy={region.hotspot.cy}
                      r={isSelected ? 10 : 7.5}
                      fill={isSelected ? '#1769D2' : '#FFFFFF'}
                      stroke={isSelected ? '#0B2D5C' : '#1769D2'}
                      strokeWidth="2.5"
                    />
                  </g>
                );
              })}
            </svg>

            <p className="text-center text-xs text-[#172B4D]/65">
              {lang === 'bn'
                ? 'যেকোনো জয়েন্ট বিন্দুতে ক্লিক করুন'
                : 'Tap any joint point to inspect'}
            </p>
          </div>

          {/* Animated Clinical Detail Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRegion.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 sm:p-8 flex flex-col justify-between"
              >
                <div className="grid gap-6 md:grid-cols-12 md:items-start">
                  <div className="md:col-span-7">
                    <h3 className="text-2xl font-bold text-[#0B2D5C]">
                      {t(activeRegion.label)}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-[#172B4D]/80 leading-relaxed">
                      {t(activeRegion.subtitle)}
                    </p>

                    <p className="mt-5 text-xs font-semibold text-[#1769D2]">
                      {lang === 'bn' ? 'সাধারণ লক্ষণসমূহ' : 'Common Symptoms'}
                    </p>
                    <ul className="mt-2.5 space-y-2">
                      {tList(activeRegion.symptoms).map((symptom, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm text-[#172B4D]/85"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1769D2]" />
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-5">
                    <div className="overflow-hidden rounded-xl border border-[#0B2D5C]/10 aspect-[4/3] bg-[#F6F8FB]">
                      <ResponsiveImage
                        imageKey={activeRegion.imageKey}
                        alt={t(activeRegion.label)}
                      />
                    </div>
                  </div>
                </div>

                {/* Matching Treatments Links */}
                <div className="mt-6 border-t border-[#0B2D5C]/10 pt-5">
                  <p className="text-xs font-semibold text-[#172B4D]/65">
                    {lang === 'bn'
                      ? 'এই অংশের চিকিৎসা নির্দেশিকা দেখুন:'
                      : 'Explore matching condition guides:'}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {matchingTreatments.map((treatment) => (
                      <Link
                        key={treatment.id}
                        to={`/treatments/${treatment.slug}`}
                        className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border border-[#0B2D5C]/15 bg-[#F6F8FB] px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#0B2D5C] transition-colors hover:bg-[#1769D2] hover:text-white hover:border-[#1769D2]"
                      >
                        <span>{t(treatment.title)}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#0B2D5C]/8">
                    <Link
                      to="/contact"
                      className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-[#1769D2] px-5 py-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-[#0B2D5C]"
                    >
                      <CalendarCheck className="h-4 w-4" />
                      <span>
                        {lang === 'bn'
                          ? 'এই সমস্যার জন্য অ্যাপয়েন্টমেন্ট নিন'
                          : 'Book Assessment for This Area'}
                      </span>
                    </Link>

                    <Link
                      to="/treatments"
                      className="text-xs sm:text-sm font-semibold text-[#1769D2] hover:text-[#0B2D5C]"
                    >
                      {lang === 'bn' ? (
                        <>
                          সকল <span className="font-num">১৪</span>টি চিকিৎসা দেখুন →
                        </>
                      ) : (
                        'View All 14 Treatments →'
                      )}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
