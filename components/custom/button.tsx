import "./index.scss";

interface ButtonProps {
  text: string;
  className?: string;
}

const CustomButton = ({ text, className }: ButtonProps) => {
  return <button className={`orange-custom-button ${className}`}>{text}</button>;
};

export { CustomButton };
