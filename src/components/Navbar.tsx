"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className={`fixed flex flex-col md:flex-row w-full ${
        isOpen ? "h-full bg-gradient-to-tr from-[#17433c] to-[#021814]" : "h-fit bg-gradient-to-b from-[#021814ac] to-[#05372f14]  backdrop-blur-sm"
      } justify-between text-slate-200  md:px-10 z-50`}
    >
      <div className="flex items-center gap-28 justify-between md:justify-normal">
        <div className="logo flex items-center">
          <Image
            className="nav-logo m-5 object-contain object-center"
            src="/brandLogo.png"
            width={120}
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 30vw, 320px"
            height={100}
            alt=""
          />
        </div>
        <ul className="md:flex items-center gap-7 hidden">
          <li>
            <Link href={"#"} className="hover:text-slate-50">
              Services
            </Link>
          </li>
          <li>
            <Link href={"#"} className="hover:text-slate-50">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href={"#"} className="hover:text-slate-50">
              About Us
            </Link>
          </li>
          <li>
            <Link href={"#"} className="hover:text-slate-50">
              Blog
            </Link>
          </li>
        </ul>
        <div className="flex items-center lg:hidden xl:hidden">
          {isOpen ? (
            <IoMdClose
              className="text-white text-3xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <GiHamburgerMenu
              className="text-white text-3xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
      <div className="md:flex items-center gap-10 hidden">
        <div className="socialmedia flex items-center gap-5">
          <Link href={"https://instagram.com"} className="hover:text-slate-50">
            <LuInstagram />
          </Link>
          <Link href={"https://twitter.com"} className="hover:text-slate-50">
            <RiTwitterXLine />
          </Link>
          <Link href={"https://facebook.com"} className="hover:text-slate-50">
            <FaFacebook />
          </Link>
          <Link
            href={"https://www.linkedin.com/"} className="hover:text-slate-50">
            <FaLinkedin />
          </Link>
        </div>
        <div className="flex items-center">
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[Image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)</div>] opacity-0 transition-opacity duration-500 </Link>group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <Link href={"#"}>
                <span>Let&apos;s Connect</span>
              </Link>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mobile-menu flex flex-col justify-evenly h-5/6 w-full items-center">
          <ul className="flex flex-col justify-center items-start gap-10 w-full text-4xl font-monument-black">
            <li className=" w-full px-5 ">
              <Link href={"#"} className="hover:text-slate-50">
                Services
              </Link>
            </li>
            <li className=" w-full px-5">
              <Link href={"#"} className="hover:text-slate-50">
                Portfolio
              </Link>
            </li>
            <li className=" w-full px-5">
              <Link href={"#"} className="hover:text-slate-50">
                About Us
              </Link>
            </li>
            <li className=" w-full px-5">
              <Link href={"#"} className="hover:text-slate-50">
                Blog
              </Link>
            </li>
          </ul>
          {/* <button className="px-4 py-2 rounded-xl border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
            Let&apos;s Connect
          </button> */}
          <div className="social-links flex justify-between w-4/5">
            <Link href={"https://instagram.com"} className="hover:text-slate-50">
              <LuInstagram />
            </Link>
            <Link href={"https://twitter.com"} className="hover:text-slate-50">
              <RiTwitterXLine />
            </Link>
            <Link href={"https://facebook.com"} className="hover:text-slate-50">
              <FaFacebook />
            </Link>
            <Link href={"https://www.linkedin.com/"} className="hover:text-slate-50">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
