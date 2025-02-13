import Image from "next/image";
import bg from "../public/TICKET.svg";
import { useEffect, useState } from "react";
import { BarcodeSVG } from "./BarCode";

export function StepThree() {
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [noOfTickets, setNoOfTickets] = useState();
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const storedData = localStorage.getItem("ticketGenerationForm");

    if (storedData) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
      const parsedData = JSON.parse(storedData);
      console.log(parsedData);
      setAvatar(parsedData.avatar);
      setEmail(parsedData.email);
      setUsername(parsedData.fname);
      setTicketType(parsedData.ticketType);
      setNoOfTickets(parsedData.noOfTickets);
      setDescription(parsedData.description);
    }
  }, []);
  return loading ? (
    <div className="animate-pulse mt-8 text-2xl text-center">Generating...</div>
  ) : (
    <div className="text-center mt-8">
      <h1 className="text-[32px] font-bold lg:font-[family-name:var(--font-alatsi)]">
        Your Ticket is Booked!
      </h1>
      <p>You can download or Check your email for a copy</p>
      <div className="mt-8 w-[300px] mx-auto flex justify-center items-center flex-col relative">
        <Image
          width="0"
          height="0"
          className="w-[300px] h-auto"
          src={bg}
          alt=""
        />

        <div className="flex w-[90%] h-[446px] absolute top-5 flex-col gap-5 border border-[#24A0B5] rounded-xl  p-5 bg-[#031E21]/10">
          <div className="">
            <h1 className="font-[family-name:var(--font-road-rage)] text-[34px]">
              Techember Fest ”25
            </h1>
            <p className="my-1">📍 04 Rumens road, Ikoyi, Lagos</p>
            <p className="">📅 March 15, 2025 | 7:00 PM</p>
          </div>
          {avatar && (
            <Image
              className="rounded-xl h-[140px] mx-auto border-4 border-[#24A0B5]/50"
              width={140}
              height="0"
              src={avatar}
              alt="profile photo"
            />
          )}
          <div className="bg-[#08343C] pb-2 text-left rounded-lg border border-[#133D44]">
            <div className="grid grid-cols-2 p-1">
              <div className="flex p-1 flex-col gap-1 text-white border-l-0 border-t-0 border border-[#12464E]">
                <span className="text-[10px] opacity-[33%]">
                  Enter your name
                </span>
                <span className="text-xs">
                  {username.slice(0, 15)}${username.length > 15 && "..."}
                </span>
              </div>
              <div className="flex p-1 flex-col gap-1 text-white border-x-0 border-t-0 border border-[#12464E]">
                <span className="text-[10px] opacity-[33%]">
                  Enter your email *
                </span>
                <span className="text-xs">
                  {email.slice(0, 15)}${email.length > 15 && "..."}
                </span>
              </div>
              <div className="flex p-1 flex-col gap-1 text-white border-l-0 border-t-0 border border-[#12464E]">
                <span className="text-[10px] opacity-[33%]">Ticket Type:</span>
                <span className="text-xs uppercase">{ticketType}</span>
              </div>
              <div className="flex p-1 flex-col gap-1 text-white border-x-0 border-t-0 border border-[#12464E]">
                <span className="text-[10px] opacity-[33%]">Ticket for:</span>
                <span className="text-xs">{noOfTickets}</span>
              </div>
            </div>
            <div className="flex px-2 flex-col gap-1 text-white">
              <span className="text-[10px] opacity-[33%]">
                Special request?
              </span>
              <span className="text-xs">
                {description
                  ? `${description.slice(0, 128)}${
                      description.length > 128 ? "..." : ""
                    }`
                  : "Nil"}
              </span>
            </div>
          </div>
        </div>

        <div className="absolute left-4 flex justify-center bottom-5 w-[90%] mx-auto ">
          <BarcodeSVG />
        </div>
      </div>
    </div>
  );
}
