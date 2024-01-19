function FooterCompo() {
  return (
    <div className=" bg-black pb-5">
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
          <p>+62-857-1189-9575</p>
        </div>
        <div className=" flex flex-col">
          <p className=" font-semibold my-3">Find Us</p>
          <p>
            Jl. Pajajaran Indah V No.1, RT.01/RW.14, Baranangsiang, Kec. Bogor
            Tim., Kota Bogor, Jawa Barat 16143
          </p>
          <a
            href="https://maps.app.goo.gl/AwGtZwk9FY9M5MYN6"
            className=" bg-slate-700  lg:w-2/3 py2 px-4 rounded"
            target="_blank"
          >
            Click to find us on maps
          </a>
        </div>
      </div>
    </div>
  );
}
export default FooterCompo;
