import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

function SpearheadCompo() {
  return (
    <div>
      <div className="text-center font-bold text-2xl my-1">The Spearhead</div>
      <div className="grid lg:grid-cols-4 gap-7 my-5 mx-auto w-3/4 pb-5 mb-16">
        <div className=" bg-slate-700 rounded p-3 border-2 border-slate-700 text-white">
          <div className="flex flex-col items-center border-b-2 border-gray-200 pb-2">
            <img
              src="https://www.purwadhika.com/_next/image?url=https%3A%2F%2Fcms.purwadhika.com%2Fuploads%2FWilly_Bernardus_84aa7e82d4.png&w=1920&q=75"
              className=" w-24"
            />
            <div className="text-center">
              <p className=" font-semibold text-xl">Willy Bernardus</p>
              <p className="font-semibold text-sm">Chief Executive Officer</p>
            </div>
          </div>
          <div className="p-2 flex items-center justify-center gap-7">
            <a href="" target="blank">
              <FaFacebook size={25} />
            </a>
            <a href="" target="blank">
              <FaInstagram size={25} />
            </a>
            <a href="" target="blank">
              <CiMail size={25} />
            </a>
            <a href="" target="blank">
              <FaTwitter size={25} />
            </a>
          </div>
        </div>
        <div className=" bg-slate-700 rounded p-3 border-2 border-slate-700 text-white">
          <div className="flex flex-col items-center border-b-2 border-gray-200 pb-2">
            <img
              src="https://www.purwadhika.com/_next/image?url=https%3A%2F%2Fcms.purwadhika.com%2Fuploads%2FBayu_Darmawan_16643d8da9.png&w=1920&q=75"
              className=" w-24"
            />
            <div className="text-center">
              <p className=" font-semibold text-xl">Bayu Darmawan</p>
              <p className="font-semibold text-sm">Senior Project Manager</p>
            </div>
          </div>
          <div className="p-2 flex items-center justify-center gap-7">
            <a href="" target="blank">
              <FaFacebook size={25} />
            </a>
            <a href="" target="blank">
              <FaInstagram size={25} />
            </a>
            <a href="" target="blank">
              <CiMail size={25} />
            </a>
            <a href="" target="blank">
              <FaTwitter size={25} />
            </a>
          </div>
        </div>
        <div className=" bg-slate-700 rounded p-3 border-2 border-slate-700 text-white">
          <div className="flex flex-col items-center border-b-2 border-gray-200 pb-2">
            <img
              src="https://www.purwadhika.com/_next/image?url=https%3A%2F%2Fcms.purwadhika.com%2Fuploads%2FSylvia_Andriani_2fc906f69a.png&w=1920&q=75"
              className=" w-24"
            />
            <div className="text-center">
              <p className=" font-semibold text-xl">Sylvia Andriani</p>
              <p className="font-semibold text-sm">Senior Graphic Designer</p>
            </div>
          </div>
          <div className="p-2 flex items-center justify-center gap-7">
            <a href="" target="blank">
              <FaFacebook size={25} />
            </a>
            <a href="" target="blank">
              <FaInstagram size={25} />
            </a>
            <a href="" target="blank">
              <CiMail size={25} />
            </a>
            <a href="" target="blank">
              <FaTwitter size={25} />
            </a>
          </div>
        </div>
        <div className=" bg-slate-700 rounded p-3 border-2 border-slate-700 text-white">
          <div className="flex flex-col items-center border-b-2 border-gray-200 pb-2">
            <img
              src="https://www.purwadhika.com/_next/image?url=https%3A%2F%2Fcms.purwadhika.com%2Fuploads%2FVincentius_80eff067f3.png&w=1920&q=75"
              className=" w-24"
            />
            <div className="text-center">
              <p className=" font-semibold text-xl">Vincentius</p>
              <p className="font-semibold text-sm">Senior A.I. Developer</p>
            </div>
          </div>
          <div className="p-2 flex items-center justify-center gap-7">
            <a href="" target="blank">
              <FaFacebook size={25} />
            </a>
            <a href="" target="blank">
              <FaInstagram size={25} />
            </a>
            <a href="" target="blank">
              <CiMail size={25} />
            </a>
            <a href="" target="blank">
              <FaTwitter size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SpearheadCompo;
