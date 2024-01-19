"use client";
import { IoCaretDownSharp } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";

function IntroCompo() {
  return (
    <div className=" bg-gray-200 mb-5 text-slate-700 pt-20 min-h-screen">
      <div className=" flex flex-col lg:flex-row lg:mt-16">
        <div className="lg:hidden flex flex-col items-center justify-start">
          <div className="bg-slate-700 p-4 mx-6 mt-1 rounded-lg flex-1 text-white">
            <TypeAnimation
              sequence={[
                "Shooting Star is a game development company dedicated to build a game based on clients request. By using high technology platform, ground-breaking A.I., and team of experts, we assured you that we can get you your dream game. Come, join me for a tour",
              ]}
              wrapper="span"
              speed={70}
            />
          </div>
          <IoCaretDownSharp size={30} style={{ margin: -9 }} />
        </div>
        <img src="https://png.pngtree.com/png-clipart/20230225/ourmid/pngtree-cyberpunk-future-movie-game-character-modeling-png-image_6619931.png" />
        <div className="hidden lg:flex items-center justify-start w-1/2">
          <div className="w-3 overflow-hidden">
            <div className="h-4 bg-slate-700 rotate-45 transform origin-bottom-right rounded-sm"></div>
          </div>
          <div className="bg-slate-700 p-4 my-6 rounded-lg flex-1 text-white text-xl">
            <TypeAnimation
              sequence={[
                "Shooting Star is a game development company dedicated to build a game based on clients request. By using high technology platform, ground-breaking A.I., and team of experts, we assured you that we can get you your dream game. Come, join me for a tour",
              ]}
              wrapper="span"
              speed={70}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default IntroCompo;
