const SectionTitle = ({ text, number }) => {
  return (
    <div className="relative text-4xl py-6 w-max mx-auto">
      <span className="absolute top-2 left-1/2 text-4xl font-extrabold -translate-x-1/2 text-transparent bg-clip-text bg-gradient-to-b from-black to-white uppercase bg-white z-0 text-[4rem]">
        {number}
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-white font-bold uppercase bg-white z-10 relative">
        {text}
      </span>
    </div>
  );
};

export default SectionTitle;
