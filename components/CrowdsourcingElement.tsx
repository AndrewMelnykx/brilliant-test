import { motion, useSpring, useTransform } from "framer-motion";
import { CustomButton } from "./custom/button";
import { scaleProps } from "@/helpers/types";
import { useIsScreenSmall } from "./context";

import Image from "next/image";

const CrowdSourcingElement = ({ scrollY }: scaleProps) => {
  const isSmallScreen = useIsScreenSmall();

  const rowX = useTransform(scrollY, [1000, 1200], [0, isSmallScreen ? 600 : 1725]);
  const rowY = useTransform(
    scrollY,
    [1000, 1800],
    [isSmallScreen ? 1400 : 1300, isSmallScreen ? 2200 : 2105],
  );

  const x = useSpring(rowX, { stiffness: 45, damping: 25 });
  const y = useSpring(rowY, { stiffness: 45, damping: 25 });

  const opacity = useTransform(scrollY, [1000, 2100], [0, 1], { clamp: true });

  return (
    <motion.section className="h-screen w-full flex items-start justify-center flex-col font-clash z-30">
      <motion.div
        className="absolute left-0 top-[10%] pointer-events-none"
        style={{ y, x, opacity }}
      >
        <Image
          src="/images/Comet.svg"
          alt="CometIcon"
          width={75}
          height={75}
          className="bg-transparent"
        />
      </motion.div>
      <div className="ml-[10%] sm:mt-[10%] w-[100%] sm:w-[1150px] h-[423px]  flex-col z-50  ">
        <h3 className="text-5xl ml-[-3] sm:ml-0 p-0 sm:p-1 w-[340px] sm:w-full mb-2 sm:mb-0">
          Crowdsourcing our collective{" "}
        </h3>
        <h3 className="text-4xl sm:text-5xl p-0 sm:p-1  w-[360px] sm:w-full">
          Intelligence to build the best AI
        </h3>

        <p className="text-xl mt-6 w-[340px]  sm:w-full">
          Open source AI has been lagging behind the likes of Google and OpenAI by billions of
          dollars.
        </p>

        <p className="text-s sm:text-xl w-[340px]  sm:w-full mt-4 ">
          Salt aims to solve that by rewarding open source developers who contribute to the
          democratization of AI. We run competitions between AI models to find and reward the best
          AI models. As a result, our users will be able to access the latest cutting edge AI
          models.
        </p>
        <CustomButton text="Use The Cutting Edge AI" className="w-[300px] mt-6 absolute " />
      </div>
    </motion.section>
  );
};

export { CrowdSourcingElement };
