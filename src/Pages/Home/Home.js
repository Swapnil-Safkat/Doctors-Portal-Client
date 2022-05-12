import React from 'react';
import HomeBanner from './HomeBanner';
import marker from '../../assets/icons/marker.svg';
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import MakeAppointment from './MakeAppointment';
import InfoCards from './InfoCards';
import Services from './Services';
import Contact from './Contact';
import Testimonial from './Testimonial';
import Footer from '../../Components/Footer';

const Home = () => {
  const cardData = [
    {
      key: 1,
      img: clock,
      title: 'Opening Hours',
      body: 'Lorem Ipsum is simply dummy text of the pri',
      bg: 'bg-gradient-to-r from-primary to-secondary'
    },
    {
      key: 2,
      img: marker,
      title: 'Visit our location',
      body: 'Brooklyn, NY 10036, United States',
      bg: 'bg-accent'
    },
    {
      key: 3,
      img: phone,
      title: 'Contact us now',
      body: '+000 123 456789',
      bg: 'bg-gradient-to-r from-secondary to-primary'
    },
  ];
  return (
    <div >
      <HomeBanner />
      <div className='w-full p-4 grid grid-cols-1 gap-6 lg:grid-cols-3 md:p-16 lg:p-28'>
        {
          cardData.map(data => <InfoCards key={data.key} data={data} />)
        }
      </div>

      <Services className='p-4' />
      <MakeAppointment />
      <Testimonial/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home;