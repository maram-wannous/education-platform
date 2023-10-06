import { FadeLoader } from 'react-spinners';
import './coursespage.css'
import CardBox from '../../../Components/Cards/CardBox';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCourse } from '../Store/slice/courses.slice';

export default function Course() {
    const data = useSelector((state) => state.courses.course);
    const loading = useSelector((state) => state.courses.isLoading);
    const dispatch = useDispatch();


    const id = window.location.pathname.split("/").slice(-1)[0];

    useEffect(() => {
		window.scrollTo(0,0);
	}, []);

    useEffect(() => {
        dispatch(fetchCourse(id));
    },[]);

    return (
        <div className='secondery-pages coursesPage'>
            <div className='coursesPage-content'>
                <div className="coursesPage-title main-title">
                    <h1>Courses to get you started</h1>
                </div>

                {loading ? 
                    <div className='container spinner'>
                        <FadeLoader color="#136ad5" />
                    </div>
                    
                    :
                    
                    <div className='container cardbox-course-details'>
                            <CardBox 
                            cardimg={data.cardImg} 
                            lessonNum={data.lessonNumber} 
                            rate={data.rating} 
                            title={data.titleLess} 
                            desc={data.describtion} 
                            price={data.priceLess}
                            startAt={data.start_at}
                            endAt={data.end_at}
                            authorName={data.author_name}
                            />
                    </div>
                }
                
            </div> 
        </div>
    );
}