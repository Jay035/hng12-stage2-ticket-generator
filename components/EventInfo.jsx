import Image from "next/image";
import React from "react";

export function EventInfo() {
  return (
    <section className="my-8 radial-gradient flex flex-col items-center text-center p-6 text-pretty border border-[#07373F] rounded-xl">
      <h2 className="font-[family-name:var(--font-road-rage)] text-5xl">
        Techember Fest ”25
      </h2>
      <p className="text-sm mt-2 max-w-[350px]">
        Join us for an unforgettable experience at [Event Name]! Secure your
        spot now.
      </p>
      <div className="md:flex gap-4 md:mt-2">
        <p className="mt-10 mb-1 md:my-0">📍 [Event Location]</p>
        <span className="hidden md:block">| |</span>
        <p>March 15, 2025 | 7:00 PM</p>
      </div>
    </section>
  );
}
