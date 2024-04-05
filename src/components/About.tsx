import React from "react";

function About() {
  return (
    <div className=" h-full w-full relative">
      <div className="sun absolute w-[75vh] h-[75vh] bg-amber-500 top-[15%] blur-lg -left-1/4 rounded-full z-30"></div>
      <div className="w-full h-full flex relative z-30 flex-col">
        <h1 className="text-white text-9xl font-monument-black ml-20 mt-2">
          About Us
        </h1>
        <p className="flex self-center w-2/4 text-gray-100">
          - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          dolores quasi perspiciatis vel voluptatibus illo quam in praesentium
          quae cupiditate optio voluptas est minima? Aut placeat suscipit
          distinctio facilis sed.
        </p>
        <hr className="flex self-center w-2/4 my-5" />
        <p className="flex self-center w-2/4 text-gray-100">
          - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          exercitationem dicta quisquam quaerat deserunt similique in? Quia et
          reprehenderit obcaecati fugiat doloribus doloremque inventore nostrum
          tempore vel? Adipisci illo cum fugit eos corporis dolorum explicabo!
          Cum aspernatur laudantium ad inventore!
        </p>
        <hr className="flex self-center w-2/4 my-5" />
        <p className="flex self-center w-2/4 text-gray-100">
          - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          dolores quasi perspiciatis vel voluptatibus illo quam in praesentium
          quae cupiditate optio voluptas est minima? Aut placeat suscipit
          distinctio facilis sed.
        </p>
      </div>
      <div className="icons w-full relative z-20 -top-full">
        <img
          src="/softwares_icon/davinci.png"
          className="absolute top-64 left-56 blur-sm"
          alt=""
          height={80}
          width={80}
        />
        <img
          src="/softwares_icon/capcut.png"
          className="absolute top-[30rem] left-2/3 -rotate-6 blur-[3px]"
          alt=""
          height={90}
          width={90}
        />
        <img
          src="/softwares_icon/after_effects.png"
          className="absolute top-20 left-3/4 blur-sm rotate-2"
          alt=""
          height={80}
          width={80}
        />
        <img
          src="/softwares_icon/final_cut.png"
          className="absolute top-64  blur-[2px] left-[90%]"
          alt=""
          height={80}
          width={80}
        />
        <img
          src="/softwares_icon/tiktok.png"
          className="absolute top-14 left-60 blur-[2px]"
          alt=""
          height={80}
          width={80}
        />
        <img
          src="/softwares_icon/pr_pro.png"
          className="absolute -bottom-[42rem] left-36 blur-sm"
          alt=""
          height={75}
          width={75}
        />
        <img
          src="/softwares_icon/shorts.png"
          className="absolute top-44 left-1/2 blur-[2px] scale-150 z-50"
          alt=""
          height={20}
          width={90}
        />
        <img
          src="/softwares_icon/verified.png"
          className="absolute top-[37rem] right-36 blur-[2px]"
          alt=""
          height={80}
          width={80}
        />
        <img
          src="/softwares_icon/instagram.png"
          className="absolute -bottom-[39rem] left-[43%] rotate-6 blur-sm"
          alt=""
          height={70}
          width={70}
        />
      </div>
    </div>
  );
}

export default About;
