import type { TreatmentItem } from '../types/content';

export const treatmentsKneeShoulder: TreatmentItem[] = [
  {
    id: '1',
    slug: 'knee-pain-joint-problems',
    orderNumber: '01',
    group: 'knee',
    iconName: 'Activity',
    imageKey: 'kneeAnatomy',
    title: {
      bn: 'হাঁটুর ব্যথা ও হাঁটুর জয়েন্টের সমস্যা',
      en: 'Knee Pain & Knee Joint Problems',
    },
    shortSummary: {
      bn: 'সিঁড়ি ভাঙতে ব্যথা, হাঁটু ফোলা, শক্ত ভাব বা চলাফেরায় অস্বস্তির কারণ নির্ণয় ও সমন্বিত চিকিৎসা।',
      en: 'Clinical assessment and individualized care for stair-climbing pain, joint swelling, stiffness, or mechanical knee discomfort.',
    },
    whatIsIt: {
      bn: 'হাঁটু শরীরের অন্যতম বৃহৎ ও ওজন বহনকারী অস্থিসন্ধি। হাড়, তরুণাস্থি (কার্টিলেজ), মেনিস্কাস, লিগামেন্ট এবং টেন্ডনের সমন্বয়ে গঠিত এই জয়েন্টে প্রদাহ, ক্ষয় বা আঘাতজনিত কারণে ব্যথা ও চলাফেরার সীমাবদ্ধতা দেখা দিতে পারে।',
      en: 'The knee is one of the body’s largest weight-bearing joints, relying on coordinated function of bone, articular cartilage, menisci, ligaments, and tendons. Strain, degeneration, or injury to any of these structures can cause pain and limit daily mobility.',
    },
    commonSymptoms: {
      bn: [
        'হাঁটা, সিঁড়ি ওঠানামা বা নামাজ-বসার সময় ব্যথা বৃদ্ধি',
        'হাঁটুর চারপাশে ফোলাভাব বা গরম অনুভব হওয়া',
        'সকালে বা দীর্ঘক্ষণ বসে থাকার পর জয়েন্ট শক্ত হয়ে যাওয়া',
        'হাঁটু ভাঁজ বা সোজা করার সময় খটখট শব্দ বা আটকে যাওয়ার অনুভূতি',
      ],
      en: [
        'Pain aggravated by walking, climbing stairs, or squatting',
        'Swelling or warmth around the knee joint',
        'Stiffness after waking up or sitting for prolonged periods',
        'Clicking, catching, or reduced range of knee flexion and extension',
      ],
    },
    possibleCauses: {
      bn: [
        'বয়সজনিত বা অতিরিক্ত ব্যবহারজনিত তরুণাস্থি ক্ষয় (অস্টিওআর্থ্রাইটিস)',
        'খেলার মাঠ বা দৈনন্দিন দুর্ঘটনায় লিগামেন্ট বা মেনিস্কাসে আঘাত',
        'প্যাটেলা (হাঁটুর মালাইচাকি) ট্র্যাকিং সমস্যা বা টেন্ডোনাইটিস',
        'অতিরিক্ত ওজন, প্রদাহজনিত আর্থ্রাইটিস বা পূর্বে সঠিকভাবে চিকিৎসা না হওয়া আঘাত',
      ],
      en: [
        'Cartilage wear and tear (osteoarthritis) or repetitive mechanical stress',
        'Sports or fall-related ligament, cartilage, or meniscal trauma',
        'Patellofemoral tracking discomfort or patellar tendinitis',
        'Excessive joint load, inflammatory conditions, or prior unaddressed injury',
      ],
    },
    diagnosis: {
      bn: 'রোগীর ব্যথার ধরন ও ইতিহাস জানার পর হাঁটুর স্থিতিশীলতা, নড়াচড়ার পরিসর ও ফোলাভাব পরীক্ষা করা হয়। প্রয়োজন অনুযায়ী ওজন-বহনকারী এক্স-রে বা নরম টিস্যু মূল্যায়নের জন্য এমআরআই পরামর্শ দেওয়া হতে পারে।',
      en: 'Diagnosis begins with a detailed history and targeted physical examination of joint alignment, stability, and range of motion. Weight-bearing X-rays or MRI may be advised when clinically indicated.',
    },
    treatmentApproaches: {
      bn: [
        'কারণ অনুযায়ী ব্যথা ও প্রদাহ নিয়ন্ত্রণের ওষুধ',
        'মাংসপেশী শক্তিশালীকরণ ও জয়েন্টের ভারসাম্য রক্ষায় লক্ষ্যভিত্তিক ফিজিওথেরাপি',
        'প্রয়োজনে হাঁটুর সাপোর্ট বা ব্রেসিং এবং দৈনন্দিন ভঙ্গি পরিবর্তন',
        'জটিল বা রক্ষণশীল চিকিৎসায় সাড়া না দেওয়া ক্ষেত্রে উপযুক্ত ইন্টারভেনশনাল বা সার্জিক্যাল পরামর্শ',
      ],
      en: [
        'Targeted medication when appropriate to manage pain and inflammation',
        'Structured physiotherapy focusing on quadriceps, hip, and hamstring support',
        'Activity modification, ergonomic guidance, and selective bracing',
        'Interventional or surgical counseling when conservative management is insufficient',
      ],
    },
    whenToConsult: {
      bn: [
        'কয়েক দিনের বিশ্রামেও ব্যথা বা ফোলা না কমলে',
        'পায়ে ভর দিতে না পারলে বা হাঁটু হঠাৎ লক হয়ে গেলে',
        'হাঁটুর সাথে জ্বর, লালচে ভাব বা তীব্র অস্থিরতা দেখা দিলে',
      ],
      en: [
        'Pain or swelling persists despite short-term rest',
        'Inability to bear weight comfortably or sudden joint locking',
        'Associated fever, noticeable redness, or recurring instability',
      ],
    },
  },
  {
    id: '2',
    slug: 'acl-injury',
    orderNumber: '02',
    group: 'knee',
    iconName: 'ShieldCheck',
    imageKey: 'sportsKnee',
    title: {
      bn: 'এসিএল (ACL) ইনজুরি',
      en: 'ACL Injury',
    },
    shortSummary: {
      bn: 'খেলাধুলা বা মোচড়ের আঘাতে হাঁটুর অ্যান্টেরিয়র ক্রুশিয়েট লিগামেন্ট ছিঁড়ে যাওয়া বা আঘাতের মূল্যায়ন।',
      en: 'Comprehensive evaluation and management planning for anterior cruciate ligament sprains and tears.',
    },
    whatIsIt: {
      bn: 'অ্যান্টেরিয়র ক্রুশিয়েট লিগামেন্ট (ACL) হলো হাঁটুর অভ্যন্তরের একটি প্রধান লিগামেন্ট, যা উরু ও পায়ের নিচের হাড়ের মধ্যে সামনে-পেছনে ও ঘূর্ণনজনিত স্থিতিশীলতা বজায় রাখে। হঠাৎ দিক পরিবর্তন, লাফিয়ে নামা বা সরাসরি আঘাতে এটি টান খেতে বা ছিঁড়ে যেতে পারে।',
      en: 'The anterior cruciate ligament (ACL) is a central stabilizing band inside the knee that controls forward and rotational movement of the shinbone. Sudden pivoting, awkward landing, or direct impact can stretch or tear this ligament.',
    },
    commonSymptoms: {
      bn: [
        'আঘাতের মুহূর্তে হাঁটুর ভেতরে “পপ” বা ছিঁড়ে যাওয়ার মতো শব্দ অনুভব',
        'আঘাতের কয়েক ঘণ্টার মধ্যে হাঁটু দ্রুত ফুলে ওঠা',
        'হাঁটার সময় বা ঘুরতে গেলে হাঁটু সরে যাচ্ছে বা ছেড়ে দিচ্ছে (giving way) এমন মনে হওয়া',
        'হাঁটু পুরোপুরি সোজা বা ভাঁজ করতে অসুবিধা',
      ],
      en: [
        'A noticeable “pop” sensation inside the knee at the time of injury',
        'Rapid joint swelling developing within the first several hours',
        'Feeling that the knee gives way or feels unstable during pivoting',
        'Loss of full knee extension or pain with weight-bearing',
      ],
    },
    possibleCauses: {
      bn: [
        'ফুটবল, ক্রিকেট, ব্যাডমিন্টন বা বাস্কেটবলের মতো খেলায় হঠাৎ থামা বা দিক পরিবর্তন',
        'লাফ দেওয়ার পর ভারসাম্যহীনভাবে মাটিতে নামা',
        'হাঁটুতে পাশ থেকে ধাক্কা বা সড়ক দুর্ঘটনা',
      ],
      en: [
        'Sudden deceleration or cutting maneuvers in football, cricket, or court sports',
        'Awkward landing from a jump with knee rotation',
        'Direct lateral impact to the knee or road traffic trauma',
      ],
    },
    diagnosis: {
      bn: 'বিশেষজ্ঞ চিকিৎসক ল্যাকম্যান টেস্ট ও অ্যান্টেরিয়র ড্রয়ার টেস্টের মতো ক্লিনিক্যাল পরীক্ষার মাধ্যমে লিগামেন্টের স্থিতিশীলতা যাচাই করেন এবং নিশ্চিত মূল্যায়ন ও মেনিস্কাসের অবস্থা দেখতে এমআরআই (MRI) পরামর্শ দেন।',
      en: 'Clinical ligament stability tests (such as the Lachman and pivot-shift assessments) paired with MRI imaging confirm the degree of tear and inspect nearby menisci or cartilage.',
    },
    treatmentApproaches: {
      bn: [
        'প্রাথমিক পর্যায়ে ফোলা কমানো, সুরক্ষিত ব্রেসিং ও স্বাভাবিক চলাচল ফিরিয়ে আনার পুনর্বাসন',
        'রোগীর বয়স, দৈনন্দিন চাহিদা ও খেলাধুলায় ফেরার লক্ষ্য অনুযায়ী নন-সার্জিক্যাল ফিজিওথেরাপি অথবা এসিএল রিকনস্ট্রাকশন সার্জারি নিয়ে বিস্তারিত আলোচনা',
        'মেনিস্কাস বা অন্যান্য লিগামেন্টের সহ-আঘাত থাকলে সমন্বিত ব্যবস্থাপনা',
      ],
      en: [
        'Initial swelling control, protective bracing, and range-of-motion restoration',
        'Individualized decision-making between structured non-surgical rehabilitation and ACL reconstruction counseling based on stability demands and lifestyle',
        'Assessment and management of associated meniscal or collateral ligament injuries',
      ],
    },
    whenToConsult: {
      bn: [
        'আঘাতের পরপরই হাঁটু দ্রুত ফুলে গেলে বা ভর দিতে না পারলে',
        'দৈনন্দিন হাঁটাচলার সময় হাঁটু অস্থির মনে হলে বা বারবার ঘুরে গেলে',
      ],
      en: [
        'Immediate rapid swelling or inability to walk steadily after a twist injury',
        'Recurrent episodes of the knee buckling during everyday walking or stairs',
      ],
    },
  },
  {
    id: '3',
    slug: 'meniscus-injury',
    orderNumber: '03',
    group: 'knee',
    iconName: 'Compass',
    imageKey: 'kneeAnatomy',
    title: {
      bn: 'মেনিস্কাস ইনজুরি',
      en: 'Meniscus Injury',
    },
    shortSummary: {
      bn: 'হাঁটুর শক-অ্যাবজর্বার তরুণাস্থি ছিঁড়ে যাওয়া, জয়েন্ট আটকে যাওয়া ও ব্যথার সঠিক মূল্যায়ন।',
      en: 'Diagnosis and tailored care for medial and lateral meniscal tears causing joint-line pain or locking.',
    },
    whatIsIt: {
      bn: 'প্রতিটি হাঁটুতে C-আকৃতির দুটি শক্তিশালী তরুণাস্থি প্যাড থাকে, যেগুলোকে মেনিস্কাস বলা হয়। এগুলো হাঁটুর হাড়ের মধ্যকার ঘর্ষণ কমায় এবং শরীরের ওজন সামঞ্জস্যপূর্ণভাবে ছড়িয়ে দেয়। পা মাটিতে স্থির রেখে হাঁটু ঘুরলে বা বয়সজনিত ক্ষয়ে মেনিস্কাস ছিঁড়ে যেতে পারে।',
      en: 'Each knee contains two C-shaped fibrocartilage cushions—the medial and lateral menisci—that absorb shock and distribute weight across the joint. Twisting motions or age-related tissue thinning can lead to a tear.',
    },
    commonSymptoms: {
      bn: [
        'হাঁটুর ভেতরের বা বাইরের সংযোগ রেখায় নির্দিষ্ট স্থানে ব্যথা',
        'হাঁটু ভাঁজ-সোজা করার সময় আটকে যাওয়া বা “লক” হয়ে যাওয়ার অনুভূতি',
        'বসা থেকে উঠতে বা হাঁটু মুড়ে বসতে কষ্ট হওয়া',
        'ধীরে ধীরে বা কাজ শেষে হাঁটু ফুলে ওঠা',
      ],
      en: [
        'Localized tenderness along the inner or outer joint line of the knee',
        'Mechanical catching, clicking, or true locking when bending or straightening',
        'Discomfort with deep squatting, kneeling, or rising from low seats',
        'Delayed or activity-related knee swelling',
      ],
    },
    possibleCauses: {
      bn: [
        'খেলাধুলা বা ভারী কাজের সময় পা স্থির রেখে হঠাৎ শরীর ঘোরানো',
        'গভীর স্কোয়াট বা ভারী ওজন তোলার সময় চাপ পড়া',
        'মধ্যবয়স বা প্রবীণদের ক্ষেত্রে ক্ষয়জনিত মেনিস্কাস টিয়ার',
      ],
      en: [
        'Forceful twisting of the knee while the foot remains planted',
        'Deep squatting or heavy lifting under load',
        'Degenerative meniscal changes developing gradually over time',
      ],
    },
    diagnosis: {
      bn: 'জয়েন্ট-লাইন টেন্ডারনেস এবং ম্যাকমারে বা থেসালি পরীক্ষার মতো ক্লিনিক্যাল টেস্টের পর প্রয়োজনে এমআরআই স্ক্যানের মাধ্যমে টিয়ারের ধরন ও অবস্থান নির্ধারণ করা হয়।',
      en: 'Physical joint-line palpation and provocative clinical tests, complemented by MRI when needed, clarify the tear pattern and healing potential.',
    },
    treatmentApproaches: {
      bn: [
        'ছোট বা ক্ষয়জনিত টিয়ারে বিশ্রাম, প্রদাহ-রোধী ব্যবস্থা ও পেশী শক্তিশালীকরণ ফিজিওথেরাপি',
        'হাঁটু বারবার লক হয়ে গেলে বা বড় যান্ত্রিক টিয়ারে আর্থ্রোস্কোপিক রিপেয়ার বা ট্রিমিং সংক্রান্ত পরামর্শ',
        'তরুণাস্থি সুরক্ষায় ওজন নিয়ন্ত্রণ ও নিরাপদ ব্যায়াম নির্দেশনা',
      ],
      en: [
        'Conservative rehabilitation, load management, and targeted strengthening for stable or degenerative tears',
        'Arthroscopic meniscal repair or debridement counseling when mechanical locking or unstable tears persist',
        'Long-term joint protection and safe return-to-activity planning',
      ],
    },
    whenToConsult: {
      bn: [
        'হাঁটু পুরোপুরি সোজা করতে না পারলে বা জয়েন্ট আটকে গেলে',
        'চলাফেরায় নিয়মিত জয়েন্ট-লাইন ব্যথা ও ফোলা থাকলে',
      ],
      en: [
        'Inability to fully straighten the knee or persistent locking sensations',
        'Ongoing joint-line pain and swelling interfering with daily walking',
      ],
    },
  },
  {
    id: '4',
    slug: 'ligament-injuries',
    orderNumber: '04',
    group: 'knee',
    iconName: 'Move',
    imageKey: 'sportsKnee',
    title: {
      bn: 'লিগামেন্ট ইনজুরি',
      en: 'Ligament Injuries',
    },
    shortSummary: {
      bn: 'MCL, LCL, PCL ও গোড়ালি-কাঁধের লিগামেন্ট টান বা ছিঁড়ে যাওয়ার গ্রেডভিত্তিক চিকিৎসা।',
      en: 'Graded clinical management for collateral, cruciate, and peripheral joint ligament sprains.',
    },
    whatIsIt: {
      bn: 'লিগামেন্ট হলো শক্তিশালী তন্তুময় টিস্যু যা একটি হাড়কে অন্য হাড়ের সাথে যুক্ত করে জয়েন্টকে স্থিতিশীল রাখে। পড়ে যাওয়া, খেলাধুলা বা হঠাৎ টানের ফলে লিগামেন্ট হালকা টান খাওয়া (গ্রেড ১) থেকে শুরু করে সম্পূর্ণ ছিঁড়ে যাওয়া (গ্রেড ৩) পর্যন্ত হতে পারে।',
      en: 'Ligaments are tough fibrous bands connecting bone to bone to maintain joint stability. Sudden trauma or overstretching can produce injuries ranging from mild microscopic stretching (Grade I) to complete rupture (Grade III).',
    },
    commonSymptoms: {
      bn: [
        'আঘাতপ্রাপ্ত জয়েন্টের পাশে ব্যথা, ফোলা ও কালশিটে দাগ',
        'জয়েন্ট ঢিলেঢালা বা অস্থিতিশীল মনে হওয়া',
        'আঘাতের পর জয়েন্ট নাড়াতে বা ওজন নিতে কষ্ট হওয়া',
      ],
      en: [
        'Localized pain, swelling, and bruising around the affected joint',
        'Sensation of joint looseness or instability during movement',
        'Difficulty bearing weight or using the limb smoothly',
      ],
    },
    possibleCauses: {
      bn: [
        'হাঁটু বা গোড়ালিতে পাশ থেকে ধাক্কা লাগা (MCL/LCL বা ATFL ইনজুরি)',
        'সড়ক দুর্ঘটনায় ড্যাশবোর্ডে হাঁটু ধাক্কা খাওয়া (PCL ইনজুরি)',
        'অসমতল রাস্তায় পা মচকে যাওয়া বা পড়ে গিয়ে হাতে ভর দেওয়া',
      ],
      en: [
        'Lateral impact or valgus/varus stress on the knee (MCL/LCL)',
        'Dashboard impact or hyperflexion trauma (PCL)',
        'Missteps on uneven surfaces or outstretched-hand falls',
      ],
    },
    diagnosis: {
      bn: 'বিশেষজ্ঞ চিকিৎসক জয়েন্টের প্রতিটি লিগামেন্টের স্থিতিশীলতা পরীক্ষা করেন এবং হাড়ের চিড় বাদ দিতে এক্স-রে ও নরম টিস্যু দেখতে আল্ট্রাসাউন্ড বা এমআরআই পরামর্শ দেন।',
      en: 'Targeted stability grading in the clinic, supported by X-rays to exclude avulsion fractures and MRI/ultrasound where appropriate.',
    },
    treatmentApproaches: {
      bn: [
        'গ্রেড অনুযায়ী হিঞ্জড ব্রেস বা স্প্লিন্টের মাধ্যমে জয়েন্ট সুরক্ষা',
        'ব্যথা ও ফোলা নিয়ন্ত্রণ এবং পর্যায়ক্রমিক রেঞ্জ-অব-মোশন পুনর্বাসন',
        'মাল্টি-লিগামেন্ট বা গুরুতর অস্থিরতার ক্ষেত্রে সার্জিক্যাল মূল্যায়ন',
      ],
      en: [
        'Grade-specific protection with hinged bracing or supportive taping',
        'Structured physiotherapy to restore proprioception and muscle support',
        'Surgical consultation reserved for severe instability or multi-ligament trauma',
      ],
    },
    whenToConsult: {
      bn: [
        'আঘাতের পর জয়েন্ট অস্বাভাবিকভাবে নড়ে গেলে বা স্থির না থাকলে',
        'প্রাথমিক ৪৮–৭২ ঘণ্টায় ফোলা ও ব্যথা তীব্র হতে থাকলে',
      ],
      en: [
        'Noticeable joint laxity or feeling that the joint slips out of place',
        'Severe swelling or inability to move the joint comfortably within 48–72 hours',
      ],
    },
  },
  {
    id: '5',
    slug: 'sports-injuries',
    orderNumber: '05',
    group: 'knee',
    iconName: 'Zap',
    imageKey: 'sportsKnee',
    title: {
      bn: 'স্পোর্টস ইনজুরি',
      en: 'Sports Injuries',
    },
    shortSummary: {
      bn: 'অ্যাথলেট ও নিয়মিত ব্যায়ামকারীদের মাসল পুল, টেন্ডন প্রদাহ ও জয়েন্ট আঘাতের চিকিৎসা ও পুনর্বাসন।',
      en: 'Evidence-informed diagnosis and return-to-sport planning for acute and overuse athletic injuries.',
    },
    whatIsIt: {
      bn: 'খেলাধুলা, দৌড়ানো বা জিম অনুশীলনের সময় হঠাৎ আঘাত (acute injury) কিংবা অতিরিক্ত অনুশীলনজনিত ক্ষুদ্র আঘাত (overuse injury) থেকে পেশী, টেন্ডন, লিগামেন্ট ও হাড় ক্ষতিগ্রস্ত হতে পারে।',
      en: 'Sports injuries encompass both sudden traumatic events during play and gradual overuse stress affecting muscles, tendons, ligaments, and bones in athletes and active individuals.',
    },
    commonSymptoms: {
      bn: [
        'অনুশীলন বা খেলার সময় তীক্ষ্ণ ব্যথা বা পেশীতে টান ধরা',
        'নির্দিষ্ট জয়েন্ট বা টেন্ডনে চাপ দিলে ব্যথা ও শক্ত ভাব',
        'খেলা বা দৌড়ানোর পর পুনরায় ফোলা বা পারফরম্যান্স কমে যাওয়া',
      ],
      en: [
        'Sharp onset pain during play or localized muscle strain',
        'Tenderness over tendons or joints during warm-up and cool-down',
        'Recurrent post-exercise swelling or reduced athletic stability',
      ],
    },
    possibleCauses: {
      bn: [
        'পর্যাপ্ত ওয়ার্ম-আপ ছাড়া হঠাৎ তীব্র অনুশীলন',
        'ভুল খেলার কৌশল বা অনুপযুক্ত জুতা ব্যবহার',
        'পেশীর ক্লান্তি ও বিশ্রামের ঘাটতি',
      ],
      en: [
        'Insufficient warm-up or sudden spikes in training intensity',
        'Biomechanical overload, faulty technique, or unsuitable footwear',
        'Muscle fatigue and inadequate recovery intervals',
      ],
    },
    diagnosis: {
      bn: 'আঘাতের ধরন, খেলার মেকানিজম ও বায়োমেকানিক্যাল দুর্বলতা মূল্যায়ন করে প্রয়োজনে মাস্কুলোস্কেলেটাল আল্ট্রাসাউন্ড বা এমআরআই করা হয়।',
      en: 'Assessment of injury mechanics, neuromuscular balance, and targeted imaging (ultrasound, X-ray, or MRI) when clinically warranted.',
    },
    treatmentApproaches: {
      bn: [
        'অতিরিক্ত ও দীর্ঘমেয়াদি বিশ্রামের বদলে নিরাপদ ও ধাপে ধাপে সক্রিয় পুনর্বাসন',
        'টেন্ডন ও পেশীর শক্তি, ফ্লেক্সিবিলিটি এবং ভারসাম্য পুনরুদ্ধার প্রোগ্রাম',
        'নিরাপদে খেলায় ফেরার (Return-to-Sport) বাস্তবসম্মত সময়সীমা ও প্রতিরোধ নির্দেশনা',
      ],
      en: [
        'Progressive load management rather than prolonged unstructured inactivity',
        'Targeted rehabilitation addressing strength, flexibility, and neuromuscular control',
        'Safe, milestone-based return-to-sport counseling and recurrence prevention',
      ],
    },
    whenToConsult: {
      bn: [
        'আঘাতের পর স্বাভাবিকভাবে হাঁটা বা অঙ্গ ব্যবহার করতে না পারলে',
        'একই ব্যথা বারবার অনুশীলনের সময় ফিরে এলে',
      ],
      en: [
        'Pain preventing normal walking or athletic mechanics',
        'Recurring tendon or joint discomfort with each training session',
      ],
    },
  },
  {
    id: '6',
    slug: 'shoulder-pain',
    orderNumber: '06',
    group: 'shoulder',
    iconName: 'HeartPulse',
    imageKey: 'shoulderRehab',
    title: {
      bn: 'কাঁধের ব্যথা',
      en: 'Shoulder Pain',
    },
    shortSummary: {
      bn: 'হাত তুলতে কষ্ট, রাতে ঘুমাতে ব্যথা বা কাঁধের ইম্পিঞ্জমেন্ট ও জয়েন্ট সমস্যার সঠিক নির্ণয়।',
      en: 'Differential diagnosis and individualized treatment for overhead pain, impingement, and shoulder discomfort.',
    },
    whatIsIt: {
      bn: 'কাঁধ শরীরের সবচেয়ে নমনীয় জয়েন্ট, যা বিস্তৃত পরিসরে হাত নাড়াতে সাহায্য করে। তবে এর জটিল গঠনের কারণে টেন্ডন চাপ খাওয়া (impingement), বার্সাইটিস, ফ্রোজেন শোল্ডার, রোটেটর কাফ সমস্যা কিংবা ঘাড় থেকে আসা ব্যথা সহজেই দৈনন্দিন কাজ ব্যাহত করে।',
      en: 'The shoulder is the body’s most mobile joint, making it susceptible to tendon impingement, bursitis, rotator cuff irritation, adhesive capsulitis, joint arthritis, or referred pain from the cervical spine.',
    },
    commonSymptoms: {
      bn: [
        'মাথার ওপর হাত তোলা, পোশাক পরা বা পিঠের দিকে হাত নিতে ব্যথা',
        'আক্রান্ত কাঁধের ওপর কাত হয়ে ঘুমাতে অসুবিধা ও রাতের ব্যথা',
        'হাত নাড়াতে দুর্বলতা বা ঘাড়-কাঁধ জুড়ে টান অনুভব',
      ],
      en: [
        'Pain when reaching overhead, dressing, or reaching behind the back',
        'Nighttime aching, especially when lying on the affected shoulder',
        'Reduced lifting strength or discomfort radiating down the upper arm',
      ],
    },
    possibleCauses: {
      bn: [
        'রোটেটর কাফ টেন্ডোনাইটিস বা সাবঅ্যাক্রোমিয়াল ইম্পিঞ্জমেন্ট',
        'ফ্রোজেন শোল্ডার (অ্যাডহেসিভ ক্যাপসুলাইটিস)',
        'কাঁধের জয়েন্ট অস্থিরতা, পড়ে আঘাত বা সারভাইকাল স্পাইন থেকে রেফার্ড ব্যথা',
      ],
      en: [
        'Rotator cuff tendinopathy or subacromial impingement',
        'Adhesive capsulitis (frozen shoulder)',
        'Joint instability, AC joint strain, or referred cervical nerve pain',
      ],
    },
    diagnosis: {
      bn: 'কাঁধের সক্রিয় ও নিষ্ক্রিয় নড়াচড়া, শক্তি ও স্ক্যাপুলার ভঙ্গি পরীক্ষা করে আসল উৎস আলাদা করা হয় এবং প্রয়োজনে এক্স-রে বা আল্ট্রাসাউন্ড/এমআরআই পরামর্শ দেওয়া হয়।',
      en: 'Structured examination comparing active and passive motion, scapular mechanics, and cervical screening—supported by imaging when indicated.',
    },
    treatmentApproaches: {
      bn: [
        'ব্যথার প্রকৃত কারণ অনুযায়ী ওষুধ ও লক্ষ্যভিত্তিক কাঁধ-স্ক্যাপুলা ফিজিওথেরাপি',
        'দৈনন্দিন ভঙ্গি ও কাজের ধরনে সামঞ্জস্য আনা',
        'প্রয়োজনবোধে আল্ট্রাসাউন্ড-নির্দেশিত বা ক্লিনিক্যাল ইনজেকশন থেরাপি নিয়ে আলোচনা',
      ],
      en: [
        'Cause-specific medication paired with progressive scapular and rotator cuff rehabilitation',
        'Postural and ergonomic adjustments for desk or overhead work',
        'Consideration of targeted injection or surgical counseling only when indicated',
      ],
    },
    whenToConsult: {
      bn: [
        'রাতের ব্যথায় ঘুম ভেঙে গেলে বা হাতের নড়াচড়া ক্রমশ কমে গেলে',
        'পড়ে যাওয়ার পর কাঁধে তীব্র ব্যথা বা হাত তুলতে না পারলে',
      ],
      en: [
        'Night pain disrupting sleep or progressive loss of shoulder motion',
        'Sudden weakness or severe pain following a fall or lifting injury',
      ],
    },
  },
  {
    id: '7',
    slug: 'frozen-shoulder',
    orderNumber: '07',
    group: 'shoulder',
    iconName: 'ShieldCheck',
    imageKey: 'shoulderRehab',
    title: {
      bn: 'ফ্রোজেন শোল্ডার',
      en: 'Frozen Shoulder',
    },
    shortSummary: {
      bn: 'কাঁধ জমে যাওয়া, তীব্র রাতের ব্যথা ও হাত নাড়ানোর সীমাবদ্ধতার ধাপে ধাপে চিকিৎসা।',
      en: 'Stage-appropriate pain relief and guided mobilization for adhesive capsulitis (frozen shoulder).',
    },
    whatIsIt: {
      bn: 'ফ্রোজেন শোল্ডার বা অ্যাডহেসিভ ক্যাপসুলাইটিস হলো এমন একটি অবস্থা যেখানে কাঁধের জয়েন্টের চারপাশের ক্যাপসুল মোটা ও শক্ত হয়ে যায়। এর ফলে কাঁধে ব্যথা হয় এবং ধীরে ধীরে নিজে থেকে কিংবা অন্যের সাহায্যেও হাত নাড়ানো কঠিন হয়ে পড়ে।',
      en: 'Frozen shoulder (adhesive capsulitis) occurs when the connective capsule surrounding the shoulder joint thickens and tightens, leading to pain and progressive stiffness in both active and passive motion.',
    },
    commonSymptoms: {
      bn: [
        'প্রথম ধাপে (Freezing) ধীরে ধীরে বাড়া ব্যথা, বিশেষত রাতে',
        'দ্বিতীয় ধাপে (Frozen) কাঁধ অত্যন্ত শক্ত হয়ে যাওয়া—হাত তোলা বা ঘোরাতে বাধা',
        'ডায়াবেটিস বা থাইরয়েড সমস্যায় আক্রান্ত রোগীদের মধ্যে তুলনামূলক বেশি দেখা যায়',
      ],
      en: [
        'Gradual onset of dull, aching shoulder pain often worse at night',
        'Progressive stiffness limiting elevation and external rotation',
        'Difficulty with everyday tasks such as combing hair or fastening garments',
      ],
    },
    possibleCauses: {
      bn: [
        'ডায়াবেটিস মেলিটাস বা থাইরয়েডের ভারসাম্যহীনতা',
        'আঘাত বা সার্জারির পর দীর্ঘদিন হাত না নাড়িয়ে স্লিংয়ে রাখা',
        'অনেক সময় কোনো সুনির্দিষ্ট পূর্বকারণ ছাড়াই (Idiopathic) এটি শুরু হতে পারে',
      ],
      en: [
        'Metabolic associations such as diabetes or thyroid disorders',
        'Prolonged shoulder immobilization after trauma or surgery',
        'Idiopathic capsule inflammation without a clear prior injury',
      ],
    },
    diagnosis: {
      bn: 'অন্যের সাহায্যেও কাঁধের নড়াচড়া (বিশেষত বাইরের দিকে ঘোরানো) সীমিত থাকা ক্লিনিক্যাল পরীক্ষায় ফ্রোজেন শোল্ডারের অন্যতম প্রধান লক্ষণ; হাড়ের আর্থ্রাইটিস বাদ দিতে এক্স-রে করা হতে পারে।',
      en: 'Clinical finding of restricted passive and active rotation—especially external rotation—often distinguishes frozen shoulder; X-rays help rule out arthritis or bony causes.',
    },
    treatmentApproaches: {
      bn: [
        'ব্যথা-প্রধান পর্যায়ে ব্যথা নিয়ন্ত্রণ ও কোমল পরিসরের পেন্ডুলাম স্ট্রেচিং',
        'তীব্রতা অনুযায়ী নিয়ন্ত্রিত জয়েন্ট স্ট্রেচিং ফিজিওথেরাপি প্রোগ্রাম',
        'ব্যথা অত্যধিক হলে ফিজিওথেরাপি সহজ করতে নির্দিষ্ট চিকিৎসা পদ্ধতি নিয়ে পরামর্শ',
      ],
      en: [
        'Stage-tailored pain management and gentle, non-forcing range-of-motion exercises',
        'Supervised progressive stretching as inflammatory pain subsides',
        'Targeted medical options discussed if pain blocks sleep or rehabilitation progress',
      ],
    },
    whenToConsult: {
      bn: [
        'কয়েক সপ্তাহ ধরে কাঁধ শক্ত হয়ে আসা ও রাতের ব্যথা বাড়তে থাকলে',
        'ডায়াবেটিস থাকলে এবং কাঁধে প্রথম দিকের টান অনুভব করলে',
      ],
      en: [
        'Progressive shoulder stiffness and sleep-disrupting pain lasting several weeks',
        'Early shoulder tightness especially in patients managing diabetes',
      ],
    },
  },
];
