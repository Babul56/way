import CustomNav from "@/components/layout/CustomNav";
import BlogDetails from "@/components/pages/blog/BlogDetails";
import { useRouter } from "next/navigation";

interface PageProps {
  params: { slug: string };
}
export default function Page({ params }: PageProps) {
  const router = useRouter;
  return (
    <div>
      <CustomNav />
      <BlogDetails slug={params.slug} />
    </div>
  );
}
