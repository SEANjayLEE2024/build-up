import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
  disable?: boolean;
  buttonEvent: () => void;
}

const Button: React.FC<PropsType> = ({
  children,
  disable = false,
  buttonEvent,
}) => {
  return (
    <button
      className={`w-full py-3 rounded-xl ${
        disable ? "bg-base-primary-disable" : "bg-base-primary"
      }`}
      onClick={buttonEvent}
      disabled={disable}
    >
      <span
        className={`font-medium text-base ${
          disable ? "text-base-quaternary" : "text-white"
        }`}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
