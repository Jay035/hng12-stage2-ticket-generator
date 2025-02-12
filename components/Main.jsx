"use client";

import { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { EventInfo } from "./EventInfo";
import { TicketType } from "./TicketType";
import { StepCount } from "./StepCount";

export function Main() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const [selectedTicketOption, setSelectedTicketOption] = useState(1);

  const ticketOptions = [
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
    {
      value: 5,
    },
  ];

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
        <StepCount step={step} totalSteps={totalSteps} />
        <ProgressBar progress={progress} />
      </div>
      <EventInfo />

      <hr className="bg-[#07373F] border border-[#07373F] w-full p-1" />

      <TicketType />

      <div className="">
        <p>Number of Tickets</p>
        <select
          value={selectedTicketOption}
          onChange={(e) => setSelectedTicketOption(e.target.value)}
          name="noOfTickets"
          id="noOfTickets"
          className="mt-2 w-full p-3 outline-none border border-[#07373F] bg-transparent rounded-xl"
        >
          {ticketOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
    </main>
  );
}
