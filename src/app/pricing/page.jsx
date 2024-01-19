import ServicesCompo from "./components/services";
import ServicesIntroCompo from "./components/servicesIntro";

export default function Pricing() {
  return (
    <>
      <div className=" bg-slate-700">
        <ServicesIntroCompo />
        <ServicesCompo />
      </div>
    </>
  );
}
