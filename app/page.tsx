import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Founder } from "@/components/sections/Founder";
import { Curriculum } from "@/components/sections/Curriculum";
import { Progression } from "@/components/sections/Progression";
import { FinalPitch } from "@/components/sections/FinalPitch";
import { Mentors } from "@/components/sections/Mentors";
import { Timeline } from "@/components/sections/Timeline";
import { GetInvolved } from "@/components/sections/GetInvolved";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Founder />
      <Curriculum />
      <Progression />
      <FinalPitch />
      <Mentors />
      <Timeline />
      <GetInvolved />
    </>
  );
}
