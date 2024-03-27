"use client";
import React, { useRef } from 'react';
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Service from "@/components/Service";

export default function Home() {
  const serviceImage = useRef(null);
  return (
    <div className="w-full h-full">
      <div ref={serviceImage} className="service-image fixed h-[26rem] w-[20rem] rounded-3xl bg-cyan-400 z-30 left-[65%] top-1/4 hidden"></div>
      <Hero />
      <Marquee/>
      <Service serviceImageRef={serviceImage}/>
    </div>
  );
}
