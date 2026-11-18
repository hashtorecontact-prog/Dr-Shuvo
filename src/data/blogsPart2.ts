import type { BlogArticle } from '../types/content';

export const blogsPart2: BlogArticle[] = [
  {
    id: '4',
    slug: 'meniscus-injury-symptoms-diagnosis-treatment',
    category: 'knee',
    categoryLabel: { bn: 'হাঁটুর স্বাস্থ্য', en: 'Knee Health' },
    imageKey: 'kneeAnatomy',
    imageAlt: {
      bn: 'মেনিস্কাস ও হাঁটুর অভ্যন্তরীণ তরুণাস্থি কাঠামো',
      en: 'Medical visualization of knee menisci and cartilage',
    },
    publishedDate: '2026-11-06',
    publishedDateDisplay: { bn: '৬ নভেম্বর ২০২৬', en: 'Nov 6, 2026' },
    readingTime: { bn: '৫ মিনিট পাঠ', en: '5 min read' },
    title: {
      bn: 'মেনিস্কাস ইনজুরি: উপসর্গ, রোগ নির্ণয় ও চিকিৎসা',
      en: 'Meniscus Injury: Symptoms, Diagnosis and Treatment',
    },
    excerpt: {
      bn: 'হাঁটুর শক-অ্যাবজর্বার মেনিস্কাস ছিঁড়ে গেলে কী কী লক্ষণ দেখা দেয়, কীভাবে পরীক্ষা করা হয় এবং সব ক্ষেত্রে কি অপারেশন লাগে?',
      en: 'Explore how meniscal tears are evaluated clinically, why locking occurs, and when conservative rehab versus arthroscopy is considered.',
    },
    sections: [
      {
        heading: {
          bn: 'হাঁটুর মেনিস্কাস কী?',
          en: 'Understanding the Meniscus',
        },
        paragraphs: {
          bn: [
            'হাঁটুর ভেতরে উরু ও পায়ের হাড়ের মাঝে C-আকৃতির দুটি স্থিতিস্থাপক তরুণাস্থি প্যাড থাকে—যাদের মিডিয়াল ও ল্যাটারাল মেনিস্কাস বলা হয়। এগুলো প্রতিটি পদক্ষেপে হাঁটুর ওপর পড়া চাপ শোষণ করে এবং জয়েন্টকে মসৃণ রাখে।',
          ],
          en: [
            'Between the thighbone and shinbone sit two crescent-shaped fibrocartilage cushions—the medial and lateral menisci. They act as precision shock absorbers and stabilize load across the knee cartilage.',
          ],
        },
      },
      {
        heading: {
          bn: 'মেনিস্কাস ছিঁড়ে যাওয়ার প্রধান উপসর্গ',
          en: 'Common Signs of a Meniscal Tear',
        },
        paragraphs: {
          bn: [
            'তরুণ খেলোয়াড়দের ক্ষেত্রে হঠাৎ হাঁটু ঘুরলে এটি ছিঁড়তে পারে; আবার মধ্যবয়সী ব্যক্তিদের ক্ষেত্রে দৈনন্দিন বসা থেকে ওঠার সময়ও ক্ষয়জনিত টিয়ার দেখা দিতে পারে। সাধারণ লক্ষণগুলোর মধ্যে রয়েছে:',
          ],
          en: [
            'While athletes often tear a meniscus during a forceful twist, middle-aged adults can develop tears gradually from normal wear. Key symptoms include:',
          ],
        },
        bullets: {
          bn: [
            'হাঁটুর ভেতরের বা বাইরের প্রান্ত বরাবর নির্দিষ্ট ব্যথা',
            'হাঁটু ভাঁজ বা সোজা করার সময় আটকে যাওয়া বা ক্লিক শব্দ',
            'গভীরভাবে বসতে (স্কোয়াট) বা সিঁড়ি ভাঙতে কষ্ট হওয়া',
            'পরিশ্রমের পর হাঁটুতে হালকা থেকে মাঝারি ফোলাভাব',
          ],
          en: [
            'Sharp or aching tenderness along the inner or outer knee joint line',
            'Mechanical catching, clicking, or a sensation that the knee locks mid-motion',
            'Pain with deep bending, squatting, or pivoting in bed',
            'Intermittent joint swelling hours after physical activity',
          ],
        },
      },
      {
        heading: {
          bn: 'সব মেনিস্কাস টিয়ারেই কি সার্জারি প্রয়োজন হয়?',
          en: 'Diagnosis & Treatment Decisions',
        },
        paragraphs: {
          bn: [
            'চিকিৎসক হাঁটুর জয়েন্ট-লাইন পরীক্ষা ও বিশেষ ক্লিনিক্যাল টেস্টের পর প্রয়োজনে এমআরআই (MRI) দেখে টিয়ারের আকার ও ধরন মূল্যায়ন করেন।',
            'অনেক স্থিতিশীল ও ক্ষয়জনিত টিয়ারে সার্জারির প্রয়োজন হয় না—বরং উরু ও নিতম্বের পেশী শক্তিশালী করার ফিজিওথেরাপি ও কার্যক্রম সমন্বয়ের মাধ্যমে ভালো উন্নতি হতে পারে। তবে হাঁটু যদি বারবার সত্যিকারভাবে লক হয়ে যায় বা তরুণ রোগীদের মেরামতযোগ্য বড় টিয়ার থাকে, তবে চিকিৎসক আর্থ্রোস্কোপিক মেনিস্কাস রিপেয়ার বা চিকিৎসার সুবিধা-অসুবিধা নিয়ে আলোচনা করেন।',
          ],
          en: [
            'After physical joint-line tests, MRI imaging helps clarify the tear location and blood supply zone. Importantly, not every meniscal tear requires surgery.',
            'Many stable or degenerative tears respond well to targeted quadriceps and hip rehabilitation and activity pacing. Arthroscopic repair or selective trimming is typically discussed when true mechanical locking persists or a repairable tear threatens long-term joint function.',
          ],
        },
      },
    ],
    keyTakeaway: {
      bn: 'মেনিস্কাস সমস্যায় নিজে থেকে ব্যায়াম বা ভারী স্কোয়াট না করে এমআরআই ও ক্লিনিক্যাল মূল্যায়নের ওপর ভিত্তি করে উপযুক্ত চিকিৎসা বেছে নিন।',
      en: 'Avoid deep weighted squatting on a painful, catching knee—seek a clinical exam to determine whether structured rehab or procedural care fits best.',
    },
  },
  {
    id: '5',
    slug: 'shoulder-pain-is-it-always-frozen-shoulder',
    category: 'shoulder',
    categoryLabel: { bn: 'কাঁধের যত্ন', en: 'Shoulder Care' },
    imageKey: 'blogClient3',
    imageAlt: {
      bn: 'অর্থোপেডিক কনসাল্টেশন কক্ষ ও জয়েন্ট মূল্যায়ন',
      en: 'Modern orthopedic consultation room for joint assessment',
    },
    publishedDate: '2026-11-10',
    publishedDateDisplay: { bn: '১০ নভেম্বর ২০২৬', en: 'Nov 10, 2026' },
    readingTime: { bn: '৪ মিনিট পাঠ', en: '4 min read' },
    title: {
      bn: 'কাঁধের ব্যথা: সব ব্যথাই কি ফ্রোজেন শোল্ডার?',
      en: 'Shoulder Pain: Is It Always Frozen Shoulder?',
    },
    excerpt: {
      bn: 'কাঁধে ব্যথা হলেই অনেকে ফ্রোজেন শোল্ডার ধরে নেন। রোটেটর কাফ, ইম্পিঞ্জমেন্ট এবং ঘাড়ের স্নায়ু ব্যথার পার্থক্য জানুন।',
      en: 'Shoulder discomfort is frequently assumed to be frozen shoulder—discover other common causes and why accurate differentiation matters.',
    },
    sections: [
      {
        heading: {
          bn: 'ভুল ধারণার ঝুঁকি কেন?',
          en: 'Why Assuming Every Shoulder Ache Is Frozen Shoulder Can Delay Relief',
        },
        paragraphs: {
          bn: [
            'রোগীরা প্রায়ই কাঁধে ব্যথা বা হাত তুলতে কষ্ট হলে সেটিকে “ফ্রোজেন শোল্ডার” মনে করেন। কিন্তু বাস্তবে কাঁধের ব্যথার একাধিক আলাদা কারণ থাকতে পারে, এবং প্রতিটির চিকিৎসা পদ্ধতি ভিন্ন।',
          ],
          en: [
            'Many patients understandably label any painful or stiff shoulder as “frozen shoulder.” Yet several distinct conditions produce overlapping symptoms while requiring very different care strategies.',
          ],
        },
      },
      {
        heading: {
          bn: 'কাঁধের ব্যথার অন্যান্য সাধারণ কারণ',
          en: 'Other Frequent Causes of Shoulder Pain',
        },
        paragraphs: {
          bn: [
            'ক্লিনিক্যাল পরীক্ষায় নিচের অবস্থাগুলো প্রায়ই আলাদাভাবে শনাক্ত করা হয়:',
          ],
          en: [
            'During an orthopedic consultation, a specialist evaluates several key possibilities:',
          ],
        },
        bullets: {
          bn: [
            'রোটেটর কাফ টেন্ডোনাইটিস বা টিয়ার: এখানে অন্য কেউ সাহায্য করলে হাত ওপরে তোলা সম্ভব হতে পারে, কিন্তু নিজে তুলতে ব্যথা বা দুর্বলতা থাকে।',
            'সাবঅ্যাক্রোমিয়াল ইম্পিঞ্জমেন্ট ও বার্সাইটিস: হাত ৬০ থেকে ১২০ ডিগ্রি কোণে তোলার সময় মাঝপথে তীক্ষ্ণ ব্যথা অনুভব হয়।',
            'সারভাইকাল স্পাইন বা ঘাড় থেকে আসা ব্যথা: ঘাড়ের স্নায়ুতে চাপ থাকলে ব্যথা কাঁধ ও বাহু বেয়ে নিচে নামতে পারে এবং ঝিনঝিন ভাব থাকতে পারে।',
            'অ্যাক্রোমিওক্ল্যাভিকুলার (AC) জয়েন্ট আর্থ্রাইটিস: কাঁধের একদম ওপরের হাড়ের সংযোগস্থলে ব্যথা।',
          ],
          en: [
            'Rotator cuff tendinopathy or tear: Active lifting feels weak or painful, whereas assisted passive range may remain comparatively preserved.',
            'Subacromial impingement or bursitis: Often causes a painful arc specifically when raising the arm sideways.',
            'Cervical radiculopathy (referred neck pain): Nerve root irritation in the neck can project aching, tingling, or numbness into the shoulder blade and arm.',
            'Acromioclavicular (AC) joint strain: Localized tenderness directly over the top collar-bone joint.',
          ],
        },
      },
      {
        heading: {
          bn: 'সঠিক নির্ণয়ের গুরুত্ব',
          en: 'Tailored Treatment Starts With the Right Diagnosis',
        },
        paragraphs: {
          bn: [
            'উদাহরণস্বরূপ, রোটেটর কাফ টিয়ারে জোরালো স্ট্রেচিং ব্যথা বাড়িয়ে দিতে পারে, অথচ ফ্রোজেন শোল্ডারে নিয়ন্ত্রিত স্ট্রেচিং উপকারী। তাই ব্যথা শুরু হলে অনুমানের ওপর ভিত্তি করে চিকিৎসা না করে সঠিক পরীক্ষার মাধ্যমে কারণ নিশ্চিত করা জরুরি।',
          ],
          en: [
            'Aggressive stretching may help a stiff frozen shoulder capsule in its thawing phase, but can aggravate an acute rotator cuff tear or pinched cervical nerve. Confirming the true source ensures safe, targeted rehabilitation.',
          ],
        },
      },
    ],
    keyTakeaway: {
      bn: 'কাঁধের ব্যথার ধরন, দুর্বলতা এবং ঘাড়ের সম্পৃক্ততা পরীক্ষা করে আসল কারণ নিশ্চিত হওয়াই দ্রুত আরোগ্যের প্রথম ধাপ।',
      en: 'Not all shoulder pain is frozen shoulder—distinguishing tendon, bursa, capsule, and cervical causes prevents counterproductive exercises.',
    },
  },
  {
    id: '6',
    slug: 'ankle-sprain-what-to-do-after-injury',
    category: 'ankle',
    categoryLabel: { bn: 'গোড়ালি ও পা', en: 'Ankle & Foot' },
    imageKey: 'ankleCare',
    imageAlt: {
      bn: 'গোড়ালির সাপোর্টিভ টেপিং ও ভারসাম্য পুনর্বাসন',
      en: 'Ankle taping and balance rehabilitation pad in clinic',
    },
    publishedDate: '2026-11-14',
    publishedDateDisplay: { bn: '১৪ নভেম্বর ২০২৬', en: 'Nov 14, 2026' },
    readingTime: { bn: '৫ মিনিট পাঠ', en: '5 min read' },
    title: {
      bn: 'গোড়ালি মচকানো: আঘাতের পর কী করবেন?',
      en: 'Ankle Sprain: What Should You Do After an Injury?',
    },
    excerpt: {
      bn: 'পা মচকে গেলে প্রথম ৪৮ ঘণ্টার সঠিক প্রাথমিক যত্ন, কোন ভুলগুলো এড়ানো উচিত এবং কখন হাড় ভাঙা নিশ্চিত করতে এক্স-রে জরুরি।',
      en: 'Practical first-48-hour steps after an ankle twist, common mistakes like forceful massaging to avoid, and signs that require X-ray screening.',
    },
    sections: [
      {
        heading: {
          bn: 'আঘাতের পর প্রথম ৪৮ ঘণ্টার নিরাপদ পদক্ষেপ',
          en: 'First 48 Hours: Safe Initial Care',
        },
        paragraphs: {
          bn: [
            'সিঁড়ি বা রাস্তায় পা মচকে গেলে সাধারণত গোড়ালির বাইরের দিকের লিগামেন্ট টান খায় বা আংশিক ছিঁড়ে যায়। চিকিৎসকের কাছে পৌঁছানোর আগে প্রাথমিক সুরক্ষার জন্য শান্তভাবে নিচের পদক্ষেপগুলো নেওয়া যেতে পারে:',
          ],
          en: [
            'Most ankle sprains occur when the foot rolls inward, stretching the outer ligaments. While arranging clinical review, calm initial protection helps control swelling:',
          ],
        },
        bullets: {
          bn: [
            'সুরক্ষা ও বিশ্রাম: আক্রান্ত পায়ে জোর করে হাঁটা বন্ধ রাখুন।',
            'ঠান্ডা সেঁক (বরফ): কাপড়ে মোড়ানো বরফ ১৫–২০ মিনিট করে দিনে কয়েকবার দিন (সরাসরি চামড়ায় নয়)।',
            'হালকা কমপ্রেশন ও পা উঁচু রাখা: সহনীয় চাপে ইলাস্টিক ব্যান্ডেজ এবং বসার বা শোয়ার সময় বালিশের ওপর পা তুলে রাখা ফোলা কমাতে সাহায্য করে।',
          ],
          en: [
            'Protection & relative rest: Avoid pushing through sharp pain or continuing sports.',
            'Cold application: Apply a cloth-wrapped ice pack for 15–20 minutes at intervals during the first 24–48 hours.',
            'Gentle elevation: Resting the ankle above heart level helps reduce throbbing and swelling.',
          ],
        },
      },
      {
        heading: {
          bn: 'যে ভুলগুলো এড়িয়ে চলা উচিত',
          en: 'Common Mistakes to Avoid',
        },
        paragraphs: {
          bn: [
            'আঘাতের পরপরই তীব্র গরম সেঁক দেওয়া বা অনভিজ্ঞভাবে গোড়ালি টানাটানি ও জোরে মালিশ করলে ভেতরের রক্তক্ষরণ ও ফোলা আরও বেড়ে যেতে পারে এবং হাড়ের চিড় থাকলে তা জটিল হতে পারে।',
          ],
          en: [
            'Applying strong heat immediately, or undergoing forceful twisting and deep massage right after an ankle injury, can worsen internal bleeding, increase swelling, and aggravate an unrecognized hairline fracture.',
          ],
        },
      },
      {
        heading: {
          bn: 'কখন অবশ্যই চিকিৎসক দেখাবেন ও এক্স-রে করবেন?',
          en: 'When to Seek Medical Assessment',
        },
        paragraphs: {
          bn: [
            'গোড়ালির মচকানো অনেক সময় ছোট হাড় ভাঙার মতোই মনে হতে পারে। বিশেষত নিচের লক্ষণগুলো থাকলে দ্রুত অর্থোপেডিক মূল্যায়ন প্রয়োজন:',
          ],
          en: [
            'Because ankle fractures can mimic severe sprains, clinical examination is essential if you notice:',
          ],
        },
        bullets: {
          bn: [
            'আঘাতের পর চার কদমও পায়ে ভর দিয়ে হাঁটতে না পারা',
            'গোড়ালির হাড়ের গাঁটে বা পায়ের মাঝখানে চাপ দিলে তীব্র ব্যথা',
            'দ্রুত অস্বাভাবিক ফোলা, বিকৃতি বা পায়ের আঙুলে অবশ ভাব',
          ],
          en: [
            'Inability to walk four steps with weight on the injured foot',
            'Point tenderness directly over the bony ankle prominences or midfoot',
            'Rapid severe swelling, visible deformity, or numbness in the foot',
          ],
        },
      },
    ],
    keyTakeaway: {
      bn: 'সঠিক প্রাথমিক যত্নের পর ব্যালেন্স ও শক্তি ফেরানোর পুনর্বাসন সম্পূর্ণ না করলে গোড়ালি ভবিষ্যতে বারবার মচকানোর ঝুঁকিতে থাকে।',
      en: 'Never skip balance and strengthening rehabilitation once swelling subsides—incomplete recovery is the top reason ankle sprains recur.',
    },
  },
];
