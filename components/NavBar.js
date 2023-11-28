import React from 'react'
import Link from 'next/link'
import { useState } from 'react';

const NavBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className='flex items-center flex-wrap bg-[#493799] p-3 '>
          <a href="/">
              <img src="/assets/img/name2.png" className="w-24 lg:w-48" alt="logo image" />
          </a>
        <button
          className=' inline-flex p-3 hover:bg-transparent rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <i class="bx bx-menu text-4xl text-white"></i>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/#about'>
              <a className='pt-0.5 lg:inline-flex lg:w-auto  px-3 py-2  text-white font-semibold uppercase items-center justify-center hover:border-b-2 border-yellow-300 ... '>
                About
              </a>
              
            </Link>
            <Link href='/#skills'>
              <a className='pt-0.5 lg:inline-flex lg:w-auto  px-3 py-2  text-white font-semibold uppercase items-center justify-center hover:border-b-2 border-yellow-300 ... '>
                Skills
              </a>
            </Link>
            <Link href='/#certificates'>
              <a className='pt-0.5 lg:inline-flex lg:w-auto  px-3 py-2  text-white font-semibold uppercase items-center justify-center hover:border-b-2 border-yellow-300 ... '>
                Certificates
              </a>
            </Link>
            <Link href='/#portfolio'>
              <a className='pt-0.5 lg:inline-flex lg:w-auto  px-3 py-2  text-white font-semibold uppercase items-center justify-center hover:border-b-2 border-yellow-300 ... '>
                Portfolio
              </a>
            </Link>
            <Link href='/#statistics'>
              <a className="pt-0.5 lg:inline-flex lg:w-auto  px-3 py-2  text-white font-semibold uppercase items-center justify-center hover:border-b-2 border-yellow-300 ... ">
                Statistics
              </a>
            </Link>
            <Link href='/#blog'>
              <a className='pt-0.5 lg:inline-flex lg:w-auto  px-3 py-2  text-white font-semibold uppercase items-center justify-center hover:border-b-2 border-yellow-300 ... '>
                Blog
              </a>
            </Link>
            <Link href='/#contact'>
              <a className='pt-0.5 lg:inline-flex lg:w-auto  px-3 py-2  text-white font-semibold uppercase items-center justify-center hover:border-b-2 border-yellow-300 ... '>
                Contact
              </a>
            </Link>
  
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
