import { useEffect, useRef, useState } from "react";

/**
 * OTPField component renders a 6-digit OTP input field with individual input boxes.
 * 
 * Features:
 * - Allows navigation between input boxes using arrow keys.
 * - Handles backspace to clear the current input and move focus to the previous box.
 * - Automatically moves focus to the next input box upon entering a digit.
 * - Supports pasting a 6-digit OTP directly into the input fields.
 * - Automatically focuses on the first input box when the component mounts.
 * 
 * @component
 * @example
 * return (
 *   <OTPField />
 * )
 */
const OTPField = () => {
  const [inputs, setInputs] = useState(new Array(6).fill(""));
  const reference = useRef([]);

  const handleChange = (e, index) => {
    const copyArray = [...inputs];

    if (e.key === "ArrowLeft") reference.current[index - 1].focus();
    if (e.key === "ArrowRight") reference.current[index + 1].focus();

    if (e.key === "Backspace") {
      copyArray[index] = "";
      setInputs(copyArray);
      if (index > 0) reference.current[index - 1].focus();
      return;
    }

    if (isNaN(e.key)) return;

    copyArray[index] = e.key;

    if (index < 5) reference.current[index + 1].focus();
    setInputs(copyArray);
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text");
    if (isNaN(data)) return;
    setInputs(Array.from(data, Number));
    reference.current[5].focus();
  };

  useEffect(() => {
    reference.current[0].focus();
  }, []);
  return (
    <div className=" space-x-7 w- flex flex-row">
      {inputs.map((value, index) => {
        return (
          <div key={index} className="flex items-center">
            {index === 3 ? (
              <span className="text-4xl mr-7 font-medium">-</span>
            ) : null}
            <input
              ref={(currentInput) => (reference.current[index] = currentInput)}
              maxLength={1}
              className="w-11 h-11 text-center rounded-lg border-2 focus:border-[#dc9898] focus:outline-none  border-[#D7DADC] text-black  "
              type="text"
              value={value}
              onKeyDown={(e) => handleChange(e, index)}
              required
              onPaste={handlePaste}
            />
          </div>
        );
      })}
    </div>
  );
};

export default OTPField;
