import CustomNav from "@/components/layout/CustomNav";
import Map from "@/components/layout/Map";
import OtherProperty from "@/components/pages/home/otherproperty/OtherProperty";
import ProjectDetails from "@/components/pages/upcoming/project/ProjectDetails";
import { useRouter } from "next/navigation";

interface PageProps {
  params: { slug: string };
}
export default function Page({ params }: PageProps) {
  const router = useRouter;
  return (
    <div>
      <CustomNav />
      <ProjectDetails slug={params.slug} />
      <OtherProperty />
      <Map />
    </div>
  );
}
