/**
 * Program mentors. Add a new object to this list to add a mentor.
 * Put headshots in /public/mentors/ and reference them as "/mentors/jane.jpg".
 * Leave "placeholder" off for real mentors; it marks the open-spot cards.
 */
export type Mentor = {
  name: string;
  title: string;
  company: string;
  helpsWith: string;
  photo?: string;
  placeholder?: boolean;
};

export const mentors: Mentor[] = [
  {
    name: "Your name here",
    title: "Mentor spots open",
    company: "Your company",
    helpsWith: "Marketing, branding, and getting the word out.",
    placeholder: true,
  },
  {
    name: "Your name here",
    title: "Mentor spots open",
    company: "Your company",
    helpsWith: "Pricing, costs, and making the numbers work.",
    placeholder: true,
  },
  {
    name: "Your name here",
    title: "Mentor spots open",
    company: "Your company",
    helpsWith: "Telling your story and pitching with confidence.",
    placeholder: true,
  },
];
