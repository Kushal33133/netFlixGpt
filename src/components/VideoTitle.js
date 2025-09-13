import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute bg-gradient-to-r from-black w-screen aspect-video'>
     <h1 className='text-3xl  font-bold text-white'>{title}</h1>
     <p className='py-6 text-lg w-1/4 text-white'>{overview}</p>
     <div className=''>
        <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-50'> Play</button>
        <button className='bg-gray-500 text-black p-4 px-12 text-xl opacity-50 rounded-lg mx-2'>More Info</button>
     </div>
    </div>
  )
}

export default VideoTitle