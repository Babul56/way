import CustomNav from "@/components/layout/CustomNav";
import Map from "@/components/layout/Map";
import Message from "@/components/pages/about-us/Message";
import Team from "@/components/pages/about-us/Team";
import WeAre from "@/components/pages/about-us/WeAre";

export default function AboutUs() {
  return (
    <div>
      <CustomNav />
      <WeAre />
      <Team />
      <Message />
      <Map />
    </div>
  );
}
