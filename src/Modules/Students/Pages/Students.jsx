import { useEffect } from 'react';
import { FadeLoader } from 'react-spinners';
import './students.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../Store/slice/students.slice';


export default function Students() {

    const data = useSelector((state)=> state.students.students);
    const loading = useSelector((state)=> state.students.isLoading);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchStudents());
    },[]);

    return (
        <div className='secondery-pages student-page'>
            <div className='student-page-content'>
                <div className="main-title">
                    <h1>Our Students</h1>
                </div>

                {loading ? (
                    <div className='container spinner'>
                        <FadeLoader color="#136ad5" />
                    </div>
                    )
                    :
                    ( 
                        <div className="container students-container">
                            {
                            data?.map((item,index)=>(
                                <div key={index} className='student-box' data-aos="zoom-in">
                                    <img src={item.image} alt="" />
                                    <h3>{item.name}</h3>
                                    <span>{item.age} years old</span>
                                    <p className='email'>{item.email}</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Maiores, doloribus.</p>
                                </div>
                            ))
                            }
                        </div>
                    )
                }  
            </div>
        </div>
    );
}