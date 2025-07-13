'use client'
import React from 'react'
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from 'next/navigation'

const SinglePost = () => {
    const router = useRouter()

  return (
    <div className='flex flex-col items-center px-8 py-12 relative'>
      <div onClick={() => router.back()} className='absolute top-4 left-10 cursor-pointer'>
        <FaArrowLeftLong 

            size={24} 
            color='#2b2727' 
        />
      </div>
      <div>
        <Image
            src='/Image.png'
            width={720}
            height={500}
            quality={100}
            alt="Logo"
            className=" "
        />
      </div>
      <div className='py-6 mt-3'>
        <h1 className='font-oswald font-semibold text-2xl text-[#2b2727]'>Sustainable Beauty Practices and Devices</h1>
        <h3 className='font-normal font-quicksand text-black text-base py-2'>By: <span className='font-bold'>Jane Doe</span></h3>
        <p className='font-quicksand font-light text-base text-gray-600 text-justify w-full max-w-[720px]'>
            In 2023, sustainability takes center stage in the beauty industry. 
            From eco-friendly packaging to product formulations that prioritize environmental impact, 
            beauty brands are embracing a holistic approach to sustainability. 
            Look out for products that not only enhance your beauty but also contribute to a healthier planet. 
            Smart skincare devices are taking personalized skincare to the next level. From AI-powered skin analysis tools to smart cleansing devices, 
            these innovations provide tailored recommendations based on individual skin needs. Expect to see a surge 
            in at-home devices designed to mimic professional spa treatments, 
            offering a luxurious experience in the comfort of your own space.
            Biometric technology is making its mark in the beauty world. 
            Customized skincare formulations based on individual biometric data, 
            such as DNA and skin microbiome analysis, are becoming more prevalent. 
            These personalized approaches ensure that beauty products are tailored to meet 
            the specific needs of each user, unlocking the potential for truly individualized skincare.
            Virtual try-ons and augmented reality (AR) experiences are transforming 
            the way we shop for beauty products online. 
            Brands are integrating AR technology into their platforms, 
            allowing users to virtually try on makeup, experiment with different hairstyles, 
            and test skincare products before making a purchase. This immersive online shopping 
            experience enhances user engagement and confidence in product selection.
        </p>
      </div>
    </div>
  )
}

export default SinglePost
