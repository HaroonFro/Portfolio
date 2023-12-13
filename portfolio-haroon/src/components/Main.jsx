import React from "react"
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedinIn, } from 'react-icons/fa'

const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover object-left scale-x-[-1]" src="https://images.unsplash.com/photo-1631817658262-ec3c440ef159?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfF84ekZIdWhSaHlvfHxlbnwwfHx8fHw%3D" alt="/" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Haroon Frotan</h1>
                <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">I'm a
                <TypeAnimation
                 sequence={[
                'Software Engineer',
                 2000, 
                'Developer',
                 2000,
                'Coder',
                2000,
                'Tech Enthusiast',
                2000
      ]}
      wrapper="div"
      cursor={true}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
      repeat={Infinity}
    />

                </h2>
                <div className="flex justify-between pt-6 max-w-[200px] w-full">
                    <FaGithub className="cursor-pointer" size={30} />
                    <FaLinkedinIn className="cursor-pointer" size={30} />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Main