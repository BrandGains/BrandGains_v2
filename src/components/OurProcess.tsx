import React from "react";
import Button from "./Button";

const processData = [
  {
    title: "Find Your Video",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.",
  },
  {
    title: "Copy and Paste",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.",
  },
  {
    title: "Done",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.",
  },
  {
    title: "Done",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.",
  },
];

function OurProcess() {
  return (
    <section className="pb-10">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-24 lg:py-16 text-white">
        <div className="mx-auto w-full max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl capitalize md:text-7xl font-bold font-monument-regular">
              How it Works
            </h2>
            <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam,purus sit amet luctus magna fringilla urna
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid grid-container grid-cols-1 gap-4 sm:justify-items-stretch md:grid-cols-3 lg:gap-8">
          {processData.map((item, index) => (
            <div
              className="flex flex-col gap-4 rounded-md bg-gradient-to-tr from-[#2b2f2f] to-[#3c4646] p-8 md:p-10"
              key={index}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#bafc50]">
                <p className="text-xl font-bold text-black">{index + 1}</p>
              </div>
              <p className="text-xl font-semibold font-monument-regular">
                {item.title}
              </p>
              <p className="text-[#f2faf5] font-metropolis-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full">
        <Button title="Let&apos;s Work Together" />
      </div>
    </section>
  );
}

export default OurProcess;
