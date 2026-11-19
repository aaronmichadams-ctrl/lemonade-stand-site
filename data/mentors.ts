/**
 * Program mentors. Add a new object to this list to add a mentor.
 * Put headshots in /public/mentors/ and reference them as "/mentors/jane.jpg".
 * Without a photo, the card shows the mentor's initials.
 * Set placeholder: true to show an "Open spot" card.
 */
export type Mentor = {
  name: string;
  title: string;
  company: string;
  helpsWith: string;
  photo?: string;
  url?: string;
  placeholder?: boolean;
};

export const mentors: Mentor[] = [
  {
    name: "Gavin Adams",
    title: "Church Leadership Consultant and Author",
    company: "gavinadams.com",
    helpsWith: "Leading people, building strong organizations, and making tough calls under pressure.",
    photo: "/mentors/gavin-adams.jpg",
    url: "https://www.gavinadams.com",
  },
  {
    name: "Tim Goodwin",
    title: "Founder",
    company: "Goodwin Investment Advisory",
    helpsWith: "Money, investing, and growing a business that started in a spare bedroom.",
    photo: "/mentors/tim-goodwin.jpg",
    url: "https://www.goodwininvestment.com/",
  },
  {
    name: "Chantel Adams",
    title: "Director, New Ground Foundation",
    company: "Former founder of Forever We",
    helpsWith: "Starting something from scratch and leading a mission-driven organization.",
    photo: "/mentors/chantel-adams.jpg",
  },
];
