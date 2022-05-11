import React from 'react';
import chairImg from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date,setDate}) => {

  return (
    <div className="hero w-full py-20 md:py-32 bg-[url('/src/assets/images/bg.png')]">
      <div className="hero-content w-full md:mx-8 flex-col lg:flex-row-reverse">
        <img src={chairImg} alt='' className="rounded-lg shadow-2xl md:mb-6 w-full md:w-1/2" />
        <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
          <DayPicker mode='single' selected={date} onSelect={ setDate}/>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;