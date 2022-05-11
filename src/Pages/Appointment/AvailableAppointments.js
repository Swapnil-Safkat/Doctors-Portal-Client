import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import BookingModal from './BookingModal';
import ServiceCard from './ServiceCard';

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState({});

  useEffect(() => {
    fetch('services.json').then(res => res.json()).then(data => setServices(data));
  }
    , [])

  return (
    <div>
      <p className='text-secondary text-lg w-full text-center mt-4 mb-24'>Available Appointments {format(date, 'PP')}</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28 p-4 mx-auto w-full md:w-5/6 lg:w-3/4'>
        {
          services.map(service => <ServiceCard key={service._id} service={service} setTreatment={setTreatment}></ServiceCard>)
        }
      </div>
      <div>
        {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
      </div>
    </div>
  );
};

export default AvailableAppointments;