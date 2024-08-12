import { createSlice } from "@reduxjs/toolkit";

import { login } from "../processes/auth";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        loggedIn: false
    },
    extraReducers: builder => {
        builder
            .addCase(login.pending, state => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.loggedIn = true

                localStorage.setItem('token', action.payload?.data.token)
            })
            .addCase(login.rejected, state => {
                state.loading = false;
                state.loggedIn = false;
            })
    }
})

export const getAuthState = state => state.auth;

export default authSlice.reducer;
