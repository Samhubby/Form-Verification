import React, { useState, useEffect } from "react";
import { Button, LayoutCards, OTPField, Timer } from "../components";
import { useNavigate } from "react-router-dom";
import { LeftArrow, Logo } from "../logos/index";

const OTPPage = () => {
  const [maskedEmail, setMaskedEmail] = useState("");

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

  return (
    <div className="flex justify-between font-inter">
      <div className=" h-screen bg-[#696969] bg-gradient-to-br from-[#3F1BBC99] from-40%  via-[#9513B4B2] to-[#E38602] w-6/12 pt-24">
        <div
          onClick={() => navigate("/")}
          className="absolute top-0 py-4 pl-8 cursor-pointer text-white space-x-2 flex items-center text-sm"
        >
          <LeftArrow />
          <span>Back</span>
        </div>
        <LayoutCards />
      </div>

      {/* OTP Section */}
      <div className="space-y-10 mx-auto flex flex-col justify-center">
        <div className="absolute top-20">
          <Logo />
        </div>
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

          <Timer />
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
