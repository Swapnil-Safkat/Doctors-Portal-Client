import React from 'react';
import { useQuery } from 'react-query';
import hostLink from '../../Components/host';
import Loading from '../../Components/Loading';

const Users = () => {
  const { data:users,isLoading ,isError} = useQuery('user', () => fetch(`${hostLink()}user`).then(res => res.json()));
  if(isLoading) return <Loading/>
  if(isError) 
  <div>
    <h1>Error Occurred</h1>
  </div>
  return (
    <div>
      <h1>{users.length}</h1>
    </div>
  );
};

export default Users;