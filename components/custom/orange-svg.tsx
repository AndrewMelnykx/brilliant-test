import { useSpring, useTransform, motion } from "framer-motion";

import { scaleProps } from "@/helpers/types";
import { useIsScreenSmall } from "../context";

import Image from "next/image";

const CustomOrangeSvg = ({ scrollY }: scaleProps) => {
  const isSmallScreen = useIsScreenSmall();

  const startXY = 0.1 * 240;
  const endXY = 1.5 * 400;

  const rawY = useTransform(scrollY, [startXY, endXY], [0, 600]);
  const rawX = useTransform(scrollY, [startXY, endXY], [0, isSmallScreen ? -20 : 250]);

  const y = useSpring(rawY, { stiffness: 40, damping: 40 });
  const x = useSpring(rawX, { stiffness: 70, damping: 40 });
  return (
    <motion.div className="absolute top-[40%] left-[5%] z-[-1]" style={{ x, y }}>
      <Image
        src="/images/Vector 5.svg"
        alt="OrangeSplash"
        width={905}
        height={1200}
        className="rotate-[10deg] "
        style={{ filter: "blur(45px)" }}
      />
    </motion.div>
  );
};

export { CustomOrangeSvg };
