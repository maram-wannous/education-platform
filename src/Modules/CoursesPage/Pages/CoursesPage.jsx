/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import './coursespage.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses, searchCourses } from '../Store/slice/courses.slice';
import CardBox from '../../../Components/Cards/CardBox';
import { FadeLoader } from 'react-spinners';
import { AiOutlineSearch } from 'react-icons/ai';


export default function CoursesPage() {
    const data = useSelector((state) => state.courses.courses);
    const loading = useSelector((state) => state.courses.isLoading);
    const dispatch = useDispatch();
    let controler;
    

    useEffect(() => {
		window.scrollTo(0,0);
	}, []);

    useEffect(() => {
        dispatch(fetchCourses());
    },[]);

    const search = async (value) => {
        if (controler) {
            controler.abort();
        }

        controler = new AbortController();
        dispatch(searchCourses(value, controler.signal));
    };


    return(

        <div className='secondery-pages coursesPage'>
            <div className='coursesPage-content'>
                <div className="coursesPage-title main-title">
                    <h1>Courses to get you started</h1>
                    <div className="search-input">
                        <div className="icon"><AiOutlineSearch/></div>
                        <input type="search" name="search" onChange={(e) => search(e.target.value)} />
                    </div>
                </div>

                {loading ? 
                    <div className='container spinner'>
                        <FadeLoader color="#136ad5" />
                    </div>
                    
                    :
                    
                    <div className='container cardbox-courses'>
                        {data.length &&
                        data?.map((item,index)=> (
                            <CardBox key={index} 
                            cardimg={item.cardImg} 
                            lessonNum={item.lessonNumber} 
                            rate={item.rating} 
                            title={item.titleLess} 
                            desc={item.describtion} 
                            price={item.priceLess}
                            id={item.id}
                            button={item.button}
                            data-aos="fade-up"
                            />
                        )) }
                    </div>
                }
                
            </div> 
        </div>
    );
}