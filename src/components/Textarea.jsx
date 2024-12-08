import React from "react";

const Textarea = ({ className, placeholder, label }) => {
  return (
    <div className="space-y-2">
      <label className="text-sm">{label}<span className="text-[#FF3B30]"> *</span></label>
      <br />
      <textarea
        className={`p-2 border-[#D7DADC] border-2 text-sm rounded-md resize-none ${className}`}
        placeholder={placeholder}
        required
      ></textarea>
    </div>
  );
};

export default Textarea;
