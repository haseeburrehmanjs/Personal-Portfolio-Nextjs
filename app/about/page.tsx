import React from 'react'
import aboutImage from '@/app/assets/aboutImage.gif'
import Image from 'next/image'
// import { IconName } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiRedux, SiTypescript, SiFirebase, SiBootstrap, SiExpress } from 'react-icons/si';

const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, color: "text-yellow-500" },
    { name: "React", icon: <FaReact className="text-cyan-500" />, color: "text-cyan-500" },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-700" />, color: "text-gray-700" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" />, color: "text-teal-500" },
    { name: "Node.js", icon: <FaNode className="text-green-600" />, color: "text-green-600" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-800" />, color: "text-green-800" },
    { name: "Redux", icon: <SiRedux className="text-purple-500" />, color: "text-purple-500" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, color: "text-blue-600" },
    { name: "Git", icon: <FaGitAlt className="text-red-500" />, color: "text-red-500" },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-600" />, color: "text-yellow-600" },
    { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-500" />, color: "text-indigo-500" },
    { name: "Express.js", icon: <SiExpress className="text-black" />, color: "text-black" },
];


const About = () => {
    return (
        <>
            <section className='container mx-auto p-4'>
                <div className='flex justify-between sm:mt-[100px] mt-[50px] flex-wrap-reverse'>
                    <div className='flex flex-col gap-5 sm:text-start text-center'>
                        <h1 className='text-4xl font-bold text-center uppercase'>Know How <span className=' text-[#EB8317]'>I'M</span></h1>
                        <p className='text-[22px] text-gray-600'>I am <span className='text-[#EB8317]'>Haseeb Ur Rehman</span>, currently learning MERN stack <br /> development from Saylani. I have a strong understanding <br /> of <span className='text-[#EB8317]'>JavaScript</span>, TypeScript, React.js, and <span className='text-[#EB8317]'>Next.js</span>, and I'm <br />continuously expanding my skills in frontend development.</p>
                        <p className='text-[22px] text-gray-600'>My goal is to provide top-quality, professional solutions that <br />meet my clients' needs.</p>
                    </div>
                    <div className='mb-10'>
                        <Image width={500} src={aboutImage} alt='aboutImage' />
                    </div>
                </div>
                <div className='mt-14'>
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold'>My <span className='text-[#EB8317]'>Skill Set</span></h1>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10'>
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 flex flex-col items-center"
                            >
                                <div className="text-5xl mb-4 text-center">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-center text-gray-800 group-hover:text-gray-900">
                                    {skill.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
