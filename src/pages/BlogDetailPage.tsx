import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Copy, Share2 } from 'lucide-react';
import { blogsData, getBlogBySlug } from '../data/blogs';
import { siteConfig } from '../config/siteConfig';
import { translations } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { SeoHead } from '../components/SeoHead';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { AppointmentBanner } from '../components/AppointmentBanner';

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t, tn, formatNum, tList } = useLanguage();
  const [copied, setCopied] = useState(false);

  const post = slug ? getBlogBySlug(slug) : undefined;

  if (!post) {
    return (
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[800px] px-4 text-center">
          <h1 className="text-2xl font-bold text-[#0B2D5C]">
            {lang === 'bn' ? 'প্রবন্ধটি পাওয়া যায়নি' : 'Article Not Found'}
          </h1>
          <Link
            to="/blogs"
            className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#1769D2] px-5 py-2.5 text-sm font-semibold text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{t(translations.blogs.backToBlogs)}</span>
          </Link>
        </div>
      </section>
    );
  }

  const currentUrl =
    typeof window !== 'undefined'
      ? window.location.href
      : `${siteConfig.siteUrl}/blogs/${post.slug}`;

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(t(post.title));

  const relatedPosts = blogsData
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : b.category === post.category ? 1 : 0))
    .slice(0, 3);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <SeoHead
        title={`${t(post.title)} | ${t(siteConfig.doctor.name)}`}
        description={t(post.excerpt)}
        path={`/blogs/${post.slug}`}
        type="article"
      />

      <article className="bg-white">
        {/* Article Header */}
        <header className="bg-gradient-to-b from-[#EAF4FF]/70 to-white py-10 sm:py-14">
          <div className="mx-auto max-w-[860px] px-4 sm:px-6 lg:px-8">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1769D2] hover:text-[#0B2D5C]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{t(translations.blogs.backToBlogs)}</span>
            </Link>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#172B4D]/70">
              <span className="font-semibold text-[#1769D2]">
                {t(post.categoryLabel)}
              </span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.publishedDate}>
                {tn(post.publishedDateDisplay)}
              </time>
              <span aria-hidden="true">·</span>
              <span>{tn(post.readingTime)}</span>
            </div>

            <h1 className="mt-3 text-2xl sm:text-4xl font-bold text-[#0B2D5C] leading-tight">
              {t(post.title)}
            </h1>

            <p className="mt-4 text-sm font-medium text-[#172B4D]/80">
              {t(translations.blogs.authorLabel)}: {t(siteConfig.doctor.name)} —{' '}
              {t(siteConfig.doctor.specialization)}
            </p>

            <div className="mt-7 overflow-hidden rounded-2xl border border-[#0B2D5C]/10 aspect-[16/10] bg-[#EAF4FF]/45">
              <ResponsiveImage
                imageKey={post.imageKey}
                alt={t(post.imageAlt)}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="mx-auto max-w-[860px] px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-base sm:text-lg font-medium text-[#0B2D5C]/90 leading-relaxed">
            {t(post.excerpt)}
          </p>

          <div className="mt-8 space-y-8">
            {post.sections.map((section, idx) => (
              <section key={idx} className="space-y-3.5">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B2D5C]">
                  {t(section.heading)}
                </h2>
                {tList(section.paragraphs).map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base text-[#172B4D]/85 leading-relaxed"
                  >
                    {formatNum(para)}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-3 space-y-2.5 pl-5 list-disc text-base text-[#172B4D]/85">
                    {tList(section.bullets).map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {formatNum(bullet)}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Key Takeaway */}
          <div className="mt-10 rounded-2xl border border-[#1769D2]/25 bg-[#EAF4FF]/65 p-6">
            <p className="text-xs font-semibold text-[#1769D2]">
              {t(translations.blogs.keyTakeawayLabel)}
            </p>
            <p className="mt-2 text-base font-semibold text-[#0B2D5C] leading-relaxed">
              {t(post.keyTakeaway)}
            </p>
          </div>

          {/* Social Share Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-[#0B2D5C]/10 py-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#0B2D5C]">
              <Share2 className="h-4 w-4 text-[#1769D2]" />
              <span>{t(translations.blogs.shareHeading)}</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-[#0B2D5C]/15 bg-[#F6F8FB] px-3.5 py-1.5 text-xs font-semibold text-[#0B2D5C] hover:bg-[#EAF4FF] cursor-pointer"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-[#1769D2]" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                <span>
                  {copied
                    ? t(translations.blogs.linkCopied)
                    : t(translations.blogs.copyLink)}
                </span>
              </button>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[38px] items-center rounded-lg border border-[#0B2D5C]/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#0B2D5C] hover:bg-[#EAF4FF]"
              >
                Facebook
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[38px] items-center rounded-lg border border-[#0B2D5C]/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#0B2D5C] hover:bg-[#EAF4FF]"
              >
                LinkedIn
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[38px] items-center rounded-lg border border-[#0B2D5C]/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#0B2D5C] hover:bg-[#EAF4FF]"
              >
                X
              </a>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="mt-8 rounded-2xl border border-[#0B2D5C]/12 bg-[#F6F8FB] p-6">
            <p className="text-xs sm:text-sm text-[#172B4D]/80 leading-relaxed">
              {t(translations.blogs.disclaimer)}
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 sm:py-16 bg-[#F6F8FB]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0B2D5C]">
            {t(translations.blogs.relatedHeading)}
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {relatedPosts.map((rel) => (
              <article
                key={rel.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#0B2D5C]/10 bg-white"
              >
                <Link
                  to={`/blogs/${rel.slug}`}
                  className="aspect-[4/3] overflow-hidden bg-[#EAF4FF]"
                >
                  <ResponsiveImage
                    imageKey={rel.imageKey}
                    alt={t(rel.imageAlt)}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </Link>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#172B4D]/65">
                      <span className="font-semibold text-[#1769D2]">
                        {t(rel.categoryLabel)}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{tn(rel.readingTime)}</span>
                    </div>
                    <h3 className="mt-2 text-base font-bold text-[#0B2D5C] group-hover:text-[#1769D2]">
                      <Link to={`/blogs/${rel.slug}`}>{t(rel.title)}</Link>
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#0B2D5C]/8">
                    <Link
                      to={`/blogs/${rel.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1769D2] hover:text-[#0B2D5C]"
                    >
                      <span>{t(translations.home.readMore)}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AppointmentBanner />
    </>
  );
}
