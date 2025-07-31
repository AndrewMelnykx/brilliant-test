import Image from "next/image";
import { BlackButton } from "../custom/black-button";

const Footer = () => {
  return (
    <section className="h-[100vh] w-full snap-start bg-background flex items-center justify-center flex-col ">
      <h5 className="text-4xl text-white font-clash mt-[10%]">
        Join our community and harvest $SALT
      </h5>
      <div className="flex w-full border-white rounded h-[600px] justify-end items-end flex-col relative">
        <Image src="/images/MoonSurface.svg" alt="moon-surface" width={1920} height={552} />
        <div className="w-full h-[550px] flex absolute top-0">
          <div
            className="flex w-full items-center justify-center absolute bottom-30 "
            style={{ borderBottom: "1px solid white" }}
          >
            <BlackButton text="How It Works" className="custom-black-button-small" />
            <BlackButton text="Buy It Now" className="custom-black-button-small" />
          </div>
          <div className="flex w-full h-[50px] justify-between items-start absolute bottom-10">
            <div className="flex w-full h-fit gap-5 ml-1">
              <Image src="/images/TelegramImage.svg" alt="twitter-icon" width={40} height={40} />
              <Image src="/images/Twitter.svg" alt="twitter-icon" width={40} height={40} />
            </div>
            <div className="flex w-[450px] mt-2">
              <p className="p-1">Terms Of Use</p>
              <p className="p-1">Privacy Policy</p>
              <p className="p-1">Cookie Policy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer };
