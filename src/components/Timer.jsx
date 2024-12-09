import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(120);
  const [resend, setResend] = useState(false);
  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setResend(true);
    }
  }, [seconds, setSeconds]);

  const minute = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;
  const handleResend = () => {
    setSeconds(120);
    setResend(false);
  };
  return (
    <div>
      {!resend ? (
        <p className="text-[#646464] text-xs">
          Wait {minute}:
          {displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds} before
          requesting a new code.
        </p>
      ) : (
        <div>
          <p className="text-[#646464] text-xs">
            Didn’t receive a code?{" "}
            <button className="text-[#0090FF] underline" onClick={handleResend}>
              Resend Code
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Timer;
