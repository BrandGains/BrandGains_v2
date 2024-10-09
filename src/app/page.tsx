"use client";
import React, { useRef, useEffect } from "react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Service from "@/components/Service";
import About from "@/components/About";
import CTA from "@/components/CTA";
import OurProcess from "@/components/OurProcess";
import Footer from "@/components/Footer";

export default function Home() {
  const serviceImage = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="w-full bg-gradient-to-tr from-[#17433c] to-[#021814]">
      <div
        ref={serviceImage}
        className="service-image fixed h-[26rem] w-[20rem] rounded-3xl z-30 left-[65%] top-1/4 hidden pointer-events-none"
      ></div>
      <Hero />
      <Marquee />
      <Service serviceImageRef={serviceImage} />
      {/* <About /> */}
      <OurProcess />
      <CTA />
      <Footer />
    </div>
  );
}
