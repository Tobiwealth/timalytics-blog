import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 p-8 h-screen">
      <h2 className="text-4xl text-[#0C0C1D]">Page Not Found</h2>
      <p className="font-medium text-lg text-[#0C0C1D]">Could not find requested resource</p>
      <Link className="text-base text-[#5d9606] underline" href="/">Return Home</Link>
    </div>
  )
}