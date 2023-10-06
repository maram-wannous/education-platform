import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../../Utils/axios";


export const fetchCourses = createAsyncThunk("courses/fetch", async () => {
    return await axiosInstance
    .get("https://mar-services.onrender.com/courses")
    .then((res) => res.data);
});

export const fetchCourse = createAsyncThunk("course/fetch", async (id) => {
    return await axiosInstance
    .get(`https://mar-services.onrender.com/courses/${id}`)
    .then((res) => res.data);
});

export const searchCourses = createAsyncThunk(
    "courses/search",
    async (value, siganl) => {
      return await axiosInstance
        .get(`https://mar-services.onrender.com/courses?q=${value}`, {
          siganl,
        })
        .then((res) => res.data);  
    }
  );

const coursesReducer = createSlice({
    name: 'courses',
    initialState:{
        courses: [],
        isLoading: false,
        course: {}
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
        .addCase(fetchCourses.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchCourses.fulfilled, (state, action) => {
            state.isLoading = false;
            state.courses = action.payload;
        })
        .addCase(fetchCourses.rejected, (state) => {
            state.isLoading = false;
        });

        builder
        .addCase(searchCourses.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(searchCourses.fulfilled, (state, action) => {
            state.isLoading = false;
            state.courses = action.payload;
        })
        .addCase(searchCourses.rejected, (state) => {
            state.isLoading = false;
        });

        builder
        .addCase(fetchCourse.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchCourse.fulfilled, (state, action) => {
            state.isLoading = false;
            state.course = action.payload;
        })
        .addCase(fetchCourse.rejected, (state) => {
            state.isLoading = false;
        });
    },

});

export default coursesReducer.reducer;