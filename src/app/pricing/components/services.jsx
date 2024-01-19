function ServicesCompo() {
  return (
    <div className=" px-5">
      <div className="flex-col">
        <div className=" bg-gray-200 text-amber-600 font-bold w-1/2 rounded-t mx-auto py-1 border-t-2 border-x-2 border-slate-700  text-center">
          Our Top Seller
        </div>
        <div className=" lg:w-2/3 mx-auto">
          <div className="w-full rounded bg-gray-200 border-slate-700 border-2 text-center py-1">
            <p className="text-slate-700 font-bold text-xl">Dreamer Package</p>
            <p className=" text-slate-900 font-semibold">Start from $500 USD</p>
          </div>
          <div className=" text-slate-900 bg-gray-200 py-3 px-10 border-x-2 border-b-2 border-slate-700 mb-10 rounded-b">
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
          </div>
        </div>
      </div>
      <div className="flex-col pb-3">
        <div className=" lg:w-2/3 mx-auto">
          <div className="w-full rounded bg-gray-200 border-slate-700 border-2 text-center py-1">
            <p className="text-slate-700 font-bold text-xl">Designer Package</p>
            <p className=" text-slate-900 font-semibold">Start from $300 USD</p>
          </div>
          <div className=" text-slate-900 bg-gray-200 py-3 px-10 border-x-2 border-b-2 border-slate-700 mb-10 rounded-b">
            <ul className=" list-disc">
              <li>
                Perfect for clients with advanced graphic design skill, but lack
                programming skill
              </li>
              <li>
                Game built based on clients description of the gameplay & plot
              </li>
              <li>
                Character & environment designs are provided by the clients
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-col pb-3">
        <div className=" lg:w-2/3 mx-auto">
          <div className="w-full rounded bg-gray-200 border-slate-700 border-2 text-center py-1">
            <p className="text-slate-700 font-bold text-xl">Designer Package</p>
            <p className=" text-slate-900 font-semibold">Start from $250 USD</p>
          </div>
          <div className=" text-slate-900 bg-gray-200 py-3 px-10 border-x-2 border-b-2 border-slate-700 mb-10 rounded-b">
            <ul className=" list-disc">
              <li>
                Perfect for clients with advanced programming skill, but lack
                graphic design skill
              </li>
              <li>Game built based on clients source code</li>
              <li>
                Character designs & minor details are provided by us based on
                clients preferences
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ServicesCompo;
