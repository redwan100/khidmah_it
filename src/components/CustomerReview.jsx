import reviewer from "../assets/review.svg";
const CustomerReview = () => {
  return (
    <div className="my-container  flex gap-6 flex-col sm:flex-row">
      {/* LEFT SIDE  */}
      <div className="space-y-4 flex-1 text-center sm:text-left ">
        <h2 className="text-[36px] sm:text-[45px] md:text-[50px] font-semibold leading-tight text-navBg">
          Our customers love what we do
        </h2>
        <h4 className="text-lg font-medium text-zinc-800">
          Transform your idea into reality with finsweet
        </h4>
        <p className="text-p-text md:max-w-[80%]  w-full">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <img src={reviewer} alt="reviewer" />
            <img src={reviewer} alt="reviewer" />
            <img src={reviewer} alt="reviewer" />
            <img src={reviewer} alt="reviewer" />
          </div>

          <p className="text-sm">
            <strong className="text-base">25+</strong> customer reviews
          </p>
        </div>
      </div>

      {/* RIGHT SIDE  */}
      <div className="space-y-6 bg-white p-4 flex-1 h-max rounded-md shadow-sm">
        <p className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Finsweet has been a wonderful partner to work with. I have been a
          customer now for the past few months now and I have had nothing but
          positive experiences!
        </p>

        <div className="flex items-center gap-2">
          <img src={reviewer} alt="reviewer" />
          <div className="leading-5 ">
            <h4 className="font-medium">john doe</h4>
            <h4>company director</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
