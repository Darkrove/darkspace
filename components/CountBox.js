import React from 'react'

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center w-[150px]">
      <h4 className="font-epilogue font-bold text-[30px] text-white p-3 bg-zinc-800 rounded-t-xl w-full text-center truncate">{value}</h4>
      <p className="font-epilogue font-normal text-[16px] text-zinc-200 bg-violet-500 px-3 py-2 w-full rounded-b-xl text-center">{title}</p>
    </div>
  )
}

export default CountBox