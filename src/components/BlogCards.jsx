import React from 'react'
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const BlogCards = ({blogs, currentCategory, currentPage, pageSize, selectedCategory}) => {
    const filteredBlogs = blogs.
                          filter((blogs)=> !selectedCategory || blogs.category === selectedCategory)
                          .slice((currentPage -1) *pageSize, currentPage*pageSize)
    console.log("Filtered Blogs:", filteredBlogs.length)
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {
        
        filteredBlogs.map((blog)=>{
            return(
            <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg rounded-lg hover:shadow-2xl transition-all ease-out duration-200'>
                <div>
                    <img src={blog.image} alt="img" className='w-full'/>
                </div>
                <h2 className='mt-4 mb-2 font-bold hover:text-blue-800 cursor-pointer'>{blog.title}</h2>
                <p className='mb-2 text-gray-500'><FaUser className='inline-flex items-center mr-2'/>{blog.author}</p>
                <p className='text-sm text-gray-600'>Published: {blog.published_date}</p>
                </Link>
            )
        })
        }
    </div>
  )
}

export default BlogCards
