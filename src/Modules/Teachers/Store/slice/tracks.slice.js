import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../../Utils/axios";


export const fetchTracks = createAsyncThunk('track/fetch', async()=>{
    return await axiosInstance
    .get('https://mar-services.onrender.com/track')
    .then((res)=> res.data);
});


const tracksReducers = createSlice({
    name: 'tracks',
    initialState: {
        tracks: [],
    },

    reducers: {},

    extraReducers: (builder)=>{
        builder.addCase(fetchTracks.fulfilled, (state, action)=>{
            state.tracks= action.payload;
        });
    },
});

export default tracksReducers.reducer;