function TestimonyCompo() {
  return (
    <div className="bg-gray-200 p-10">
      <div className="my-2">
        <p className="text-slate-700 font-bold text-3xl text-center">
          SOME OF OUR SATISFIED CLIENTS
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-7 my-5 mx-auto w-3/4">
        <div className=" bg-gray-200 rounded p-3 border-2 border-slate-700 text-slate-900">
          <div className="flex items-center border-b-2 border-slate-900 pb-2">
            <img
              src="https://www.purwadhika.com/_next/image?url=https%3A%2F%2Fcms.purwadhika.com%2Fuploads%2FNadhif_Rafifaiz_e6d6d8cc13.png&w=1920&q=75"
              className=" w-24 mr-9"
            />
            <p className=" font-semibold text-xl">Nadhif Rafifaiz</p>
          </div>
          <div className="p-2">
            <p>
              "Shooting Star did make my wish come true ! My game is now on sale
              on Steam, even though I never did any coding before."
            </p>
          </div>
        </div>
        <div className=" bg-gray-200 rounded p-3 border-2 border-slate-700 text-slate-900">
          <div className="flex items-center border-b-2 border-slate-900 pb-2">
            <img
              src="https://www.purwadhika.com/_next/image?url=https%3A%2F%2Fcms.purwadhika.com%2Fuploads%2FIbnu_Sina_e818ced3cd.png&w=1920&q=75"
              className=" w-24 mr-9"
            />
            <p className=" font-semibold text-xl">Ibnu Sina</p>
          </div>
          <div className="p-2">
            <p>
              "My dream game made me never wanted to play outside anymore, which
              is a good thing."
            </p>
          </div>
        </div>
        <div className="bg-gray-200 rounded p-3 border-2 border-slate-700 text-slate-900">
          <div className="flex items-center border-b-2 border-slate-900 pb-2">
            <img
              src="https://www.purwadhika.com/_next/image?url=https%3A%2F%2Fcms.purwadhika.com%2Fuploads%2FAdinda_Ajeng_Citra_Dewi_8cfad5fb80.png&w=1920&q=75"
              className=" w-24 mr-9"
            />
            <p className=" font-semibold text-xl">Adinda Ajeng Citra Dewi</p>
          </div>
          <div className="p-2">
            <p>
              "As a graphic designer I never would've thought of making my own
              game, but Shooting Star made it possible. Now I can see my fantasy
              world in front of my eyes and earn money while at it."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TestimonyCompo;
