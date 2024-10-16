import React from 'react'
import aboutImage from '@/app/assets/aboutImage.gif'
import Image from 'next/image'
import { IconName } from "react-icons/si";

const About = () => {
    return (
        <>
            <section className='container mx-auto p-4'>
                <div className='flex justify-between mt-[100px]'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-4xl font-bold text-center uppercase'>Know How <span className=' text-[#EB8317]'>I'M</span></h1>
                        <p className='text-[22px] text-gray-600'>I am <span className='text-[#EB8317]'>Haseeb Ur Rehman</span>, currently learning MERN stack <br /> development from Saylani. I have a strong understanding <br /> of <span className='text-[#EB8317]'>JavaScript</span>, TypeScript, React.js, and <span className='text-[#EB8317]'>Next.js</span>, and I'm <br />continuously expanding my skills in frontend development.</p>
                        <p className='text-[22px] text-gray-600'>My goal is to provide top-quality, professional solutions that <br />meet my clients' needs.</p>
                    </div>
                    <div>
                    <Image width={500} src={aboutImage} alt='aboutImage'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
