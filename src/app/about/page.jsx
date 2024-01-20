import DescriptionCompo from "./components/description";
import GalleryCompo from "./components/gallery";
import IntroCompo from "./components/intro";
import TeamHighLight from "./components/teamHighlight";

export default function AboutUs() {
  return (
    <>
      <IntroCompo />
      <DescriptionCompo />
      <TeamHighLight />
      <GalleryCompo />
    </>
  );
}
