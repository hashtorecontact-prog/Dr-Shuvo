import { useState } from 'react';
import { UserCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { mediaAssets } from '../data/media';

interface DoctorPortraitProps {
  variant?: 'hero' | 'profile-badge';
  className?: string;
  aspectClass?: string;
  priority?: boolean;
}

export function DoctorPortrait({
  variant = 'hero',
  className = '',
  aspectClass = 'aspect-square',
  priority = false,
}: DoctorPortraitProps) {
  const { t } = useLanguage();
  const [imgFailed, setImgFailed] = useState(false);

  const portraitUrl =
    variant === 'profile-badge'
      ? siteConfig.doctorProfileImageUrl.trim()
      : siteConfig.doctorPortraitUrl.trim();
  const showRealImage = portraitUrl.length > 0 && !imgFailed;

  if (showRealImage) {
    if (variant === 'profile-badge') {
      return (
        <div
          className={`relative overflow-hidden rounded-3xl bg-white border border-[#0B2D5C]/12 shadow-lg shadow-[#0B2D5C]/8 p-2 sm:p-3 ${aspectClass} ${className}`}
        >
          <img
            src={portraitUrl}
            alt={`${t(siteConfig.doctor.name)} — ${t(siteConfig.doctor.specialization)}`}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setImgFailed(true)}
            className="h-full w-full rounded-2xl object-contain"
          />
        </div>
      );
    }

    return (
      <div
        className={`relative overflow-hidden rounded-3xl bg-white border border-white/25 shadow-2xl shadow-black/25 ${aspectClass} ${className}`}
      >
        <img
          src={portraitUrl}
          alt={`${t(siteConfig.doctor.name)} — ${t(siteConfig.doctor.specialization)}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className="h-full w-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#0B2D5C] text-white border border-[#0B2D5C]/15 ${aspectClass} ${className}`}
      role="img"
      aria-label={`${t(siteConfig.doctor.name)} — ${t(siteConfig.doctor.specialization)}`}
    >
      <img
        src={mediaAssets.clinic}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        referrerPolicy="no-referrer"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#0B2D5C] via-[#0B2D5C]/85 to-[#0B2D5C]/65"
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
        <div className="flex items-center justify-between border-b border-white/15 pb-4">
          <span className="text-xs font-medium tracking-wide text-[#EAF4FF]">
            {t(translations.portrait.badge)}
          </span>
          <span className="text-xs text-white/70">Wari, Dhaka</span>
        </div>

        <div className="my-auto flex flex-col items-center text-center py-4">
          <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-white/25 bg-white/10">
            <UserCheck className="h-10 w-10 text-[#EAF4FF]" strokeWidth={1.5} />
          </div>
          <p className="text-lg sm:text-xl font-semibold text-white leading-snug">
            {t(siteConfig.doctor.name)}
          </p>
          <p className="mt-2 max-w-xs text-xs sm:text-sm text-[#EAF4FF]/85 leading-relaxed">
            {t(siteConfig.doctor.specialization)}
          </p>
        </div>
      </div>
    </div>
  );
}
