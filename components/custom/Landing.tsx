"use client"

import { Poppins, Ubuntu } from 'next/font/google';
import React, { useEffect, useState, useRef, LegacyRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import icab from './icab.jpg'
import { ArrowRight } from 'lucide-react';

// Import Ubuntu font
const ubuntu = Ubuntu({ subsets: ['latin'], weight: '500' });
const poppins = Poppins({subsets:['latin'],weight:'500'})

// Intersection Observer Hook
const useInViewOnce = (options:any) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        setHasAnimated(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, inView, hasAnimated];
};

const Landing = () => {
  const [ref1, inView1, hasAnimated1] = useInViewOnce({ threshold: 0.1 });
  const [ref2, inView2, hasAnimated2] = useInViewOnce({ threshold: 0.1 });

  return (
    <>
      <motion.div
        ref={ref1 as LegacyRef<HTMLDivElement>}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: hasAnimated1 ? 1 : 0, y: hasAnimated1 ? 0 : 50 }}
        transition={{ duration: 1 }}
        className="mt-4 p-4"
      >
        <div>
          <h1 className={`text-center text-4xl font-bold ${ubuntu.className}`} style={{ textShadow: '2px 2px 4px rgba(0, 128, 0, 0.6)' }}>
            Global mobility ecosystem driving<br /> communities forward
          </h1>
        </div>
        <div className="flex max-lg:flex-col gap-4 justify-evenly mt-8 items-center">
          <div className="text-center flex items-center flex-col mt-6">
            <img src="https://i.etsystatic.com/16458179/r/il/1e4326/3760731466/il_570xN.3760731466_1i20.jpg" className='rounded-lg' width={200} height={200} alt="Cities covered" />
            <h2 className="text-2xl font-bold mt-2">250+</h2>
            <p className="font-medium text-xl font-Ubuntu">Cities covered</p>
            <p className='text-sm text-gray-400 mt-2'>Across India, Australia, <br />New Zealand and the UK</p>
          </div>
          <div className="text-center flex items-center flex-col mt-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-xIJsfrMTcuzJfm9Jq1AGfFXVu2_ierFqQ&s" className='rounded-lg' width={150} height={150} alt="Yearly rides" />
            <h2 className="text-2xl font-bold mt-2">55 Cr+</h2>
            <p className="font-medium text-xl font-Ubuntu">Yearly rides</p>
            <p className='text-sm mt-2 text-gray-400'>Booked by our<br /> customers every<br /> year</p>
          </div>
          <div className="text-center flex items-center flex-col mt-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdtCZAI8C8Wlkb0-n_nH5tSVmvgWfUBo2k5A&s" className='rounded-lg' width={150} height={150} alt="Kilometers on S1" />
            <h2 className="text-2xl font-bold font-Ubuntu">12 Cr+</h2>
            <p className="font-medium text-xl font-Ubuntu">Kilometers on S1</p>
            <p className='font-sm text-gray-400 mt-2'>Distance covered on iCab<br /> cabs
              within a year of<br /> launch</p>
          </div>
        </div>
      </motion.div>
      <div className='mt-32 p-4'>
        <div className=''>
          <h1 className={`text-center text-4xl font-bold ${ubuntu.className}`} style={{ textShadow: '2px 2px 4px rgba(0, 128, 0, 0.6)' }}>
            There&apos;s an iCab ride for everyone
          </h1>
        </div>
        <div className="flex max-lg:flex-col gap-4 justify-evenly mt-8 items-center">
          <div className="flex items-start flex-col mt-6">
            <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ride-budget.svg" className='rounded-sm' alt="Cities covered" />
            <h2 className="text-xl text-left font-semibold mt-2">For any budget</h2>
            <p className="font-medium text-md mt-2 text-gray-500 text-left">From <span className='text-black'>Bikes</span> and <span className='text-black'>Autos</span> to <span className='text-black'>Prime</span><br /> <span className='text-black'>Sedans</span> and <span className='text-black'>Prime SUVs</span>, you will<br /> find a ride in your budget at<br /> your convenience any time.</p>
          </div>
          <div className="flex items-start flex-col mt-6">
            <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ride-distance.svg" className='rounded-sm' alt="Yearly rides" />
            <h2 className="text-xl text-left font-semibold mt-2">For any distance</h2>
            <p className="font-medium text-md mt-2 text-gray-500 text-left">Book rides within the city with<br /> <span className='text-black'>Daily</span>, or take a trip to your<br /> favourite destinations outside<br /> the city with <span className='text-black'>Outstation.</span></p>
          </div>
          <div className="flex  items-start flex-col mt-6">
            <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ride-duration.svg" className='rounded-sm' alt="Kilometers on S1" />
            <h2 className="text-xl text-left font-semibold mt-2">For any duration</h2>
            <p className="font-medium text-md mt-2 text-gray-500 text-left">Easily plan a day out without<br /> having to worry about<br /> conveyance with an hour- <br />based package from <span className='text-black'>Rental.</span></p>
          </div>
        </div>
      </div>
      <motion.div
        ref={ref2 as LegacyRef<HTMLDivElement>}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: hasAnimated2 ? 1 : 0, y: hasAnimated2 ? 0 : 50 }}
        transition={{ duration: 1 }}
        className="mt-4 p-4"
      >
        <div className='flex  items-start p-8 mt-20'>
          <h1 className={`font-bold text-4xl ${poppins.className}`}>Download our apps to<br /> get the best experience</h1>
        </div>
        <div className='flex max-lg:flex-col gap-12 p-8'>
          <div className='bg-lime-100 rounded-sm flex flex-col w-60 h-64'>
            <div className='p-6'>
              <Image src={icab} alt="icab" width={50} height={50} className='rounded-lg' />
              <div className='flex mt-10 justify-between'>
                <h1 className={`${poppins.className}`}>iCab.com</h1>
                <ArrowRight className='h-6 w-6' />
              </div>
              <div>
                <p className={`${poppins.className} text-gray-500 text-sm mt-8`}>Book cabs, buy insurance,<br /> access Ola Money and much more</p>
              </div>
            </div>
          </div>
          <div className='bg-lime-100 rounded-sm flex flex-col w-60 h-64'>
            <div className='p-6'>
              <Image src={icab} alt="icab" width={50} height={50} className='rounded-lg' />
              <div className='flex mt-10 justify-between'>
                <h1 className={`${poppins.className}`}>iCab Driver</h1>
                <ArrowRight className='h-6 w-6' />
              </div>
              <div>
                <p className={`${poppins.className} text-gray-500 text-sm mt-8`}>Register as a driver to take rides, see your earnings and incentives</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Landing;
