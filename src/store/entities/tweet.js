import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import { index } from "../../processes/tweet";
export const TweetsEntitiesAdapter = createEntityAdapter();

const initialState = TweetsEntitiesAdapter.getInitialState();

export const TweetsEntitiesSlice = createSlice({
    initialState,
    name: 'tweets',
    extraReducers: builder => {
        builder
            .addCase(index.fulfilled, (state, action) => {
                TweetsEntitiesAdapter.setMany(state, action.payload || [])
            });
    }
});

export const {
    selectById: getTweetById
} = TweetsEntitiesAdapter.getSelectors(state => state.entities.tweets);

export default TweetsEntitiesSlice.reducer;

