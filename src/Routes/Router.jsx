import App from "../App";
import Home from './../Modules/Home/Pages/Home'
import { AboutRoutes } from "../Modules/About/Routes/AboutRoutes";
import { NewsRoutes } from "../Modules/News/Routes/NewsRoutes";
import { CoursesPageRoutes } from "../Modules/CoursesPage/Routes/CoursesPageRoutes";
import { StudentsRoutes } from "../Modules/Students/Routes/StudentsRoutes";
import { TeachersRoutes } from "../Modules/Teachers/Routes/TeachersRoutes";

export const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '',
                element: <Home />
            },
            ...AboutRoutes,
            ...NewsRoutes,
            ...CoursesPageRoutes,
            ...StudentsRoutes,
            ...TeachersRoutes,
        ],
    },
]