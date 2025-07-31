import { scaleProps } from "@/helpers/types";
import { CustomButton } from "@/components/custom/button";
import { motion, useSpring, useTransform } from "framer-motion";

// import RocketImage from "@/images/Rocket.svg";
import { LeaderBoardInfo } from "./leaderborad-info";
import Image from "next/image";

const LeaderBoard = ({ scrollY }: scaleProps) => {
  const rowY = useTransform(scrollY, [1700, 2500], [0, -2000], { clamp: true });
  const opacity = useTransform(scrollY, [2000, 2550], [0, 1], { clamp: true });

  const y = useSpring(rowY, { stiffness: 50, damping: 15 });

  return (
    <section className="h-[100vh] w-full flex items-center justify-center flex-col font-clash z-40 relative">
      <div className="flex w-full justify-between p-8 mt-5 z-20 ">
        <p className="ml-12 text-5xl font-clash">LLM Leaderboard</p>
        <CustomButton text="Submit your model" className="mr-12 w-[270px]" />
      </div>
      <p className="font-clash mr-[23%] mb-4 w-[1000px]">
        We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to test LLMs on a
        large number of different evaluation tasks. The higher the score, the better the LLM.
      </p>
      <LeaderBoardInfo />
      <motion.div
        style={{ y, opacity }}
        className="w-300 h-800 flex items-center justify-center  absolute mt-[100%] z-50 "
      >
        <Image src="/images/Rocket.svg" alt="rocket" height={750} width={226} style={{ top: 0 }} />
      </motion.div>
    </section>
  );
};

export { LeaderBoard };
