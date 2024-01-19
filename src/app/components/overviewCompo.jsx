import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";
import { IoMdBuild } from "react-icons/io";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaRocket } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import Link from "next/link";

function OverviewCompo() {
  return (
    <div className="bg-gray-200 p-10">
      <div className="my-2">
        <p className="text-slate-700 font-bold text-3xl text-center">
          YOUR DREAM WORLD STARTS HERE
        </p>
      </div>
      <div className="lg:mx-60 my-5">
        <div className=" bg-slate-700 text-white p-2 rounded">
          <p>
            {`
            Est. at 2024, we're a game development company that builds games
            based on client requests, whether they have advanced knowledge of
            coding and how project building works, to just have an imagination
            of what the game they want to build. We take our clients concepts
            and develop a game that's ready to be deployed. Filled with expert
            members at their own jobdesk, we're confident that we can make your
            dream come true !`}
          </p>
        </div>
        <div className="lg:flex my-10 items-center justify-center hidden">
          <div className="flex-col items-center text-center w-28 mx-3">
            <span className="flex justify-center">
              <FaPersonWalkingLuggage color="#334173" size={70} />
            </span>
            <p>Clients bring the concepts</p>
          </div>
          <FaArrowRightLong color="#334173" size={50} />
          <div className="flex-col items-center text-center w-28 mx-3">
            <span className="flex justify-center">
              <TbReportAnalytics color="#334173" size={70} />
            </span>
            <p>We analyze the concepts</p>
          </div>
          <FaArrowRightLong color="#334173" size={50} />
          <div className="flex-col items-center text-center w-28 mx-3">
            <span className="flex justify-center">
              <IoMdBuild color="#334173" size={70} />
            </span>
            <p>We build the game</p>
          </div>
          <FaArrowRightLong color="#334173" size={50} />
          <div className="flex-col items-center text-center w-28 mx-3">
            <span className="flex justify-center">
              <IoLogoGameControllerB color="#334173" size={70} />
            </span>
            <p>{`Playtest & consultation`}</p>
          </div>
          <FaArrowRightLong color="#334173" size={50} />
          <div className="flex-col items-center text-center w-28 mx-3">
            <span className="flex justify-center">
              <FaRocket color="#334173" size={70} />
            </span>
            <p>Ready to be deployed</p>
          </div>
        </div>
        <div className="lg:hidden flex-col items-center">
          <div className="flex-col text-center w-28 mx-auto my-3">
            <span className="flex justify-center">
              <FaPersonWalkingLuggage color="#334173" size={70} />
            </span>
            <p>Clients bring the concepts</p>
          </div>
          <div className="flex justify-center">
            <FaArrowDownLong color="#334173" size={50} />
          </div>
          <div className="flex-col text-center w-28 mx-auto my-3">
            <span className="flex justify-center">
              <TbReportAnalytics color="#334173" size={70} />
            </span>
            <p>We analyze the concepts</p>
          </div>
          <div className="flex justify-center">
            <FaArrowDownLong color="#334173" size={50} />
          </div>
          <div className="flex-col text-center w-28 mx-auto my-3">
            <span className="flex justify-center">
              <IoMdBuild color="#334173" size={70} />
            </span>
            <p>We build the game</p>
          </div>
          <div className="flex justify-center">
            <FaArrowDownLong color="#334173" size={50} />
          </div>
          <div className="flex-col text-center w-28 mx-auto my-3">
            <span className="flex justify-center">
              <IoLogoGameControllerB color="#334173" size={70} />
            </span>
            <p>{`Playtest & consultation`}</p>
          </div>
          <div className="flex justify-center">
            <FaArrowDownLong color="#334173" size={50} />
          </div>
          <div className="flex-col text-center w-28 mx-auto my-3">
            <span className="flex justify-center">
              <FaRocket color="#334173" size={70} />
            </span>
            <p>Ready to be deployed</p>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <Link href="/about">
            <button className="rounded py-2 px-4 bg-slate-600 text-white mx-auto">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default OverviewCompo;
