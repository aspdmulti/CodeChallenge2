import SupportTeamRow1Compo from "./supoortTeamRow1";
import SupportTeamRow2Compo from "./supportTeamRow2";

function SupportTeamCompo() {
  return (
    <div>
      <div className="text-center font-bold text-2xl my-1">
        The Support Team
      </div>
      <div className="grid lg:grid-cols-4 gap-7 my-5 mx-auto w-3/4">
        <SupportTeamRow1Compo />
        <SupportTeamRow2Compo />
      </div>
    </div>
  );
}
export default SupportTeamCompo;
