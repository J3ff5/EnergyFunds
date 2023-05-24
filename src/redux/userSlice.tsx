import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    isLogged: false,
  },
  reducers: {
    login(state, {payload}) {
      state.email = payload;
      state.isLogged = true;
    },

    logout(state) {
      state.email = '';
      state.isLogged = false;
    },
  },
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state: any) => state.user;

export default userSlice.reducer;
