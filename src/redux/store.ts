import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import { User } from 'firebase/auth';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
