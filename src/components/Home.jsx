//color code:
//#FAFAFA
//#11468f
//#041562
//#cbc6c6

import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#FAFAFA]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#11468f] sm:text-2xl'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#041562]'>
                    William Cui
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#73777B]'>
                    I'm a Website Enthusiast!
                </h2>
                <p className='text-[#413F42] py-4 max-w-[700px] sm:text-1xl'>
                    A junior at NYU studying Computer Science with a interest in full-stack development
                </p>
                <div>
                    <Link to='work' smooth={true} duration={500}>
                        <button className='bg-[#041562] text-[#FAFAFA] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#73777B]'>
                            View Work
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3 ' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
