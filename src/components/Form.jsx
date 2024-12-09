import { Button, Dropzone, Input, Select, Textarea } from "./index.js";

const Form = () => {
  return (
    <div className="px-[48px] font-inter space-y-10 py-[56px] rounded-2xl bg-white w-[894px] h-[1624px0] mx-auto">
      
      <div className="space-y-3">
        <h1 className="text-[20px] font-medium">
          Tell us more about your business
        </h1>
        <p className="text-[#636567] text-[13px]  ">
          Your info is like the Wi-Fi password—totally crucial for keeping
          things running, impressing the money folks, and making sure you get
          top-notch service without any buffering!
        </p>
      </div>

{/* Input Components  */}
      <div className="space-y-4 w-[798px] h-[708px]">
        <div className="flex justify-between">
          <Input
            type="text"
            placeholder="Legal name"
            label="Legal Name"
            className="w-96"
          />
          <Input
            type="text"
            placeholder="Doing business as"
            label="Doing business as"
            className="w-96"
          />
        </div>

        <div className="flex justify-between">
          <Input
            type="text"
            placeholder="Company Registration Number"
            label="Company Registration Number"
            className="w-96"
          />
          <Input
            type="text"
            placeholder="Random Registration Number"
            label="Random Registration Number"
            className="w-96"
          />
        </div>

        <div className="flex justify-between">
          <Input
            type="text"
            placeholder="Website URL"
            label="Website URL"
            className="w-96"
          />
          <Select
            label="Industry Name"
            option="Industry Name"
            className="w-96"
          />
        </div>

        <div className="flex justify-between">
          <Select
            label="One Random Dropdown"
            option="Options nai options"
            className="w-96"
          />
          <Select
            label="Which dropdown would you like to select?"
            option="More Options"
            className="w-96"
          />
        </div>

        <div className="flex justify-between">
          <Select
            label="Another Random Dropdown"
            option="Return of the options"
            className="w-96"
          />
          <Select
            label="Account Usage Intent"
            option="Account Usage Intent"
            className="w-96"
          />
        </div>

        <div className="flex justify-between">
          <Input
            type="text"
            placeholder="Random count per month"
            label="Put the value get the answer"
            className="w-96"
          />
          <Input
            type="number"
            placeholder="Expected total visits in this page"
            label="In Number"
            className="w-96"
          />
        </div>

        <div className="flex justify-between">
          <Textarea
            type=""
            placeholder="Purpose of using fake form"
            label="Purpose of using fake form"
            className="w-96 h-28"
          />
          <Textarea
            type="text"
            placeholder="Ek description toh banta hai"
            label="Product Description"
            className="w-96 h-28 "
          />
        </div>

        <div className="flex justify-between">
          <Input
            type="email"
            placeholder="Contact email"
            label="Contact email"
            className="w-96"
          />
        </div>

      </div>

{/* Dropzones  */}
      <div className="space-y-3 ">
        <h1 className="text-lg font-medium">
          Certification of Incorporation{" "}
          <span className="text-[#FF3B30]"> *</span>
        </h1>

        <p className="text-[#636567] text-xs ">
          Upload the incorporation certificate
        </p>
        <Dropzone />
      </div>

      <div className="space-y-3">
        <h1 className="text-lg font-medium">
          Company Logo <span className="text-[#FF3B30]"> *</span>
        </h1>
        <p className="text-[#636567] text-xs ">Upload the company logo</p>
        <Dropzone />
      </div>

{/* Button Section */}
      <div className="flex justify-between">
        <Button
          children="Previous"
          className="py-2  w-24 text-black bg-transparent border-black border-2 "
        />
        <Button children="Next" className="p-2 w-20 text-white " />
      </div>

    </div>
  );
};

export default Form;
