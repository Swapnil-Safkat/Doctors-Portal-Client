import React from 'react';
import Doctor from '../../assets/images/doctor.png';
import Button from '../../Components/Button';

const MakeAppointment = () => {
  return (
    <section className="bg-[url('/src/assets/images/appointment.png')] my-10 flex flex-row">
      <div className='w-full lg:w-1/2 hidden lg:block mt-[-200px]'> <img src={Doctor} alt="" /></div>
      <div className='w-full lg:w-1/2 flex flex-col justify-center px-4 py-6 lg:py-0 lg:pr-4'>
        <h1 className='text-xl text-secondary font-bold'>Appointment</h1>
        <h1 className='text-4xl text-white font-bold my-5'>Make an appointment Today</h1>
        <h1 className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</h1>
        <div>
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;