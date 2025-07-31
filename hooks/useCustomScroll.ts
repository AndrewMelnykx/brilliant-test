import { useScroll } from "framer-motion";
import { RefObject } from "react";

export function useContainerScroll(scrollRef: RefObject<HTMLElement | null>) {
  return useScroll({ container: scrollRef });
}
