import CustomNav from "@/components/layout/CustomNav";
import Map from "@/components/layout/Map";
import UpComing from "@/components/pages/upcoming/UpComing";

export default function page() {
  return (
    <div>
      <CustomNav />
      <UpComing />
      <Map />
    </div>
  );
}
