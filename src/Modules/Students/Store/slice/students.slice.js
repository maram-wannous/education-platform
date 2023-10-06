import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../../Utils/axios";


export const fetchStudents = createAsyncThunk('students/fetch', async()=>{
    return await axiosInstance
    .get('https://mar-services.onrender.com/students')
    .then((res)=> res.data);
});

const studentsReducers = createSlice({
    name: 'students',
    initialState: {
        students: [],
        isLoading: false,
    },

    reducers: {},

    extraReducers: (builder)=>{
        builder
        .addCase(fetchStudents.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchStudents.fulfilled, (state, action) => {
            state.isLoading = false;
            state.students = action.payload;
        })
        .addCase(fetchStudents.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export default studentsReducers.reducer;