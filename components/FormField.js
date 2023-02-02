import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

const FormField = (props) => {
  const { labelName, required, placeholder, inputType, isFile, value, handleChange, disabled, isActive } = props
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">{labelName}</span>
      )}
      {isFile ? (
        <div className="m-auto px-0 sm:px-0 w-full">
          <div className="relative group w-full h-[20rem] flex justify-center items-center">
            <div className={`absolute inset-0 w-full h-full rounded-xl border-[1px] bg-transparent bg-opacity-80 shadow-2xl backdrop-blur-xl group-hover:bg-opacity-70 group-hover:border-violet-500 transition duration-300 ${isActive ? "border-green-400" : "border-[#3a3a43]"}`}></div>
            <input required onChange={handleChange} accept=".jpg, .jpeg .png, .svg, .gif, .mp4, .mkv" className="relative z-10 opacity-0 h-full w-full cursor-pointer" type="file" name="bgfile" id="bgfile"></input>
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full m-auo flex items-center justify-center">
              <div className="space-y-6 text-center">
                <Image src="/assets/file.png" className="sm:w-40 w-32 m-auto" alt="illustration" height={500} width={600} />
                <p className="text-gray-700 text-lg">Drag and drop a file or <label htmlFor="dragOver" title="Upload a file" className="relative z-1 cursor-pointer text-violet-500 block">Upload a file</label> </p>
                <div className='columns-2 gap-5'>
                    <div className="">
                      <p className='text-white font-bold'>Image</p>
                      <p className='text-white font-thin text-md'>jpg, png, jpeg, svg, gif</p>
                    </div>
                    <div className="">
                      <p className='text-white font-bold'>Video</p>
                      <p className='text-white font-thin text-md'>mp4, mkv, webm</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <input
          required={required}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className={`py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] focus:border-violet-500 hover:border-violet-500 border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] transition  duration-300 placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px] ${isActive ? "border-green-400" : "border-[#3a3a43]"}`}
        />
      )}
    </label>
  )
}

export default FormField