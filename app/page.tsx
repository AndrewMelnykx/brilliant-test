"use client";

import ScrollAnimatedIcon from "@/components/ScrollAnimatedIcon";

import HeroSection from "@/components/hero";
import IntegratedProjects from "@/components/IntegratedProjects";
import { CustomOrangeSvg } from "@/components/custom/orange-svg";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import InfoCards from "@/components/InfoCards";
import { CrowdSourcingElement } from "@/components/CrowdsourcingElement";
import { LeaderBoard } from "@/components/leaderboard";
import { JoinCommunity } from "@/components/footer/JoinCommunity";
import { Footer } from "@/components/footer";

export default function Home() {
  const ref = useRef(null);
  const { scrollY } = useScroll({ container: ref });
  return (
    <main ref={ref} className="h-screen snap-y snap-mandatory  scroll-smooth relative">
      <ScrollAnimatedIcon scrollY={scrollY} />
      <HeroSection scrollY={scrollY} />
      <CustomOrangeSvg scrollY={scrollY} />
      <InfoCards scrollY={scrollY} />
      <IntegratedProjects />
      <CrowdSourcingElement scrollY={scrollY} />
      <LeaderBoard scrollY={scrollY} />
      <JoinCommunity />
      <Footer />
    </main>
  );
}
