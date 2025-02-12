"use client";

import { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { EventInfo } from "./EventInfo";
import { TicketType } from "./TicketType";

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
    <main className="mt-2 p-6 bg-[#08252B] text-[#FAFAFA] w-full rounded-xl border border-[#0E464F]">
      <h1 className="mb-3 text-2xl font-[JejuMyeongjo-Regular]">
        Ticket Selection
      </h1>
      <div className="">
        <p className="mb-3">
          Step {step}/{totalSteps}
        </p>
        <ProgressBar progress={progress} />
      </div>
      <EventInfo />

      <hr className="bg-[#07373F] border border-[#07373F] w-full p-1" />

      <TicketType />
    </main>
  );
}
