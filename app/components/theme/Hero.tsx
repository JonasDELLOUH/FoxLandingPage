'use client';
import React from 'react';
import {grid} from "@/public/assets";
import Image from "next/image";

const Grid = () => {
  return (
    <Image
        src={grid}
        alt="grid"
        className='hidden lg:block absolute -top-[1.25rem] left-0 z-0 w-full h-full object-contain object-top
        pointer-events-none opacity-50'
    />
  );
};

export default Grid;
