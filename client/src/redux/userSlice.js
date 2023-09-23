import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    error: null,
    currentUser: null,
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStarted: (state) => {
            state.isLoading = true;
        },
        signInSuccess: (state, action) => {
            state.isLoading = false;
            state.currentUser = action.payload.data;
            state.error = false;
        },
        signInError: (state, action) => {
            state.isLoading = false;
            state.error = action?.payload;
        },
    },
});

export default userSlice.reducer;
export const { signInStarted, signInSuccess, signInError } = userSlice.actions;
