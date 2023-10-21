import CustomNav from "@/components/layout/CustomNav";
import Map from "@/components/layout/Map";
import OnGoing from "@/components/pages/ongoing/OnGoing";

export default function page() {
  return (
    <div>
      <CustomNav />
      <OnGoing />
      <Map />
    </div>
  );
}
