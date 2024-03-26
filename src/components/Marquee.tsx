import React from "react";

function Marquee() {
  return (
    <div className="marquee bg-emerald-800 text-white font-monument-black whitespace-nowrap text-8xl h-1/5 flex items-center overflow-x-auto">
      <div className="con  inline-flex items-center animate-marquee ">
        <h2 className="inline-block whitespace-nowrap mx-2">EXPERIENCE</h2>
        <div className="divider w-32 h-20 bg-orange-500 flex whitespace-nowrap rounded-full mx-6 items-center overflow-hidden relative">
          <video
            src="https://cdn.cuberto.com/cb/hello/overview/1.mp4"
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="inline-block whitespace-nowrap mx-2">CONTENT</h2>
        <div className="divider w-32 h-20 bg-orange-500 flex whitespace-nowrap rounded-full mx-6 items-center overflow-hidden relative">
          <video
            src="https://cdn.cuberto.com/cb/hello/overview/3.webm"
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="inline-block whitespace-nowrap mx-2">INSPIRATION</h2>
        <div className="divider w-32 h-20 bg-orange-500 flex whitespace-nowrap rounded-full mx-6 items-center overflow-hidden relative">
          <video
            src="https://cdn.cuberto.com/cb/hello/overview/1.mp4"
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="con  inline-flex items-center animate-marquee ">
        <h2 className="inline-block whitespace-nowrap mx-2">EXPERIENCE</h2>
        <div className="divider w-32 h-20 bg-orange-500 flex whitespace-nowrap rounded-full mx-6 items-center overflow-hidden relative">
          <video
            src="https://cdn.cuberto.com/cb/hello/overview/3.webm"
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="inline-block whitespace-nowrap mx-2">CONTENT</h2>
        <div className="divider w-32 h-20 bg-orange-500 flex whitespace-nowrap rounded-full mx-6 items-center overflow-hidden relative">
          <video
            src="https://cdn.cuberto.com/cb/hello/overview/1.mp4"
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="inline-block whitespace-nowrap mx-2">INSPIRATION</h2>
        <div className="divider w-32 h-20 bg-orange-500 flex whitespace-nowrap rounded-full mx-6 items-center overflow-hidden relative">
          <video
            src="https://cdn.cuberto.com/cb/hello/overview/3.webm"
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="con  inline-flex items-center animate-marquee ">
        <h2 className="inline-block whitespace-nowrap mx-2">EXPERIENCE</h2>
        <div className="divider w-32 h-20 bg-orange-500 flex whitespace-nowrap rounded-full mx-6 items-center overflow-hidden relative">
          <video
            src="https://cdn.cuberto.com/cb/hello/overview/1.mp4"
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="inline-block whitespace-nowrap mx-2">CONTENT</h2>
        <div className="divider w-32 h-20 bg-orange-500 flex whitespace-nowrap rounded-full mx-6 items-center overflow-hidden relative">
          <video
            src="https://cdn.cuberto.com/cb/hello/overview/3.webm"
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="inline-block whitespace-nowrap mx-2">INSPIRATION</h2>
        <div className="divider w-32 h-20 bg-orange-500 flex whitespace-nowrap rounded-full mx-6 items-center overflow-hidden relative">
          <video
            src="https://cdn.cuberto.com/cb/hello/overview/1.mp4"
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Marquee;
