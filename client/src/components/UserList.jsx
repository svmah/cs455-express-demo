import React from 'react';
import { useSelector } from 'react-redux';
import { NameChip } from '.';

export const UserList = () => {
  const users = useSelector(state => state.users.list);

  return users.map((user) => <NameChip key={user.id} name={user.name} />);
};
