import React from "react";

const CustomButton = ({ btnType, title, handleClick, styles, status, disabled }) => {
  return (
    <>
      {status ? (
        <button
          type={btnType}
          className={`font-epilogue opacity-60 font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
          onClick={handleClick}
          disabled
        >
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 rounded-full animate-pulse dark:bg-white"></div>
            <div className="w-3 h-3 rounded-full animate-pulse dark:bg-white"></div>
            <div className="w-3 h-3 rounded-full animate-pulse dark:bg-white"></div>
          </div>
        </button>
      ) : (
        <button
          type={btnType}
          className={`hover:opacity-80 justify-center font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
          onClick={handleClick}
          disabled={disabled}
        >
          ⚡{" "}{title}
        </button>
      )}
    </>
  );
};
export default CustomButton;
