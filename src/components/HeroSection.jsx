import heroImg from "../assets/Image.png";
import Button from "../pages/shared/Button";

const HeroSection = () => {
  return (
    <div className="bg-navBg text-white py-8 px-2 sm:px-0">
      <div className="flex flex-col sm:flex-row gap-8 justify-between items-center my-container ">
        <div className="">
          {/* left side  */}
          <div className="space-y-5 md:max-w-[80%] w-full order-1">
            <h1 className="text-[38px] sm:text-[45px] md:text-[50px] leading-tight">
              Transform Your Idea Into Reality with Finsweet
            </h1>
            <p className="text-zinc-200 font-normal sm:max-w-xs w-full">
              The entire Finsweet team knows what's good with Webflow and you
              can too with 1 week and a good attitude.
            </p>

            <Button text="Request Quote" />
          </div>
        </div>

        {/* right side */}

        <div className="-order-2 sm:order-2">
          <img
            src={heroImg}
            alt="hero image"
            loading="lazy"
            className="max-w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
