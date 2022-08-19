import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Logo from '../assets/newwilllogo.png';
import { Link } from 'react-scroll';
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#FAFAFA] text-[#051367]'>
            <div>
                <img className='pt-6 pr-14 md:pr-0' src={Logo} alt='Logo Image' style={{ width: '200px' }} />
            </div>
            {/* Web Menu */}
            <div>
                <ul className="hidden md:flex text-[#051367]">
                    <li>
                        <Link to='home' smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='about' smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                    <Link to='skills' smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to='work' smooth={true} duration={500}>
                            Projects
                        </Link>
                    </li>


                </ul>
            </div>

            {/* Mobile Nav Button */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu*/}

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[white] flex flex-col justify-center items-center'} >
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
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
