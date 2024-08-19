import { createSlice } from "@reduxjs/toolkit";

import { TweetsEntitiesAdapter } from "./entities/tweet";
import { index } from "../processes/tweet";

const initialState = TweetsEntitiesAdapter.getInitialState({
    loading: false,
    ids: []
})

const tweetSlice = createSlice({
    name: "post",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(index.pending, state => {
                state.loading = true
            })
            .addCase(index.fulfilled, (state, action) => {
                state.loading = false;

                TweetsEntitiesAdapter.setMany(state, action.payload || [])
            })
            .addCase(index.rejected, state => {
                state.loading = false
            })
    }
})

export const getTweetState = state => state.post;

export default tweetSlice.reducer;
