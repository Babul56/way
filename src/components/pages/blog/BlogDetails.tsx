import Image from "next/image";
import { BlogData } from "./BlogData";

export default function BlogDetails({ slug }: { slug: string }) {
  const projectData = BlogData.find((data) => data.slug === slug);

  if (!projectData) {
    return <div>Project not found</div>;
  }
  return (
    <div className="flex flex-col items-center justify-center gap-20 bg-green-50 px-3 py-20 md:px-16 lg:px-28">
      <div className="flex w-full">
        <Image
          src={projectData.img}
          alt=""
          className="w-full rounded-2xl object-cover md:h-96 lg:h-[30rem]"
        />
      </div>
      <div className="text-xl leading-8">{projectData.sum}</div>
    </div>
  );
}
