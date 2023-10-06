import { ROUTES } from "../Constans/const";
import Course from "../Pages/Course";
import CoursesPage from "../Pages/CoursesPage";

export const CoursesPageRoutes= [
    {
        path: ROUTES.COURSESPAGE,
        element: <CoursesPage/>,
    },
    {
        path: 'coursespage/:id',
        element: <Course/>
    }
]