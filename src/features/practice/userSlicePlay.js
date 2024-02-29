import { createSlice } from "@reduxjs/toolkit"


export  const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        setUser: (state, action) => {
            console.log(action.payload);
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.user = null;
        }
    }
})

export const {setUser, logout} = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

