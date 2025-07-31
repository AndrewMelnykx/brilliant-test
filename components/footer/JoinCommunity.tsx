import Image from "next/image";

const JoinCommunity = () => {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center flex-col snap-start">
      <div className="h-full w-full  flex items-center justify-center ">
        <div className="h-[320px] w-[940px] flex flex-col justify-start">
          <h2 className="text-5xl font-clash">Join our community</h2>
          <h3 className="text-xl mt-2">
            Join us on our mission to to the moon & revolutionize open source AI development so that
            we can build a permissionless, democratized, and decentralized AI.
          </h3>
          <h4 className="text-xl mt-2">
            Let the fate of AI be in our hands and not that of big tech companies.
          </h4>
          <div className="flex w-[130px] height-[70px] gap-2 mt-3">
            <Image src="/images/TelegramImage.svg" alt="telegram-img" width={64} height={64} />
            <Image src="/images/Twitter.svg" alt="twitter-img" width={64} height={64} />
          </div>
        </div>
        <Image src="/images/WhiteMoon.png" alt="white-moon" width={484} height={484}></Image>
      </div>
    </div>
  );
};

export { JoinCommunity };
