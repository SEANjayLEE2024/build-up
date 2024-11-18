import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const Title: React.FC<props> = ({ children }) => {
  return (
    <div className="font-bold text-2xl pb-8 tracking-custom">{children}</div>
  );
};

export default Title;
