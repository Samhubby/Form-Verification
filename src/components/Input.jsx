import { forwardRef } from "react";

const Input = forwardRef(({ placeholder, label, type, className }, ref) => {
  return (
    <div className="space-y-1 w-[387px] h-[66px]">
      <label className="text-sm">
        {label} <span className="text-[#FF3B30]">*</span>
      </label>
      <br />
      <input
        className={`border-[#D7DADC] border-2 text-sm rounded-md pl-3 py-2  ${className}`}
        placeholder={placeholder}
        type={type}
        ref={ref}
        required
      ></input>
    </div>
  );
});

export default Input;
