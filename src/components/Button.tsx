import React from "react";

interface ButtonProps {
    title?: string;
  }

  const Button: React.FC<ButtonProps> = ({ title = "Let&apos;s Connect" }) => {
  return (
    <button className="hover:bg-[#baff4a] px-8 py-2 bg-[#bafc50] rounded-3xl text-black text-sm font-semibold font-metropolis-semibold uppercase transform hover:-translate-y-1 transition duration-400">
      {title}
    </button>
  );
}

export default Button;
