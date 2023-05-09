import React from 'react'

const Head = () => {
  return ( 
    <div className='max-w-[1640px] mx-auto p-4 grid grid-cols-2 gap-2'>
        <div className='max-h-[500px] relative '>
            {/* Overlay */}
            <div className='absolute w-full h-full text-[#333333] max-h-[500px] bg-transparent flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Indulge In <span className='text-[#FFE66D]'> deliciousness  </span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> with <span className='text-[#FFE66D]'>FooDie</span> </h1>
            </div>
            
        </div>
        <video className='w-full max-h-[500px] object-cover rounded-md' src="https://player.vimeo.com/external/442265127.sd.mp4?s=159e7c33b22b27465866f9962cee777a14410972&profile_id=164&oauth2_token_id=57447761"  autoPlay loop muted/>
    </div>
  )
}

export default Head