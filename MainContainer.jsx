import React from 'react'
import Delivery from './drive-download-20230920T161113Z-001/delivery.png'

const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className='py-2 flex-1 flex flex-col items-start md:items-center justify-center'>
        <div className='flex items-center gap-2 justify-center'>
          <p>Bike Delivery</p>
          <div className='w-10 h-10 bg-white rounded-full overflow-hidden'>
            <img src={Delivery} className='w-full h-full object-contain' alt='delivery' />
          </div>
        </div>
      </div>
      <div className='p-4 bg-slate-400 flex-1'></div>
    </div>
  )
}

export default MainContainer
