function TeamHighLight() {
  return (
    <div className=" bg-gray-200 text-slate-900 p-5">
      <div className="text-center font-bold text-2xl my-1">
        Meet Our Spearhead
      </div>
      <div className="grid lg:grid-cols-3 gap-7 my-5 mx-auto w-3/4">
        <div className=" bg-slate-700 rounded p-3 border-2 border-slate-700 text-white">
          <div className="flex items-center border-b-2 border-gray-200 pb-2">
            <img
              src="https://www.purwadhika.com/_next/image?url=https%3A%2F%2Fcms.purwadhika.com%2Fuploads%2FWilly_Bernardus_84aa7e82d4.png&w=1920&q=75"
              className=" w-24 mr-9"
            />
            <div>
              <p className=" font-semibold text-xl">Willy Bernardus</p>
              <p className="font-semibold text-sm">Chief Executive Officer</p>
            </div>
          </div>
          <div className="p-2">
            <p>
              {`
            Known as bossman, he's the founder of the Shooting Star. He's an
            expert programmer and even more expert at gaming.`}
            </p>
          </div>
        </div>
        <div className=" bg-slate-700 rounded p-3 border-2 border-slate-700 text-white">
          <div className="flex items-center border-b-2 border-gray-200 pb-2">
            <img
              src="https://www.purwadhika.com/_next/image?url=https%3A%2F%2Fcms.purwadhika.com%2Fuploads%2FBayu_Darmawan_16643d8da9.png&w=1920&q=75"
              className=" w-24 mr-9"
            />
            <div>
              <p className=" font-semibold text-xl">Bayu Darmawan</p>
              <p className="font-semibold text-sm">Senior Project Manager</p>
            </div>
          </div>
          <div className="p-2">
            <p>
              {`
              Being the wisest person in the office, he's in charge of
              translating whatever the clients want and pass it into our
              programmers. He's also going to give our clients advices and
              suggestions to make their game even better.`}
            </p>
          </div>
        </div>
        <div className=" bg-slate-700 rounded p-3 border-2 border-slate-700 text-white">
          <div className="flex items-center border-b-2 border-gray-200 pb-2">
            <img
              src="https://www.purwadhika.com/_next/image?url=https%3A%2F%2Fcms.purwadhika.com%2Fuploads%2FSylvia_Andriani_2fc906f69a.png&w=1920&q=75"
              className=" w-24 mr-9"
            />
            <div>
              <p className=" font-semibold text-xl">Sylvia Andriani</p>
              <p className="font-semibold text-sm">Senior Graphic Designer</p>
            </div>
          </div>
          <div className="p-2">
            <p>
              The artist and advisor behind every beautiful fantasy worlds we
              made. She can make everything she touches become beautiful, from a
              realistic sprite to a cartoon sprite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeamHighLight;
