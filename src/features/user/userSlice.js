import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  // The `actions` are setUser and logout functions.
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user; 
      //console.log("previous value is ", state.user);
      //console.log("new value is ", action.payload.user);
      //In the Redux Flux Pattern, this part rep our Store which is implemented after writing the reducer function.
    },
    logout: (state) => {
      state.user = null;
    },
},
});

export const { setUser, logout } = userSlice.actions;



// The function below is called a selector and allows us to select a value from the state. 
//Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.user.user;


export default userSlice.reducer;

