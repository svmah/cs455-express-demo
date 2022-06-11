import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NameChip } from '.';
import { getUsersAsync } from '../redux/users/thunks';

export const UserList = () => {
  const users = useSelector(state => state.users.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);

  return users.map((user) => <NameChip key={user.id} name={user.name} />);
};
