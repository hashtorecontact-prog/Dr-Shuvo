import type { BlogArticle } from '../types/content';

export const blogsPart1: BlogArticle[] = [
  {
    id: '1',
    slug: 'frozen-shoulder-symptoms-causes-treatment',
    category: 'shoulder',
    categoryLabel: { bn: 'কাঁধের যত্ন', en: 'Shoulder Care' },
    imageKey: 'blogClient1',
    imageAlt: {
      bn: 'কাঁধের গতিশীলতা ও পুনর্বাসন ব্যায়াম',
      en: 'Therapeutic shoulder mobility assessment in clinic',
    },
    publishedDate: '2026-10-18',
    publishedDateDisplay: { bn: '১৮ অক্টোবর ২০২৬', en: 'Oct 18, 2026' },
    readingTime: { bn: '৫ মিনিট পাঠ', en: '5 min read' },
    title: {
      bn: 'ফ্রোজেন শোল্ডার: লক্ষণ, কারণ এবং চিকিৎসা পদ্ধতি',
      en: 'Frozen Shoulder: Symptoms, Causes and Treatment',
    },
    excerpt: {
      bn: 'কাঁধ জমে যাওয়া বা অ্যাডহেসিভ ক্যাপসুলাইটিস কেন হয়, এর তিনটি ধাপ কী এবং নিরাপদ ফিজিওথেরাপি ও চিকিৎসার ভূমিকা জানুন।',
      en: 'Learn why adhesive capsulitis causes progressive shoulder stiffness, how its stages unfold, and what conservative care involves.',
    },
    sections: [
      {
        heading: {
          bn: 'ফ্রোজেন শোল্ডার কী এবং কেন হয়?',
          en: 'What Is Frozen Shoulder?',
        },
        paragraphs: {
          bn: [
            'ফ্রোজেন শোল্ডার বা অ্যাডহেসিভ ক্যাপসুলাইটিস হলো কাঁধের জয়েন্টের চারপাশের তন্তুময় আবরণ (জয়েন্ট ক্যাপসুল) মোটা, প্রদাহযুক্ত ও শক্ত হয়ে যাওয়ার একটি অবস্থা। এর ফলে বাহু স্বাভাবিক পরিসরে তোলা বা ঘোরানো ক্রমেই কষ্টকর হয়ে ওঠে।',
            'অনেক সময় সুনির্দিষ্ট কোনো আঘাত ছাড়াই এটি শুরু হতে পারে। তবে ডায়াবেটিস, থাইরয়েড সমস্যা, কিংবা কোনো আঘাত বা অস্ত্রোপচারের পর দীর্ঘদিন হাত না নাড়িয়ে রাখলে ঝুঁকি কিছুটা বেশি দেখা যায়।',
          ],
          en: [
            'Frozen shoulder—medically known as adhesive capsulitis—develops when the connective tissue capsule surrounding the shoulder joint becomes inflamed, thickened, and tight. As the capsule contracts, moving the arm freely becomes progressively more difficult.',
            'While it can arise without a clear trigger, it is seen more commonly in individuals living with diabetes, thyroid conditions, or after prolonged shoulder immobilization following an injury or surgery.',
          ],
        },
      },
      {
        heading: {
          bn: 'প্রধান লক্ষণ ও ধাপসমূহ',
          en: 'Recognizing the Symptoms and Stages',
        },
        paragraphs: {
          bn: [
            'সাধারণত ফ্রোজেন শোল্ডার তিনটি পর্যায়ক্রমিক ধাপে অগ্রসর হয়, এবং প্রতিটি ধাপের ব্যবস্থাপনা ভিন্ন হতে পারে:',
          ],
          en: [
            'The condition typically progresses gradually across three overlapping clinical phases:',
          ],
        },
        bullets: {
          bn: [
            'ফ্রিজিং পর্যায় (ব্যথা বৃদ্ধি): কাঁধে হালকা ব্যথা শুরু হয়ে ধীরে ধীরে বাড়ে, বিশেষ করে রাতে আক্রান্ত পাশে কাত হয়ে শুলে ঘুম ভেঙে যায়।',
            'ফ্রোজেন পর্যায় (শক্ত ভাব): তীব্র ব্যথা কিছুটা কমলেও কাঁধ অনেকটাই জমে যায়—চুল আঁচড়ানো, পোশাক পরা বা পিঠের দিকে হাত নেওয়া কঠিন হয়ে পড়ে।',
            'থয়িং পর্যায় (ধীরে ধীরে নমনীয়তা ফেরা): সঠিক চিকিৎসা ও নির্দেশিত ব্যায়ামের মাধ্যমে জয়েন্টের পরিসর ক্রমশ পুনরুদ্ধার হতে শুরু করে।',
          ],
          en: [
            'Freezing phase: Gradual onset of shoulder aching, often worse at night, accompanied by emerging stiffness.',
            'Frozen phase: Sharp pain may ease slightly, yet stiffness becomes pronounced, limiting overhead reaching and behind-the-back motion.',
            'Thawing phase: Range of motion begins to recover slowly with appropriate medical guidance and steady rehabilitation.',
          ],
        },
      },
      {
        heading: {
          bn: 'নিরাপদ চিকিৎসা ও বিশেষজ্ঞ পরামর্শের ভূমিকা',
          en: 'Treatment Approaches & Clinical Guidance',
        },
        paragraphs: {
          bn: [
            'প্রাথমিক অবস্থায় সঠিক রোগ নির্ণয় জরুরি, কারণ কাঁধের সব ব্যথাই ফ্রোজেন শোল্ডার নয়। চিকিৎসক শারীরিক পরীক্ষার মাধ্যমে রোটেটর কাফ বা হাড়ের আর্থ্রাইটিস থেকে এটি আলাদা করেন।',
            'চিকিৎসায় সাধারণত পর্যায় অনুযায়ী ব্যথা ও প্রদাহ নিয়ন্ত্রণের ওষুধ, কোমল ও নির্দেশিত স্ট্রেচিং ফিজিওথেরাপি এবং প্রয়োজনবোধে নির্দিষ্ট ক্লিনিক্যাল পদ্ধতি নিয়ে আলোচনা করা হয়। জোরপূর্বক বা অতিরিক্ত ব্যথা দিয়ে টানাটানি করলে ক্যাপসুলের প্রদাহ আরও বাড়তে পারে, তাই বিশেষজ্ঞের নির্দেশনা মেনে ব্যায়াম করা উচিত।',
          ],
          en: [
            'Accurate clinical examination is essential because other shoulder conditions—such as rotator cuff tears or arthritis—can feel similar early on. A key hallmark is restriction of both active and assisted passive rotation.',
            'Management is tailored to the current phase: controlling inflammatory pain first, followed by gentle, supervised range-of-motion stretching. Forcing aggressive stretches during an acutely inflamed phase can worsen discomfort, so guided clinical pacing matters.',
          ],
        },
      },
    ],
    keyTakeaway: {
      bn: 'রাতের ব্যথা ও হাত নাড়ানোর পরিসর কমতে থাকলে দেরি না করে অর্থোপেডিক বিশেষজ্ঞের মাধ্যমে সঠিক ধাপ নির্ণয় ও নিরাপদ পুনর্বাসন শুরু করুন।',
      en: 'If night shoulder pain and progressive stiffness interfere with daily tasks, consult an orthopedic specialist for stage-appropriate care rather than forcing painful stretches.',
    },
  },
  {
    id: '2',
    slug: 'understanding-acl-injuries-in-sports',
    category: 'sports',
    categoryLabel: { bn: 'স্পোর্টস ইনজুরি', en: 'Sports Injury' },
    imageKey: 'sportsKnee',
    imageAlt: {
      bn: 'খেলাধুলার মাঠে হাঁটুর সাপোর্ট ও স্পোর্টস ইনজুরি সচেতনতা',
      en: 'Athlete wearing dark compression knee sleeve on track',
    },
    publishedDate: '2026-10-25',
    publishedDateDisplay: { bn: '২৫ অক্টোবর ২০২৬', en: 'Oct 25, 2026' },
    readingTime: { bn: '৬ মিনিট পাঠ', en: '6 min read' },
    title: {
      bn: 'খেলাধুলায় এসিএল (ACL) ইনজুরি: কারণ, লক্ষণ ও করণীয়',
      en: 'Understanding ACL Injuries in Sports',
    },
    excerpt: {
      bn: 'ফুটবল, ক্রিকেট বা ব্যাডমিন্টনে হঠাৎ মোচড় লাগলে কেন ACL লিগামেন্ট ক্ষতিগ্রস্ত হয় এবং চিকিৎসার পর কীভাবে নিরাপদে খেলায় ফেরা যায়।',
      en: 'How anterior cruciate ligament injuries happen during pivoting sports, warning signs to watch for, and structured recovery options.',
    },
    sections: [
      {
        heading: {
          bn: 'এসিএল (ACL) লিগামেন্ট কী কাজ করে?',
          en: 'The Role of the ACL in Knee Stability',
        },
        paragraphs: {
          bn: [
            'হাঁটুর জয়েন্টের ভেতরে থাকা অ্যান্টেরিয়র ক্রুশিয়েট লিগামেন্ট (ACL) উরুর হাড় (ফিমার) এবং পায়ের নিচের হাড় (টিবিয়া)-এর মধ্যে সামনে-পেছনে ও ঘূর্ণনের সময় স্থিতিশীলতা বজায় রাখে।',
            'দ্রুত দৌড়ে হঠাৎ থামা, দিক পরিবর্তন করা অথবা লাফ দিয়ে মাটিতে নামার সময় হাঁটুতে অতিরিক্ত ঘূর্ণন বল তৈরি হলে এই লিগামেন্ট টান খেতে বা ছিঁড়ে যেতে পারে।',
          ],
          en: [
            'The anterior cruciate ligament (ACL) sits deep inside the knee joint, preventing the shinbone from sliding too far forward and stabilizing rotational movement during athletic maneuvers.',
            'In sports like football, cricket, basketball, and badminton, sudden deceleration, sharp cutting movements, or awkward jump landings place substantial rotational torque across the ACL.',
          ],
        },
      },
      {
        heading: {
          bn: 'আঘাতের পর সতর্কতামূলক লক্ষণ',
          en: 'Immediate Signs After a Knee Twist',
        },
        paragraphs: {
          bn: [
            'অনেক খেলোয়াড় আঘাতের মুহূর্তে হাঁটুর ভেতরে একটি “পপ” শব্দ বা অনুভূতি টের পান। এরপর সাধারণত নিচের লক্ষণগুলো দেখা যায়:',
          ],
          en: [
            'Many athletes report hearing or feeling a distinct “pop” at the moment of injury, typically followed by:',
          ],
        },
        bullets: {
          bn: [
            'আঘাতের প্রথম কয়েক ঘণ্টার মধ্যেই হাঁটু উল্লেখযোগ্যভাবে ফুলে ওঠা',
            'পায়ে পুরো ভর দিতে না পারা এবং হাঁটু ভাঁজ-সোজা করতে অসুবিধা',
            'হাঁটার বা ঘোরার সময় হাঁটু হঠাৎ “ছেড়ে দিচ্ছে” বা নড়ে যাচ্ছে এমন অস্থির অনুভূতি',
          ],
          en: [
            'Rapid joint swelling within the first few hours due to internal bleeding in the joint',
            'Pain and reluctance to bear full weight or fully straighten the knee',
            'A sensation of instability or the knee “giving way” when pivoting or stepping sideways',
          ],
        },
      },
      {
        heading: {
          bn: 'চিকিৎসা পরিকল্পনা সবার জন্য এক নয়',
          en: 'Individualized Treatment & Rehabilitation',
        },
        paragraphs: {
          bn: [
            'আঘাতের পরপরই হাঁটুকে সুরক্ষিত রাখা, ফোলা কমানো এবং দ্রুত অর্থোপেডিক ও স্পোর্টস ইনজুরি বিশেষজ্ঞের পরীক্ষা করানো জরুরি। ক্লিনিক্যাল টেস্ট ও এমআরআই পরীক্ষার মাধ্যমে শুধু ACL নয়, মেনিস্কাস বা অন্যান্য লিগামেন্টের অবস্থাও যাচাই করা হয়।',
            'প্রত্যেক রোগীর ক্ষেত্রেই সার্জারি জরুরি এমন নয়—দৈনন্দিন কার্যকলাপের চাহিদা, স্থিতিশীলতার সমস্যা এবং পুনরায় পিভোটিং খেলাধুলায় ফেরার লক্ষ্য অনুযায়ী কাঠামোবদ্ধ ফিজিওথেরাপি অথবা সার্জিক্যাল রিকনস্ট্রাকশন নিয়ে চিকিৎসক বিস্তারিত পরামর্শ দেন। যেকোনো পথই বেছে নেওয়া হোক না কেন, ধৈর্যশীল পুনর্বাসনই নিরাপদ প্রত্যাবর্তনের মূল চাবিকাঠি।',
          ],
          en: [
            'Prompt specialist assessment helps evaluate not only the ACL, but also potential meniscal or collateral ligament involvement via physical testing and MRI when indicated.',
            'Treatment is never one-size-fits-all. Depending on knee stability, age, daily demands, and athletic goals, options range from structured neuromuscular physiotherapy to ACL reconstruction counseling. Regardless of path, milestone-based rehabilitation is vital before returning to pivoting sports.',
          ],
        },
      },
    ],
    keyTakeaway: {
      bn: 'খেলার মাঠে হাঁটু মোচড় খেয়ে দ্রুত ফুলে গেলে খেলা চালিয়ে যাবেন না—সঠিক নির্ণয় ও স্থিতিশীলতা পরীক্ষার জন্য বিশেষজ্ঞের পরামর্শ নিন।',
      en: 'Do not continue playing on a swollen, unstable knee after a twisting injury; early specialist evaluation guides safe protection and recovery.',
    },
  },
  {
    id: '3',
    slug: 'knee-pain-causes-when-to-seek-advice',
    category: 'knee',
    categoryLabel: { bn: 'হাঁটুর স্বাস্থ্য', en: 'Knee Health' },
    imageKey: 'blogClient2',
    imageAlt: {
      bn: 'হাঁটুর জয়েন্টের হাড়, তরুণাস্থি ও লিগামেন্টের গঠন',
      en: 'Anatomical illustration of knee joint cartilage and ligaments',
    },
    publishedDate: '2026-11-02',
    publishedDateDisplay: { bn: '২ নভেম্বর ২০২৬', en: 'Nov 2, 2026' },
    readingTime: { bn: '৫ মিনিট পাঠ', en: '5 min read' },
    title: {
      bn: 'হাঁটুর ব্যথা: সাধারণ কারণ ও কখন চিকিৎসকের পরামর্শ নেবেন',
      en: 'Knee Pain: Common Causes and When to Seek Medical Advice',
    },
    excerpt: {
      bn: 'সিঁড়ি ভাঙতে বা নামাজে বসতে হাঁটুর ব্যথা কেন হয়, কখন ঘরোয়া বিশ্রাম যথেষ্ট আর কোন লক্ষণ দেখলে দ্রুত বিশেষজ্ঞ দেখানো উচিত।',
      en: 'Understanding everyday and structural triggers behind knee discomfort, and key warning signs that warrant medical consultation.',
    },
    sections: [
      {
        heading: {
          bn: 'হাঁটুর ব্যথার সাধারণ উৎসসমূহ',
          en: 'Common Sources of Knee Discomfort',
        },
        paragraphs: {
          bn: [
            'হাঁটু প্রতিদিন শরীরের সম্পূর্ণ ওজন বহন করে এবং চলাফেরা, বসা ও সিঁড়ি ভাঙার সময় কাজ করে। বয়স, কাজের ধরন ও শারীরিক গঠনের ওপর নির্ভর করে হাঁটুর ব্যথার কারণ ভিন্ন হতে পারে:',
          ],
          en: [
            'Because the knee absorbs substantial load during walking, stairs, and squatting, discomfort can stem from several distinct structures:',
          ],
        },
        bullets: {
          bn: [
            'অস্টিওআর্থ্রাইটিস: বয়স ও চাপের কারণে জয়েন্টের মসৃণ তরুণাস্থি পাতলা হয়ে যাওয়া।',
            'প্যাটেলোফেমোরাল বা সামনে হাঁটুর ব্যথা: সিঁড়ি নামা বা দীর্ঘক্ষণ হাঁটু ভাঁজ করে বসলে মালাইচাকির নিচে ব্যথা।',
            'মেনিস্কাস বা লিগামেন্ট সমস্যা: হঠাৎ মোচড় বা ভারী কাজের পর জয়েন্ট লাইনে ব্যথা ও অস্থিরতা।',
            'টেন্ডোনাইটিস বা বার্সাইটিস: অতিরিক্ত দৌড়ানো বা হাঁটু গেড়ে কাজ করার ফলে টেন্ডন বা তরল থলিতে প্রদাহ।',
          ],
          en: [
            'Osteoarthritis: Gradual thinning of protective joint cartilage causing stiffness and weight-bearing ache.',
            'Patellofemoral strain: Front-of-knee discomfort noticed on stairs, inclines, or after prolonged sitting.',
            'Meniscal or ligament injury: Joint-line pain, catching, or instability after a twist or awkward step.',
            'Tendinopathy or bursitis: Overuse inflammation around the kneecap tendon or surrounding bursae.',
          ],
        },
      },
      {
        heading: {
          bn: 'কখন চিকিৎসকের পরামর্শ নেওয়া জরুরি?',
          en: 'When Should You Consult a Specialist?',
        },
        paragraphs: {
          bn: [
            'হালকা পরিশ্রমজনিত ক্লান্তি অনেক সময় বিশ্রামে সেরে যায়, কিন্তু নিচের যেকোনো লক্ষণ দেখা দিলে স্ব-চিকিৎসা বা ব্যথানাশক ওষুধ দীর্ঘদিন চালিয়ে না গিয়ে চিকিৎসকের পরামর্শ নেওয়া উচিত:',
          ],
          en: [
            'While mild muscle fatigue after unaccustomed activity may settle with brief rest, clinical evaluation is advisable if you experience any of the following:',
          ],
        },
        bullets: {
          bn: [
            'দুই-তিন দিনের বিশ্রামের পরও হাঁটুর ব্যথা বা ফোলা না কমলে',
            'হাঁটু পুরোপুরি সোজা করতে না পারলে অথবা ভাঁজ করলে আটকে (লক) গেলে',
            'হাঁটার সময় হাঁটু বেঁকে যাচ্ছে বা ভর ধরে রাখতে পারছে না এমন মনে হলে',
            'হাঁটু লাল হয়ে গরম হয়ে উঠলে বা সাথে জ্বর থাকলে',
          ],
          en: [
            'Swelling or pain that fails to settle after a few days of reduced load',
            'Inability to fully straighten or bend the knee, or true joint locking',
            'Buckling or instability when standing or turning',
            'Visible redness, marked warmth over the joint, or accompanying fever',
          ],
        },
      },
      {
        heading: {
          bn: 'দীর্ঘমেয়াদি ব্যথানাশক নিজে থেকে সেবনের ঝুঁকি',
          en: 'Why Self-Medication Should Be Avoided',
        },
        paragraphs: {
          bn: [
            'চিকিৎসকের পরামর্শ ছাড়া নিয়মিত ব্যথানাশক ওষুধ খেলে পাকস্থলী, কিডনি বা রক্তচাপের ওপর বিরূপ প্রভাব পড়তে পারে এবং এতে মূল রোগটি আড়ালে থেকে যায়। সঠিক রোগ নির্ণয়ের পর পেশী শক্তিশালী করার ব্যায়াম ও উপযুক্ত নির্দেশনাই দীর্ঘমেয়াদে হাঁটুকে সুস্থ রাখতে সাহায্য করে।',
          ],
          en: [
            'Relying continuously on over-the-counter painkillers without a diagnosis can mask progressive joint issues and carry gastrointestinal or renal risks. Targeted strengthening and tailored medical guidance address the root mechanics safely.',
          ],
        },
      },
    ],
    keyTakeaway: {
      bn: 'ফোলা, লক হয়ে যাওয়া বা সপ্তাহের পর সপ্তাহ ধরে চলা হাঁটুর ব্যথার ক্ষেত্রে সঠিক কারণ নির্ণয়ের জন্য অর্থোপেডিক মূল্যায়ন করান।',
      en: 'Persistent swelling, locking, or recurring weight-bearing knee pain warrants an accurate orthopedic evaluation rather than long-term painkiller use.',
    },
  },
];
