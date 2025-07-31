import { motion } from "framer-motion";

import Image from "next/image";
import { useEffect, useState } from "react";

const IntegratedProjects = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 640);
  }, []);
  return (
    <motion.section className="h-screen w-full snap-center relative flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-transparent z-0">
        <p className="text-white text-center relative z-20 text-2xl sm:text-5xl font-clash mt-[20%]">
          Projects integrated into the Arrakis AI Ecosystem
        </p>
        <motion.div
          className="flex justify-center items-center w-full gap-x-6 sm:gap-x-20 mt-6 "
          initial={{ x: 0 }}
          whileInView={{ x: isSmallScreen ? -25 : -100 }}
          transition={{ duration: isSmallScreen ? 1 : 2.5, ease: "easeOut" }}
        >
          <div className="w-[40px] h-[40px] sm:w-[75px] sm:h-[75px] relative">
            <Image src="/images/TelegramImage.svg" alt="IntegratedIcon" fill />
          </div>

          <div className="w-[100px] h-[100px] sm:w-[305px] sm:h-[305px] relative">
            <Image src="/images/Solana.svg" alt="IntegratedIcon" fill />
          </div>

          <div className="w-[100px] h-[100px] sm:w-[305px] sm:h-[305px] relative">
            <Image src="/images/Arweave.svg" alt="IntegratedIcon" fill />
          </div>

          <div className="w-[100px] h-[100px] sm:w-[305px] sm:h-[305px] relative">
            <Image src="/images/Bittensor.svg" alt="IntegratedIcon" fill />
          </div>

          <div className="w-[40px] h-[40px] sm:w-[75px] sm:h-[75px] relative">
            <Image src="/images/RedCircleImage.svg" alt="IntegratedIcon" fill />
          </div>

          <div className="w-[40px] h-[40px] sm:w-[75px] sm:h-[75px] relative">
            <Image src="/images/TelegramImage.svg" alt="IntegratedIcon" fill />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IntegratedProjects;
