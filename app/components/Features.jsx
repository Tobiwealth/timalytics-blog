'use client'
import React, {useState, useEffect} from 'react'
import { GoDash } from "react-icons/go";
import Image from "next/image";
import Link from 'next/link';
import {useSelector} from 'react-redux';


const Features = () => {
  const [posts, setPosts] = useState([]);
  const search = useSelector(state => state.search.search);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = () => {
      setIsLoading(true)
      fetch(`https://dev.to/api/articles?tag=${search}&per_page=12`)
        .then(response => response.json()) 
        .then(data => {
          //console.log(data)
          setPosts(data);
          setIsLoading(false);
        })   
        .catch(error => console.error('Error:', error));
      setIsLoading(false);
    }
    fetchPosts();
  },[search])


  if(posts.length < 1 || isLoading){
    return<p>Loading....</p>
  }

  return (
    <div className='my-6 px-8'>
      <h3 className='font-oswald font-medium text-[#333333] text-2xl flex justify-center items-center'>
        <GoDash />TOP STORIES<GoDash />
      </h3>
      <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start place-items-center mx-auto w-fit'>
        {posts.map((item) => (<div key={item.id} className='w-[280px] md:w-[300px]'>
            <div>
                <Image
                    src={item?.cover_image ?? "/blog.jpg"}
                    width={300}
                    height={300}
                    quality={100}
                    alt="blog cover image"
                    className=" "
                />
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='font-quicksand font-medium text-[#333333] text-lg'>{item?.title}</h3>
                <p className='font-quicksand font-light text-sm text-gray-500'>
                  {item?.description}
                </p>
                <div className='flex justify-between items-center'>
                    <p className='font-quicksand font-semibold text-xs text-black'>{item?.user?.name}</p>
                    <Link href={`/${item.slug}?username=${item?.user?.username}`} className='font-quicksand font-medium text-xs text-red-300'>
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
