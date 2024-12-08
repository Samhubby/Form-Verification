import React from "react";
import { Signup } from "../components/index.js";

const SignupPage = () => {
  return (
    <div className="flex flex-col space-y-6 items-center justify-center pt-48">
        <h1 className=" text-2xl font-bold font-inter">
        Welcome, Please Sign Up to continue.
      </h1>
      <Signup />
    </div>
  );
};

export default SignupPage;
