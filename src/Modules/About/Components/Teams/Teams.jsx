/* eslint-disable react/prop-types */

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import './team.css'

export default function Teams({teamsInfo}) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
              }
            }
          ]
      };

    return (
        <div className="container">
          <Slider {...settings} className='team-content'>
          {teamsInfo.map((item, index) => (

              <div key={index} className="team-box-container">
                
              <div  className='team-box'>
                    <div className="image">
                        <img src={item.image} alt="" />
                    </div>
                    <h3>{item.name}</h3>
                    <span>{item.work}</span>
                    <p>{item.desc}</p>
                    <div className="icons">
                        <a href={item.faceURL}><FaFacebookF/></a>
                        <a href={item.twitURL}><FaTwitter/></a>
                        <a href={item.linkedURL}><FaLinkedinIn/></a>                       
                    </div>
              </div>

              </div>
          ))}
          </Slider>
        </div>
    );
}