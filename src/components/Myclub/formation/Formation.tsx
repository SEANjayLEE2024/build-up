import React, { useState } from "react";

export default function Formation() {
  const [formationCategory, setFormationCategory] = useState("축구");
  const handleFormationCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    setFormationCategory(newCategory);
  };

  return (
    <div className="p-10 flex flex-col items-center ">
      <div className="flex w-80">
        <span className="text-sm font-bold">대표 전술</span>
      </div>
      <div className="flex w-80 mt-2">
        <select
          className="px-3 rounded border border-gray-200 text-xs text-left focus:outline-none"
          onChange={handleFormationCategory}
        >
          <option value="축구">축구</option>
          <option value="풋살">풋살</option>
        </select>
        <span className="ml-3">4-3-3</span>
      </div>
      <div className="flex justify-center mt-2">
        <div className="w-[290px] h-[408px] -z-50 relative object-cover ">
          <img
            className="object-cover w-full h-full rounded-lg"
            src={
              formationCategory === "축구"
                ? "../../../../soccer_formation.png"
                : "../../../../football_formation.jpeg"
            }
          />
          <img />
          <span className="absolute left-3 top-3 text-xs bg-gray-100 p-1 rounded">
            선발명단
          </span>
        </div>
      </div>
    </div>
  );
}
