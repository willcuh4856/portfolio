import React from 'react'
import WILL from '../assets/will.png'

const About = () => {
    return (
        <div name='about' className="w-full h-screen bg-[rgb(250,250,250)]" >
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div >
                    <p className='text-4xl font-bold text-[#041562] inline border-b-4 border-[#B2B1B9]'>About</p>
                </div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-20 text-center py-8'>
                    <div className='text-left pt-8 pr-10'>
                        <h1 className='text-2xl sm:text-4xl font-bold text-[#413F42] '>Hello I am Will!</h1>
                        <p className='py-8'> Outside of studying computer science and developing web pages, some of my interests are badminton, magic, and cooking. I am currently living in NYC and would love to offer some food recommendations!</p>
                    </div>
                    <div>
                        <img className='custom w-25 mx-20' src={WILL} alt="CSS Icon" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About
