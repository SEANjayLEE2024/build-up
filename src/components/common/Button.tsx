import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
  disable?: boolean;
  className?: string;
  buttonEvent: () => void;
}

const Button: React.FC<PropsType> = ({
  children,
  disable = false,
  className = "",
  buttonEvent,
}) => {
  return (
    <button
      className={`w-full py-3 rounded-xl ${
        disable ? "bg-semantic-disable" : "bg-semantic-positive"
      } ${className}`}
      onClick={buttonEvent}
      disabled={disable}
    >
      <span className={`font-medium text-base ${className}`}>{children}</span>
    </button>
  );
};

export default Button;
