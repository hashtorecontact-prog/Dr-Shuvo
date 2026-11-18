import type { MediaAssetKey } from '../data/media';

export type Language = 'bn' | 'en';

export interface BilingualText {
  bn: string;
  en: string;
}

export interface BilingualList {
  bn: readonly string[];
  en: readonly string[];
}

export type TreatmentGroupId = 'knee' | 'shoulder' | 'spine' | 'general';

export interface TreatmentItem {
  id: string;
  slug: string;
  orderNumber: string;
  group: TreatmentGroupId;
  iconName:
    | 'Activity'
    | 'ShieldCheck'
    | 'Bone'
    | 'HeartPulse'
    | 'Zap'
    | 'Move'
    | 'Compass'
    | 'Stethoscope';
  imageKey: MediaAssetKey;
  title: BilingualText;
  shortSummary: BilingualText;
  whatIsIt: BilingualText;
  commonSymptoms: BilingualList;
  possibleCauses: BilingualList;
  diagnosis: BilingualText;
  treatmentApproaches: BilingualList;
  whenToConsult: BilingualList;
}

export type BlogCategoryId = 'all' | 'shoulder' | 'knee' | 'sports' | 'ankle';

export interface BlogArticle {
  id: string;
  slug: string;
  category: Exclude<BlogCategoryId, 'all'>;
  categoryLabel: BilingualText;
  imageKey: MediaAssetKey;
  imageAlt: BilingualText;
  publishedDate: string;
  publishedDateDisplay: BilingualText;
  readingTime: BilingualText;
  title: BilingualText;
  excerpt: BilingualText;
  sections: Array<{
    heading: BilingualText;
    paragraphs: BilingualList;
    bullets?: BilingualList;
  }>;
  keyTakeaway: BilingualText;
}

export type JournalEntryType =
  | 'research'
  | 'journal'
  | 'case-report'
  | 'conference';

export interface JournalEntry {
  id: string;
  type: JournalEntryType;
  title: string;
  authors: string;
  journalName: string;
  publicationYear: string;
  doiOrUrl?: string;
  abstract: string;
}
