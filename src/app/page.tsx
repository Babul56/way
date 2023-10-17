import Featured from "../components/pages/home/featured/Featured";
import Hero from "../components/pages/home/hero/Hero";
import OtherProperty from "../components/pages/home/otherproperty/OtherProperty";
import WhyUs from "../components/pages/home/whyus/WhyUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <WhyUs />
      <OtherProperty />
    </main>
  );
}
