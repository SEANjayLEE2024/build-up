import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const Title: React.FC<props> = ({ children }) => {
  return <p className="font-bold text-2xl pb-8 tracking-custom">{children}</p>;
};

export default Title;
