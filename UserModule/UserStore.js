import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './UserSlice'

const store = configureStore({
  reducer: usersSlice,
});

export default store;