import { useState } from "react";
import { EventInfo } from "./EventInfo";
import { TicketType } from "./TicketType";

export function StepOne({ nextStep, setFormDetails }) {
  const [noOfTickets, setNoOfTickets] = useState(1);

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
      <EventInfo />

      <hr className="bg-[#07373F] border border-[#07373F] w-full p-[3px]" />

      <TicketType setFormDetails={setFormDetails} />

      <div className="">
        <p>Number of Tickets</p>
        <select
          value={noOfTickets}
          onChange={(e) => {
            setNoOfTickets(e.target.value);
            setFormDetails((prev) => ({
              ...prev,
              noOfTickets: e.target.value,
            }));
          }}
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

      <div className="mt-8 font-[JejuMyeongjo-Regular]  md:gap-8 md:flex justify-center items-center">
        <button
          onClick={(e) => {
            e.preventDefault();
            nextStep();
          }}
          className="bg-[#24A0B5] order-2 lg:w-[214px] px-6 py-3 mb-4 md:mb-0 rounded-lg w-full text-white"
        >
          Next
        </button>
        <button
          onClick={(e) => e.preventDefault()}
          className="bg-transparent lg:w-[214px] px-6 py-3 border border-[#24A0B5] rounded-lg w-full text-[#24A0B5]"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
