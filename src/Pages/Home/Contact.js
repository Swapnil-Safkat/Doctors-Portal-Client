import React from 'react';
import Button from '../../Components/Button';

const Contact = () => {
  return (
    <section className="bg-[url('/src/assets/images/appointment.png')] flex flex-col justify-center items-center p-16 mt-10">
      <h1 className='text-xl text-secondary font-bold'>Contact Us</h1>
      <h1 className='text-4xl text-white'>Stay connected with us</h1>
      <div className='w-full md:w-1/2 lg:w-1/3 my-6 flex flex-col'>
        <input className='my-2 rounded-lg py-2 px-3' placeholder='Email address' type="text" name="email"/>
        <input className='my-2 rounded-lg py-2 px-3' placeholder='Subject' type="text" name="email"/>
        <textarea className='my-2 rounded-lg py-2 px-3' placeholder='Your message' type="text" name="message" />
      </div> 
      <Button>Subject</Button>
    </section>
  );
};

export default Contact;