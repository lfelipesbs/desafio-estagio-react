import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import { index } from "../../processes/auth";
export const UsersEntitiesAdapter = createEntityAdapter();

const initialState = UsersEntitiesAdapter.getInitialState();

export const UsersEntitiesSlice = createSlice({
    initialState,
    name: 'users',
    extraReducers: builder => {
        builder
            .addCase(index.fulfilled, (state, action) => {
                UsersEntitiesAdapter.setMany(state, action.payload || [])
            })
    }
});

export const {
    selectById: getUserById
} = UsersEntitiesAdapter.getSelectors(state => state.entities.users);

export default UsersEntitiesSlice.reducer;
