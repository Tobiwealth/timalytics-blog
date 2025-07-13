import React from 'react'
import { GoDash } from "react-icons/go";
import Image from "next/image";
import Link from 'next/link';

const Features = () => {
    const list = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className='my-6 px-8'>
      <h3 className='font-oswald font-medium text-[#333333] text-2xl flex justify-center items-center'>
        <GoDash />TOP STORIES<GoDash />
      </h3>
      <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mx-auto w-fit'>
        {list.map((item) => (<div key={item} className='w-[280px] md:w-[300px]'>
            <div>
                <Image
                    src='/Image.png'
                    width={300}
                    height={300}
                    quality={100}
                    alt="Logo"
                    className=" "
                />
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='font-quicksand font-medium text-[#333333] text-lg'>Inside BB: Product Development Journey</h3>
                <p className='font-quicksand font-light text-sm text-gray-500'>
                    Take an exclusive behind-the-scenes look at the creation of beauty products. 
                    Learn about commitment to quality, innovation, and the meticulous process 
                    that goes into each product.
                </p>
                <div className='flex justify-between items-center'>
                    <p className='font-quicksand font-semibold text-xs text-black'>Jane Doe</p>
                    <Link href='/' className='font-quicksand font-medium text-xs text-red-300'>
                        continue reading...
                    </Link>
                </div>
            </div>
        </div>))}
      </div>
    </div>
  )
}

export default Features
