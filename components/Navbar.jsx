import Image from "next/image";

export function Navbar() {
  return (
    <nav className="my-[10px] border border-[#197686] flex gap-4 font-[JejuMyeongjo-Regular] py-3 px-4 justify-between rounded-xl w-full items-center bg-[#05252C]">
      <Image
        src="/logo.svg"
        width="0"
        height="0"
        className="w-[90px] h-auto"
        alt="logo"
      />
      <ul className="hidden md:flex text-lg gap-4 items-center text-[#FAFAFA]">
        <li>Events</li>
        <li>My Tickets</li>
        <li>About Project</li>
      </ul>
      <button className="bg-white text-sm text-[#0A0C11] rounded-md w-[141px] h-11 flex items-center gap-2 justify-center">
        MY TICKETS{" "}
        <Image
          src="/arrow-right.svg"
          width="0"
          height="0"
          className="w-4 h-auto"
          alt="arrow right"
        />
      </button>
    </nav>
  );
}
