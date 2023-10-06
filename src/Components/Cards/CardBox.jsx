/* eslint-disable react/prop-types */
import './cards.css'
import {BiBookReader} from 'react-icons/bi'
import {AiTwotoneStar} from 'react-icons/ai'
import { Link } from 'react-router-dom';

export default function CardBox({cardimg, lessonNum, rate, title, desc, price, id, button, startAt, endAt, authorName}) {
    return(
        <div className='card-box' data-aos="zoom-in-up">
            <div className="image">
                <img src={cardimg} alt="" />
            </div>
            <div className="content">
                <div className="first-title">
                    <div className="left-icon">
                        <BiBookReader/>
                        <span>{lessonNum}</span>
                    </div>
                    <div className="right-icon">
                        <AiTwotoneStar/>
                        <span>{rate}</span>
                    </div>
                </div>
                <h5>{title}</h5>
                <p>{desc}</p>
                <div className="course-details">
                    <span>{startAt}</span>
                    <span>{endAt}</span>
                    <span>{authorName}</span>
                </div>
                <div className="line"></div>
                <div className="info">
                    <span>{price}</span>
                    <Link to={`${id}`}>{button}</Link>
                </div>
            </div>

        </div>
    );
}