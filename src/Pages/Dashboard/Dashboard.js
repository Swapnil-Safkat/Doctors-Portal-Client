import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div class="drawer drawer-mobile min-h-full">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content bg-[#F1F5F9]">
        <div className='py-3  sticky top-36'>
          <label for="my-drawer-2" class="btn btn-accent rounded-r-full py-0 px-1 drawer-button lg:hidden">{'>'}</label>
        </div>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
          <li><Link to='/dashboard'>Appointments</Link></li>
          <li><Link to='/dashboard/reviews'>Reviews</Link></li>
          <li><Link to='/dashboard/history'>History</Link></li>
          {admin && <>
            <li><Link to='/dashboard/users'>All Users</Link></li>
            <li><Link to='/dashboard/addDoctor'>Add Doctor</Link></li>
          </>}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;