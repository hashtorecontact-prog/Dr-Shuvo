import { useState } from 'react';
import { CalendarCheck, ClipboardCheck, ShieldCheck, Stethoscope } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const PATHWAY_STEPS = [
  {
    step: '01',
    stepBn: '০১',
    icon: CalendarCheck,
    title: {
      bn: 'সহজ সিরিয়াল ও প্রাথমিক তথ্য',
      en: 'Simple Booking & Intake',
    },
    summary: {
      bn: 'ফোন কল বা অনলাইন অনুরোধের মাধ্যমে ওয়ারী চেম্বারে সুবিধাজনক সন্ধ্যাবেলার সময় নির্ধারণ।',
      en: 'Call our clinic desk or send an appointment request for an evening slot in Wari.',
    },
    detail: {
      bn: 'আপনার পূর্ববর্তী কোনো এক্স-রে, এমআরআই রিপোর্ট বা চলমান ওষুধের তালিকা থাকলে চেম্বারে আসার সময় সাথে আনুন—এতে মূল্যায়ন আরও দ্রুত ও সুনির্দিষ্ট হয়।',
      en: 'Bring any prior X-rays, MRI reports, or medication lists to help the specialist review your complete clinical history smoothly.',
    },
  },
  {
    step: '02',
    stepBn: '০২',
    icon: Stethoscope,
    title: {
      bn: 'মনোযোগী শারীরিক পরীক্ষা',
      en: 'Focused Joint & Motion Exam',
    },
    summary: {
      bn: 'জয়েন্টের নড়াচড়া, লিগামেন্টের স্থিতিশীলতা এবং ব্যথার প্রকৃত উৎস সরাসরি পরীক্ষা।',
      en: 'Hands-on evaluation of joint stability, range of motion, and neuromuscular strength.',
    },
    detail: {
      bn: 'হাড়, তরুণাস্থি, লিগামেন্ট নাকি স্নায়ু—কোথা থেকে ব্যথার উৎপত্তি তা আলাদাভাবে পরীক্ষা করা হয় এবং কেবল ক্লিনিক্যালি প্রয়োজন হলেই ইমেজিং পরামর্শ দেওয়া হয়।',
      en: 'Structured orthopedic tests distinguish tendon, cartilage, ligament, or nerve sources—recommending imaging only when clinically warranted.',
    },
  },
  {
    step: '03',
    stepBn: '০৩',
    icon: ClipboardCheck,
    title: {
      bn: 'স্বচ্ছ ও ব্যক্তিকেন্দ্রিক পরিকল্পনা',
      en: 'Individualized Care Plan',
    },
    summary: {
      bn: 'অপ্রয়োজনীয় হস্তক্ষেপ এড়িয়ে বয়স, কাজ ও আঘাতের মাত্রা অনুযায়ী বাস্তবসম্মত চিকিৎসা।',
      en: 'Clear explanation of options tailored to your age, profession, and activity goals.',
    },
    detail: {
      bn: 'সব রোগীর ক্ষেত্রে সার্জারি বা একই ওষুধ প্রয়োজন হয় না। ফিজিওথেরাপি, ব্রেসিং, ওষুধ বা প্রয়োজনে প্রসিডিউরের সুবিধা-অসুবিধা সহজ ভাষায় বুঝিয়ে দেওয়া হয়।',
      en: 'Whether structured physiotherapy, targeted symptom relief, bracing, or procedural care, every option is explained clearly before deciding.',
    },
  },
  {
    step: '04',
    stepBn: '০৪',
    icon: ShieldCheck,
    title: {
      bn: 'নিরাপদ পুনর্বাসন ও ফলো-আপ',
      en: 'Guided Recovery & Prevention',
    },
    summary: {
      bn: 'দৈনন্দিন ভঙ্গি সংশোধন, নিরাপদ ব্যায়াম এবং পুনরায় আঘাত প্রতিরোধের নির্দেশনা।',
      en: 'Progressive milestones for safe return to work, daily prayer/mobility, or sport.',
    },
    detail: {
      bn: 'সঠিক পুনর্বাসন সম্পূর্ণ করলে জয়েন্টের স্থিতিশীলতা ফিরে আসে এবং ভবিষ্যতে বারবার ব্যথা বা মচকানোর ঝুঁকি কমে যায়।',
      en: 'Consistent follow-up and progressive balance/strength exercises protect the joint and reduce the chance of repeat injury.',
    },
  },
];

export function CarePathway() {
  const { lang, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const current = PATHWAY_STEPS[activeIndex];
  const CurrentIcon = current.icon;

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-semibold text-[#1769D2]">
            {lang === 'bn' ? 'চিকিৎসা প্রক্রিয়া' : 'Patient Care Pathway'}
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0B2D5C]">
            {lang === 'bn'
              ? 'ক্লিনিকে পরামর্শ থেকে সুস্থতা—ধাপে ধাপে আপনার যাত্রা'
              : 'How Your Orthopedic Consultation Works'}
          </h2>
        </div>

        <div className="mt-9 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Interactive Step Selector */}
          <div className="lg:col-span-6 space-y-3">
            {PATHWAY_STEPS.map((item, idx) => {
              const Icon = item.icon;
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left rounded-2xl border p-4 sm:p-5 transition-all cursor-pointer ${
                    isActive
                      ? 'border-[#1769D2] bg-[#EAF4FF]/70 shadow-sm'
                      : 'border-[#0B2D5C]/10 bg-[#F6F8FB] hover:bg-white hover:border-[#0B2D5C]/25'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isActive
                          ? 'bg-[#1769D2] text-white'
                          : 'bg-white text-[#0B2D5C] border border-[#0B2D5C]/10'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-[#0B2D5C]">
                          {t(item.title)}
                        </h3>
                        <span className="text-xs font-bold text-[#1769D2] tabular-nums">
                          {lang === 'bn' ? item.stepBn : item.step}
                        </span>
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-[#172B4D]/80 leading-relaxed">
                        {t(item.summary)}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Animated Step Spotlight Card */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.step}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-2xl bg-[#0B2D5C] p-7 sm:p-10 text-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 text-[#EAF4FF]">
                      <CurrentIcon className="h-7 w-7" />
                    </div>
                    <span className="text-3xl font-bold text-white/25 tabular-nums">
                      {lang === 'bn' ? current.stepBn : current.step}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl sm:text-3xl font-bold text-white leading-snug">
                    {t(current.title)}
                  </h3>

                  <p className="mt-4 text-base text-[#EAF4FF]/90 leading-relaxed">
                    {t(current.summary)}
                  </p>

                  <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed border-t border-white/15 pt-4">
                    {t(current.detail)}
                  </p>
                </div>

                {/* Progress dots (functional step navigation) */}
                <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-5">
                  <div className="flex items-center gap-2">
                    {PATHWAY_STEPS.map((s, idx) => (
                      <button
                        key={s.step}
                        type="button"
                        aria-label={`Step ${s.step}`}
                        onClick={() => setActiveIndex(idx)}
                        className={`h-2.5 rounded-full transition-all cursor-pointer ${
                          idx === activeIndex
                            ? 'w-8 bg-white'
                            : 'w-2.5 bg-white/30 hover:bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((prev) => (prev + 1) % PATHWAY_STEPS.length)
                    }
                    className="text-xs sm:text-sm font-semibold text-[#EAF4FF] hover:text-white cursor-pointer"
                  >
                    {lang === 'bn' ? 'পরবর্তী ধাপ →' : 'Next Step →'}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
