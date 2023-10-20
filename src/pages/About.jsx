import React from 'react';
import Lottie from "lottie-react";
import aboutAnimation from '../assets/about-animation.json';
import aboutImage1 from '../assets/aboutPage.png';
import aboutImage2 from '../assets/a1.png'
import aboutImage3 from '../assets/a2.png'


const About = () => {
  return (
    <div>

        <div className='lg:grid grid-cols-2 py-28'>
      <div>
        <h1 className='text-3xl font-bold text-gray-900 lg:text-5xl pl-12 pr-4'>Our Story</h1>
        <p className='text-base text-gray-600 text-md pl-12 pr-4 lg:text-lg px-4 py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, eligendi. Exercitationem illum sit nostrum tempora facilis corrupti! Vitae temporibus illo, cum quasi, exercitationem dolorum neque harum quaerat corrupti, voluptatibus ad. <br/>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere labore fugiat sit similique atque amet mollitia cumque accusantium, corrupti nam recusandae maxime enim tenetur necessitatibus itaque deleniti earum ex ea?<br/><br/>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quod labore, eos cumque voluptatibus qui fugit dolorem eveniet ea vero recusandae ullam velit sapiente eligendi. Ea optio veritatis quam molestiae.</p>
      </div>
      <div>
        <Lottie animationData={aboutAnimation} loop={true} className=' w-2/3 mx-auto lg:pt-12'/>
      </div>
    </div>

    <h1 className='text-3xl font-bold text-center text-gray-900 lg:text-5xl pl-12 pr-4'>Explore Services</h1>
    <div className='grid grid-cols-1 mx-4 py-12 gap-2 md:grid-cols-4' >
    <div className='p-5 shadow-md mx-auto rounded-lg cursor-pointer hover:shadow-2xl transition-all ease-out duration-300'>
      <h4 className='font-medium mb-2 text-center text-xl md:text-2xl'>E-Commerce</h4>
      <img src={aboutImage3} className= 'w-1/2 text-sm mx-auto'/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores, dolore suscipit dicta </p>
    </div>
    <div className='p-5 shadow-md mx-auto rounded-lg cursor-pointer hover:shadow-2xl transition-all ease-out duration-300'>
      <h4 className='font-medium mb-2 text-center text-xl md:text-2xl'>Websites</h4>
      <img src={aboutImage1} className= 'w-1/2 text-sm mx-auto'/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores, dolore suscipit dicta </p>
    </div>
    <div className='p-5 shadow-md mx-auto rounded-lg cursor-pointer hover:shadow-2xl transition-all ease-out duration-300'>
      <h4 className='font-medium mb-2 text-center text-xl md:text-2xl'>Analytics</h4>
      <img src={aboutImage3} className= 'w-1/2 text-sm mx-auto'/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores, dolore suscipit dicta </p>
    </div>
    <div className='p-5 shadow-md mx-auto rounded-lg cursor-pointer hover:shadow-2xl transition-all ease-out duration-300'>
      <h4 className='font-medium mb-2 text-center '>Digital Marketing</h4>
      <img src={aboutImage1} className= 'w-1/2 text-sm mx-auto'/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores, dolore suscipit dicta </p>
    </div>
    </div>

    </div>
  )
}
{/*  */}
export default About
 