import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogsData } from '../data/blogs';
import { siteConfig } from '../config/siteConfig';
import { translations } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import type { BlogCategoryId } from '../types/content';
import { SeoHead } from '../components/SeoHead';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { AppointmentBanner } from '../components/AppointmentBanner';

export function BlogsPage() {
  const { t, tn } = useLanguage();
  const [category, setCategory] = useState<BlogCategoryId>('all');

  const categories: Array<{ id: BlogCategoryId; label: { bn: string; en: string } }> = [
    { id: 'all', label: translations.blogs.categories.all },
    { id: 'shoulder', label: translations.blogs.categories.shoulder },
    { id: 'knee', label: translations.blogs.categories.knee },
    { id: 'sports', label: translations.blogs.categories.sports },
    { id: 'ankle', label: translations.blogs.categories.ankle },
  ];

  const filteredBlogs = useMemo(() => {
    if (category === 'all') return blogsData;
    return blogsData.filter((post) => post.category === category);
  }, [category]);

  return (
    <>
      <SeoHead
        title={t(translations.blogs.pageTitle)}
        description={t(translations.blogs.subheading)}
        path="/blogs"
      />

      <section className="bg-gradient-to-b from-[#EAF4FF]/70 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold text-[#1769D2]">
              {t(translations.blogs.kicker)}
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0B2D5C] leading-tight">
              {t(translations.blogs.heading)}
            </h1>
            <p className="mt-3 text-base text-[#172B4D]/80 leading-relaxed">
              {t(translations.blogs.subheading)}
            </p>
          </div>

          {/* Category Filter Bar */}
          <div className="mt-8 inline-flex flex-wrap items-center gap-1.5 rounded-xl bg-[#F6F8FB] p-1.5 border border-[#0B2D5C]/10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategory(cat.id)}
                className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  category === cat.id
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#0B2D5C]/10 bg-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                <Link
                  to={`/blogs/${post.slug}`}
                  className="aspect-[4/3] overflow-hidden bg-[#EAF4FF]"
                >
                  <ResponsiveImage
                    imageKey={post.imageKey}
                    alt={t(post.imageAlt)}
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
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

                    <h2 className="mt-2.5 text-lg font-bold text-[#0B2D5C] leading-snug group-hover:text-[#1769D2] transition-colors">
                      <Link to={`/blogs/${post.slug}`}>{t(post.title)}</Link>
                    </h2>

                    <p className="mt-2.5 text-sm text-[#172B4D]/80 leading-relaxed">
                      {t(post.excerpt)}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-[#0B2D5C]/8 pt-4 flex items-center justify-between gap-3">
                    <span className="text-xs text-[#172B4D]/65 truncate">
                      {t(siteConfig.doctor.shortBrand)}
                    </span>
                    <Link
                      to={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1769D2] hover:text-[#0B2D5C] whitespace-nowrap shrink-0"
                    >
                      <span>{t(translations.home.readMore)}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Educational Disclaimer */}
          <div className="mt-10 rounded-2xl border border-[#0B2D5C]/12 bg-[#F6F8FB] p-6">
            <p className="text-xs sm:text-sm text-[#172B4D]/80 leading-relaxed">
              {t(translations.blogs.disclaimer)}
            </p>
          </div>
        </div>
      </section>

      <AppointmentBanner />
    </>
  );
}
