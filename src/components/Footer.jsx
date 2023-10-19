import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900'>
      <div className='px-4 pb-6 pt-6 mx-auto sm: max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
        <div>
            <div className='grid grid-cols-2 gap-10 lg:grid-cols-5 md:grid-cols-2 md:gap-5'>
                {/* Category 1 */}
                <div>
                    <p className='font-medium tracking-wide text-gray-300'>Category</p>
                    <ul className='mt-2 space-y-2'>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>World</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Literature</a>
                        </li>
                    </ul>
                </div>
                {/* Category 2 */}
                <div>
                    <p className='font-medium tracking-wide text-gray-300'>Services</p>
                    <ul className='mt-2 space-y-2'>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Web</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>E-commerce</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Analytics</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Digital Marketing</a>
                        </li>
                    </ul>
                </div>
                {/* Category 3 */}
                <div>
                    <p className='font-medium tracking-wide text-gray-300'>Extras</p>
                    <ul className='mt-2 space-y-2'>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Portfolio</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Newsletters</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Brochure</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>CMS</a>
                        </li>
                    </ul>
                </div>
                {/* Subscription section */}
                <div className="md:max-w-full lg:col-span-2">
                    <div>
                        <p className="text-xl font-bold tracking-tight text-white">Subscribe to our newsletter.</p>
                    <p className="text-sm mt-2 tracking-wide text-gray-300 lg:text-lg font-light">
                    Want product news and updates?
                    Sign up for our newsletter.
                    </p>
                    </div>
                    <div className="flex-col justify-between mt-4 flex max-w-full gap-x-2 lg:flex-row ">
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 mb-2 px-3.5 py-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        placeholder="Enter your email"
                    />
                    <button
                        type="submit"
                        className="flex-none rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm lg:h-12 mt-1 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                        Subscribe
                    </button>
                    </div>
                </div>
            </div>    
        </div>
      </div>
      <footer className= 'text-center mt10 py-4 text-gray-500 border-t border-gray-800'>
        <p>© Copyright 2023 | All rights reserved.
        </p>
        </footer>
    </div>
  )
}

export default Footer
