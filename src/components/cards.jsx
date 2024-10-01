import React from 'react';

const Cards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/40 rounded-xl text-[#F5F5F5]'>
          <p className='font-bold text-2xl px-2 pt-4'>Bite Into Happiness</p>
          <p className='px-2'>Every Order, Every Time</p>
          <button className='border-[#333333] bg-[#F5F5F5] text-[#333333] hover:bg-[#ffffff] mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/40  rounded-xl text-[#F5F5F5]'>
          <p className='font-bold text-2xl px-2 pt-4'>Foodies Unite </p>
          <p className='px-2'>Discover New Restaurants Daily</p>
          <button className='border-[#333333] bg-[#F5F5F5] text-[#333333] hover:bg-[#ffffff] mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/40 rounded-xl text-[#F5F5F5]'>
          <p className='font-bold text-2xl px-2 pt-4'>Satisfy Your Sweet Tooth </p>
          <p className='px-2'>Dessert Delivery Done Right</p>
          <button className='border-[#333333] bg-[#F5F5F5] text-[#333333] hover:bg-[#ffffff] mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Cards;
