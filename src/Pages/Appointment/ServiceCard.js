import React from 'react';

const ServiceCard = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card shadow-xl hover:shadow-2xl">
      <div className="card-body flex flex-col justify-center items-center">
        <h2 className="card-title text-secondary">{name}</h2>
        <h1 className='text-sm mt-2 font-semibold'>
          {slots.length ? <span>{slots[0]}</span> : <span className='text-red-600'>Try Another Date</span>}
        </h1>
        <h1 className='text-xs my-1 font-semibold'>{`${slots.length} ${slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE`}</h1>
        <div className="card-actions">
          <label
            onClick={() => { setTreatment(service) }
            }
            for='booking-modal'
            disabled={!slots.length}
            className="btn btn-primary btn-sm bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;