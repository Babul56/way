import CustomNav from "@/components/layout/CustomNav";
import Map from "@/components/layout/Map";
import UpComing from "@/components/pages/upcoming/UpComing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wayhousing || Up Coming Project",
};

export default function page() {
  return (
    <div>
      <CustomNav />
      <UpComing />
      <Map />
    </div>
  );
}
