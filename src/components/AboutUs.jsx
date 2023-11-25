import React from 'react';
import { motion } from 'framer-motion';
import { BsRocketTakeoff } from 'react-icons/bs';
import { IoEarth } from 'react-icons/io5';
import { BiShoppingBag } from 'react-icons/bi';
import { buttonClick, staggerFadeInOut } from '../animations';
import { randomData } from '../utils/styles';
import Header from './Header';

const AboutUs = () => {
  return (
    <motion.div className='min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-800 pt-32'>
        <Header />
      <div className='flex flex-col items-start justify-start gap-6'>
        <div className='px-4 py-1 flex items-center justify-center gap-2 bg-orange-100 rounded-full w-full'>
          <p className='text-lg text-orange-500 font-semibold'>
            Our Story
          </p>
          <div className='w-10 h-10 flex items-center justify-center bg-primary rounded-full shadow-md'>
            <BsRocketTakeoff className='w-full h-full text-orange' />
          </div>
        </div>

        <p className='text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-teal-50'>
          About <span className='text-orange-600 text-[3rem] lg:text-[4.5rem]'>Our Team</span>
        </p>

        <p className='text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-teal-50 text-center md:text-left md:w-full'>
  <span className='font-bold text-orange-600'>Fudora:</span><br/> Delivering Excellence Since 2001

  Welcome to the heart of Fudora, where our journey began with a passion for delivering excellence in every package. Founded in 2001, Fudora has evolved from a small startup to a dynamic force in the world of speedy and reliable deliveries.

  <br />
  <br />

  <span className='font-bold text-orange-600'>Our History:</span><br/> From Humble Beginnings to Milestones

  Fudora started with a simple yet ambitious goal: to redefine convenience and set new standards in the delivery service industry. Our journey began in a small garage with a handful of dedicated individuals who believed in the power of efficient and swift deliveries.

  Over the years, we have expanded our reach, serving countless satisfied customers across multiple countries. Our commitment to excellence has driven us to overcome challenges and continuously improve our services.

  <br />
  <br />

  <span className='font-bold text-orange-600'>Achievements:</span><br/>Paving the Way for Success

  Fudora takes pride in its achievements, celebrating milestones that reflect our dedication and hard work. Some of our key accomplishments include expanding our services to multiple countries. Ours commitment to fast delivery has made us one of the most respected companies accross the globe .

  As we look back on our journey, we are grateful for the trust and loyalty of our customers and the unwavering dedication of our team. The future holds exciting possibilities, and we are committed to delivering excellence with every package, ensuring that Fudora remains your go-to choice for fast, reliable, and convenient deliveries.

  Thank you for being part of the Fudora story – where every delivery is a testament to our commitment to excellence!
</p>


        <motion.button
          {...buttonClick}
          className='bg-gradient-to-bl from-orange-400 to-orange-600 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'
        >
          Learn More
        </motion.button>
      </div>

      {/* The rest of your component for the image section remains unchanged */}
    </motion.div>
  );
};

export default AboutUs;
