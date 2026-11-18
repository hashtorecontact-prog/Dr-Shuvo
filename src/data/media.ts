import clinicInteriorImg from '../assets/images/clinic_interior_suite_1794948602511.jpg';
import kneeAnatomyImg from '../assets/images/knee_joint_anatomy_1794948602863.jpg';
import shoulderRehabImg from '../assets/images/shoulder_rehab_care_1794948604350.jpg';
import sportsKneeImg from '../assets/images/sports_knee_recovery_1794948605121.jpg';
import ankleCareImg from '../assets/images/ankle_physiotherapy_care_1794948604688.jpg';

import doctorHeroPortraitImg from '../assets/client/doctor-hero-portrait.jpg';
import doctorProfileBadgeImg from '../assets/client/doctor-portrait.jpg';
import event1Img from '../assets/client/event-1.jpg';
import event2Img from '../assets/client/event-2.jpg';
import event3Img from '../assets/client/event-3.jpg';
import blogClient1Img from '../assets/client/blog-1.jpg';
import blogClient2Img from '../assets/client/blog-2.jpg';
import blogClient3Img from '../assets/client/blog-3.jpg';

export const mediaAssets = {
  clinic: clinicInteriorImg,
  kneeAnatomy: kneeAnatomyImg,
  shoulderRehab: shoulderRehabImg,
  sportsKnee: sportsKneeImg,
  ankleCare: ankleCareImg,
  doctorHeroPortrait: doctorHeroPortraitImg,
  doctorProfileBadge: doctorProfileBadgeImg,
  event1: event1Img,
  event2: event2Img,
  event3: event3Img,
  blogClient1: blogClient1Img,
  blogClient2: blogClient2Img,
  blogClient3: blogClient3Img,
} as const;

export type MediaAssetKey = keyof typeof mediaAssets;
