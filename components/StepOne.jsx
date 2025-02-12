import { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { StepCount } from "./StepCount";
import { EventInfo } from "./EventInfo";
import { TicketType } from "./TicketType";

export function StepOne({ step, totalSteps, progress, nextStep }) {
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
  return (
    <form className="">
      <div className="flex justify-between gap-3 flex-col md:flex-row">
        <h1 className="mb-3 text-2xl lg:text-[32px] font-[JejuMyeongjo-Regular]">
          Ticket Selection
        </h1>
        <StepCount step={step} totalSteps={totalSteps} />
      </div>
      <ProgressBar progress={progress} />
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

      <div className="mt-8 md:px-3 md:rounded-3xl lg:px-12 font-[JejuMyeongjo-Regular] md:border md:gap-8 md:border-[#0E464F] md:bg-[#041E23] md:flex justify-center items-center">
        <button className="bg-[#24A0B5] lg:w-[214px] px-6 py-3 mb-4 md:mb-0 rounded-lg w-full text-white">
          Next
        </button>
        <button className="bg-transparent lg:w-[214px] px-6 py-3 border border-[#24A0B5] rounded-lg w-full text-[#24A0B5]">
          Cancel
        </button>
      </div>
    </form>
  );
}
