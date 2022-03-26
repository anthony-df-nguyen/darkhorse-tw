import React from 'react'
import Image from "next/image";

export default function dh_logo() {
  return (
    <span className="flex items-center cursor-pointer">
      <Image
        src="/images/horse.svg"
        layout="fixed"
        height={36}
        width={36}
        alt="horse-icon"
      />
      <span className="ml-4 text-2xl text-dark font-extrabold">
        Darkhorse
        <span className="text-accent"> Advisor</span>
      </span>
    </span>
  );
}
