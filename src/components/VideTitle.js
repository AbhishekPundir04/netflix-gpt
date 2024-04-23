import React from 'react'

const VideTitle = ({title,description}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute   bg-gradient-to-r from-black'>
        <div className='text-5xl font-bold text-white'>{title}</div>
        <div className='mt-8 w-1/2 text-white text-lg'>{description}</div>

        <div className='mt-4'>
            <button onClick={()=>console.log("ok")} className='bg-white hover:bg-opacity-80 text-black rounded-md px-20 p-[13px] text-lg mr-2 '> Play</button>
            <button className='bg-gray-500 text-white rounded-md px-20 p-[13px] text-lg mr-2 '> More Info</button>

        </div>
    </div>
  )
}

export default VideTitle