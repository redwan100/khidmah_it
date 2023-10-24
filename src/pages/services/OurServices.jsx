import Button from "../shared/Button";
import SectionTitle from "../shared/SectionTitle";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsCodeSlash } from "react-icons/bs";
import { PiGrainsDuotone } from "react-icons/pi";
import { SiCoinmarketcap } from "react-icons/si";
import { TbSeo } from "react-icons/tb";

const cardData = [
  {
    id: 112,
    title: "Web Development",
    icon: BsCodeSlash,
    desc: ` We aim to attain the greatest satisfaction for our clients and be
              one of the prominent names when it comes to world-class service`,
  },
  {
    id: 11362,
    title: "Graphics design",
    icon: PiGrainsDuotone,
    desc: ` We aim to attain the greatest satisfaction for our clients and be
              one of the prominent names when it comes to world-class service`,
  },
  {
    id: 1162,
    title: "Digital marketing",
    icon: SiCoinmarketcap,
    desc: ` We aim to attain the greatest satisfaction for our clients and be
              one of the prominent names when it comes to world-class service`,
  },
  {
    id: 1162,
    title: "SEO",
    icon: TbSeo,
    desc: ` We aim to attain the greatest satisfaction for our clients and be
              one of the prominent names when it comes to world-class service`,
  },
];
const OurServices = () => {
  return (
    <div className="py-8 bg-white]">
      <div className="px-2 my-container">
        <div className="">
          <SectionTitle text={"our services"} number={"02"} />
        </div>

        <div className="space-y-4">
          <p className="text-[36px] sm:text-[45px] md:text-[50px] text-center font-semibold leading-tight">
            We build software solutions that solve client's business challenges
          </p>

          <div className="w-max mx-auto">
            <Button text="start project" />
          </div>
        </div>

        <div className="my-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cardData?.map((data) => {
            const { title, icon: Icon, desc, id } = data;
            return (
              <div
                className="bg-white p-5 rounded-md drop-shadow-sm border border-stone-100 space-y-4 flex flex-col"
                key={id}
              >
                <p className="w-10 h-10 bg-btnBg grid place-items-center rounded-full text-white text-2xl">
                  <Icon />
                </p>
                <h2 className="text-2xl font-semibold text-navBg">{title}</h2>
                <p className="text-p-text text-sm sm:text-base">{desc}</p>

                <button className="flex items-center gap-2 text-btnBg mt-auto">
                  Read more <HiOutlineArrowNarrowRight />{" "}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
