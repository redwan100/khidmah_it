import SectionTitle from "../shared/SectionTitle";

import aboutImg from "../../assets/about.png";

const AboutUs = () => {
  return (
    <div className="bg-white py-8 px-2">
      <div className="my-container">
        <div className="mx-auto w-full">
          <SectionTitle text={"about us"} number={"01"} />
        </div>

        <div className="mb-6">
          <p className="text-[36px] sm:text-[45px] md:text-[50px] text-center font-semibold leading-tight">
            The company leads entire webdesign process from concept to delivery.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center w-full ">
          <img
            src={aboutImg}
            alt="about image"
            loading="lazy"
            className="w-full rounded-md"
          />
          <img
            src={aboutImg}
            alt="about image"
            loading="lazy"
            className="w-full rounded-md"
          />
          <img
            src={aboutImg}
            alt="about image"
            loading="lazy"
            className="w-full rounded-md"
          />
          <img
            src={aboutImg}
            alt="about image"
            loading="lazy"
            className="w-full rounded-md"
          />
        </div>

        {/* project info  */}
        <div className="my-6 pb-6 grid gap-3 grid-cols-2 sm:grid-cols-4">
          <div className="text-center bg-stone-100 border border-stone-200 py-6 px-2 rounded-md">
            <p className="text-2xl font-bold text-zinc-900">1500+</p>
            <p className="text-zinc-700">Project Delivered</p>
          </div>
          <div className="text-center bg-stone-100 border border-stone-200 py-6 px-2 rounded-md">
            <p className="text-2xl font-bold text-zinc-900">1500+</p>
            <p className="text-zinc-700">Professional</p>
          </div>
          <div className="text-center bg-stone-100 border border-stone-200 py-6 px-2 rounded-md">
            <p className="text-2xl font-bold text-zinc-900">1500+</p>
            <p className="text-zinc-700">Happy Client</p>
          </div>
          <div className="text-center bg-stone-100 border border-stone-200 py-6 px-2 rounded-md">
            <p className="text-2xl font-bold text-zinc-900">3y+</p>
            <p className="text-zinc-700">Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
