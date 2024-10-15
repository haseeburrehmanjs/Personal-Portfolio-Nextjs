import Image from 'next/image'
import React from 'react'
import headerGif from '@/app/assets/header.gif'
import introImage from '@/app/assets/introImage.png'

const page = () => {
  return (
    <>
      <header className='container mx-auto p-5 mt-10'>
        <section>
          <div className='flex sm:justify-between justify-center flex-wrap items-center gap-16 sm:gap-5'>
            <div className='flex flex-col gap-4'>
              <h1 className='uppercase text-4xl font-extrabold'>Hello, It's me</h1>
              <h1 className='uppercase text-5xl font-bold'>Haseeb Ur Rehman</h1>
              <h1 className='uppercase text-3xl font-semibold'>I am <span className='text-[#221c15]'>Frontend Developer</span></h1>
            </div>
            <div>
              <Image width={500} src={headerGif} alt='headerImge' />
            </div>
          </div>
        </section>
        <section className='mt-[105px]'>
          <div className='flex sm:justify-between justify-center items-center flex-wrap'>
            <div className='flex flex-col gap-5'>
              <h1 className='text-5xl font-bold'>Let me <span className='text-[#EB8317]'>introduce</span> myself</h1>
              <p className='text-[22px] text-gray-600'>My journey into coding has been nothing short of <br /> amazing, and I've learned  so many valuable things so far! 😊</p>
              <p className='text-[22px] text-gray-600'>I have a deep understanding of essential technologies <br /> like <span className='text-[#EB8317]'>JavaScript</span>, <span className='text-[#EB8317]'>React.js</span>, and <span className='text-[#EB8317]'>Next.js</span></p>
              <p className='text-[22px] text-gray-600'>I am deeply passionate about building <span className='text-[#EB8317]'>innovative web</span> <br /> solutions that enhance user experiences. I’m always excited <br /> to explore emerging <span className='text-[#EB8317]'>technologies</span>, especially those that are <br /> <span className='text-[#EB8317]'>shaping</span> the future of web development</p>
              <p className='text-[22px] text-gray-600'>In my free time, I love working on projects with modern <br /> <span className='text-[#EB8317]'>JavaScript</span> frameworks and <span className='text-[#EB8317]'>libraries</span> like React.js, <br /> turning <span className='text-[#EB8317]'>creative ideas</span> into functional web applications.</p>
            </div>
            <div>
              <Image width={600} src={introImage} alt='introImage' />
            </div>
          </div>
        </section>
        <section>
          <div>

          </div>
        </section>
      </header>
    </>
  )
}

export default page
