import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../app/client";

export const login = createAsyncThunk('auth/login', async formData => {
    const { data, error } = await client({
        method: 'post',
        url: '/tokens',
        data: formData
    })

    return { data, error };
});

export const register = createAsyncThunk('auth/criar-conta', async formData => {
    const { data, error } = await client({
        method: 'post',
        url: '/users',
        data: formData
    })

    return { data, error };
});

export const index = createAsyncThunk('auth/show-user', async params => {
    const { data } = await client({
        method: 'get',
        url: '/users',
        params: params
    })

    return data;
})
