import SpearheadCompo from "./spearhead";
import SupportTeamCompo from "./supportTeam";

function TeamIntroCompo() {
  return (
    <>
      <div className="  m-b-5 text-slate-900 bg-gray-200 pt-20 p-5">
        <div className="text-center font-bold text-2xl mb-1 mt-5">Our Team</div>
        <div className=" lg:text-center font-semibold lg:mx-24">
          <p>
            {`
            Our team consists of a group of experts at their own jobdesks, and
            some of them are hardcore gamers too, so we can assure our clients
            that their games are in capable hands. Here's some of our team members :`}
          </p>
        </div>
        <div className=" bg-gray-200 text-slate-900 p-5">
          <SpearheadCompo />
          <SupportTeamCompo />
        </div>
      </div>
    </>
  );
}
export default TeamIntroCompo;
