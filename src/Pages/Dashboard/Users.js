import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import hostLink from '../../Components/host';
import Loading from '../../Components/Loading';

const Users = () => {
  const { data: users, isLoading, isError, refetch } = useQuery('user', () => fetch(`${hostLink()}user`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));
  const makeAdmin = (email) => {
    fetch(`${hostLink()}user/admin/${email}`, {
      method: 'put',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => {
      if (res.status === 403) {
        toast.error('Failed to make an admin');
      }
      return res.json()
    }).then(data => {
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Made User Admin!");
        refetch();
      } else {
        
      }

    })
  };
  if (isLoading) return <Loading />
  if (isError) return <h1>Error Occurred</h1>
  return (
    <div>
      <div class="overflow-x-auto w-11/12 mx-auto">
        <h1 className='text-2xl my-4'>Users</h1>
        <table class="table table-zebra w-full shadow-lg">
          <thead>
            <tr>
              <th>Index</th>
              <th>Email</th>
              <th>Admin Role</th>
              <th>Remove Role</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((a, index) => <tr>
                <th>{index + 1}</th>
                <td>{a.email}</td>
                <td>
                  {a?.role === 'admin' ? 'Admin' :
                    <button onClick={() => { makeAdmin(a.email) }
                    } className='btn btn-xs text-gray-100'>Make Admin</button>

                  }</td>
                <td><button className='btn btn-xs text-gray-100'>Remove Admin</button></td>
              </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;