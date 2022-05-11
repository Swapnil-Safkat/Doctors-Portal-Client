import React from 'react';
import chairImg from '../../assets/images/chair.png';
import Button from '../../Components/Button';

const HomeBanner = () => {
  return (
    <div className="hero w-full py-20 md:py-32 bg-[url('/src/assets/images/bg.png')]">
      <div className="hero-content w-full md:mx-8 flex-col lg:flex-row-reverse">
        <img src={chairImg} alt='' className="rounded-lg shadow-2xl md:mb-6 w-full md:w-1/2" />
        <div className='w-full md:w-1/2'>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="pt-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;