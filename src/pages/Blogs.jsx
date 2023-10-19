import React from 'react'
import BlogPage from '../components/BlogPage'
const Blogs = () => {
  return (
    <div className='px-4 py-32 bg-white mx-auto'>
      <div className='text-white text-center py-10'>
            <h2 className='font-primary font-bold text-black text-3xl lg:text-5xl mt-10 '>Explore blogs</h2>
        </div>
    {/* The primary blog container */}
    <BlogPage/>
    </div>
  )
}

export default Blogs
