import CustomNav from "@/components/layout/CustomNav";
import Blog from "@/components/pages/blog/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wayhousing || Blog",
};

export default function page() {
  return (
    <div>
      <CustomNav />
      <Blog />
    </div>
  );
}
