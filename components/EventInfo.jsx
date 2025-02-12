import Image from "next/image";
import React from "react";

export function EventInfo() {
  return (
    <section className="my-8 border border-[#07373F] rounded-xl">
      <div className="radial-gradient backdrop-blur-md rounded-xl text-center p-6 text-pretty">
        <h2 className="font-[family-name:var(--font-road-rage)] text-5xl">
          Techember Fest ”25
        </h2>
        <p className="text-sm mt-2">
          Join us for an unforgettable experience at [Event Name]! Secure your
          spot now.
        </p>

        <p className="mt-10 mb-1">📍 [Event Location]</p>
        <p>March 15, 2025 | 7:00 PM</p>
      </div>
    </section>
  );
}
