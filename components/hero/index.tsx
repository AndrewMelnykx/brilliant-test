import { useState } from "react";
import { CustomButton } from "@/components/custom/button";
import { Header } from "@/components/header/index";
import { BlackButton } from "../custom/black-button";

import { motion, useMotionValueEvent, useTransform, useSpring } from "framer-motion";
import { scaleProps } from "@/helpers/types";

import "./index.scss";

export default function HeroSection({ scrollY }: scaleProps) {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useMotionValueEvent(scrollY, "change", latest => {
    setIsScrollingDown(latest > 10);
  });

  const heroTextStyle = isScrollingDown ? "hero-main-text-scrolled" : "hero-main-text";
  const rawY = useTransform(scrollY, [0, 20], [-70, -140]);
  const y = useSpring(rawY, { stiffness: 80, damping: 10 });

  return (
    <motion.section className="  h-[calc(100vh+40px)] w-full snap-none grid place-items-center z-40 relative font-clash">
      <Header />
      <div className="w-full bg-transparent flex flex-col items-center mt-2% ">
        <motion.div
          className={`w-full max-h-[432px]  lg:ml-12 ml-2 bg-transparent  `}
          style={{ y }}
        >
          <h1 className={`${heroTextStyle} font-clash z-20`}>
            A new economic primitive for funding decentralized AI
          </h1>
          <h2 className="text-white  text-xs sm:text-l  ml-1 z-20 mt-5 sm:mt-0">
            We track, rank and pay for the best open source decentralized LLMs to compete against
            OpenAI
          </h2>
          <div className="flex w-[300px] justify-center items-center mt-6 gap-x-6">
            <CustomButton text="Buy Salt AI" className="w-[220px]" />
            <BlackButton text="Try It Now" className="custom-black-button-small" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
