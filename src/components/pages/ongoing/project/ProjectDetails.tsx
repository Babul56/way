import MoreDetails from "../../upcoming/project/MoreDetails";
import { DetailsData } from "./DetailsData";
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
        pic1={projectData.image.img0}
        pic2={projectData.image.img1}
        pic3={projectData.image.img2}
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
