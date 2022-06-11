import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  list: [
    { id: 1, name: 'Stephanie'},
    { id: 2, name: 'Danya' },
    { id: 3, name: 'Ian' }
  ]
};

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload)
    }
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
