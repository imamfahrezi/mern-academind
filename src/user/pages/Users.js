import React from 'react';
import UserList from '../components/UserList';

function Users() {
  const USERS = [
    {
      id: 'ul',
      name: 'imam',
      image:
        'https://images.unsplash.com/photo-1531853121101-cb94c8ed218d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
}

export default Users;
