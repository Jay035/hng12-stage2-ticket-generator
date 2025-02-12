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

export function TicketType() {
  const [selectedTicketType, setSelectedTicketType] = useState(null);
  
  return (
    <section className="my-8">
      <p>Select Ticket Type:</p>
      <div className="mt-2 bg-[#052228] flex flex-col gap-6 p-4 rounded-3xl border border-[#07373F]">
        {ticketTypes.map((ticketType) => (
          <button key={ticketType.id} className={`flex gap-2 w-full`}>
            <div className="flex flex-col items-start justify-between w-full">
              <span> {ticketType.name}</span>
              <span className="text-sm">{ticketType.available} left!</span>
            </div>
            <span className="border h-[38px] text-xl flex items-center justify-end w-20 px-2 font-semibold border-[#2BA4B9] bg-[#0E464F]">
              {ticketType.price}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
