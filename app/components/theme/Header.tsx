'use client';
import React from 'react';
import Image from "next/image";
import {elipseBlueBlur} from "@/public/assets";

const EllipseBlueBlur = () => {
  return (
    <Image
        src={elipseBlueBlur}
        alt="elipse-blue-blur"
        className="absolute top-[-14rem] -left-[9rem] z-0 pointer-events-none mix-blend-color-dodge"
    />
  );
};

export default EllipseBlueBlur;
