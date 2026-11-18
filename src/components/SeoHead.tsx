import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../config/siteConfig';
import { useLanguage } from '../context/LanguageContext';

interface SeoHeadProps {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  includeClinicSchema?: boolean;
}

export function SeoHead({
  title,
  description,
  path = '/',
  type = 'website',
  includeClinicSchema = false,
}: SeoHeadProps) {
  const { lang } = useLanguage();
  const origin =
    typeof window !== 'undefined' ? window.location.origin : siteConfig.siteUrl;
  const canonicalUrl = `${origin}${path}`;

  const clinicAndPhysicianSchema = includeClinicSchema
    ? {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Physician',
            name: siteConfig.doctor.name.en,
            alternateName: siteConfig.doctor.name.bn,
            medicalSpecialty: 'Orthopedic',
            description: siteConfig.doctor.specialization.en,
            telephone: siteConfig.chamber.phones.map((p) => p.display),
            worksFor: {
              '@id': `${siteConfig.siteUrl}/#clinic`,
            },
          },
          {
            '@type': 'MedicalClinic',
            '@id': `${siteConfig.siteUrl}/#clinic`,
            name: siteConfig.chamber.name.en,
            alternateName: siteConfig.chamber.name.bn,
            medicalSpecialty: ['Orthopedic', 'SportsMedicine', 'PainManagement'],
            telephone: siteConfig.chamber.phones.map((p) => p.display),
            address: {
              '@type': 'PostalAddress',
              streetAddress: '19/1, Rankin Street, Wari (North side of Wari Post Office)',
              addressLocality: 'Dhaka',
              postalCode: '1203',
              addressCountry: 'BD',
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday', 'Monday', 'Wednesday', 'Thursday'],
                opens: '18:00',
                closes: '22:00',
              },
            ],
          },
        ],
      }
    : null;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteConfig.chamber.name.en} />
      <meta property="og:locale" content={lang === 'bn' ? 'bn_BD' : 'en_US'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {clinicAndPhysicianSchema && (
        <script type="application/ld+json">
          {JSON.stringify(clinicAndPhysicianSchema)}
        </script>
      )}
    </Helmet>
  );
}
