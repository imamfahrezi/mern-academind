import React from 'react';
import UserList from '../components/UserList';

function Users() {
  const USERS = [
    {
      id: 'ul',
      name: 'imam',
      image:
        'https://www.google.com/search?q=images+profile+picture&safe=strict&tbm=isch&source=iu&ictx=1&fir=5LJjGvPfcDwFSM%253A%252Cb5C9ViMmmhpq-M%252C_&vet=1&usg=AI4_-kSkEf6JBHqmt2sseDUd5o6n1Tyfew&sa=X&ved=2ahUKEwiR-6zr6a_pAhVFjeYKHb7SBYsQ9QEwDHoECAcQNA#imgrc=5LJjGvPfcDwFSM:',
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
}

export default Users;
