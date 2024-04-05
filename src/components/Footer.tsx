import Link from "next/link";
import React from "react";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full font-metropolis-medium">
      <div className="py-5  md:py-7 lg:py-14">
        <div className="container mx-auto px-5 xl:max-w-screen-xl">
          <div className="lg:flex lg:justify-between lg:items-center">
            <div>
              <h1 className="text-3xl font-bold md:text-6xl font-monument-black">
                <span className="block text-white">Make Your Videos</span>
                <span className="block text-blue-600">Go Viral</span>
              </h1>
            </div>
            <div className="mt-5 lg:mt-0 lg:ml-5 space-y-2.5 sm:flex sm:flex-shrink-0 sm:space-y-0 sm:space-x-2.5">
              <button className="hover:bg-[#baff4a] px-8 py-2 bg-[#bafc50] rounded-3xl text-black text-sm font-semibold font-metropolis-semibold uppercase transform hover:-translate-y-1 transition duration-400">
                Get Videos You&apos;ll Be Proud Of
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-slate-200">
        <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
          <Link href="https://pagedone.io/" className="flex justify-center ">
            <img src="/brandLogo.png" alt="" width={120} height={100} />
          </Link>
          <ul className="text-lg text-center sm:flex items-cente justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
            <li>
              <Link href="#" className="hover:text-slate-50">
                Brand Gains
              </Link>
            </li>
            <li className="sm:my-0 my-2">
              <Link href="#" className="hover:text-slate-50">
                Products
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-slate-50">
                Resources
              </Link>
            </li>
            <li className="sm:my-0 my-2">
              <Link href="#" className="hover:text-slate-50">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-slate-50">
                Support
              </Link>
            </li>
          </ul>
          <div className="flex  space-x-4 gap-4 sm:justify-center  ">
            <Link
              href="#"
              className="hover:text-slate-50  flex justify-center items-center "
            >
              <LuInstagram />
            </Link>
            <Link
              href="#"
              className="hover:text-slate-50  flex justify-center items-center "
            >
              <RiTwitterXLine />
            </Link>
            <Link
              href="#"
              className="hover:text-slate-50  flex justify-center items-center "
            >
              <FaFacebook />
            </Link>
            <Link
              href="#"
              className="hover:text-slate-50  flex justify-center items-center "
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div className="py-7 border-t border-gray-700">
          <div className="flex items-center justify-center">
            <span className="text-gray-400 ">
              ©pagedone 2024, All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
