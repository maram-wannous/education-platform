import { useDispatch, useSelector } from 'react-redux';
import './teachers.css'
import { useEffect } from 'react';
import { FadeLoader } from 'react-spinners';
import { fetchTracks } from '../Store/slice/tracks.slice';
import { fetchTeachers, fetchTrackTeachers } from '../Store/slice/teachers.slice';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
export default function Teachers() {
    const data = useSelector((state) => state.tracks.tracks);
    const teachers = useSelector((state)=> state.teachers.teachers);
    const loading = useSelector((state)=> state.teachers.isLoading);
    const dispatch = useDispatch();
   

    useEffect(()=>{
        dispatch(fetchTracks());
        dispatch(fetchTeachers());
    },[]);

    const getTeachers =(value)=>{
        dispatch(fetchTrackTeachers(value));
    }


    return (
        <div className='secondery-pages teacher-page'>
            <div className='teacher-page-content'>
                <div className="main-title">
                    <h1>Meet Out Teachers</h1>
                </div>

                {loading ? (
                    <div className='container spinner'>
                        <FadeLoader color="#136ad5" />
                    </div>
                    )
                    :
                    ( 
                    <div className='container teachers-container'>
                        <div className="track-section">
                            {
                            data?.map((item,index)=> (
                                <div key={index} className='btn track-box' onClick={()=> getTeachers(item.name)} data-aos="zoom-in">
                                    {item.name}
                                </div>
                            ))}
                        </div>
                        <div className="teachers-section">
                            {
                            teachers?.map((item,index)=>(
                                    <div key={index}  className='team-box teacher-box' data-aos="zoom-in">
                                        <div className="image">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="info">
                                            <h3>{item.name}</h3>
                                            <span>{item.work}</span>
                                            <p>{item.describtion}</p>
                                            <div className="icons">
                                                <a href={item.facebookUrl}><FaFacebookF/></a>
                                                <a href={item.instgramUrl}><FaInstagram/></a>
                                                <a href={item.LinkedinUrl}><FaLinkedinIn/></a>                       
                                            </div>
                                        </div>                                        
                                    </div>
                            ))
                            }
                        </div>
                    </div>
                    )
                }

            </div>
        </div>
    );
}