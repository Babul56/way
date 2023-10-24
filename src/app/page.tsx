import Map from "@/components/layout/Map";
import Navbar from "@/components/layout/Navbar";
import AboutUs from "@/components/pages/home/aboutus/AboutUs";
import Partner from "@/components/pages/home/partner/Partner";
import Testimonials from "@/components/pages/home/testimonials/Testimonials";
import Featured from "../components/pages/home/featured/Featured";
import Hero from "../components/pages/home/hero/Hero";
import OtherProperty from "../components/pages/home/otherproperty/OtherProperty";
import WhyUs from "../components/pages/home/whyus/WhyUs";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <Hero />
      <Featured />
      <WhyUs />
      <OtherProperty />
      <Partner />
      <Testimonials />
      <AboutUs />
      <Map />
    </main>
  );
}
