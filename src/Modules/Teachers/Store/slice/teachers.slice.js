import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../../Utils/axios";


export const fetchTrackTeachers = createAsyncThunk('teachers/search', async(value)=>{
    return await axiosInstance
    .get(`https://mar-services.onrender.com/teachers?q=${value}`)
    .then((res)=> res.data);
});

export const fetchTeachers = createAsyncThunk('teachers/fetch', async()=>{
    return await axiosInstance
    .get('https://mar-services.onrender.com/teachers')
    .then((res)=> res.data);
});

const teachersReducers = createSlice({
    name: 'teachers',
    initialState: {
        teachers: [],
        isLoading: false,
    },

    reducers: {},

    extraReducers: (builder)=>{
        builder
        .addCase(fetchTeachers.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchTeachers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.teachers = action.payload;
        })
        .addCase(fetchTeachers.rejected, (state) => {
            state.isLoading = false;
        });
        builder
        .addCase(fetchTrackTeachers.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchTrackTeachers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.teachers = action.payload;
        })
        .addCase(fetchTrackTeachers.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export default teachersReducers.reducer;