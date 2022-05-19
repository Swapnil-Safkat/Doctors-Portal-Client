import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import BookingModal from './BookingModal';
import ServiceCard from './ServiceCard';
import hostLink from '../../Components/host';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../../Components/Loading';
import { useQuery } from 'react-query'
const AvailableAppointments = ({ date }) => {
  const [user, loading] = useAuthState(auth);
  //const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState({});

  // useEffect(() => {
  //   fetch(`${hostLink()}available?date=${format(date,'PP')}`).then(res => res.json()).then(data => setServices(data));
  // }, [date])

  //done with react query
  const { isLoading, data: services , refetch} = useQuery(['available',format(date, 'PP')], () =>
    fetch(`${hostLink()}available?date=${format(date, 'PP')}`).then(res => res.json()));
  
  if (loading || isLoading) return <Loading />
  return (
    <div>
      <p className='text-secondary text-lg w-full text-center mt-4 mb-24'>Available Appointments {format(date, 'PP')}</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28 p-4 mx-auto w-full md:w-5/6 lg:w-3/4'>
        {
          services ? services.map(service => <ServiceCard key={service._id} service={service} setTreatment={setTreatment}></ServiceCard>) : <Loading />
        }
      </div>
      <div>
        {treatment && <BookingModal user={user} date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch}></BookingModal>}
      </div>
    </div>
  );
};

export default AvailableAppointments;