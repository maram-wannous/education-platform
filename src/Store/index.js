import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import reduxThunk from 'redux-thunk'
import coursesSlice from "../Modules/CoursesPage/Store/slice/courses.slice";
import tracksSlice from "../Modules/Teachers/Store/slice/tracks.slice";
import teachersSlice from "../Modules/Teachers/Store/slice/teachers.slice";
import studentsSlice from "../Modules/Students/Store/slice/students.slice";
// import loadingSlice from "./slice/loading.slice";

const reducers = {
    reducer : {
        courses: coursesSlice,
        tracks: tracksSlice,
        teachers: teachersSlice,
        students: studentsSlice,
        // loading: loadingSlice,
    },
};

const store = configureStore(reducers, applyMiddleware(reduxThunk));

export default store;