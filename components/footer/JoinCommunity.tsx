import Image from "next/image";
import { useIsScreenSmall } from "../context";

const JoinCommunity = () => {
  const isSmallScreen = useIsScreenSmall();
  return (
    <div className="h-[100vh] w-full flex items-center justify-center flex-col snap-start mt-5 sm:mt-0">
      <div className="h-full w-full  flex items-center justify-center ">
        <div className="h-[320px] w-full sm:w-[940px] flex flex-col justify-start z-20 sm:z-1 absolute sm:relative ml-2 sm:ml-0 mt-20% sm:mt-0">
          <h2 className="text-4xl sm:text-5xl font-clash ml-2 sm:ml-0">Join our community</h2>
          <h3 className=" text-l sm:text-xl mt-2  ml-2 sm:ml-0">
            Join us on our mission to to the moon & revolutionize open source AI development so that
            we can build a permissionless, democratized, and decentralized AI.
          </h3>
          <h4 className=" text-l sm:text-xl mt-2 w-full  ml-2 sm:ml-0">
            Let the fate of AI be in our hands and not that of big tech companies.
          </h4>
          <div className="flex w-[130px] height-[70px] gap-2 mt-3 ml-25 sm:ml-0">
            <Image src="/images/TelegramImage.svg" alt="telegram-img" width={64} height={64} />
            <Image src="/images/Twitter.svg" alt="twitter-img" width={64} height={64} />
          </div>
        </div>
        <Image
          src="/images/WhiteMoon.png"
          alt="white-moon"
          width={isSmallScreen ? 150 : 484}
          height={isSmallScreen ? 150 : 484}
          className=" mt-[-130%] sm:mt-[-20%] absolute sm:relative justify-center "
        />
      </div>
    </div>
  );
};

export { JoinCommunity };
