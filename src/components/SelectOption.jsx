import { useState } from "react";

const SelectOption = ({ label, className, option }) => {
  const options = [option, "Option 2"];
  const [arrow, setArrow] = useState(0);
  const [selectedOption, setSelectedOption] = useState(option);

  const handleOption = (value) => {
    setSelectedOption(value);
    setArrow(0);
  };

  return (
    <div className="space-y-1 relative">
      <label className="text-sm">
        {label} <span className="text-[#FF3B30]"> *</span>
      </label>
      <br />

      <div
        className={`border-[#D7DADC] text-[#ACA4AF] bg-white border-2 h-10 text-sm rounded-md pl-3 pr-4 py-2 flex items-center justify-between cursor-pointer ${className}`}
        onClick={() => setArrow((prev) => (prev === 0 ? 180 : 0))}
      >
        {selectedOption}
        <svg
          className={`transform transition-transform duration-300 ${
            arrow === 180 ? "rotate-180" : "rotate-0"
          }`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="#9B9B9B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Options Dropdown */}
      </div>
      {arrow === 180 && (
        <div className="absolute bg-white border border-[#D7DADC] h-20 z-10 text-sm rounded-md mt-1 w-full shadow-lg">
          {options.map((value, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOption(value)}
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectOption;
