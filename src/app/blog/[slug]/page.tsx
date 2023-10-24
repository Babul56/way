import CustomNav from "@/components/layout/CustomNav";
import BlogDetails from "@/components/pages/blog/BlogDetails";
import { Metadata } from "next";
import { useRouter } from "next/navigation";

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
  const router = useRouter;
  return (
    <div>
      <CustomNav />
      <BlogDetails slug={params.slug} />
    </div>
  );
}
