import { motion, useSpring, useTransform } from "framer-motion";
import { CustomButton } from "./custom/button";
import { scaleProps } from "@/helpers/types";
import Image from "next/image";

const CrowdSourcingElement = ({ scrollY }: scaleProps) => {
  const rowY = useTransform(scrollY, [1000, 1200], [0, 825]);
  const y = useSpring(rowY, { stiffness: 45, damping: 25 });
  const rowX = useTransform(scrollY, [1000, 1200], [0, 1725]);
  const x = useSpring(rowX, { stiffness: 45, damping: 25 });

  return (
    <motion.section className="h-screen w-full flex items-start justify-center flex-col font-clash relative ">
      <motion.div className="absolute left-0 top-[10%]" style={{ y, x }}>
        <Image
          src="/images/Comet.svg"
          alt="CometIcon"
          width={75}
          height={75}
          className="bg-transparent"
        />
      </motion.div>
      <div className="ml-[10%] mt-[10%] w-[1150px] h-[423px] flex-col  ">
        <h3 className="text-5xl p-1">Crowdsourcing our collective </h3>
        <h3 className="text-5xl p-1">intelligence to build the best AI</h3>

        <p className="text-xl mt-6">
          Open source AI has been lagging behind the likes of Google and OpenAI by billions of
          dollars.
        </p>

        <p className="text-xl w-[900px] mt-4">
          Salt aims to solve that by rewarding open source developers who contribute to the
          democratization of AI. We run competitions between AI models to find and reward the best
          AI models. As a result, our users will be able to access the latest cutting edge AI
          models.
        </p>
        <CustomButton text="Use The Cutting Edge AI" className="w-[400px] mt-6" />
      </div>
    </motion.section>
  );
};

export { CrowdSourcingElement };
