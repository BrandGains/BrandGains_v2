"use client";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BsArrowRight } from "react-icons/bs";

const servicePara =
  "we offer services that can help businesses improve their visibility and business reputation online: expand market reach. and increase turnover through effective digital strategies.";

const serviceData = [
  {
    name: "Basic Cuts",
    route: "/",
  },
  {
    name: "Advance Cuts",
    route: "/",
  },
  {
    name: "Transitions",
    route: "/",
  },
  {
    name: "Motion Graphic",
    route: "/",
  },
  {
    name: "Color Grading",
    route: "/",
  },
  {
    name: "Sound Design",
    route: "/",
  },
  {
    name: "Audio Mixing",
    route: "/",
  },
  {
    name: "Noise Reduction",
    route: "/",
  },
  {
    name: "Text Overlays",
    route: "/",
  },
];

function Service() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center text-white bg-gradient-to-tr from-[#17433c] to-[#021814] pt-10 gap-11">
      <div className="part-1 w-[95%] flex flex-col gap-4 min-h-fit font-metropolis-bold">
        <h2 className="text-xl font-metropolis-semibold">Our Services</h2>
        <div className="flex justify-between w-full items-start">
          <h2 className="text-white text-5xl font-bold">
            What{" "}
            <span className="bg-gradient-to-tr from-teal-400 to-sky-300 bg-clip-text text-transparent">
              Services
            </span>
            <br /> We&apos;re Offering
          </h2>
          <TextGenerateEffect
            words={servicePara}
            className="w-5/12 text-lg font-metropolis-bold"
          />
        </div>
      </div>
      <div className="part-2 w-[95%] flex flex-row gap-6">
        <div className="left flex w-1/5 items-center justify-center bg-[#171919] rounded-t-[3rem]">
          <h1 className="text-7xl font-monument-black -rotate-90">Editing.</h1>
        </div>
        <div className="right w-full text-black bg-[#bafc50] px-3 rounded-t-[3rem] overflow-hidden">
                {serviceData.map((service, index) => (
                    <div className="elem group relative h-24 w-full flex items-center overflow-hidden border-b-[0.5px] border-[#07161b] " key={index}>
                        <div className="overlay absolute h-full w-full top-[-100%] group-hover:top-0 bg-[#ff5050]"></div>
                        <div className="flex justify-between w-full px-7 items-center">
                            <h2 className="text-4xl font-monument-regular z-10 text-center">
                                {service.name}
                            </h2>
                            <BsArrowRight className="w-10 h-10 p-3 rounded-full border border-black z-10 text-black" />
                        </div>
                    </div>
                ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
