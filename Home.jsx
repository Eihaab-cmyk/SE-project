import React from 'react';
import { motion } from 'framer-motion';
import { Delivery, HeroBg } from '../assets/img';
import { buttonClick, staggerFadeInOut } from '../animations';
import { randomData } from '../utils/styles';

const Home = () => {
  return (
    <motion.div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='flex flex-col items-start justify-start gap-6'>
        <div className='px-4 py-1 flex items-center justify-center gap-2 bg-orange-100 rounded-full'>
        <p className='text-lg text-orange-500 font-semibold'>
            Bike Delivery
            </p>
            <div className='w-10 h-10 flex items-center justify-center bg-primary rounded-full
           shadow-md'>
            <img src={Delivery} className='w-full h-full object-contain' alt='delivery' />
            </div>
        </div>

        <p className='text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-teal-50'>
          The Fastest Delivery In{" "}
          <span className='text-orange-600 text-[3rem] lg:text-[4.5rem]'>Your City</span> 
        </p>
        <p className='text-base text-teal-50 text-center md:text-left md:w-[88%]'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolor excepturi omnis reprehenderit recusandae iste fugiat nesciunt voluptas expedita maxime doloremque officiis, repellendus nulla nam distinctio fugit natus ducimus? Corrupti.
        </p>
        <motion.button
         {...buttonClick}
         className='bg-gradient-to-bl from-orange-400 to-orange-600 w-full
         md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out
         duration-100'
         >
          Order Now
        </motion.button>
      </div>

      <div className='py-2 flex-1 flex items-center justify-end relative'>
      <img src={HeroBg} className='absolute top-0 right-0 md:right-12 w-full h-420 md:w-auto md:h-650' alt='hero-bg' />
      <div className='w-full md:w-460 ml-0 flex flex-wrap items-center gap-4 gap-y-14'>
        {randomData && randomData.map((data,i) =>(
            <motion.div key={i} {...staggerFadeInOut(i)} className='w-32 h-36 md:h-auto md:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                <img src={data.imageURL} className='w-12 h-12 md:w-32 md:h-32 md:-mt-16 object-contain' alt="" />
                <p className='text-sm lg:text-xl font-semibold text-textColor'>
                    {data.product_name.slice(0, 14)}
                </p>
                <p className='text-[12px] text-center md:text-base text-gray-300 font-semibold'>
                    {data.product_category}
                </p>
                <p className='text-sm font-semibold text-textColor '>
                    <span className='text-xs text-red-600'>$</span>{" "}
                    {data.product_price}
                </p>
            </motion.div>
        ))}
      </div>
      </div>
    </motion.div>
  )
}

export default Home
