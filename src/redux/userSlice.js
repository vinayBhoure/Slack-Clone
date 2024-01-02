import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'userData',
    initialState: {
        username: null,
        email:null,
    },
    reducers: {
        enterUserData: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
        },
    },
});

export const {enterUserData} = userSlice.actions;
export default userSlice.reducer;