import React, { Children, useState } from "react";

const ToolTip = ({ children, tip }) => {
  const [tooltipStatus, setTooltipStatus] = useState(0);
  return (
    <>
      <div className="">
        {/*Code Block for gray tooltip starts*/}
        <div
          className="relative"
          onMouseEnter={() => setTooltipStatus(3)}
          onMouseLeave={() => setTooltipStatus(0)}
        >
          <div className="cursor-pointer">{children}</div>
          {tooltipStatus == 3 && (
            <div
              role="tooltip"
              className="z-50 -mt-12 w-auto absolute transition duration-150 ease-in-out left-0 ml-14 shadow-lg bg-violet-500 p-3 rounded-xl"
            >
              <svg
                className="absolute left-0 -ml-2 bottom-0 top-0 h-full"
                width="9px"
                height="16px"
                viewBox="0 0 9 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Tooltips-"
                    transform="translate(-874.000000, -1029.000000)"
                    fill="#8B5CF6"
                  >
                    <g
                      id="Group-3-Copy-16"
                      transform="translate(850.000000, 975.000000)"
                    >
                      <g
                        id="Group-2"
                        transform="translate(24.000000, 0.000000)"
                      >
                        <polygon
                          id="Triangle"
                          transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                          points="4.5 57.5 12.5 66.5 -3.5 66.5"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p className="text-sm font-bold text-white pb-1">{tip}</p>
              {/* <p className="text-xs leading-4 text-white pb-3">
                Reach out to more prospects at the right moment.
              </p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <span className="text-xs font-bold text-white">
                    Step 1 of 4
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-white underline mr-2 cursor-pointer">
                    Skip Tour
                  </span>
                  <button className="bg-white transition duration-150 ease-in-out focus:outline-none hover:bg-gray-200 rounded text-gray-600 px-5 py-1 text-xs">
                    Next
                  </button>
                </div>
              </div> */}
            </div>
          )}
        </div>
        {/*Code Block for gray tooltip ends*/}
      </div>
    </>
  );
};

export default ToolTip;
