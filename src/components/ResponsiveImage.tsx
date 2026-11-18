import { useState } from 'react';
import { Stethoscope } from 'lucide-react';
import { mediaAssets, type MediaAssetKey } from '../data/media';

interface ResponsiveImageProps {
  imageKey: MediaAssetKey;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function ResponsiveImage({
  imageKey,
  alt,
  className = 'h-full w-full object-cover',
  priority = false,
}: ResponsiveImageProps) {
  const [failed, setFailed] = useState(false);
  const src = mediaAssets[imageKey];

  if (failed || !src) {
    return (
      <div
        className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#EAF4FF] to-[#F6F8FB] text-[#0B2D5C]/60"
        aria-label={alt}
      >
        <Stethoscope className="h-8 w-8" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
