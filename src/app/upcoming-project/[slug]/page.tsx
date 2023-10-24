import CustomNav from "@/components/layout/CustomNav";
import Map from "@/components/layout/Map";
import OtherProperty from "@/components/pages/home/otherproperty/OtherProperty";
import ProjectDetails from "@/components/pages/upcoming/project/ProjectDetails";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const slug = params.slug.replace(/-/g, " ");
  return {
    title: `Wayhousing || ${slug}`,
  };
};
export default function Page({ params }: Props) {
  return (
    <div>
      <CustomNav />
      <ProjectDetails slug={params.slug} />
      <OtherProperty />
      <Map />
    </div>
  );
}
