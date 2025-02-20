import Image from "next/image";
import { ImageUploader } from "./ImageUploader";

export function StepTwo({
  errors,
  validateForm,
  prevStep,
  nextStep,
  formDetails,
  setFormDetails,
  setErrors,
}) {
  return (
    <form className=" mt-8 ">
      <ImageUploader
        errors={errors}
        setErrors={setErrors}
        setFormDetails={setFormDetails}
      />
      <hr className="bg-[#07373F] border border-[#07373F] w-full p-[3px]" />
      <div className="my-8 flex flex-col gap-2">
        <label className="" htmlFor="name">
          Enter your name
        </label>
        <input
          value={formDetails.fname}
          type="text"
          id="name"
          name="name"
          aria-describedby={errors.fname ? "fullNameError" : undefined}
          onChange={(e) => {
            setFormDetails((prev) => ({ ...prev, fname: e.target.value }));
            setErrors((prev) => ({ ...prev, fname: "" }));
          }}
          className="w-full text-[#fafafa] p-3 outline-none border border-[#07373F] bg-transparent rounded-xl"
          required
        />
        {errors.fname && (
          <p
            id="fullNameError"
            aria-live="assertive"
            className="text-red-500 text-sm"
          >
            {errors.fname}
          </p>
        )}
      </div>

      <div className="my-8 flex flex-col gap-2">
        <label className="" htmlFor="email">
          Enter your email *
        </label>
        <div className="border border-[#07373F] flex p-3 gap-2 items-center">
          <Image
            className="w-6"
            width="0"
            height="0"
            src="/mail.svg"
            alt="mail"
          />
          <input
            value={formDetails.email}
            type="email"
            placeholder="hello@avioflagos.io"
            id="email"
            name="email"
            aria-describedby={errors.email ? "emailError" : undefined}
            onChange={(e) => {
              setFormDetails((prev) => ({ ...prev, email: e.target.value }));
              setErrors((prev) => ({ ...prev, email: "" }));
            }}
            className="w-full px-2 text-[#fafafa] outline-none bg-transparent rounded-xl"
            required
          />
          {errors.email && (
            <p
              id="emailError"
              aria-live="assertive"
              className="text-red-500 text-sm"
            >
              {errors.email}
            </p>
          )}
        </div>
      </div>
      <div className="my-8 flex flex-col gap-2">
        <label className="" htmlFor="description">
          About the project
        </label>
        <textarea
          value={formDetails.description}
          className="w-full text-[#fafafa] p-3 outline-none border border-[#07373F] bg-transparent rounded-xl"
          name="description"
          id="description"
          placeholder="Textarea"
          onChange={(e) => {
            setFormDetails((prev) => ({
              ...prev,
              description: e.target.value,
            }));
            setErrors((prev) => ({ ...prev, description: "" }));
          }}
        ></textarea>
       
      </div>

      <div className="mt-8 font-[JejuMyeongjo-Regular] md:gap-8 md:flex justify-center items-center">
        <button
          onClick={(e) => {
            e.preventDefault();
            if (validateForm()) {
              nextStep();
            }
          }}
          className="bg-[#24A0B5] order-2 lg:w-[214px] px-6 py-3 mb-4 md:mb-0 rounded-lg w-full text-white"
        >
          Get my Free Ticket
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            prevStep();
          }}
          className="bg-transparent lg:w-[214px] px-6 py-3 border border-[#24A0B5] rounded-lg w-full text-[#24A0B5]"
        >
          Back
        </button>
      </div>
    </form>
  );
}
