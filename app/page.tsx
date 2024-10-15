import Image from 'next/image'
import React from 'react'
import headerGif from '@/app/assets/header.gif'

const page = () => {
  return (
    <>
      <header className='container mx-auto p-5'>
        <section>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-4'>
              <h1 className='uppercase text-4xl font-extrabold'>Hello, It's me</h1>
              <h1 className='uppercase text-5xl font-bold'>Haseeb Ur Rehman</h1>
              <h1 className='uppercase text-3xl font-semibold'>I am <span className='text-[#EB8317]'>Frontend Developer</span></h1>
            </div>
            <div>
              <Image width={500} src={headerGif} alt='headerImge' />
            </div>
          </div>
        </section>
        <section className='mt-10'>
          <div className='flex flex-col gap-5'>
              <h1 className='text-5xl font-bold'>Let me <span className='text-[#EB8317]'>introduce</span> myself</h1>
              <p className='text-2xl text-gray-600'>My journey into coding has been nothing short of <br /> amazing, and I've learned  so many valuable things so far! 😊</p>
              <p className='text-2xl text-gray-600'>I’m well-versed in popular technologies like JavaScript, <br /> <span className='text-[#EB8317]'>React.js</span>, and <span className='text-[#EB8317]'>Next js.</span></p>
          </div>
        </section>
      </header>
    </>
  )
}

export default page
