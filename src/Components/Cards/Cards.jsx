import { useEffect } from 'react';
import CardBox from './CardBox';
import './cards.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../../Modules/CoursesPage/Store/slice/courses.slice';

export default function Cards() {

    const data = useSelector((state) => state.courses.courses);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(fetchCourses());
    },[]);


    return(
        <div className='container cards-content'>
            {

                data?.slice(0, 3).map((item, index)=>
                    <CardBox key={index} cardimg={item.cardImg} 
                    lessonNum={item.lessonNumber} 
                    rate={item.rating} 
                    title={item.titleLess} 
                    desc={item.describtion} 
                    price={item.priceLess}
                    id={item.id}
                    />
                )
            }
        </div>
    );
}