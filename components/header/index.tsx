import { BlackButton } from "../custom/black-button";
import Image from "next/image";

import "./index.scss";
import { CustomButton } from "../custom/button";

const Header = () => {
  return (
    <div className="w-full h-[80px] flex items-center justify-center z-20 mt-[-10%] sm:mt-[2%]">
      <Image
        src="/images/Vector 6.svg"
        alt="BlueSplash"
        className="rotate-[290deg] z-[50] absolute top-[-10%] left-[0vw] sm:left-[5vw] blur-xl"
        width={504}
        height={795}
      />
      <BlackButton text="How It Works" className="custom-black-button-small z-40" />
      <CustomButton text="Buy Spice AI" />
    </div>
  );
};

export { Header };
