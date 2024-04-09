"use client";
import React from "react";

function Hero() {
  return (
    <div className="min-h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="h-[100vh] w-full bg-[#255e45] bg-grid-white/[0.2]  relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 800 800"
          opacity="0.56"
          className="z-10 absolute"
        >
          <defs>
            <filter
              id="bbblurry-filter"
              x="-100%"
              y="-100%"
              width="400%"
              height="400%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur
                stdDeviation={55}
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="SourceGraphic"
                edgeMode="none"
                result="blur"
              />
            </filter>
          </defs>
          <g filter="url(#bbblurry-filter)">
            <ellipse
              rx="127.5"
              ry={150}
              cx="671.5921965337014"
              cy="590.9807447174298"
              fill="hsla(167, 45%, 11%, 1.00)"
            />
            <ellipse
              rx="127.5"
              ry={150}
              cx="622.576904296875"
              cy="403.7709655761719"
              fill="#75ddddff"
            />
            <ellipse
              rx="127.5"
              ry={150}
              cx="424.2372131347656"
              cy="555.8963623046875"
              fill="hsla(168, 97%, 26%, 1.00)"
            />
          </g>
        </svg>
        <div className="content w-11/12 sm:w-10/12 z-20 flex flex-col justify-center items-center gap-8">
          <h1 className="text-3xl sm:text-7xl text-white font-monument-black text-center sm:leading-[4.9rem] leading-[2.5rem] sm:tracking-wide tracking-normal">
            Expert Short Form Videos Editing Agency
          </h1>
          <p className="font-metropolis-semibold sm:text-2xl text-md text-white text-center sm:w-8/12 w-full underline underline-offset-2">
            We deliver Top Notch Video Edits For our client. that Helps Them to
            Increase their Engagement and Grow Their business
          </p>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-3xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Let&apos;s Connect
          </button>
          </div>
        </div>
      </div>
  );
}

export default Hero;
