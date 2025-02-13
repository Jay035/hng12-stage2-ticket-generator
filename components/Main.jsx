"use client";

import { useEffect, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { StepCount } from "./StepCount";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";

export function Main() {
  const [formDetails, setFormDetails] = useState({
    fname: "",
    email: "",
    avatar: "",
    description: "",
    ticketType: "regular",
    noOfTickets: 1,
    step: 1,
  });

  const [errors, setErrors] = useState({
    fname: "",
    email: "",
    avatar: "",
    // description: "",
  });

  const totalSteps = 3;
  const progress = (formDetails.step / totalSteps) * 100;

  const prevStep = () => {
    if (formDetails.step > 1)
      setFormDetails((prev) => ({ ...prev, step: formDetails.step - 1 }));
  };

  const nextStep = () => {
    if (formDetails.step < totalSteps)
      setFormDetails((prev) => ({ ...prev, step: formDetails.step + 1 }));
  };

  const validateForm = () => {
    let errs = {};

    if (!formDetails.fname.trim()) errs.fname = "Full Name is required";
    if (
      !formDetails.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formDetails.email)
    ) {
      errs.email = "Provide a valid email";
    }
    if (!formDetails.avatar.trim()) {
      errs.avatar = "Avatar image is required";
    }
    // if (!formDetails.description.trim()) {
    //   errs.description = "Description is required";
    // }

    setErrors(errs);

    const isValid = Object.keys(errs).length === 0;
    console.log("Is valid?", isValid);
    return isValid;
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("ticketGenerationForm"));
    if (savedData) {
      setFormDetails(savedData);
    }
  }, []);

  useEffect(() => {
    console.log(formDetails);
    localStorage.setItem("ticketGenerationForm", JSON.stringify(formDetails));
  }, [formDetails]);

  return (
    <main className="mt-2 p-6 bg-[#08252B] max-w-[700px] mx-auto text-[#FAFAFA] w-full rounded-xl border border-[#0E464F]">
      <div className="flex justify-between gap-3 flex-wrap">
        <h1 className="mb-3 text-2xl lg:text-[32px] font-[JejuMyeongjo-Regular]">
          {formDetails.step === 1 && "Ticket Selection"}
          {formDetails.step === 2 && "Attendee Details"}
          {formDetails.step === 3 && "Ready"}
        </h1>
        <StepCount step={formDetails.step} totalSteps={totalSteps} />
      </div>
      <ProgressBar progress={progress} />
      {formDetails.step === 1 && (
        <StepOne setFormDetails={setFormDetails} nextStep={nextStep} />
      )}
      {formDetails.step === 2 && (
        <StepTwo
          formDetails={formDetails}
          validateForm={validateForm}
          errors={errors}
          setErrors={setErrors}
          setFormDetails={setFormDetails}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      )}
      {formDetails.step === 3 && <StepThree />}
    </main>
  );
}
