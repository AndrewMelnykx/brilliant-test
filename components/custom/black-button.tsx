import "./index.scss";

interface CustomBlackButton {
  text: string;
  className: string;
}

const BlackButton = ({ text, className }: CustomBlackButton) => {
  return <button className={className}>{text}</button>;
};

export { BlackButton };
