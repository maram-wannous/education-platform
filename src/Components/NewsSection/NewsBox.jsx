/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './newsSection.css'
import {BiCalendar} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'

export default function NewsBox({newsimg, newsTitle}) {
    return (
        <div className='news-box'>
            <div className="image">
                <img src={newsimg} alt="" />
            </div>
            <div className="text">
                <div className="content">
                    <p className='title'>{newsTitle}</p>
                    <div className='detail'>
                        <BiCalendar/>
                        <span>sept 07, 2023</span>
                        <BsFillPersonFill/>
                        <span>Admin</span>
                    </div>
                    <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis quos, temporibus nobis doloribus voluptatum quod ratione! Illo, ea voluptates.</p>
                    <Link>learn more</Link>
                </div>
            </div>

        </div>
    );
}