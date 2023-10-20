import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaBars, FaDribbble, FaFacebook, FaInstagram, FaTwitter, FaX, FaXmark,  } from "react-icons/fa6";
import Modal from './Modal';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    const toggleModal=()=>{
        console.log(isModalOpen);
        setIsModalOpen(!isModalOpen);
    }
    const toggleMobile=()=>{
        setIsMenuOpen(false);
        setIsModalOpen(true);
    }

    const navItems= [
        {path:"/", link: "Home"},
        {path:"/blogs", link: "Blogs"},
        {path:"/about", link: "About"},
        // {path:"/services", link: "Services"},
        {path:"/contact", link: "Contact"}
        ]
    
  return (
    <header className='bg-black fixed top-0 left-0 right-0'>
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
        <a href="/" className='text-xl font-bold text-gray-200'>Blogg<span className='text-orange-400 text-3xl'>er!</span></a>
        {/* Nav for lg devices */}
        <ul className='md:flex gap-12 text-lg hidden'>
            {
            navItems.map(({path,link})=><li className='text-white' key={path}>  
                <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } 
                    to={path}>
                    {link}</NavLink>
            </li>)
}   
        </ul>
        {/* Menu Icons */}
        <div className='text-white lg:flex gap-4 items-center hidden'>
            <a href="/" className='hover:text-orange-400 transition all duration-200 '><FaFacebook/></a>
            <a href="/" className='hover:text-orange-400 transition all duration-200'><FaTwitter/></a>
            <a href="/" className='hover:text-orange-400 transition all duration-200'><FaDribbble/></a>
            <button className='bg-orange-400 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-400 transition-all duration-200 ease-in' onClick={toggleModal}>Log in / SignUp</button>
        </div>

        {/* Modal component */}
        <Modal isOpen={isModalOpen} closeModal={toggleModal}/>


        {/* Menu for mobile screens */}
        <div className='md:hidden'>
            <button onClick={toggleMenu} className='cursor-pointer '>
                {
                    isMenuOpen?<FaXmark className='text-white w-5 h-5'/>:<FaBars className='w-5 h-5 bg-none text-white hover:text-orange-400 transition-all duration-200 ease-in'/>
                }
            </button>    
        </div>
      </nav>
       {/* Menu items for mobile */}
       <div>
        <ul className={`md:hidden bg-black gap-12 text-lg block space-y-3 px-4 py-6 mt-14 ${(isMenuOpen)?"fixed top-0 left-0 w-full transition-all ease-out duration-150":"hidden"}`}>
        {
            navItems.map(({path,link})=><li className='text-white' key={path}>  
             <NavLink onClick={toggleMenu}
            to={path}>
            {link}</NavLink>
        </li>)
        }
        <button className='text-sm bg-orange-400 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-400 transition-all duration-200 ease-in' onClick={toggleMobile}>Log in / SignUp</button>

        </ul>
    </div>
    </header>
  )
}

export default Navbar


