import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='lg:min-h-screen  pt-24 text-center bg-black'>
      <div className='px-5 lg:grid grid-cols-1 gap-4 place-content-center h-screen sm:min-w-full'>
        <h1 className='text-5xl text-white lg:text-7xl leading-snug font-bold mb-5 '>Welcome to Blogg<span className='text-orange-400 text-7x  l'>er!</span></h1>
        <p className='text-gray-300 font-primary'>Dive into a world of endless possibilities, where insightful articles, captivating stories, and expert advice converge.
        </p>
        <div className='border-white'>
        <Link to="/blogs" className= 'text-white font-medium hover:text-orange-500 inline-flex items-center mt-10 py-2'>Get started<FaArrowRight className='mt-1 ml-1'/></Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
