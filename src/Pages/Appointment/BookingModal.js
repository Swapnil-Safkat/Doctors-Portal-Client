import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date ,setTreatment}) => {
  const { name, slots } = treatment;
  const handleBooking = (event) => {
    event.preventDefault();
    setTreatment(null);
    console.log(event.target.slot.value);

  };

  const inputClass = `input w-full my-2 border-2 border-gray-300`;
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom w-full sm:modal-middle">
        <div className="modal-box w-full">
          <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg mb-10">{name}</h3>
          <form onSubmit={handleBooking}>
            <input type="text" disabled value={format(date, 'PP')} className="input w-full my-2" />
            <select name='slot' className="select select-bordered w-full my-2">
              {
                slots && slots.map(slot => <option key={slot} value={slot}>{slot}</option>)
              }
            </select>
            <input type="text" name='name' placeholder="Full Name" className={inputClass} />
            <input type="text" name='phone' placeholder="Phone Number" className={inputClass} />
            <input type="text" name='email' placeholder="Email" className={inputClass} />
            <input type="submit" value='Submit' className="btn modal-action w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;