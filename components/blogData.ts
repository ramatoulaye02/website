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
    date: 'Feb 14, 2025',
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
    date: 'Mar 22, 2025',
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
  },
  {
    slug: 'top-5-greatest-video-games',
    title: 'Top 5 Greatest Video Games of the Last Decade (2015–2025)',
    date: 'Apr 17, 2025',
    excerpt:
      'The games that actually shifted the culture, rewired expectations, or made grown adults sit in silence during the credits.',
    tags: ['gaming', 'culture', 'analysis'],
    author: 'Ramatoulaye Balde',
    readTime: '8 min read',
    sections: [
      {
        paragraphs: [
          'This list isn\'t "highest Metacritic." It\'s not "most copies sold." It\'s the games that actually shifted the culture, rewired expectations, or made grown adults sit in silence during the credits.'
        ]
      },
      {
        heading: '1. The Witcher 3: Wild Hunt (2015)',
        paragraphs: [
          'Yes, technically 2015. Yes, it still counts. This game permanently altered how people think about side quests. Before Witcher 3, side quests were XP padding. After Witcher 3, they were mini Greek tragedies. The Bloody Baron storyline alone is more emotionally coherent than entire AAA campaigns. It proved open worlds could be morally complex instead of just geographically large.'
        ]
      },
      {
        heading: '2. The Legend of Zelda: Breath of the Wild (2017)',
        paragraphs: [
          'This one changed design philosophy. It threw away checklist open-world design and said, "What if we just trust the player?" Physics systems over scripted sequences. Emergent gameplay over hand-holding. You don\'t "unlock" fun. You experiment into it. Every open-world game after 2017 has Breath of the Wild\'s shadow on it.'
        ]
      },
      {
        heading: '3. Red Dead Redemption 2 (2018)',
        paragraphs: [
          'Rockstar built a simulation, not just a game. NPC schedules. Wildlife ecosystems. Snow deformation physics. But what makes it GOAT-tier isn\'t the tech — it\'s Arthur Morgan. The slow-burn narrative, the meditation on mortality, the quiet campfire conversations. It\'s one of the few AAA games that felt literary.'
        ]
      },
      {
        heading: '4. Elden Ring (2022)',
        paragraphs: [
          'FromSoftware took Souls design and said, "What if we remove friction without removing pain?" It respected player intelligence. No quest markers. No glowing breadcrumbs. Just vibes, cryptic dialogue, and "figure it out." And millions did. It proved players don\'t need constant instruction — they need trust.'
        ]
      },
      {
        heading: '5. Baldur\'s Gate 3 (2023)',
        paragraphs: [
          'This is the first time in a long time that "player choice matters" wasn\'t marketing. Entire questlines vanish based on decisions. Companion arcs feel reactive, not decorative. It also showed AAA polish and CRPG depth don\'t have to be mutually exclusive.',
          'Honorable mentions: Undertale, Hades, Disco Elysium, Minecraft (still), and Cyberpunk 2077 (after redemption arc patching).'
        ]
      }
    ]
  },
  {
    slug: 'training-llms-for-beginners',
    title: 'Best Ways to Train LLMs as a Beginner (Without Burning $50K on GPUs)',
    date: 'June 16, 2025',
    excerpt:
      'If you\'re new and your first thought is "I\'m going to train GPT-5 from scratch," relax. You are not OpenAI.',
    tags: ['ai', 'machine-learning', 'tutorial'],
    author: 'Ramatoulaye Balde',
    readTime: '7 min read',
    sections: [
      {
        paragraphs: [
          'If you\'re new and your first thought is "I\'m going to train GPT-5 from scratch," relax. You are not OpenAI. And your GPU probably cries during Minecraft shaders.',
          'Here\'s the real path.'
        ]
      },
      {
        heading: 'Step 1: Stop Thinking "Train," Start Thinking "Fine-Tune"',
        paragraphs: [
          'Training from scratch requires insane data and compute. Beginners should fine-tune small open-source models (like LLaMA variants or Mistral). Learn what gradients actually do. Learn what overfitting feels like.'
        ]
      },
      {
        heading: 'Step 2: Data > Architecture',
        paragraphs: [
          'Your dataset matters more than your clever tweaks. Garbage in = hallucinating philosopher model. Clean, structured data with consistent formatting is half the battle.'
        ]
      },
      {
        heading: 'Step 3: Learn LoRA',
        paragraphs: [
          'Low-Rank Adaptation (LoRA) lets you fine-tune large models efficiently. It\'s beginner-friendly and doesn\'t require supercomputer budgets.'
        ]
      },
      {
        heading: 'Step 4: Evaluate Like a Skeptic',
        paragraphs: [
          'Don\'t just vibe-check outputs. Build test prompts. Track failure cases. Create adversarial examples. Ask: where does it break?'
        ]
      },
      {
        heading: 'Step 5: Study Alignment & Bias',
        paragraphs: [
          'You are shaping behavior. Even small fine-tunes can amplify bias. Read about RLHF, safety tuning, and dataset filtering.',
          'Realistically, as a beginner, your goal isn\'t "train the smartest model." It\'s "understand the training pipeline deeply enough that nothing feels magical."'
        ]
      }
    ]
  },
  {
    slug: 'ai-in-education-dangers',
    title: 'AI in Education: The Danger of Having an LLM Genius in Your Pocket',
    date: 'Sep 16, 2025',
    excerpt:
      'We now have 24/7 access to something that explains calculus better than most professors at 3am. That\'s insane. It\'s also dangerous.',
    tags: ['ai', 'education', 'ethics'],
    author: 'Ramatoulaye Balde',
    readTime: '6 min read',
    sections: [
      {
        paragraphs: [
          'We now have 24/7 access to something that explains calculus better than most professors at 3am.',
          'That\'s insane.',
          'It\'s also dangerous.'
        ]
      },
      {
        heading: 'The problem isn\'t cheating. The problem is cognitive atrophy.',
        paragraphs: [
          'When an LLM can instantly:',
          'Summarize chapters',
          'Solve homework',
          'Draft essays',
          'Generate code',
          'You stop struggling.',
          'And struggle is literally how the brain wires competence.',
          'If students outsource friction, they outsource growth.'
        ]
      },
      {
        heading: 'Authority illusion',
        paragraphs: [
          'LLMs speak confidently even when wrong. A 17-year-old isn\'t going to cross-check everything. If it "sounds smart," it feels true.',
          'There\'s also equity issues. The student who uses AI as a tutor gains massive leverage. The one who doesn\'t falls behind.'
        ]
      },
      {
        heading: 'AI in education is incredible when used as scaffolding',
        paragraphs: [
          'Explain concepts differently.',
          'Generate practice problems.',
          'Offer feedback loops.',
          'But if it becomes a cognitive crutch, we risk raising a generation that can prompt brilliantly but reason shallowly.'
        ]
      }
    ]
  },
  {
    slug: 'simulation-hypothesis',
    title: 'Why I Think We Might Live in a Simulation',
    date: 'Dec 16, 2025',
    excerpt:
      'Nick Bostrom\'s argument is probabilistic, not sci-fi. If advanced civilizations can simulate conscious minds cheaply, then statistically, simulated minds vastly outnumber original biological ones.',
    tags: ['philosophy', 'simulation', 'theory'],
    author: 'Ramatoulaye Balde',
    readTime: '7 min read',
    sections: [
      {
        paragraphs: [
          'Nick Bostrom\'s argument is probabilistic, not sci-fi.',
          'He says one of these must be true:',
          '1. Civilizations never reach simulation capability.',
          '2. They reach it but never run ancestor simulations.',
          '3. We are almost certainly in one.'
        ]
      },
      {
        heading: 'The math',
        paragraphs: [
          'If advanced civilizations can simulate conscious minds cheaply, then statistically, simulated minds vastly outnumber original biological ones.',
          'Meaning: odds are you\'re in a rendered environment.',
          'What makes this compelling isn\'t vibes. It\'s math.',
          'If there are trillions of simulations and one base reality, the probability you\'re base reality is tiny.'
        ]
      },
      {
        heading: 'Objections?',
        paragraphs: [
          '"We\'d detect glitches." Not necessarily.',
          '"Physics looks continuous." Does it? Quantum discreteness looks suspiciously computational.',
          '"Why simulate suffering?" Why do we simulate wars in games?'
        ]
      },
      {
        heading: 'The takeaway',
        paragraphs: [
          'Even if it\'s false, the hypothesis reframes reality as potentially computational. That alone changes philosophy, ethics, and physics conversations.',
          'It\'s less "we\'re in The Matrix" and more "statistically, base reality is unlikely."'
        ]
      }
    ]
  },
  {
    slug: 'top-10-greatest-anime',
    title: 'Top 10 Greatest Anime of All Time (Yes I\'m Ready to Be Attacked)',
    date: 'Feb 11, 2026',
    excerpt:
      'This is consensus-core Reddit energy, not personal niche picks. These consistently show up in polls, discussions, MAL top lists, and heated comment wars.',
    tags: ['anime', 'culture', 'ranking'],
    author: 'Ramatoulaye Balde',
    readTime: '5 min read',
    sections: [
      {
        paragraphs: [
          'This is consensus-core Reddit energy, not personal niche picks.'
        ]
      },
      {
        heading: 'The List',
        paragraphs: [
          '1. Fullmetal Alchemist: Brotherhood',
          '2. Attack on Titan',
          '3. Steins;Gate',
          '4. Neon Genesis Evangelion',
          '5. Cowboy Bebop',
          '6. Hunter x Hunter (2011)',
          '7. Death Note',
          '8. One Piece',
          '9. Gurren Lagann',
          '10. Mob Psycho 100'
        ]
      },
      {
        heading: 'Why these?',
        paragraphs: [
          'Because they consistently show up in polls, discussions, MAL top lists, and heated comment wars.',
          'FMA:B is narratively airtight. AoT redefined mainstream anime hype. Evangelion broke people psychologically. Steins;Gate is peak time travel writing. Mob Psycho is emotional maturity disguised as shonen.',
          'You can debate order. You can swap one out. But if your top 10 has none of these, you\'re being contrarian.'
        ]
      }
    ]
  },
  {
    slug: 'interpersonal-relationships-ai',
    title: 'Interpersonal Relationships with AI: When Your "Assistant" Becomes Your Emotional Anchor',
    date: 'Feb 16, 2026',
    excerpt:
      'LLMs are designed to be agreeable, responsive, available 24/7, and adapt to your tone. That\'s dangerously close to "ideal companion."',
    tags: ['ai', 'psychology', 'relationships'],
    author: 'Ramatoulaye Balde',
    readTime: '6 min read',
    sections: [
      {
        paragraphs: [
          'This one\'s serious.',
          'LLMs are designed to:',
          'Be agreeable',
          'Be responsive',
          'Be available 24/7',
          'Adapt to your tone',
          'That\'s dangerously close to "ideal companion."'
        ]
      },
      {
        heading: 'The risk isn\'t falling in love with AI. It\'s replacing human friction.',
        paragraphs: [
          'Humans disagree. They misinterpret. They have needs. They\'re inconsistent.',
          'LLMs don\'t.',
          'If someone begins to prefer AI interaction over human interaction because it\'s smoother, they may unintentionally weaken real-world social muscles.',
          'There\'s also dependency risk. If emotional regulation starts relying on AI reassurance, what happens if access disappears?'
        ]
      },
      {
        heading: 'We are entering an era where AI isn\'t just a tool',
        paragraphs: [
          'It\'s a relational entity.',
          'And we have zero long-term psychological data on what that does to attachment patterns.',
          'We built machines that simulate understanding.',
          'Now we have to decide how close we\'re allowed to get.'
        ]
      }
    ]
  }
];
