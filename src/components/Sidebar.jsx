import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6'


const Sidebar = () => {
    const [latestBlogs, setLatestBlogs] = useState([]);
    useEffect(()=>{
        fetch("https://blog-api-sk0w.onrender.com/blogs/").then(res=>res.json()).then(data => setLatestBlogs(data.slice(0,15)));
    },[])
  return (
    <div>
      <div>
        <h3 className='text-2xl font-semibold px-4 '>Latest blogs</h3>
        {
        latestBlogs.slice(0,5).map((blog, index)=>{
            return(
                <div key={index} className='p-5  border-b-2'>
                <h4 className='font-medium mb-2'>{blog.title}</h4>
                <Link to="/" className= 'text-sm text-orange-500 hover:text-black inline-flex items-center transition-all ease-out duration-500'>Learn more<FaArrowRight className='mt-1 ml-1'/></Link>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Sidebar
