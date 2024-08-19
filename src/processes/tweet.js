import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../app/client";

export const create = createAsyncThunk('auth/home', async formData => {
    const { data, error } = await client({
        method: 'post',
        url: '/tweets',
        data: formData
    })

    return { data, error };
});

export const index = createAsyncThunk('auth/home/', async params => {
    const { data } = await client({
        method: 'get',
        url: '/tweets',
        params: params
    })

    return data;
})
