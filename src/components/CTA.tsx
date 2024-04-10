import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa6";
import Button from "./Button";

function CTA() {
  return (
    <section className="">
      <div className="px-5 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="p-2 bg-[#bafc50] rounded-3xl">
            <div className="flex flex-col items-center justify-between h-full p-10 bg-[#171919] border  md:p-20 rounded-3xl gap-4">
              <div>
                <span className="text-sm font-semibold text-gray-100 uppercase font-metropolis-bold text-center">
                  <FaHeart className="whitespace-nowrap inline-block text-red-500 animate-bounce text-lg" />{" "}
                  Lorem, ipsum.
                </span>
                <h1 className="mt-8 text-4xl text-start tracking-normal underline decoration-lime-300 underline-offset-2  text-white font-monument-black-italic">
                  Make Your Videos Go Viral
                </h1>
                <p className="mt-4 text-lg text-gray-100 text-pretty font-metropolis-medium">
                  Stop wasting time on videos that don&apos;t work. Let our
                  experts create short-form content that gets results.
                </p>
              </div>
              <div className="flex flex-col items-center w-full mt-2 gap-2">
                <Button title="Get Videos You'll Be Proud Of" />
              </div>
            </div>
          </div>
          <div className="block w-full h-full aspect-square">
            <div className="h-full p-2 overflow-hidden bg-[#bafc50] rounded-3xl relative z-10">
              <Image
                alt="#"
                fill
                className="relative rounded-2xl object-cover object-center"
                src="https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
