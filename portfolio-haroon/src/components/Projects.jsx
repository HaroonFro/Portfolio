import React from "react"
import ProjectItem from "./ProjectItem"
import splitOneImg from '../assets/split1.png'
import splitTwoImg from '../assets/split2.png'
import splitThreeImg from '../assets/split3.png'
import supOneImg from '../assets/sup1.png'
import supTwoImg from '../assets/sup2.png'
import supThreeImg from '../assets/sup3.png'
import hulkOneImg from '../assets/hulk1.png'
import gastoreOneImg from '../assets/gastore.png'




const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
        <p className="text-center py-8">
        Pivoting from the world of retail and business into software development was anything but easy. I enjoy challenging and pushing myself to my limits. Building full stack applications have now become a hobby as I look back and see how much I improve with every new project! thus opening the doors of endless opportunities for my imagination and innovation. Take a look! 
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
           <ProjectItem img={splitThreeImg} title='Splits App' /> 
           <ProjectItem img={supOneImg} title='SuppBro App' /> 
           <ProjectItem img={hulkOneImg} title='Hulk Game' /> 
           <ProjectItem img={gastoreOneImg} title='GA store app' /> 
        </div>
        </div>
    )
}

export default Projects