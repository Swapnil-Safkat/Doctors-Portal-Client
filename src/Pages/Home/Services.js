import React from 'react';
import Fluoride from '../../assets/images/fluoride.png';
import Cavity from '../../assets/images/cavity.png';
import Whitening from '../../assets/images/whitening.png';
import Treatment from '../../assets/images/treatment.png';
import ServiceCard from './ServiceCard';
import Button from '../../Components/Button';

const Services = () => {
  const cardData = [
    {
      key: 1,
      img: Fluoride,
      title: 'Fluoride Treatment',
      body: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
    },
    {
      key: 2,
      img: Cavity,
      title: 'Cavity Filling',
      body: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
    },
    {
      key: 3,
      img: Whitening,
      title: 'Teeth Whitening',
      body: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
    },
  ];
  return (
    <div className='flex flex-col w-full justify-center my-16 lg:my-28'>
      <h1 className='text-primary text-center text-xl font-bold uppercase'>Our services</h1>
      <h1 className='text-accent text-center text-4xl font-bold uppercase'>Services We Provide</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-16 lg:p-28'>
        {
          cardData.map(data => <ServiceCard key={data.key} data={data} />)
        }
      </div>
      <div className="hero w-full my-10">
        <div className="hero-content flex-col md:flex-row w-full md:w-11/12">
          <img src={Treatment} alt='' className="rounded-lg shadow-2xl w-full md:w-1/2 lg:w-1/3" />
          <div className='lg:px-6 my-2 w-full md:w-1/2 lg:w-2/3 '>
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="pt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;