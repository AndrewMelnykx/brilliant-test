"use client";

import {
  containerVariants,
  getGradientByIndex,
  heroCardData,
  itemVariants,
} from "@/helpers/constants";
import { scaleProps } from "@/helpers/types";
import { motion, useMotionValueEvent, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

export default function InfoCards({ scrollY }: scaleProps) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", latest => {
    setHasScrolled(latest > 30);
  });

  const isSmallScreen = window.innerWidth < 640;
  const rowY = useTransform(
    scrollY,
    [0, 20],
    [isSmallScreen ? 150 : 0, isSmallScreen ? -225 : -195],
  );
  const y = useSpring(rowY, { stiffness: 85, damping: 10 });

  return (
    <section className=" w-full z-40  absolute max-h-[20px] sm:max-h-[120px] bg-transparent  ">
      <motion.div className="w-full flex items-center justify-center" style={{ y }}>
        <motion.div
          variants={containerVariants}
          animate={hasScrolled ? "onscreen" : "offscreen"}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-2 sm:gap-7 opacity-80"
          initial="offscreen"
        >
          {heroCardData.map(({ number, label }, index) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="font-bold flex flex-col items-center justify-center gap-[1x] sm:gap-[5px] w-[180px] h-[70px]  sm:w-[420px] sm:h-[180px] rounded-[100px] shadow-lg "
              style={{
                background: getGradientByIndex(index),
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              <h2 className="text-[16px] sm:text-[48px] mb-0 text-white ">{number}</h2>
              <h3 className="text-[14px] sm:text-[20px] text-white">{label}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
