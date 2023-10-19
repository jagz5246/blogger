import React from 'react';
import { useState, useEffect } from 'react'
import BlogCards from './blogCards';
import Pagination from './Pagination';
import Categories from './Categories';
import Sidebar from './Sidebar';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12 //blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null)
    
    useEffect(()=>{
        async function fetchBlogs(){
            let url = `
            https://blog-api-sk0w.onrender.com/blogs/?page=${currentPage}&limit=${pageSize}`;

            //filter out by catefory
            if(selectedCategory){
                url+=`&category=${selectedCategory}`
            }
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }
        fetchBlogs();
    },[currentPage, pageSize])
    
    //function to change pages
    const handlePageChange = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    //function handle category change
    const handleCategoryChange = (category) =>{
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }
  return (
    <div>
      {/* category section */}
      <div>
        <Categories onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/> 
      </div>

      {/* blog cards section */}
    <div className='flex flex-col lg:flex-row gap-12 mr-2'>
      <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>

      {/* Sidebar section */}
      <div>
        <Sidebar/>
      </div>
    </div>


      {/* pagination section */}
      <div>
        <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
      </div>

    </div>
  )
}

export default BlogPage
