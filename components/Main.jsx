"use client";

import { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { EventInfo } from "./EventInfo";
import { TicketType } from "./TicketType";
import { StepCount } from "./StepCount";
import { StepOne } from "./StepOne";

export function Main() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  return (
    <main className="mt-2 p-6 bg-[#08252B] max-w-[700px] mx-auto text-[#FAFAFA] w-full rounded-xl border border-[#0E464F]">
      {step === 1 && <StepOne step={step} totalSteps={totalSteps} progress={progress} nextStep={nextStep} />}
    </main>
  ); 
}
