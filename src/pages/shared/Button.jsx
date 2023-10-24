import shape from "../../assets/Shapes.svg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Button = ({ text = "btn text" }) => {
  return (
    <button className="bg-btnBg py-2 px-4 rounded-sn relative flex items-center gap-2 drop-shadow-sm">
      <img
        src={shape}
        alt=""
        className="absolute top-0 left-0 overflow-hidden w-5 h-5"
      />
      {text} <HiOutlineArrowNarrowRight />
    </button>
  );
};

export default Button;
