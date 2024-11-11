import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = ({ children, id, checked, onChange }) => {
  const classes =
    id === "all" ? "border border-action-normal py-4 rounded-2xl" : "";

  return (
    <div className={`flex justify-between mb-4 px-5 ${classes}`}>
      <div className="flex items-center">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          className="sr-only"
          onChange={onChange}
        />
        <div className="label-box relative">
          <span
            className="check-icon w-5 h-5 bg-white rounded-full absolute border border-action-normal shadow-base-light top-1/2 transform -translate-y-1/2 before:absolute before:box-border before:w-[30%] before:h-[55%] before:left-1/2 before:top-1/2 before:transform before:-translate-x-1/2 before:-translate-y-[70%] before:rotate-[40deg] before:border-r-2 before:border-b-2 before:border-transparent before:border-solid"
            aria-hidden="true"
          ></span>
          <label
            className="relative pl-7 cursor-pointer text-sm font-medium base-primary"
            htmlFor={id}
          >
            {children}
          </label>
        </div>
      </div>

      {id !== "all" && (
        <button className="border border-action-normal shadow-base-light px-3 font-medium text-xs rounded-2xl">
          보기
        </button>
      )}
    </div>
  );
};

export default Checkbox;
