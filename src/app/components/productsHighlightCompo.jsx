import Link from "next/link";

function HighlightedProductsCompo() {
  return (
    <div className=" bg-slate-700 text-white p-10">
      <div className=" text-3xl text-center  font-bold my-2 ">
        ZERO CODING EXPERIENCE ? DON'T WORRY !
      </div>
      <div className="text-center my-5">
        <p>
          We provide a service that can change mere concepts to a fully
          deployable game, so you don't have to worry about coding at all !
        </p>
      </div>
      <div className="flex-col mb-3">
        <div className=" bg-gray-200 text-amber-600 font-bold w-1/2 rounded-t mx-auto py-1 border-b-2 border-gray-500  text-center">
          Our Top Seller
        </div>
        <div className=" lg:w-2/3 mx-auto">
          <div className="w-full rounded bg-gray-200 border-gray-500 border-b-2 text-center py-1">
            <p className="text-slate-700 font-bold text-xl">Dreamer Package</p>
            <p className=" text-slate-900 font-semibold">Start from $500 USD</p>
          </div>
          <div className=" text-slate-900 bg-gray-200 py-3 px-10 rounded-b">
            <ul className=" list-disc">
              <li>Perfect for clients with zero coding experience</li>
              <li>
                Game built based on clients description of the gameplay,
                environment, plot, etc
              </li>
              <li>
                Character designs & minor details are provided by us based on
                clients preferences
              </li>
            </ul>
            <div className="flex justify-center w-full mt-3">
              <Link href="/contact">
                <button className="rounded py-2 px-4 bg-slate-600 text-white mx-auto">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HighlightedProductsCompo;
