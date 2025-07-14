import React from 'react'
import Timalytics from '../../public/Timalytics.svg'
import Image from 'next/image';
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='border-t border-[#333333] px-8 py-5 flex flex-col gap-5 md:flex-row justify-between items-center'>
      <div>
            <Image
                src={Timalytics}
                width={96}
                height={58.41}
                quality={100}
                alt="Logo"
                className=" "
            />
        </div>
        <div className='flex gap-3'>
            <FaFacebookSquare size={20} color='#333333'/>
            <RiInstagramFill size={20} color='#333333'/>
            <IoLogoYoutube size={20} color='#333333' />
        </div>
        <div className='flex gap-3'>
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
        </div>
    </div>
  )
}

export default Footer
