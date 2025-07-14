'use client'
import React, {useState, useEffect} from 'react';
import Timalytics from '../../public/Timalytics.svg'
import Image from 'next/image';
import useDebounce from '../hooks/useDebounce';
import {useDispatch} from 'react-redux';
import {searchActions} from '../store/searchSlice';

const Navabar = () => {
    const [search, setSearch] = useState('');
    const debounce = useDebounce(search,500);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchActions.setSearch(debounce))
    },[debounce])

    //console.log(search);
    //console.log("debounce", debounce);
  return (
    <nav 
        className='
            w-full h-20 px-8 bg-white border-b border-gray-400 flex justify-between items-center
            sticky top-0 z-[999]
        '
    >
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
        <div>
            <input 
                className='
                    border-b-[2px] border-gray-400 focus:outline-0 w-[140px] px-3 py-1
                    placeholder:bg-[url(/search.svg)] placeholder:bg-no-repeat placeholder:bg-left placeholder:pl-5
                    placeholder:bg-size-[auto_15px]
                '
                type='text'
                placeholder='search'
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    </nav>
  )
}

export default Navabar
