import { Variants } from "framer-motion";

const containerVariants = {
  onscreen: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  offscreen: {},
};

const itemVariants: Variants = {
  offscreen: { opacity: 0, y: 30 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};
const heroCardData = [
  { number: "1873", label: "LLM Models" },
  { number: "$326,734", label: "Paid to data scientists" },
  { number: "6,557", label: "Developers" },
];

const getGradientByIndex = (index: number) => {
  const gradients = [
    "linear-gradient(to bottom right, rgba(150, 52, 136, 0.5), rgba(252, 111, 50, 0.3))",
    "linear-gradient(to bottom right, rgba(252, 111, 50, 0.6), rgba(255, 74, 89, 0.3))",
    "linear-gradient(to bottom right, rgba(255, 74, 89, 0.5), rgba(150, 52, 136, 0.2))",
  ];
  return gradients[index % gradients.length];
};

export { containerVariants, itemVariants, heroCardData, getGradientByIndex };
