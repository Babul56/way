import CustomNav from "@/components/layout/CustomNav";
import Map from "@/components/layout/Map";
import OnGoing from "@/components/pages/ongoing/OnGoing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wayhousing || On Going Project",
};

export default function page() {
  return (
    <div>
      <CustomNav />
      <OnGoing />
      <Map />
    </div>
  );
}
