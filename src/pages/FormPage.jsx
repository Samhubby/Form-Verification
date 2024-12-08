import { Form, Stepper } from "../components/index.js";

const FormPage = () => {
  return (
    <div className="space-y-8 bg-[#FAFAFA]">
      <h1 className="text-center text-[20px] font-semibold font-inter pt-8">
        Multi-Step Form Assignment
      </h1>
      <Stepper />
      <Form />
    </div>
  );
};

export default FormPage;
