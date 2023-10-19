import React from 'react'
import { FaClock, FaUser } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom'
import Sidebar from '../components/Sidebar';

const SingleBlog = () => {
    const data = useLoaderData();
    const {title, author, image, category, authorPic, published_date, reading_time, content, } = data;
    console.log(data);
  return (
    <div className='pt-16'>
        {/* Blog details */}
      <div className='max-w-7xl px-4 mx-auto my-12 flex flex-col md:flex-row gap-4'>
        <div className='lg:w-3/4 mx-auto'>
            <div>
                <img src={image} alt="img" className='w-full mx-auto rounded-lg'/>
            </div>
            <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-900 cursor-pointer'>{title}</h2>
            <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>
            {author} | {published_date}</p>
            <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/>
            {reading_time}</p>
            <p className='text-base text-gray-500 mb-6'>{content}</p>
            <div className='text-base text-gray-500'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis beatae quas in voluptatum quis placeat sunt sed consequuntur omnis repellat architecto totam dolorem doloribus officiis, iusto perferendis modi eum necessitatibus
                </p><br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis beatae quas in voluptatum quis placeat sunt sed consequuntur omnis repellat architecto totam dolorem doloribus officiis, iusto perferendis modi eum necessitatibus
                </p><br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis beatae quas in voluptatum quis placeat sunt sed consequuntur omnis repellat architecto totam dolorem doloribus officiis, iusto perferendis modi eum necessitatibus
                </p><br />
            </div>
        </div>
        <div className='lg:w-1/2'>
            <Sidebar/>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
