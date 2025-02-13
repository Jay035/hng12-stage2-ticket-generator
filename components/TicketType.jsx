import { useState } from "react";

const ticketTypes = [
  {
    id: "regular",
    name: "REGULAR ACCESS",
    price: "Free",
    available: 20,
  },
  {
    id: "vip",
    name: "VIP ACCESS",
    price: "$50",
    available: 20,
  },
  {
    id: "vvip",
    name: "VVIP ACCESS",
    price: "$150",
    available: 20,
  },
];

export function TicketType({ setFormDetails }) {
  const [selectedTicketType, setSelectedTicketType] = useState("regular");

  return (
    <section className="my-8">
      <p>Select Ticket Type:</p>
      <div className="mt-2 bg-[#052228] grid md:grid-cols-3 gap-6 p-4 rounded-3xl border border-[#07373F]">
        {ticketTypes.map((ticketType) => (
          <button
            onClick={(e) => {
              e.preventDefault();
              setSelectedTicketType(ticketType.id);
              setFormDetails((prev) => ({
                ...prev,
                ticketType: ticketType.id,
              }));
            }}
            key={ticketType.id}
            className={`rounded-xl p-2 text-left w-full border border-[#07373F] hover:border-[#197686] hover:bg-[#2C545B] ${
              selectedTicketType === ticketType.id &&
              "bg-[#197686] border-[#197686]"
            } `}
          >
            <span className="text-2xl font-semibold">
              {ticketType.price}
            </span>
            <div className="mt-3 flex flex-col items-start justify-between w-full">
              <span> {ticketType.name}</span>
              <span className="text-sm">20/52</span>
            </div>
           
          </button>
        ))}
      </div>
    </section>
  );
}
