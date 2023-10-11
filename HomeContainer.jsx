import React from 'react'
import Delivery from './drive-download-20230920T161113Z-001/delivery.png';
import heroBg from './drive-download-20230920T161113Z-001/heroBg.png';
import I1 from './drive-download-20230920T161113Z-001/i1.png';

const HomeContainer = () => {
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full id="home"'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>
            Bike Delivery
            </p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden
           drop-shadow-xl'>
            <img src={Delivery} className='w-full h-full object-contain' alt='delivery'
             />
          </div>
        </div>

        <p className='text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor'>
          The Fastest Delivery In{" "}
          <span className='text-orange-600 text-[3rem] lg:text-[4.5rem]'>Your City</span> 
        </p>
        <p className='text-base text-textColor text-center md:text-left md:w-[88%]'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolor excepturi omnis reprehenderit recusandae iste fugiat nesciunt voluptas expedita maxime doloremque officiis, repellendus nulla nam distinctio fugit natus ducimus? Corrupti.
        </p>
        <button
         type='button'
         className='bg-gradient-to-br from-orange-400 to-orange-500 w-full
         md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out
         duration-100'
         >
          Order Now
        </button>
      </div>
      <div className='py-2 flex-1 flex items-center relative'>
        <img src={heroBg} className='ml-auto h-420 w-full lg:w-auto lg:h-650' alt='hero-bg' />

        <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center px-32 py-4'>
            <div className='w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col
            items-center justify-center'>
                <img src={I1} className='w-40 -mt-20' alt='I1' />
                <p className='text-xl font-semibold text-textColor mt-4'>
                    Icecream
                </p>

                <p className='text-sm text-lighttextGray font-semibold my-3'>
                    Choclate & vanilla
                </p>

                <p className='text-sm font-semibold text-headingColor'>
                    <span className='text-xs text-red-600'>$</span>5.25
                </p>
            </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HomeContainer
