import Image from "next/image";

const Statistic = ({ icon, count, title }) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-violet-500 sm:w-12 sm:h-12">
        <Image
          alt="icon"
          src={icon}
          className="w-6 h-6 text-violet-500 sm:w-8 sm:h-8"
          width={8}
          height={8}
        />
      </div>
      <h6 className="text-4xl font-bold text-white">{count}</h6>
      <p className="mb-2 text-white font-bold text-md">{title}</p>
    </div>
  );
};

export default Statistic;
