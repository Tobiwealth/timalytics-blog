import React from 'react'
import Image from "next/image";

const Herosection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center px-8 md:px-16 py-6'>
      <div>
        <h1 className='font-semibold text-4xl font-oswald text-[#333333] text-center py-4'>
            WELCOME TO TIMALYTICS BLOG
        </h1>
        <h2 className='font-oswald font-medium text-lg text-gray-600 text-center'>Home of Hot Gists on new Technologies!</h2>
      </div>
      <div className='w-full max-w-[720px] max-h-[540px]'>
        <Image
            src='/hero-image.png'
            width={620}
            height={540}
            style={{
                objectFit: 'fill',
            }}
            alt="Logo"
            className=" "
        />
      </div>
    </div>
  )
}

export default Herosection
