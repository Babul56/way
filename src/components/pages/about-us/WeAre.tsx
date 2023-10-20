import about from "@/images/abouthero.png";
import Image from "next/image";

export default function WeAre() {
  return (
    <>
      <div>
        <div className="bg-green-50 px-6 py-10 md:px-10 md:py-12 lg:px-44 lg:py-16">
          <div className="grid items-center gap-5 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div>
                <h2 className="mb-2 text-2xl font-bold lg:mb-6 lg:text-3xl">
                  Who We Are
                </h2>
                <p className=" text-justify font-light lg:pr-12 ">
                  “Way Housing Pvt. Ltd”, is started its journey in 2013 having
                  the motto of “Build for better future”. We are very much
                  passionate in order to establish our theme. We believe in
                  sustainable development which can ensure a better future. Our
                  most important business focus on regional development. We are
                  developing quality living services within optimum budget. Our
                  two major services are residential apartment and shop space
                  for the commercial purpose. Both products are designed
                  considering the ability and expectations of mass peoples. We
                  are working with our vision. We have a good numbers ongoing
                  projects of which some are completed and some are to be
                  completed very soon. <br />
                  <br /> Within this short period of time, we have received so
                  many positive responses from the customer side. Due to the
                  good responses from clients, we are expanding our service area
                  very quickly. Now we are working to take and develop some new
                  projects in greater Noakhali and some other prospective places
                  including Dhaka City and others. That’s why we are encouraging
                  everyone to join with us, to support us to make something new.
                </p>
              </div>
            </div>
            <div className="order-1 h-[320px] w-full lg:order-1 lg:h-[550px]">
              <Image
                src={about}
                alt=""
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
