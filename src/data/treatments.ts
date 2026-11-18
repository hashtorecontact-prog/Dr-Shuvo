import { treatmentsKneeShoulder } from './treatmentsKneeShoulder';
import { treatmentsSpineGeneral } from './treatmentsSpineGeneral';
import type { TreatmentItem } from '../types/content';

export const treatmentsData: TreatmentItem[] = [
  ...treatmentsKneeShoulder,
  ...treatmentsSpineGeneral,
];

export function getTreatmentBySlug(slug: string): TreatmentItem | undefined {
  return treatmentsData.find((item) => item.slug === slug);
}
