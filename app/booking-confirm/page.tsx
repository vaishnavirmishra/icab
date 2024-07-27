import Booking from '@/components/Booking'
import Footer from '@/components/custom/Footer'
import Navbar from '@/components/custom/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
    <div className='flex items-center justify-center w-full  mt-16'>
    <Booking/>
    </div>
    </>
  )
}

export default page
