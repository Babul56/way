import { DetailsData } from "./DetailsData";
import MoreDetails from "./MoreDetails";
import ProjectHead from "./ProjectHead";

export default function ProjectDetails({ slug }: { slug: string }) {
  const projectData = DetailsData.find((data) => data.slug === slug);

  if (!projectData) {
    return <div>Project not found</div>;
  }
  return (
    <div>
      <ProjectHead
        name={projectData.name}
        feature={projectData.details}
        pic1={projectData.img0}
        type={projectData.type}
        district={projectData.district}
        date={projectData.date}
        price={projectData.price}
        overview={projectData.overview}
      />
      <MoreDetails name={projectData.name} />
    </div>
  );
}
