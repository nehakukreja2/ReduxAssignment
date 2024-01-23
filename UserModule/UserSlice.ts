import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

interface User {
  userId: string;
  name: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
}

const initialState = {
  users: [],
};

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async userId => {
    const response = await fetch('endpoint');
    const data = await response.json();
    return data;
  },
);

const usersSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
      const newUser = {userId: uuid.v4(), ...action.payload};
      state.users = [...state.users, newUser];
    },
    updateUser: (state, action) => {
      console.log('action.payload', action.payload);
      const {userId, updatedData} = action.payload;
      console.log('updatedData', updatedData);
      const userIndex = state.users.findIndex(user => user.userId === userId);
      if (userIndex !== -1) {
        state.users[userIndex] = {...state.users[userIndex], ...updatedData};
      }
    },
    deleteUser: (state, action) => {
      const userIdToDelete = action.payload;
      const index = state.users.indexOf(userIdToDelete);
      state.users.splice(index, 1);
    },
  },
});

export const {addUser, updateUser, deleteUser} = usersSlice.actions;
export default usersSlice.reducer;
