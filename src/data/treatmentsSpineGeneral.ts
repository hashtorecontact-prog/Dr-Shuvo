import type { TreatmentItem } from '../types/content';

export const treatmentsSpineGeneral: TreatmentItem[] = [
  {
    id: '8',
    slug: 'rotator-cuff-injuries',
    orderNumber: '08',
    group: 'shoulder',
    iconName: 'Activity',
    imageKey: 'shoulderRehab',
    title: {
      bn: 'রোটেটর কাফ ইনজুরি',
      en: 'Rotator Cuff Injuries',
    },
    shortSummary: {
      bn: 'কাঁধের পেশী ও টেন্ডনের টান, আংশিক বা পূর্ণ টিয়ার ও হাত দুর্বল হওয়ার চিকিৎসা।',
      en: 'Care for rotator cuff tendinopathy, impingement, and partial or full-thickness tendon tears.',
    },
    whatIsIt: {
      bn: 'রোটেটর কাফ হলো চারটি পেশী ও তাদের টেন্ডনের সমষ্টি, যা কাঁধের বলকে সকেটে স্থির রাখে এবং হাত তুলতে ও ঘোরাতে সাহায্য করে। বারবার হাত ওপরে তোলার কাজ বা হঠাৎ আঘাতে এই টেন্ডনগুলোতে প্রদাহ বা টিয়ার হতে পারে।',
      en: 'The rotator cuff is a group of four muscles and tendons stabilizing the shoulder joint and powering arm elevation and rotation. Repetitive overhead strain or acute trauma can inflame or tear these tendons.',
    },
    commonSymptoms: {
      bn: [
        'বাহুর ওপরের বাইরের অংশে ব্যথা, যা হাত তুললে বাড়ে',
        'বস্তু তুলতে বা হাত ওপরে ধরে রাখতে দুর্বলতা অনুভব',
        'হাত নাড়াতে খচখচ শব্দ ও রাতের দিকে ব্যথা বৃদ্ধি',
      ],
      en: [
        'Deep ache on the outer upper arm aggravated by lifting',
        'Noticeable weakness when raising the arm or carrying objects',
        'Painful arc of motion and night discomfort when lying on the shoulder',
      ],
    },
    possibleCauses: {
      bn: [
        'ক্রীড়াবিদ, চিত্রশিল্পী বা ওভারহেড কাজের সাথে যুক্ত ব্যক্তিদের পুনরাবৃত্ত চাপ',
        'হঠাৎ ভারী জিনিস তোলা বা প্রসারিত হাতে পড়ে যাওয়া',
        'বয়সজনিত টেন্ডনের রক্তপ্রবাহ ও স্থিতিস্থাপকতা কমে যাওয়া',
      ],
      en: [
        'Repetitive overhead movement in sports or manual occupations',
        'Sudden heavy lifting or a fall onto an outstretched arm',
        'Age-related tendon wear reducing elasticity',
      ],
    },
    diagnosis: {
      bn: 'বিশেষায়িত রোটেটর কাফ শক্তি ও ইম্পিঞ্জমেন্ট পরীক্ষার পর টেন্ডনের টিয়ারের মাত্রা বুঝতে হাই-রেজোলিউশন আল্ট্রাসাউন্ড বা এমআরআই করা হয়।',
      en: 'Focused strength and impingement testing followed by high-resolution musculoskeletal ultrasound or MRI when tear evaluation is needed.',
    },
    treatmentApproaches: {
      bn: [
        'প্রদাহ কমানো ও ব্যথামুক্ত পরিসরে ফিজিওথেরাপি',
        'স্ক্যাপুলা ও রোটেটর কাফ শক্তিশালীকরণ ব্যায়াম',
        'সম্পূর্ণ টিয়ার বা রক্ষণশীল চিকিৎসায় উন্নতি না হলে সার্জিক্যাল মেরামতের বিষয়ে পরামর্শ',
      ],
      en: [
        'Inflammation control paired with structured rotator cuff and scapular strengthening',
        'Activity modification to avoid aggravating impingement positions',
        'Surgical repair discussion for acute full-thickness tears or refractory symptoms',
      ],
    },
    whenToConsult: {
      bn: [
        'আঘাতের পর হঠাৎ হাত তুলতে না পারলে বা উল্লেখযোগ্য দুর্বলতা দেখা দিলে',
        'বিশ্রামেও কয়েক সপ্তাহ ধরে কাঁধের ব্যথা স্থায়ী হলে',
      ],
      en: [
        'Sudden inability to raise the arm after an injury',
        'Persistent shoulder ache and weakness not improving over several weeks',
      ],
    },
  },
  {
    id: '9',
    slug: 'back-neck-pain',
    orderNumber: '09',
    group: 'spine',
    iconName: 'Stethoscope',
    imageKey: 'clinic',
    title: {
      bn: 'কোমর ব্যথা ও ঘাড় ব্যথা',
      en: 'Back Pain & Neck Pain',
    },
    shortSummary: {
      bn: 'ডিস্ক সমস্যা, পেশীর টান, সায়াটিকা ও দীর্ঘস্থায়ী মেরুদণ্ড ব্যথার সুশৃঙ্খল ব্যবস্থাপনা।',
      en: 'Clinical assessment for mechanical back/neck pain, disc irritation, posture strain, and nerve symptoms.',
    },
    whatIsIt: {
      bn: 'কোমর ও ঘাড়ের ব্যথা মেরুদণ্ডের কশেরুকা, ইন্টারভার্টিব্রাল ডিস্ক, ফ্যাসেট জয়েন্ট, লিগামেন্ট অথবা সংলগ্ন পেশী ও স্নায়ুর চাপ থেকে উদ্ভূত হতে পারে। দীর্ঘসময় কম্পিউটারে কাজ, ভুল ভঙ্গি বা ডিস্ক বাল্জ এর অন্যতম কারণ।',
      en: 'Back and neck pain can originate from spinal muscles, ligaments, facet joints, intervertebral discs, or nerve root compression. Prolonged desk posture, heavy lifting, or disc changes are frequent contributors.',
    },
    commonSymptoms: {
      bn: [
        'কোমর বা ঘাড়ে শক্ত ভাব ও নড়াচড়ায় ব্যথা',
        'ব্যথা হাত বা পায়ের দিকে ছড়িয়ে পড়া (সায়াটিকা বা রেডিকুলোপ্যাথি)',
        'হাত বা পায়ে ঝিনঝিন, অবশ ভাব বা দুর্বলতা',
      ],
      en: [
        'Localized stiffness or aching in the lower back or cervical spine',
        'Pain radiating into the buttock/leg (sciatica) or shoulder/arm',
        'Tingling, numbness, or weakness in the extremities',
      ],
    },
    possibleCauses: {
      bn: [
        'দীর্ঘসময় ঝুঁকে বসে কাজ করা বা পেশীর টান',
        'ইন্টারভার্টিব্রাল ডিস্ক প্রোল্যাপ্স বা বয়সজনিত স্পন্ডিলোসিস',
        'অতিরিক্ত ওজন বহন বা অনুপযুক্তভাবে ভারী বস্তু তোলা',
      ],
      en: [
        'Prolonged static posture, ergonomic strain, or muscle spasm',
        'Disc bulge/herniation or degenerative spondylosis',
        'Sudden twisting or improper lifting mechanics',
      ],
    },
    diagnosis: {
      bn: 'স্নায়বিক পরীক্ষা (রিফ্লেক্স, শক্তি, অনুভূতি) ও মেরুদণ্ডের নড়াচড়া পরীক্ষা অত্যন্ত গুরুত্বপূর্ণ; রেড ফ্ল্যাগ বা স্নায়ু চাপ সন্দেহ হলে এক্স-রে বা এমআরআই করা হয়।',
      en: 'Careful neurological screening (strength, reflexes, sensation) and spinal exam; X-rays or MRI are reserved for nerve compression or red-flag indicators.',
    },
    treatmentApproaches: {
      bn: [
        'সক্রিয় থাকা, ভঙ্গি সংশোধন ও কোর-মাসল শক্তিশালীকরণ ফিজিওথেরাপি',
        'ব্যথার ধরন অনুযায়ী নিরাপদ ওষুধ ও ব্যথা ব্যবস্থাপনা',
        'স্নায়ু চাপে জরুরি লক্ষণ থাকলে বিশেষায়িত ইন্টারভেনশন বা সার্জারি পরামর্শ',
      ],
      en: [
        'Guided ergonomic correction, core stabilization, and cervical/lumbar physiotherapy',
        'Targeted, short-term analgesic or neuropathic pain management when appropriate',
        'Prompt specialist escalation if progressive nerve deficit occurs',
      ],
    },
    whenToConsult: {
      bn: [
        'হাত বা পায়ে দুর্বলতা, অবশ ভাব বা হাঁটার ভারসাম্য নষ্ট হলে',
        'প্রস্রাব-পায়খানার নিয়ন্ত্রণে কোনো পরিবর্তন বা তীব্র রাতের ব্যথা হলে (জরুরি মূল্যায়ন)',
      ],
      en: [
        'New limb weakness, persistent numbness, or unsteady walking',
        'Urgent evaluation if accompanied by bowel/bladder changes, fever, or unexplained weight loss',
      ],
    },
  },
  {
    id: '10',
    slug: 'osteoarthritis',
    orderNumber: '10',
    group: 'spine',
    iconName: 'Bone',
    imageKey: 'kneeAnatomy',
    title: {
      bn: 'অস্টিওআর্থ্রাইটিস (হাড় ক্ষয় ও বাত)',
      en: 'Osteoarthritis',
    },
    shortSummary: {
      bn: 'জয়েন্টের তরুণাস্থি ক্ষয় রোধ, ব্যথা কমানো ও চলৎশক্তি ধরে রাখার দীর্ঘমেয়াদি পরিকল্পনা।',
      en: 'Comprehensive non-surgical and surgical counseling for degenerative joint osteoarthritis.',
    },
    whatIsIt: {
      bn: 'অস্টিওআর্থ্রাইটিস হলো জয়েন্টের প্রান্তের মসৃণ তরুণাস্থি (কার্টিলেজ) ধীরে ধীরে পাতলা হয়ে যাওয়া, যার ফলে হাঁটু, কোমর, নিতম্ব বা হাতের জয়েন্টে ব্যথা, ফোলা ও শক্ত ভাব দেখা দেয়।',
      en: 'Osteoarthritis is a progressive joint condition in which protective articular cartilage wears down over time, leading to friction, bone remodeling, pain, and stiffness—most commonly in the knees, hips, spine, and hands.',
    },
    commonSymptoms: {
      bn: [
        'চলাফেরা বা ওজন বহনে জয়েন্টের ব্যথা বৃদ্ধি ও বিশ্রামে কিছুটা উপশম',
        'সকালে ঘুম থেকে ওঠার পর ২০–৩০ মিনিট পর্যন্ত জয়েন্ট শক্ত থাকা',
        'জয়েন্ট ভাঁজ-সোজা করতে ঘর্ষণ বা কড়মড় শব্দ',
      ],
      en: [
        'Activity-related aching in weight-bearing joints that eases with rest',
        'Brief morning stiffness lasting under 30 minutes',
        'Crepitus (grating sensation) and gradual loss of full joint motion',
      ],
    },
    possibleCauses: {
      bn: [
        'বয়স বৃদ্ধি এবং দীর্ঘদিনের জয়েন্টের চাপ',
        'অতিরিক্ত দেহ-ওজন যা হাঁটু ও নিতম্বে বাড়তি ভার তৈরি করে',
        'পূর্বের লিগামেন্ট/মেনিস্কাস আঘাত বা জয়েন্টের গঠনগত অসামঞ্জস্য',
      ],
      en: [
        'Age-related cartilage changes combined with cumulative joint loading',
        'Elevated body weight increasing mechanical stress on knees and hips',
        'Prior joint injury, meniscal loss, or joint alignment factors',
      ],
    },
    diagnosis: {
      bn: 'ক্লিনিক্যাল পরীক্ষার পাশাপাশি দাঁড়ানো অবস্থায় (weight-bearing) এক্স-রে করে জয়েন্টের ফাঁকা জায়গা ও হাড়ের পরিবর্তন মূল্যায়ন করা হয়।',
      en: 'Clinical joint examination paired with standing weight-bearing X-rays to assess joint space narrowing and bone changes.',
    },
    treatmentApproaches: {
      bn: [
        'ওজন ব্যবস্থাপনা ও জয়েন্ট-বান্ধব ব্যায়াম (সাঁতার, সাইক্লিং, পেশী শক্তিশালীকরণ)',
        'প্রয়োজনীয় ওষুধ, টপিক্যাল জেল ও সহায়ক আনলোডিং ব্রেস',
        'লক্ষণ অনুযায়ী ইন্ট্রা-আর্টিকুলার ইনজেকশন বা চূড়ান্ত পর্যায়ে জয়েন্ট রিপ্লেসমেন্ট সম্পর্কে স্বচ্ছ আলোচনা',
      ],
      en: [
        'Weight management and low-impact strengthening exercises to offload the joint',
        'Topical or oral symptom control and supportive footwear/bracing',
        'Transparent counseling on intra-articular injections or joint replacement only in advanced stages',
      ],
    },
    whenToConsult: {
      bn: [
        'দৈনন্দিন হাঁটা, নামাজ পড়া বা সিঁড়ি ব্যবহার কঠিন হয়ে পড়লে',
        'ব্যথার জন্য ঘুম ব্যাহত হলে বা জয়েন্টের আকৃতি বাঁকা হতে শুরু করলে',
      ],
      en: [
        'Joint discomfort significantly limiting walking distance or daily independence',
        'Rest pain, persistent swelling, or visible joint deformity',
      ],
    },
  },
  {
    id: '11',
    slug: 'fracture-management',
    orderNumber: '11',
    group: 'general',
    iconName: 'Bone',
    imageKey: 'clinic',
    title: {
      bn: 'ফ্র্যাকচার বা হাড় ভাঙার চিকিৎসা',
      en: 'Fracture Management',
    },
    shortSummary: {
      bn: 'হাড় ভাঙা, চিড় ধরা, প্লাস্টার পরবর্তী যত্ন ও জয়েন্ট শক্ত হওয়া প্রতিরোধে পুনর্বাসন।',
      en: 'Structured acute fracture care, casting guidance, union monitoring, and post-cast rehabilitation.',
    },
    whatIsIt: {
      bn: 'পড়ে যাওয়া, সড়ক দুর্ঘটনা বা খেলাধুলার আঘাতে হাড় আংশিক চিড় (hairline crack) বা সম্পূর্ণ ভেঙে যেতে পারে। সঠিক অ্যালাইনমেন্ট ও স্থিরতা বজায় রেখে হাড় জোড়া লাগানো এবং পরে জয়েন্টের স্বাভাবিক গতি ফিরিয়ে আনা অত্যন্ত জরুরি।',
      en: 'Fractures range from stable hairline cracks to displaced bone breaks caused by falls, sports, or accidents. Proper alignment, appropriate immobilization, and structured post-healing rehabilitation prevent long-term stiffness.',
    },
    commonSymptoms: {
      bn: [
        'আঘাতের সাথে সাথে তীব্র ব্যথা এবং অঙ্গ নাড়াতে বা ভর দিতে না পারা',
        'দ্রুত ফোলাভাব, কালশিটে দাগ বা অঙ্গের স্বাভাবিক আকৃতি পরিবর্তন',
      ],
      en: [
        'Immediate localized pain and inability to bear weight or move the limb',
        'Rapid swelling, bruising, or visible angulation/deformity',
      ],
    },
    possibleCauses: {
      bn: [
        'হঠাৎ পড়ে যাওয়া বা সরাসরি আঘাত',
        'হাড়ের ঘনত্ব কমে যাওয়া (অস্টিওপোরোসিস) যা সামান্য আঘাতেও ভাঙন ঘটায়',
        'অতিরিক্ত দৌড়ানো বা চাপজনিত স্ট্রেস ফ্র্যাকচার',
      ],
      en: [
        'Falls, athletic collisions, or road accidents',
        'Reduced bone mineral density (osteoporosis) causing fragility fractures',
        'Repetitive impact leading to stress fractures',
      ],
    },
    diagnosis: {
      bn: 'একাধিক ভিউতে এক্স-রে এবং জটিল জয়েন্ট-সংলগ্ন ফ্র্যাকচারের ক্ষেত্রে সিটি স্ক্যানের মাধ্যমে হাড়ের অবস্থান ও জয়েন্টের সম্পৃক্ততা নির্ণয় করা হয়।',
      en: 'Multi-view radiographs (X-rays), and CT imaging when needed for complex intra-articular fractures, determine alignment and stability.',
    },
    treatmentApproaches: {
      bn: [
        'ডিসপ্লেস না হওয়া ফ্র্যাকচারে স্ল্যাব, প্লাস্টার কাস্ট বা ফাংশনাল ব্রেস',
        'হাড় সরে গেলে ক্লোজড রিডাকশন বা প্রয়োজনে সার্জিক্যাল ফিক্সেশন পরামর্শ',
        'প্লাস্টার খোলার পর জয়েন্ট সচল করতে ধারাবাহিক ফিজিওথেরাপি ও ফলো-আপ এক্স-রে',
      ],
      en: [
        'Casting, splinting, or functional bracing for stable, well-aligned fractures',
        'Closed reduction or surgical fixation counseling when anatomical alignment requires stabilization',
        'Serial X-ray monitoring and dedicated physiotherapy after immobilization',
      ],
    },
    whenToConsult: {
      bn: [
        'আঘাতের পর হাড় ভাঙার সন্দেহ হলে বিলম্ব না করে দ্রুত পরীক্ষা করান',
        'প্লাস্টার করা হাতে বা পায়ে অতিরিক্ত টাইট লাগা, আঙুল নীল হওয়া বা অবশ ভাব হলে জরুরি যোগাযোগ করুন',
      ],
      en: [
        'Prompt evaluation immediately after any suspected fracture or deformity',
        'Urgent review if a cast feels overly tight or causes numbness, tingling, or color change in fingers/toes',
      ],
    },
  },
  {
    id: '12',
    slug: 'ankle-sprain-foot-injuries',
    orderNumber: '12',
    group: 'general',
    iconName: 'Move',
    imageKey: 'ankleCare',
    title: {
      bn: 'গোড়ালি মচকানো ও পায়ের আঘাত',
      en: 'Ankle Sprain & Foot Injuries',
    },
    shortSummary: {
      bn: 'গোড়ালি মচকানো, বারবার পা উল্টে যাওয়া, হিল ব্যথা ও পায়ের লিগামেন্টের চিকিৎসা।',
      en: 'Accurate fracture screening, ligament recovery, and balance rehabilitation for ankle and foot injuries.',
    },
    whatIsIt: {
      bn: 'অসমতল জায়গায় হাঁটা, সিঁড়ি থেকে পা ফসকে যাওয়া বা খেলাধুলার সময় গোড়ালি ভেতরের বা বাইরের দিকে ঘুরে গেলে এর লিগামেন্টগুলো টান খায় বা ছিঁড়ে যায়। সঠিকভাবে পুনর্বাসন না করলে দীর্ঘমেয়াদি গোড়ালির অস্থিরতা তৈরি হতে পারে।',
      en: 'Ankle sprains occur when the foot twists suddenly, overstretching or tearing the stabilizing ligaments around the ankle. Without proper rehabilitation, repeated instability or chronic pain can develop.',
    },
    commonSymptoms: {
      bn: [
        'গোড়ালির পাশে দ্রুত ফোলা, ব্যথা ও চামড়ায় রক্তজমাট দাগ',
        'পায়ে ভর দিয়ে হাঁটতে কষ্ট হওয়া',
        'পূর্বে মচকানোর পর থেকে বারবার গোড়ালি উল্টে যাওয়ার প্রবণতা',
      ],
      en: [
        'Swelling, bruising, and tenderness along the outer or inner ankle',
        'Pain during weight-bearing or uneven walking',
        'Recurrent feeling of ankle instability after previous sprains',
      ],
    },
    possibleCauses: {
      bn: [
        'অসমতল রাস্তা বা গর্তে পা পড়ে গোড়ালি মোচড়ানো',
        'খেলাধুলায় অবতরণের সময় ভুল পদক্ষেপ',
        'প্লান্টার ফ্যাসাইটিস বা একিলিস টেন্ডনের অতিরিক্ত চাপজনিত সমস্যা',
      ],
      en: [
        'Stepping on uneven ground or missing a curb/stair step',
        'Landing awkwardly during court or field sports',
        'Overuse foot issues such as plantar fasciitis or Achilles tendinopathy',
      ],
    },
    diagnosis: {
      bn: 'অটোয়া অ্যাঙ্কেল রুলস (Ottawa Ankle Rules) ও ক্লিনিক্যাল পরীক্ষার মাধ্যমে ফ্র্যাকচারের ঝুঁকি যাচাই করা হয় এবং প্রয়োজন হলে এক্স-রে করা হয়।',
      en: 'Clinical examination (including Ottawa Ankle screening criteria) distinguishes ligament sprains from fractures; X-rays are ordered when bone tenderness is present.',
    },
    treatmentApproaches: {
      bn: [
        'প্রাথমিক বিশ্রাম, বরফ প্রয়োগ, কমপ্রেশন ও পা উঁচু করে রাখা',
        'ফোলা কমার পর গোড়ালির ভারসাম্য (proprioception) ও শক্তি ফেরানোর ব্যায়াম',
        'গ্রেড অনুযায়ী অ্যাঙ্কেল ব্রেস ও উপযুক্ত জুতার পরামর্শ',
      ],
      en: [
        'Early swelling control, protection, and guided weight-bearing progression',
        'Structured balance-board, proprioception, and peroneal strengthening exercises',
        'Supportive ankle bracing and footwear advice to prevent chronic instability',
      ],
    },
    whenToConsult: {
      bn: [
        'আঘাতের পর চার কদমও পায়ে ভর দিয়ে হাঁটতে না পারলে',
        'কয়েক সপ্তাহ পরও গোড়ালি ফুলে থাকলে বা দুর্বল মনে হলে',
      ],
      en: [
        'Inability to walk four steps comfortably immediately after the injury',
        'Persistent swelling, catching, or repeated giving way weeks later',
      ],
    },
  },
  {
    id: '13',
    slug: 'joint-pain-musculoskeletal',
    orderNumber: '13',
    group: 'spine',
    iconName: 'HeartPulse',
    imageKey: 'clinic',
    title: {
      bn: 'জয়েন্টের ব্যথা ও মাংসপেশী-হাড়ের সমস্যা',
      en: 'Joint Pain & Musculoskeletal Conditions',
    },
    shortSummary: {
      bn: 'কনুই, কব্জি, নিতম্ব ও পেশী-টেন্ডনের দীর্ঘমেয়াদি ব্যথার কারণ নির্ণয় ও চিকিৎসা।',
      en: 'Holistic orthopedic pain management for tendonitis, bursitis, repetitive strain, and joint aches.',
    },
    whatIsIt: {
      bn: 'শরীরের যেকোনো অস্থিসন্ধি, টেন্ডন, বার্সা বা পেশীতে প্রদাহ, অতিরিক্ত ব্যবহার কিংবা বিপাকীয় কারণে ব্যথা হতে পারে—যেমন টেনিস এলবো, ডি কোয়ারভেইন টেনোসাইনোভাইটিস, হিপ জয়েন্ট ব্যথা বা গাউট।',
      en: 'Musculoskeletal pain spans tendons, bursae, muscles, and peripheral joints—including tennis elbow, wrist tendinitis, hip bursitis, and crystal or inflammatory arthropathies.',
    },
    commonSymptoms: {
      bn: [
        'কনুই, কব্জি, আঙুল বা নিতম্বে ব্যথা ও চাপ দিলে সংবেদনশীলতা',
        'সকালে বা কাজ শেষে জয়েন্ট শক্ত হয়ে আসা',
        'জয়েন্টে হালকা ফোলা বা ধরার শক্তি কমে যাওয়া',
      ],
      en: [
        'Localized soreness in the elbow, wrist, hip, or peripheral joints',
        'Morning stiffness or aching after repetitive daily chores',
        'Reduced grip strength or localized soft-tissue swelling',
      ],
    },
    possibleCauses: {
      bn: [
        'পুনরাবৃত্ত গৃহস্থালি বা অফিসের কাজে টেন্ডনের চাপ',
        'প্রদাহজনিত বাত বা ইউরিক অ্যাসিডজনিত সমস্যা',
        'ভিটামিন ডি বা পুষ্টিজনিত ঘাটতি ও পেশী দুর্বলতা',
      ],
      en: [
        'Repetitive manual tasks, typing, or occupational strain',
        'Metabolic or inflammatory joint irritation',
        'Muscle deconditioning or nutritional deficiencies',
      ],
    },
    diagnosis: {
      bn: 'বিস্তারিত ক্লিনিক্যাল ইতিহাস ও জয়েন্ট পরীক্ষার পাশাপাশি প্রয়োজনে রক্ত পরীক্ষা, এক্স-রে বা আল্ট্রাসাউন্ড মূল্যায়ন করা হয়।',
      en: 'Detailed history and physical localization, supplemented selectively by blood panels, X-ray, or ultrasound.',
    },
    treatmentApproaches: {
      bn: [
        'মূল কারণ চিহ্নিত করে নিরাপদ ওষুধ ও ফিজিওথেরাপি',
        'আর্গোনমিক পরিবর্তন ও সাপোর্টিভ স্প্লিন্ট',
        'দীর্ঘস্থায়ী ব্যথায় বহুমাত্রিক (Multimodal) ব্যথা ব্যবস্থাপনা',
      ],
      en: [
        'Targeted anti-inflammatory or condition-specific medical therapy',
        'Ergonomic modifications, splinting, and guided stretching',
        'Multimodal pain management designed around daily function',
      ],
    },
    whenToConsult: {
      bn: [
        'একাধিক জয়েন্টে ফোলা, গরম ভাব বা এক সপ্তাহের বেশি স্থায়ী ব্যথা হলে',
        'হাতের কাজে শক্তি কমে গেলে বা দৈনন্দিন কাজ ব্যাহত হলে',
      ],
      en: [
        'Warm, swollen joints or pain lasting longer than one to two weeks',
        'Noticeable loss of grip strength or functional limitation',
      ],
    },
  },
  {
    id: '14',
    slug: 'general-orthopedic-problems',
    orderNumber: '14',
    group: 'general',
    iconName: 'Stethoscope',
    imageKey: 'clinic',
    title: {
      bn: 'সাধারণ অর্থোপেডিক সমস্যা',
      en: 'General Orthopedic Problems',
    },
    shortSummary: {
      bn: 'বয়সভিত্তিক হাড়ের স্বাস্থ্য, ট্রিগার ফিঙ্গার, গ্যাংলিয়ন সিস্ট ও অন্যান্য অর্থোপেডিক পরামর্শ।',
      en: 'Everyday orthopedic evaluation including osteoporosis screening, trigger finger, and posture care.',
    },
    whatIsIt: {
      bn: 'দৈনন্দিন জীবনে হাড়, জয়েন্ট ও নরম টিস্যুর বিভিন্ন সাধারণ সমস্যা দেখা দেয়—যেমন আঙুল আটকে যাওয়া (ট্রিগার ফিঙ্গার), কব্জির ফোলা (গ্যাংলিয়ন), হাড় ক্ষয় (অস্টিওপোরোসিস), পায়ের তলার ব্যথা বা পেশীর খিঁচুনি।',
      en: 'General orthopedics covers common everyday conditions affecting bones, hands, feet, and posture—including trigger finger, ganglion cysts, plantar heel pain, and osteoporosis screening.',
    },
    commonSymptoms: {
      bn: [
        'আঙুল ভাঁজ করলে আটকে যাওয়া বা খোলার সময় শব্দ হওয়া',
        'কব্জি বা পায়ের পিঠে ছোট ব্যথাহীন বা হালকা ব্যথাযুক্ত ফোলা',
        'হালকা আঘাতে হাড় ভেঙে যাওয়ার প্রবণতা বা সামগ্রিক শরীরে ব্যথা',
      ],
      en: [
        'Catching or snapping of a finger when bending or straightening',
        'Small localized swelling near the wrist or foot tendons',
        'Generalized bone ache or fragility concerns in older adults',
      ],
    },
    possibleCauses: {
      bn: [
        'টেন্ডন শিথের প্রদাহ বা জয়েন্ট ক্যাপসুলের তরল জমা',
        'বয়স ও হরমোনজনিত কারণে হাড়ের ঘনত্ব হ্রাস',
        'দাঁড়ানো বা জুতার চাপজনিত পায়ের তলার সমস্যা',
      ],
      en: [
        'Tendon sheath thickening or localized joint fluid cysts',
        'Age- or hormone-related bone density reduction',
        'Footwear stress or prolonged standing on hard surfaces',
      ],
    },
    diagnosis: {
      bn: 'সরাসরি শারীরিক পরীক্ষা এবং প্রয়োজনে এক্স-রে, বিএমডি (BMD) টেস্ট বা আল্ট্রাসাউন্ডের মাধ্যমে সঠিক অবস্থা নির্ণয় করা হয়।',
      en: 'In-clinic physical evaluation complemented when needed by X-ray, bone density (DEXA) screening, or ultrasound.',
    },
    treatmentApproaches: {
      bn: [
        'আশ্বস্তিকর পর্যবেক্ষণ, জীবনযাত্রা ও জুতা/আর্গোনমিক পরামর্শ',
        'প্রয়োজনে স্প্লিন্টিং, পুষ্টি ও হাড় শক্তিশালীকরণ চিকিৎসা',
        'লক্ষণ তীব্র হলে নিরাপদ মাইনর প্রসিডিউর বা বিশেষায়িত পরামর্শ',
      ],
      en: [
        'Reassuring observation, footwear/ergonomic guidance, and stretching',
        'Splinting, bone health optimization, and targeted symptom relief',
        'Discussion of minor outpatient procedures only when persistent and symptomatic',
      ],
    },
    whenToConsult: {
      bn: [
        'হাত বা পায়ের কোনো ফোলা বড় হতে থাকলে বা ব্যথা বাড়ালে',
        '৫০ বছর বা তদূর্ধ্ব বয়সে হাড়ের স্বাস্থ্য পরীক্ষা ও ব্যথা মূল্যায়নের জন্য',
      ],
      en: [
        'Any soft-tissue lump that grows, causes nerve tingling, or limits movement',
        'Preventive bone health assessment or persistent aches in older adults',
      ],
    },
  },
];
