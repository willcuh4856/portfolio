import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import SQL from '../assets/nsql.jpeg';
const html = require('../assets/html.png')
const Skills = () => {
    return (
        <div className="w-full h-screen bg-[rgb(250,250,250)]" >
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div >
                    <p className='text-4xl font-bold text-[#041562] inline border-b-4 border-[#B2B1B9]'>Skills</p>
                    <p className='py-4'>// Technology I am familar with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md  shadow-[#B2B1B9] hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
                        <p>
                            HTML
                        </p>
                    </div>
                    <div className='shadow-md  shadow-[#B2B1B9] hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS Icon" />
                        <p>
                            CSS
                        </p>
                    </div>
                    <div className='shadow-md  shadow-[#B2B1B9] hover:scale-110 duration-500 '>w-full h-screen
                        <img className='w-20 mx-auto' src={JavaScript} alt="HTML Icon" />
                        <p>
                            JavaScript
                        </p>
                    </div>
                    <div className='shadow-md  shadow-[#B2B1B9] hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={ReactImg} alt="HTML Icon" />
                        <p>
                            React
                        </p>
                    </div>
                    <div className='shadow-md  shadow-[#B2B1B9] hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={Node} alt="HTML Icon" />
                        <p>
                            Node
                        </p>
                    </div>
                    <div className='shadow-md  shadow-[#B2B1B9] hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={Mongo} alt="HTML Icon" />
                        <p>
                            MongoDB
                        </p>
                    </div>
                    <div className='shadow-md  shadow-[#B2B1B9] hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={AWS} alt="HTML Icon" />
                        <p>
                            AWS
                        </p>
                    </div>
                    <div className='shadow-md  shadow-[#B2B1B9] hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={Tailwind} alt="HTML Icon" />
                        <p>
                            Tailwind
                        </p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Skills
//'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'
//'text-4xl font-bold inline border-b-4 border-pink-600 '
//''w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'
//shadow-md shadow-[#040c16] hover:scale-110 duration-500