import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import hostLink from '../../Components/host';
import Loading from '../../Components/Loading';
import auth from '../../Firebase.init';

const MyAppointments = () => {
  const [user, loading] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);
  const navigate  = useNavigate();
  useEffect(() => {
    fetch(`${hostLink()}booking?patient=${user.email}`, {
      method: 'GET',
      headers: {
        'authorization': `bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/home')
      }
      return res.json()
    }).then(data => setAppointments(data));
  }
  )
  if (loading) return <Loading />
  return (
    <div>
      <div class="overflow-x-auto w-11/12 mx-auto">
        {appointments.length > 0 && <h1 className='text-2xl my-4'>My Appointments</h1>}
        {
          appointments.length > 0 ? <table class="table table-zebra w-full font-serif">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Service</th>
                <th>Date</th>
                <th>Slot</th>
              </tr>
            </thead>
            <tbody>
              {
                appointments.map((a, index) => <tr>
                  <th>{index + 1}</th>
                  <td>{a.patientName}</td>
                  <td>{a.treatment}</td>
                  <td>{a.date}</td>
                  <td>{a.slot}</td>
                </tr>
                )
              }
            </tbody>
          </table> :
            <h1 className='text-2xl my-4 text-red-600'>No Appointments Available</h1>
        }
      </div>
    </div>
  );
};

export default MyAppointments;