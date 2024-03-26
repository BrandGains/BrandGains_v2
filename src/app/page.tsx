import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Service from "@/components/Service";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />
      <Marquee/>
      <Service/>
    </div>
  );
}
