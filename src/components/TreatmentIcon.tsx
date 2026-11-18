import {
  Activity,
  Bone,
  Compass,
  HeartPulse,
  Move,
  ShieldCheck,
  Stethoscope,
  Zap,
} from 'lucide-react';
import type { TreatmentItem } from '../types/content';

export function TreatmentIcon({
  name,
  className = 'h-5 w-5',
}: {
  name: TreatmentItem['iconName'];
  className?: string;
}) {
  switch (name) {
    case 'Activity':
      return <Activity className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'Bone':
      return <Bone className={className} />;
    case 'HeartPulse':
      return <HeartPulse className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'Move':
      return <Move className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Stethoscope':
    default:
      return <Stethoscope className={className} />;
  }
}
