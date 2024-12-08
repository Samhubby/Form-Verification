import { useRef } from "react";
import { Button, Input } from "./index.js";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", emailRef.current.value);
    navigate("/verify-otp");
  };

  return (
    <form className="font-inter space-y-7" onSubmit={handleSubmit}>
      <Input
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        className="w-72"
        ref={emailRef}
      />
      <Input
        label="Password"
        type="password"
        placeholder="*********"
        className="w-72"
        ref={passwordRef}
      />

      <Button children="Sign Up" className="py-2 text-white w-32" />
    </form>
  );
};

export default Signup;
