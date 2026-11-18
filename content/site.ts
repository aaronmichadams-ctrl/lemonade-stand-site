/**
 * All of the site's words live in this file.
 * Edit text here and every page updates. House rule: no em dashes.
 */

// TODO: replace with your real contact email.
export const CONTACT_EMAIL = "your-email@example.com";

export function mailto(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export const site = {
  name: "Lemonade Stand",
  tagline: "Real businesses. Real kids.",
  location: "Woodstock, Georgia",
  description:
    "Lemonade Stand teaches middle and high school students in Cherokee County, Georgia to start real businesses, make real sales, and pitch to real investors.",
  // Used for SEO and social share links. Vercel fills this in automatically on deploy.
  fallbackUrl: "https://lemonade-stand-site.vercel.app",
};

export const nav = [
  { label: "What we do", href: "/#what-we-do" },
  { label: "Curriculum", href: "/#curriculum" },
  { label: "The path", href: "/#progression" },
  { label: "Final Pitch", href: "/#final-pitch" },
  { label: "Mentors", href: "/mentors" },
  { label: "Get involved", href: "/#get-involved" },
];

export const hero = {
  headline: "Every big business starts with a lemonade stand.",
  subhead:
    "Lemonade Stand teaches middle and high school students to start real businesses, make real sales, and pitch to real investors.",
  primaryCta: { label: "Bring it to your school", href: "#for-schools" },
  secondaryCta: { label: "Become a mentor or sponsor", href: "#for-sponsors" },
  illustrationAlt:
    "An illustrated lemonade stand with a striped yellow and white awning, a painted sign reading Lemonade Stand, a glass pitcher of lemonade, a stack of cups, lemons on the counter, and a chalkboard that reads: Real businesses. Real kids. 25 cents.",
  signText: "Lemonade Stand",
  chalkboard: ["Real businesses.", "Real kids.", "25¢"],
};

export const whatWeDo = {
  eyebrow: "What we do",
  title: "A real business, built in one semester",
  intro:
    "Lemonade Stand is a weekly in-school club. Students form teams of 2 to 4 and launch and run a real small business during the semester.",
  points: [
    {
      title: "Weekly club, real business",
      body: "Teams of 2 to 4 students meet every week to find a problem, build a product, and sell it to real customers.",
    },
    {
      title: "Free for students and schools",
      body: "There is no cost to families or schools. The program is paid for by local business sponsors.",
    },
    {
      title: "Two divisions",
      body: "Junior Division for grades 6 to 8, and Senior Division for grades 9 to 12, so every team competes with its peers.",
    },
    {
      title: "Judged on what they actually did",
      body: "Teams are scored on real customers, real sales, and what they learned along the way, not just a written plan.",
    },
  ],
  divisions: [
    { name: "Junior", grades: "Grades 6 to 8" },
    { name: "Senior", grades: "Grades 9 to 12" },
  ],
};

export const founder = {
  eyebrow: "Meet the founder",
  name: "Aaron Adams",
  role: "Founder, Lemonade Stand",
  // Photo lives in /public. Swap the file to change it.
  photo: "/aaron.jpg" as string | null,
  photoAlt: "Portrait of Aaron Adams, founder of Lemonade Stand",
  photoPlaceholder: "Photo of Aaron goes here",
  lead: "Aaron pitched his first business in middle school. Now he wants every student to get that same shot.",
  milestones: [
    {
      label: "Then",
      title: "Pitched Woof Water on a kids' Shark Tank",
      body: "His middle school business: a powdered dog treat that mixed into water. Think Crystal Light for dogs.",
      icon: "bowl" as const,
    },
    {
      label: "Now",
      title: "Founder of NXT Soccer",
      body: "Aaron founded NXT Soccer, a youth sports services company.",
      icon: "ball" as const,
    },
  ],
};

export const curriculum = {
  eyebrow: "The curriculum",
  title: "14 weeks from idea to investor pitch",
  intro:
    "Every lesson includes slides, a worksheet, and a guest speaker from the local business community.",
  lessonIncludes: ["Slides", "Worksheet", "Guest speaker"],
  phases: [
    {
      name: "Discover",
      weeks: "Weeks 1 to 4",
      items: [
        "What an entrepreneur is",
        "Finding problems worth solving",
        "Interviewing 10 real customers",
        "Choosing an idea and forming teams",
      ],
    },
    {
      name: "Build",
      weeks: "Weeks 5 to 8",
      items: [
        "Costs, pricing, and break-even",
        "Building a first version",
        "Branding",
        "Marketing and social media",
      ],
    },
    {
      name: "Sell",
      weeks: "Weeks 9 to 10",
      items: ["Market Day: the first real sales", "Reviewing what worked"],
    },
    {
      name: "Pitch",
      weeks: "Weeks 11 to 14",
      items: [
        "The one-page business plan",
        "How to tell your story",
        "Practice with mentors",
        "The School Showcase",
      ],
    },
  ],
};

export const progression = {
  eyebrow: "The path",
  title: "From the classroom to the big stage",
  intro: "Every team pitches. The best keep climbing.",
  steps: [
    {
      name: "School Showcase",
      when: "End of semester",
      body: "Every team pitches. The top Junior and Senior teams at each school advance.",
    },
    {
      name: "County Semifinal",
      when: "May",
      body: "School winners compete. The top 8 advance, 4 per division.",
    },
    {
      name: "The Final Pitch",
      when: "Atlanta",
      body: "The top 8 give a Shark Tank style pitch to investors and business leaders.",
    },
  ],
  visionTitle: "The long-term vision",
  vision: ["Cherokee County", "Metro Atlanta", "Statewide", "National"],
  visionNote:
    "We are starting in Cherokee County. Next comes metro Atlanta, then the whole state, and eventually the whole country.",
};

export const finalPitch = {
  eyebrow: "The Final Pitch",
  title: "Lights. Judges. Your business.",
  body: "The top 8 teams take the stage in Atlanta and pitch to a panel of investors and business leaders. Winners earn prize money, mentorship, and recognition from our sponsors.",
  prizes: ["Prize money", "Mentorship", "Sponsor recognition"],
  illustrationAlt:
    "An illustrated stage with a spotlight shining on a podium, and a row of judges' chairs facing the stage.",
  rubricTitle: "How teams are judged",
  rubricTotal: 100,
  rubric: [
    { label: "Real results", points: 35 },
    { label: "Understanding the problem and customer", points: 20 },
    { label: "Business model and numbers", points: 20 },
    { label: "Pitch delivery", points: 15 },
    { label: "Teamwork and growth", points: 10 },
  ],
};

export const mentorsSection = {
  eyebrow: "Program mentors",
  title: "Local leaders, real advice",
  body: "Mentors are local business leaders who give guest lessons, coach teams, and judge pitches. It takes just 2 to 4 visits per season.",
  roles: [
    { title: "Give a guest lesson", body: "Share your story and one thing you wish you knew at 14." },
    { title: "Coach a team", body: "Help a team with pricing, marketing, or their pitch." },
    { title: "Judge a pitch", body: "Sit on the panel at a School Showcase or the Final Pitch." },
  ],
  commitment: "2 to 4 visits per season",
  cta: { label: "Become a mentor", subject: "I'd like to become a Lemonade Stand mentor" },
  seeAll: "Meet all mentors",
  page: {
    title: "Program Mentors",
    intro:
      "Lemonade Stand mentors are local business owners, managers, and professionals who show students what real entrepreneurship looks like. You do not need to be an expert. You just need to show up and share what you know.",
    gridTitle: "Our mentors",
    faqTitle: "What mentoring looks like",
    faqs: [
      {
        q: "How much time does it take?",
        a: "Most mentors visit 2 to 4 times per season. Each visit is about one class period.",
      },
      {
        q: "What would I do?",
        a: "Give a guest lesson on your area of expertise, coach a team on their business, or judge pitches at a School Showcase or the Final Pitch.",
      },
      {
        q: "Who can be a mentor?",
        a: "Anyone running or working in a business in the Cherokee County and metro Atlanta area. Owners, marketers, accountants, designers, salespeople, and more.",
      },
    ],
  },
};

export const timeline = {
  eyebrow: "Pilot and timeline",
  title: "Where we are headed",
  items: [
    {
      when: "Fall 2027",
      title: "The pilot",
      body: "The first Lemonade Stand club runs at The King's Academy in Woodstock, GA.",
    },
    {
      when: "Spring 2028",
      title: "Cherokee County season",
      body: "Schools across Cherokee County join, with the first County Semifinal in May and the Final Pitch in Atlanta.",
    },
    {
      when: "Next",
      title: "Metro Atlanta and beyond",
      body: "More schools, more teams, and more local businesses backing the next generation.",
    },
  ],
};

export const getInvolved = {
  eyebrow: "Get involved",
  title: "Pull up a stool at the stand",
  schools: {
    id: "for-schools",
    title: "For schools",
    body: "Get a free, ready-to-run club that ends in a public event. We provide the lessons, slides, worksheets, guest speakers, and the showcase. You provide the students.",
    bullets: ["Free for students and schools", "14 ready-made lessons", "Ends in a public School Showcase"],
    cta: "Bring it to your school",
    subject: "Bringing Lemonade Stand to our school",
  },
  sponsors: {
    id: "for-sponsors",
    title: "For sponsors and mentors",
    body: "Put your name on the next generation of local business owners. Sponsors fund the program so it stays free, and get recognized at every event.",
    bullets: ["Keeps the program free for families", "Recognition at showcases and the Final Pitch", "Meet the best young talent in the county"],
    cta: "Become a sponsor",
    subject: "Sponsoring or mentoring with Lemonade Stand",
  },
};

export const footer = {
  blurb: "A youth entrepreneurship program for middle and high school students.",
  rights: "All rights reserved.",
};
