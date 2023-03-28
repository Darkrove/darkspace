import Balancer from "react-wrap-balancer";
import CustomButton from "./CustomButton";
import { heroLogo, MacBook } from "../assets/Icons";

const Header = () => {
  return (
    <section className="relative isolate text-gray-400 bg-zinc-900 body-font overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient
            id="759c1415-0410-454c-8f7c-9a820de03641"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(512 512) rotate(90) scale(512)"
          >
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
      <div className="container mx-auto flex px-10 lg:px-32 pt-32 pb-12 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-32 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-3xl lg:text-3xl xl:text-5xl text-[1.9rem] mb-4 text-zinc-200 font-extrabold">
            <Balancer>
              Securely Store and Share Your Videos and Images on the Blockchain
              with DarkSpace
            </Balancer>
            <br className="hidden lg:inline-block text-zinc-400 m-0 leading-tight" />
          </h1>
          <h1 className="mb-8 text-lg lg:text-xl text-zinc-400 leading-relaxed">
            <Balancer>
              Experience the power of decentralization and never worry about
              your stuff being lost or snooped.
            </Balancer>
          </h1>
          <div className="flex flex-col justify-center md:flex-col lg:flex-col xl:flex-row">
            {/* <button className="w-full inline-flex justify-center items-center text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
              Get Started
            </button>
            <button className="w-full ml-4 inline-flex justify-center items-center text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              How it works
            </button> */}
            <CustomButton
              title={"Join Now"}
              btnType="submit"
              styles="bg-violet-500 w-64"
            />
            <CustomButton
              title={"Read the Docs"}
              btnType="submit"
              styles="xl:ml-3 xl:mt-0 mt-3 border border-zinc-500 w-64"
            />
          </div>
          <p className="mt-2 italic font-bold text-[13px] text-zinc-500">
            Completely free to use. No hidden fees.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* <img
            className="object-cover object-center rounded"
            alt="hero"
            src={heroLogo}
          /> */}
        </div>
        {/* <div class="relative mt-16 h-80 lg:mt-8"> */}
        {/* <img class="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="App screenshot" width="1824" height="1080"> */}
        {/* <SafariMockup width={1824} height={1080} className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" />
        </div> */}
      </div>
    </section>
  );
};

export default Header;
