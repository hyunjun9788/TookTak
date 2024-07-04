import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserState } from './types';

const initialState: UserState = {
  uid: null,
  email: null,
  displayName: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
    },
    logout: (state) => {
      state.uid = null;
      state.email = null;
      state.displayName = null;
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
