/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './newscarusol.css'
import NewsBox from '../../../../Components/NewsSection/NewsBox';


export default function NewsCarusol({newsInfo}) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 3,
        customPaging: i => (
            <span>{i + 1}</span>
          ), // convert pagination dots to numbers
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                rows: 3,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                rows: 3,
                arrows: false,
              }
            },
          ]
      };

    return(
        <div className="container">
            <Slider {...settings} className='news-page-content'>
            {newsInfo.map((i, index) => (
                <div key={index} data-aos="fade-up">
                    <div className='news-box-container'>
                        <NewsBox newsimg={i.newsimage} newsTitle= {i.title} className='news-box' />                    
                    </div>
                </div>    
            ))}
            </Slider>
        </div>
        
    );
}