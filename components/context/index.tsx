import { smallScreenSize } from "@/helpers/constants";
import { createContext, useContext, useState, useEffect } from "react";

type ContextProps = {
  children: React.ReactNode;
};

const ScreenSizeContext = createContext<boolean | undefined>(false);

function ScreenSizeContextProvider({ children }: ContextProps) {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean | undefined>(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < smallScreenSize);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  if (isSmallScreen === undefined) {
    return null;
  }
  return <ScreenSizeContext.Provider value={isSmallScreen}>{children}</ScreenSizeContext.Provider>;
}
const useIsScreenSmall = () => {
  return useContext(ScreenSizeContext);
};

export { useIsScreenSmall, ScreenSizeContextProvider };
