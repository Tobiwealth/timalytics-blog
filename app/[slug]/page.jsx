'use client'
import React, {useState, useEffect} from 'react'
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const SinglePost = ({params}) => {
  const { slug } = React.use(params);
  const router = useRouter()
  const [post, setPost] = useState();
  const searchParams = useSearchParams();
  const username = searchParams.get('username') || ""
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPost = () => {
      setIsLoading(true)
      fetch(`https://dev.to/api/articles/${username}/${slug}`)
        .then(response => response.json())  // convert to JSON
        .then(data => {
          console.log(data)
          setPost(data);
          setIsLoading(false);
        })    // handle the data
        .catch(error => console.error('Error:', error));
    }
    fetchPost();
  },[])

  if (!post || isLoading) {
    return <p>Loading...</p>;
  }

  if (post?.error) {
    return (
      <div className="flex flex-col justify-center items-center gap-6 p-8 h-screen">
        <h2 className="text-4xl text-[#0C0C1D]">{post?.error}</h2>
        <p className="font-medium text-lg text-[#0C0C1D]">Could not find requested resource</p>
        <Link className="text-base text-[#5d9606] underline" href="/">Return Home</Link>
      </div>
    );
  }


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
            src={post?.cover_image ?? "/blog.jpg"}
            width={720}
            height={500}
            quality={100}
            alt="Logo"
            className=" "
        />
      </div>
      <div className='py-6 mt-3'>
        <h1 className='font-oswald font-semibold text-2xl text-[#2b2727]'>{post?.title}</h1>
        <h3 className='font-normal font-quicksand text-black text-base py-2'>By: <span className='font-bold'>{post?.user?.name}</span></h3>
        <div className='font-quicksand font-light text-base text-gray-600 text-justify w-full max-w-[720px]'>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.body_html }}
            />
        </div>
      </div>
    </div>
  )
}

export default SinglePost
