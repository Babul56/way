import img from "@/images/chairman.jpg";
import Image from "next/image";

export default function Message() {
  return (
    <section className="bg-green-50 px-6 py-10 md:px-10 md:py-12 lg:px-44 lg:py-16">
      <div className="grid items-center gap-5 lg:grid-cols-2">
        <div className="reveal reveal-left-top order-1 flex h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gray-700 lg:order-1 lg:h-[420px]">
          <Image
            src={img}
            alt=""
            className="lg:h-420px]  h-full w-auto object-cover"
          />
        </div>
        <div className="reveal order-2 lg:order-1">
          <div>
            <h2 className="mb-4 justify-around text-2xl font-bold lg:text-3xl">
              Message From Chairman
            </h2>
            <p className="text-lg font-light lg:text-xl">
              Way Housing Pvt. Ltd (WHPL) is not only a company to build
              properties and sale but it also facilitate the urban and rural
              people to enjoy the modern architectures by ensuring the
              affordable price. We are also trying to decentralize the urban
              area by preparing the commercial space and modern residential
              building in semi-urban areas. It is mention worthy that the we are
              different in marketing and sales policies. Excellent goodwill in
              the market, corporate practice, well trained & motivated personnel
              and commitment are the capital of &#34;WHPL&#34;.
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold">Greetings</h2>
            <p className="text-md font-medium">Md. Mosharof Hossain</p>
          </div>
        </div>
      </div>
    </section>
  );
}
