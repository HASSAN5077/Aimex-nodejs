import React from 'react'
import SiteLayout from '../layouts/SiteLayout'
import { trade } from '../images'

const Trade = () => {
  return (
    <SiteLayout>
        <div className='mt-24 p-4 border-2 border-solid border-gray-200 rounded-2xl bg-white' >
            <h3 className='text-center text-gray-800 font-semibold text-3xl '>Your will trade from here...</h3>
            <img src={trade} alt="" className='w-72 mx-auto mt-16'/>
        </div>
    </SiteLayout>
  )
}

export default Trade