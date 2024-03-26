import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Navbar() {
  return (
    <header className="fixed flex w-full h-fit justify-between text-slate-200 px-10 z-50 bg-gradient-to-b from-[#021814ac] to-[#05372f14] backdrop-blur-sm">
      <div className="flex items-center gap-28">
        <div className="logo flex items-center ">
          <Image
            className="m-5 object-contain object-center"
            src="/brandLogo.png"
            width={120}
            height={100}
            alt=""
          />
        </div>
        <ul className="flex items-center gap-7">
          <li>
            <Link href={"#"} className="hover:text-slate-50">Services</Link>
          </li>
          <li>
            <Link href={"#"} className="hover:text-slate-50">Portfolio</Link>
          </li>
          <li>
            <Link href={"#"} className="hover:text-slate-50">About Us</Link>
          </li>
          <li>
            <Link href={"#"} className="hover:text-slate-50">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-10">
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
          <Link href={"http</div>s://linkedin.com"} className="hover:text-slate-50">
            <FaLinkedin />
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="#contact">
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)</div>] opacity-0 transition-opacity duration-500 </Link>group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>Let's Connect</span>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
