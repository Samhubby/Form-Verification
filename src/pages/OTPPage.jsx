import React, { useState, useEffect } from "react";
import { Button, Card, OTPField } from "../components";
import { useNavigate } from "react-router-dom";

const OTPPage = () => {
  const [showResend, setShowResend] = useState(false);
  const [maskedEmail, setMaskedEmail] = useState("");
  const [seconds, setSeconds] = useState(120);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/form");
  };

  //Email masking
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      const [name, domain] = email.split("@");
      if (name.length === 1) return;
      const mask = `${name[0]}${"*".repeat(name.length - 2)}${name.slice(-1)}`;
      setMaskedEmail(`${mask}@${domain}`);
    }
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setShowResend(true);
    }
  }, [seconds, setSeconds]);

  const handleResendCode = () => {
    setSeconds(120);
    setShowResend(false);
  };

  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;
  return (
    <div className="flex justify-between font-inter">
      <div className=" h-screen bg-[#696969] bg-gradient-to-br from-[#3F1BBC99] from-40%  via-[#9513B4B2] to-[#E38602] w-6/12 pt-24">
        {/* Back Arrow */}

        {/* <div className="bg-[#E38602] z-40 w-60 h-60 blur-2xl -bottom-14 left-96 absolute rounded-full"></div>
  <div className="bg-[#9513B4B2] z-10 w-80 h-80 blur-2xl -bottom-14 left-80 absolute rounded-full"></div>  
  <div className="bg-[#3F1BBC99] z-30  w-[450px] h-[450px] blur-3xl -bottom-32 left-64 absolute rounded-full"></div>
  <div className="bg-gradient-to-r  from-[#3F1BBC99] to-bg-[#696969]  w-[1000px] h-[1000px] -bottom-[450px] z-10  -left-96 absolute rounded-full"></div>   */}
        <div
          onClick={() => navigate("/")}
          className="absolute top-0 py-4 pl-8 cursor-pointer text-white space-x-2 flex items-center text-sm"
        >
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16675 10.5L9.16675 5.5M4.16675 10.5L9.16675 15.5M4.16675 10.5H15.8334"
              stroke="#E0E0E0"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>Back</span>
        </div>

        <div className="flex flex-col items-center space-y-10">
          <h1 className="text-2xl text-white font-bold">Layout Cards</h1>
          <Card
            src="https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg"
            country="Singapore"
            office="Head Office"
            company="XYZ Pvt. Ltd."
            description="Road to nowhere, 06-404, 500 Internal Error"
          />
          <div className="flex flex-row space-x-9">
            <Card
              src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
              country="HongKong"
              office="Branches"
              company="XYZ Pte. Ltd."
              description="The Infinite Loop Office, 404 Timeout Plaza"
            />
            <Card
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              country="USA"
              office="Branches"
              company="XYZ Inc."
              description="Nulltown, Buglandia, 500 0xDEADBEE"
            />
          </div>
        </div>
      </div>

      {/* OTP Section */}
      <div className="space-y-10 mx-auto flex flex-col justify-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Verify your email</h1>
          <p className="text-[#636567] text-sm w-auto">
            Please enter the 6 digit code we just sent to {maskedEmail}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <OTPField />
          <Button
            children="Verify"
            className="py-2 text-white h-11 font-medium w-full"
          />

          {showResend ? (
            <p className="text-[#646464] text-xs">
              Didn’t receive a code?{" "}
              <button
                className="text-[#0090FF] underline"
                onClick={handleResendCode}
              >
                Resend Code
              </button>
            </p>
          ) : (
            <p className="text-[#646464] text-xs">
              Wait {minutes}:
              {displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}{" "}
              before requesting a new code.
            </p>
          )}
        </form>

        {/* //Footer section */}
        <div className="absolute bottom-6">
          <p className="text-xs  text-[#636567] text-center w-[450px]">
            By continuing, you’re agreeing to Nobody’s{" "}
            <a className="text-[#0090FF] underline" href="">
              Terms of Service
            </a>
            ,{" "}
            <a className="text-[#0090FF] underline" href="">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a className="text-[#0090FF] underline" href="">
              Cookie Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
