import React from 'react'
import Image from 'next/image';

import { loader } from '../assets';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
      <Image src={loader} alt="loader" height={100} width={100} className="w-[100px] h-[100px] object-contain"/>
      <p className="mt-[20px] font-epilogue font-bold text-[20px] text-white text-center">Transaction is in progress<br /> Please wait...</p>
    </div>
  )
}

export default Loader

// Your Space is getting created...

// Please hold on, this could take several seconds to complete.