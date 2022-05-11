import React from 'react';
import QuoteImg from '../../assets/icons/quote.svg';
import People1 from '../../assets/images/people1.png';
import People2 from '../../assets/images/people2.png';
import People3 from '../../assets/images/people3.png';
import ReviewCard from './ReviewCard';

const Testimonial = () => {
  const Reviews = [
    {
      id: 1,
      name: 'Winson Herry',
      img: People1,
      location: 'California',
      review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
    },
    {
      id: 2,
      name: 'Winson Herry',
      img: People2,
      location: 'California',
      review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
    },
    {
      id: 3,
      name: 'Winson Herry',
      img: People3,
      location: 'California',
      review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
    },

  ];

  return (
    <div className='w-full p-4 md:p-12 flex flex-col'>
      <div className='w-full flex justify-between '>
        <div>
          <h1 className='text-xl text-secondary font-bold'>Testimonial</h1>
          <h1 className='text-4xl'>What Our Patients Says</h1>
        </div>
        <div className='w-24 lg:w-48 ml-4 h-full'>
          <img src={QuoteImg} alt="" />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row p-4'>
        {
          Reviews.map(Review => <ReviewCard key={Review.id} Review={Review}></ReviewCard>)
        }
      </div>
    </div>
  );
};

export default Testimonial;