import NewsBox from './NewsBox';
import './newsSection.css'
import newsimg1 from '../../assets/gallery4.jpg'
import newsimg2 from '../../assets/gallery5.jpg'

export default function NewsSection() {
    const newsInfo= [
        {
            newsimage: newsimg1,
            title: 'Education for Tomorrow Leaders',
        },
        {
            newsimage: newsimg2,
            title: 'Enroll Your Kids This Summer to get 30% off',
        },
    ]
    return (
        <div className='container news-content'>
            {
                newsInfo.map((i, index)=>
                <div key={index} data-aos="fade-up" data-aos-delay={100*index}>
                <NewsBox  newsimg={i.newsimage} newsTitle= {i.title} />
                </div>
                )
            }

            
        </div>
    );
}