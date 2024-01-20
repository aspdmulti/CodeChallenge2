import { IoLocationSharp } from "react-icons/io5";

function FooterCompo() {
  return (
    <div
      className=" bg-black lg:pb-5 lg:min-h-fit min-h-screen lg:pt-0 pt-20"
      id="contact"
    >
      <div className=" font-bold text-slate-400 flex justify-center items-center pr-7">
        <img src="logo.png" className=" h-32" />
        <div className="flex-col">
          <p>SHOOTING STAR</p>
          <p>Make Your Dream Come True</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-7 text-white mx-20">
        <div className="flex flex-col">
          <a href="/about" className="my-3">
            About Us
          </a>
          <a href="/aboutUs" className="my-3">
            Our Services
          </a>
          <a href="/aboutUs" className="my-3">
            Our Team
          </a>
        </div>
        <div className=" flex flex-col">
          <p className=" font-semibold my-3">Contact Us</p>
          <p>+62-857-1122-3344</p>
          <p>shootingstarid@mail.com</p>
        </div>
        <div className=" flex flex-col">
          <p className=" font-semibold my-3">Find Us</p>
          <p>
            Jl. Pajajaran Indah V No.1, RT.01/RW.14, Baranangsiang, Kec. Bogor
            Tim., Kota Bogor, Jawa Barat 16143
          </p>
          <a
            href="https://maps.app.goo.gl/AwGtZwk9FY9M5MYN6"
            className=" bg-slate-700 lg:w-1/2 py-2 px-4 rounded my-2"
            target="_blank"
          >
            <div className="flex items-center">
              <IoLocationSharp />
              <p className="ml-2">Click to find us</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default FooterCompo;
