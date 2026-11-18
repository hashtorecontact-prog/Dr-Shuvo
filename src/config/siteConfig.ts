import type { BilingualText } from '../types/content';
import { mediaAssets } from '../data/media';

export interface PhoneContact {
  display: string;
  displayBn: string;
  tel: string;
}

export interface SiteConfig {
  siteUrl: string;
  doctorPortraitUrl: string;
  doctorProfileImageUrl: string;
  contactEndpoint: string;
  doctor: {
    name: BilingualText;
    shortBrand: BilingualText;
    specialization: BilingualText;
    qualifications: Array<{
      degree: BilingualText;
      institution: BilingualText;
      isPlaceholder?: boolean;
    }>;
    experiencePlaceholder: BilingualText;
    affiliationsPlaceholder: BilingualText;
  };
  chamber: {
    name: BilingualText;
    addressLine1: BilingualText;
    addressLandmark: BilingualText;
    visitingDays: BilingualText;
    visitingHours: BilingualText;
    phones: PhoneContact[];
    googleMapsQuery: string;
    googleMapsDirectionsUrl: string;
    googleMapsEmbedUrl: string;
  };
  socialLinks: {
    facebook: string;
  };
}

export const siteConfig: SiteConfig = {
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://drashikortho.com',
  doctorPortraitUrl:
    import.meta.env.VITE_DOCTOR_PORTRAIT_URL || mediaAssets.doctorHeroPortrait,
  doctorProfileImageUrl: mediaAssets.doctorProfileBadge,
  contactEndpoint: import.meta.env.VITE_CONTACT_ENDPOINT || '',
  doctor: {
    name: {
      bn: 'ডা. মো. আশিকুর রহমান শুভ',
      en: 'Dr. Md. Ashikur Rahman Shuvo',
    },
    shortBrand: {
      bn: 'ডা. আশিকুর রহমান শুভ',
      en: 'Dr. Ashikur Rahman Shuvo',
    },
    specialization: {
      bn: 'অর্থোপেডিক, স্পোর্টস ইনজুরি ও পেইন ম্যানেজমেন্ট বিশেষজ্ঞ',
      en: 'Orthopedic, Sports Injury & Pain Management Specialist',
    },
    qualifications: [
      {
        degree: {
          bn: 'যাচাইকৃত মেডিকেল ডিগ্রি ও সনদ (ডাক্তার কর্তৃক প্রদত্ত হলে এখানে যুক্ত হবে)',
          en: 'Verified Medical Degrees & Credentials (To be updated with doctor-supplied records)',
        },
        institution: {
          bn: 'অনুমোদিত প্রতিষ্ঠান ও নিবন্ধন তথ্য এখানে সংযুক্ত করা যাবে',
          en: 'Verified institution and medical council registration details editable here',
        },
        isPlaceholder: true,
      },
    ],
    experiencePlaceholder: {
      bn: 'ক্লিনিক্যাল অভিজ্ঞতা ও পূর্ববর্তী কর্মস্থলের যাচাইকৃত বিবরণ ডাক্তারের অনুমোদনের পর এখানে যুক্ত করা হবে।',
      en: 'Verified clinical experience and prior hospital positions will be updated here upon confirmation by the doctor.',
    },
    affiliationsPlaceholder: {
      bn: 'বর্তমান ও পূর্ববর্তী হাসপাতাল সংযুক্তি এবং পেশাগত সদস্যপদের তথ্য এখানে হালনাগাদযোগ্য।',
      en: 'Current or prior hospital affiliations and professional society memberships can be updated here once supplied.',
    },
  },
  chamber: {
    name: {
      bn: 'আশিক অর্থোপেডিক, স্পোর্টস ইনজুরি ও পেইন ক্লিনিক',
      en: 'Ashik Orthopedic, Sports Injury & Pain Clinic',
    },
    addressLine1: {
      bn: '১৯/১, র‍্যাংকিন স্ট্রিট, ওয়ারী, ঢাকা-১২০৩, বাংলাদেশ',
      en: '19/1, Rankin Street, Wari, Dhaka-1203, Bangladesh',
    },
    addressLandmark: {
      bn: '(ওয়ারী পোস্ট অফিসের উত্তর পাশে)',
      en: '(North side of Wari Post Office)',
    },
    visitingDays: {
      bn: 'শনিবার, সোমবার, বুধবার ও বৃহস্পতিবার',
      en: 'Saturday, Monday, Wednesday & Thursday',
    },
    visitingHours: {
      bn: 'সন্ধ্যা ৬:০০টা – রাত ১০:০০টা',
      en: '6:00 PM – 10:00 PM',
    },
    phones: [
      {
        display: '01671-751612',
        displayBn: '০১৬৭১-৭৫১৬১২',
        tel: 'tel:+8801671751612',
      },
      {
        display: '01837-284926',
        displayBn: '০১৮৩৭-২৮৪৯২৬',
        tel: 'tel:+8801837284926',
      },
    ],
    googleMapsQuery: '19/1 Rankin Street, Wari, Dhaka 1203, Bangladesh',
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/search/?api=1&query=19%2F1+Rankin+Street+Wari+Dhaka+1203+Bangladesh',
    googleMapsEmbedUrl:
      'https://maps.google.com/maps?q=19%2F1%20Rankin%20Street%2C%20Wari%2C%20Dhaka%201203%2C%20Bangladesh&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  socialLinks: {
    facebook: 'https://www.facebook.com/dr.ashiqur.shuvo',
  },
};
