import { ReactNode } from "react";

interface PropsType {
  title: string;
  unit?: string;
  children: ReactNode;
  required?: boolean;
}

const InputLayout: React.FC<PropsType> = ({
  title,
  unit,
  children,
  required = true,
}) => {
  return (
    <div className="mb-4">
      <p className="text-sm font-medium mb-2 py-0.5">
        {title}
        {unit && <span className="text-base-secondary "> ({unit}) </span>}
        {required && <span className="text-red-600">*</span>}
      </p>
      {children}
    </div>
  );
};

export default InputLayout;
