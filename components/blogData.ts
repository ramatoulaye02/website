export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  author: string;
  readTime: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-intelligence-into-play',
    title: 'building intelligence into play: how i think about game ai',
    date: 'Feb 14, 2026',
    excerpt:
      'a short look at how i blend game feel with ai systems, from tiny behaviors to full-on simulation vibes.',
    tags: ['ai', 'gamedev', 'systems'],
    author: 'Ramatoulaye Balde',
    readTime: '6 min read',
    sections: [
      {
        heading: 'why ai in games feels different',
        paragraphs: [
          'game ai is not about being "smart" all the time — it is about creating believable reactions and fun challenge loops.',
          'i care more about player emotion than perfect decisions. if a system makes you laugh, panic, or feel clever, it is doing its job.'
        ]
      },
      {
        heading: 'my favorite building blocks',
        paragraphs: [
          'i usually start with simple state machines or behavior trees, then add small randomness so patterns do not feel robotic.',
          'when i need deeper systems, i combine utility scoring, timers, and player telemetry to make the world feel alive.'
        ]
      },
      {
        heading: 'what i am experimenting with now',
        paragraphs: [
          'dynamic difficulty that adapts to player tempo, not just score. faster inputs should feel like the game is breathing with you.',
          'procedural encounters that remix enemy roles so every run feels slightly new but still learnable.'
        ]
      },
      {
        heading: 'takeaway',
        paragraphs: [
          'my goal is always the same: build systems that feel human, playful, and just unpredictable enough to stay exciting.',
          'if you want to jam on an idea like this, let us build something weird and beautiful.'
        ]
      }
    ]
  },
  {
    slug: 'vibe-coding-ai-ethics',
    title: 'vibe coding with ai: the ethics we cannot ignore',
    date: 'Feb 14, 2026',
    excerpt:
      'ai can speed up creative flow, but it also raises hard questions about authorship, bias, and responsibility. here is how i think about it.',
    tags: ['ai', 'ethics', 'dev'],
    author: 'Ramatoulaye Balde',
    readTime: '7 min read',
    sections: [
      {
        heading: 'the magic and the mess',
        paragraphs: [
          'vibe coding feels like turning ideas into reality at hyperspeed. it is empowering, but speed can hide cracks in quality and accountability.',
          'when ai writes or suggests code, i still own the outcome. that means i have to review, test, and understand what i ship.'
        ]
      },
      {
        heading: 'authorship and honesty',
        paragraphs: [
          'credit matters. if ai helped shape a solution, i try to be honest about the process, especially in public work or collaboration.',
          'transparency builds trust and keeps the creative process grounded in reality, not hype.'
        ]
      },
      {
        heading: 'bias and the invisible defaults',
        paragraphs: [
          'models reflect the data they are trained on. that means they can echo bias, stereotypes, or unsafe patterns if i do not check them.',
          'i treat outputs as a draft, not truth. i validate sources, test edge cases, and intentionally design for fairness.'
        ]
      },
      {
        heading: 'what i am aiming for',
        paragraphs: [
          'ai should be a creative amplifier, not a shortcut around responsibility. i want tools that help me build faster, while keeping craftsmanship and ethics intact.',
          'if we can pair speed with care, vibe coding becomes a superpower instead of a risk.'
        ]
      }
    ]
  }
];
