"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";


const serviceData = [
  {
    name: "Basic Cuts",
    route: "/",
    image:
      "https://images.pexels.com/photos/20770938/pexels-photo-20770938/free-photo-of-colorful-buildings-on-the-river-bank-in-florence.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    name: "Advance Cuts",
    route: "/",
    image:
      "https://images.pexels.com/photos/19737838/pexels-photo-19737838/free-photo-of-cozy-seats-by-window-in-wooden-luxury-hut.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    name: "Transitions",
    route: "/",
    image:
      "https://images.pexels.com/photos/19899299/pexels-photo-19899299/free-photo-of-a-cup-of-coffee-and-a-drink-on-a-tray.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    name: "Motion Graphic",
    route: "/",
    image:
      "https://images.pexels.com/photos/19797967/pexels-photo-19797967/free-photo-of-la-mezquita-catedral-de-cordoba.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    name: "Color Grading",
    route: "/",
    image:
      "https://images.pexels.com/photos/6198355/pexels-photo-6198355.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    name: "Sound Design",
    route: "/",
    image:
      "https://images.pexels.com/photos/12727893/pexels-photo-12727893.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    name: "Audio Mixing",
    route: "/",
    image:
      "https://images.pexels.com/photos/20743286/pexels-photo-20743286/free-photo-of-black-and-white-photo-of-flowers-in-bloom.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    name: "Noise Reduction",
    route: "/",
    image:
      "https://images.pexels.com/photos/17939647/pexels-photo-17939647/free-photo-of-atlantic-coast-at-iceland.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    name: "Text Overlays",
    route: "/",
    image:
      "https://images.pexels.com/photos/13708881/pexels-photo-13708881.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

function Service({ serviceImageRef }: { serviceImageRef: any }) {
  const showServiceImage = (imageUrl: string) => {
    serviceImageRef.current.classList.remove("hidden");
    serviceImageRef.current.classList.add([
      "bg-center",
      "bg-cover",
      "bg-no-repeat",
    ]);
    serviceImageRef.current.style.backgroundImage = `url(${imageUrl})`;
  };
  return (
    <div className=" w-full flex flex-col items-center text-white py-10 gap-11">
      <div className="part-1 w-[95%] flex flex-col gap-4 min-h-fit font-metropolis-bold">
        <h2 className="text-lg sm:text-xl font-metropolis-semibold">
          Our Services
        </h2>
        <div className="flex justify-between w-full items-start">
          <h2 className="text-white text-3xl sm:text-5xl font-bold">
            What{" "}
            <span className="bg-gradient-to-tr from-teal-400 to-sky-300 bg-clip-text text-transparent">
              Services
            </span>
            <br /> We&apos;re Offering
          </h2>
          <p className="w-4/5 sm:w-5/12 text-sm sm:text-xl font-metropolis-bold">
          We offer services like Editing Short-Form Content and running AD&apos;s based on them. All the Services have a systematic plan that is followed to give the best results to the business.
          </p>
        </div>
      </div>
      <div className="part-2 w-[95%] flex flex-col sm:flex-row gap-6">
        <div className="left flex sm:w-1/5 items-center justify-center sm:bg-[#171919] sm:rounded-t-[3rem]">
          <h1 className="text-5xl sm:text-7xl font-monument-black sm:-rotate-90 underline decoration-lime-300 sm:no-underline">
            EDITING.
          </h1>
        </div>
        <div className="sm:block hidden right w-full text-black bg-[#bafc50] px-3 sm:rounded-t-[3rem] overflow-hidden">
          {serviceData.map((service, index) => (
            <div
              className="elem group relative h-24 w-full flex items-center overflow-hidden border-b-[0.5px] border-[#07161b] "
              key={index}
              onMouseOver={() => showServiceImage(service.image)}
              onMouseOut={() => {
                serviceImageRef.current.classList.add("hidden");
                serviceImageRef.current.classList.remove([
                  "bg-center",
                  "bg-cover",
                  "bg-no-repeat",
                ]);
              }}
            >
              <div className="overlay absolute h-full w-full top-[-100%] group-hover:top-0 bg-[#ff5050]"></div>
              <div className="flex justify-between w-full px-7 items-center">
                <h2 className="service-name text-4xl font-monument-regular z-10 text-center group-hover:text-5xl transition-all">
                  {service.name}
                </h2>
                <BsArrowRight className="w-10 h-10 p-3 rounded-full border border-black z-10 text-black" />
              </div>
            </div>
          ))}
        </div>
        {serviceData.map((service, index) => (
          <div
            className="sm:hidden card bg-[#bafc50] w-full flex flex-col items-center rounded-xl py-3"
            key={index}
          >
            <div
              className="w-11/12 h-96 bg-cover bg-center rounded-t-xl"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>
            <div className="w-11/12 flex flex-col bg-[#171919] items-center justify-center rounded-b-lg py-2 gap-2">
              <h3 className="text-center font-monument-regular text-3xl text-[#bafc50]">
                {service.name}
              </h3>
              <p className="text-center font-metropolis-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, vero!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
