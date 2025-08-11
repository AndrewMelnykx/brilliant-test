"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { scaleProps } from "@/helpers/types";
import { useIsScreenSmall } from "./context";

import Image from "next/image";

export default function ScrollAnimatedIcon({ scrollY }: scaleProps) {
  const isSmallScreen = useIsScreenSmall();
  const startXY = 0.1 * 240;
  const endXY = 2.5 * 22080;

  const rawY = useTransform(scrollY, [0, 2160], [isSmallScreen ? 130 : -300, 2000]);
  const rawX = useTransform(scrollY, [startXY, endXY], [0, 0]);

  const y = useSpring(rawY, { stiffness: 90, damping: 30 });
  const x = useSpring(rawX, { stiffness: 40, damping: 20 });

  return (
    <motion.div className="absolute  right-[5vw] z-[-20] sm:scale-50 lg:scale-75 " style={{ x, y }}>
      <Image src="/images/MoonIcon.svg" alt="MoonIcon" width={1016} height={1016} priority />
    </motion.div>
  );
}
