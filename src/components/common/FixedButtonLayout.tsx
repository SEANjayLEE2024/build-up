import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
  className?: string;
}

const FixedButtonLayout: React.FC<PropsType> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`fixed left-0 bottom-0 right-0 px-6 py-2.5  ${
        className ? className : "bg-white"
      }`}
    >
      {children}
    </div>
  );
};

export default FixedButtonLayout;
