import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#FAFAFA] text-[#051367]'>
            <div>
                Insert logo Here
            </div>
            {/* Web Menu */}
            <div>
                <ul className="hidden md:flex text-[#051367]">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>

                </ul>
            </div>

            {/* Mobile Nav Button */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu*/}

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[white] flex flex-col justify-center items-center'} >
                < li className="py-6 text-4xl"> Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Projects</li>

            </ul>

            {/* Social Icon*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]'>
                        <a className='flex justify-between items-center w-full text-gray-100' href="https://www.linkedin.com/in/william-cui2/">
                            LinkedIn  <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[black]'>
                        <a className='flex justify-between items-center w-full text-gray-100' href="https://github.com/willcuh4856">
                            Github  <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FD5D5D]'>
                        <a className='flex justify-between items-center w-full text-gray-100' href="mailto:wcui2024@gmail.com">
                            Email  <HiOutlineMail size={30} />
                        </a>
                    </li>
                </ul>


            </div>
        </div >
    )
}

export default Navbar
