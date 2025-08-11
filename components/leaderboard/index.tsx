import { scaleProps } from "@/helpers/types";
import { CustomButton } from "@/components/custom/button";
import { motion, useSpring, useTransform } from "framer-motion";

import { LeaderBoardInfo } from "./leaderborad-info";
import Image from "next/image";
import { useIsScreenSmall } from "../context";

const LeaderBoard = ({ scrollY }: scaleProps) => {
  const isSmallScreen = useIsScreenSmall();

  const rowY = useTransform(scrollY, [isSmallScreen ? 1000 : 1700, 2500], [0, -2000], {
    clamp: true,
  });
  const opacity = useTransform(scrollY, [2000, 2550], [0, 1], { clamp: true });

  const y = useSpring(rowY, { stiffness: 50, damping: 15 });

  return (
    <section className="h-[100vh] w-full flex items-center justify-center flex-col font-clash z-40 relative">
      <div className="flex w-[360px] sm:w-full justify-between p-0 sm:p-8 mt-5 z-20  h-[200px] items-center sm:h-full ">
        <p className="ml-6 sm:ml-12 text-2xl sm:text-5xl font-clash  mb-2 sm:mb-0 w-[20px] sm:w-full mr-20 ">
          LLM Leaderboard
        </p>
        <CustomButton text="Submit your model" className="mr-0 sm:mr-12 w-[180px]  sm:w-[270px]" />
      </div>
      <p className="font-clash ml-12 sm:mr-[23%] mb-4 w-[340px] sm:w-[1000px]">
        We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to test LLMs on a
        large number of different evaluation tasks. The higher the score, the better the LLM.
      </p>

      <LeaderBoardInfo />
      <motion.div
        style={{ y, opacity }}
        className="w-300 h-800 flex items-center justify-center  absolute mt-[100%] z-2 "
      >
        (
        <Image
          src="/images/Rocket.svg"
          alt="rocket"
          height={isSmallScreen ? 300 : 750}
          width={isSmallScreen ? 50 : 226}
          style={{ top: 0 }}
        />
        )
      </motion.div>
    </section>
  );
};

export { LeaderBoard };
