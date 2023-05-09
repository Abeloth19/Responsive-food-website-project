import React, { useState } from 'react';
import { data } from '../data/data.js';

const Foods = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by prices
  
  const filterPrices = (prices) => {
    setFoods(
      data.filter((item) => {
        return item.prices === prices;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-[#333333] font-bold text-4xl text-center'>
       Our Top Picks
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-[#333333]'>Filter Type</p>
          <div className='flex justify-between flex-wrap font-bold'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-[#F5F5F5]'
            >
              All
            </button>
            <button
              onClick={() => filterType('fast food')}
              className='m-1 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-[#F5F5F5]'
            >
              Fast Food
            </button>
            <button
              onClick={() => filterType('veg')}
              className='m-1 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-[#F5F5F5]'
            >
              Veg
            </button>
            <button
              onClick={() => filterType('non-veg')}
              className='m-1 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-[#F5F5F5]'
            >
              Non-veg
            </button>
            <button
              onClick={() => filterType('Dessert')}
              className='m-1 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-[#F5F5F5]'
            >
              Dessert
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-[#333333]'>Filter Price</p>
          <div className='flex flex-row justify-between max-w-[490px] w-full font-semibold'>
            <button
              onClick={() => filterPrices('50-100')}
              className='m-1 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-[#F5F5F5]'
            >
              50-100
            </button>
            <button
              onClick={() => filterPrices('100-200')}
              className='m-1 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-[#F5F5F5]'
            >
              100-200
            </button>
            <button
              onClick={() => filterPrices('200-500')}
              className='m-1 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-[#F5F5F5]'
            >
              200-500
            </button>
            <button
              onClick={() => filterPrices('500+')}
              className='m-1 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-[#F5F5F5]'
            >
              500+
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold text-[#333333]'>{item.name}</p>
              <p>
                <span className=' text-[#333333] p-2 font-bold rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
