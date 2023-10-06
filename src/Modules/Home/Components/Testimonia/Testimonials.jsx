/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonials.css'

export default function Testimonials({ testimonials }){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
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



    return(
        <div className="container">
          <Slider {...settings} className='testi-content'>
          {testimonials.map((testimonial, index) => (
              <div key={index} className="testi-box-container">
              <div  className='testi-box'>
                  <q>{testimonial.quote}</q>
                  <div className="image">
                      <img src={testimonial.img} alt="" />
                  </div>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.work}</p>
              </div>
              </div>
          ))}
          </Slider>
        </div>

    );
}