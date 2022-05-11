import React from 'react';

const ServiceCard = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card shadow-xl hover:shadow-2xl">
      <div class="card-body flex flex-col justify-center items-center">
        <h2 class="card-title text-secondary">{name}</h2>
        <h1 className='text-sm mt-2 font-semibold'>
          {slots.length ? <span>{slots[0]}</span> : <span className='text-red-600'>Try Another Date</span>}
        </h1>
        <h1 className='text-xs my-1 font-semibold'>{`${slots.length} ${slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE`}</h1>
        <div class="card-actions">
          <label
            onClick={() => { setTreatment(service) }
            }
            for='booking-modal'
            disabled={!slots.length}
            class="btn btn-primary uppercase text-white font-bold">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;