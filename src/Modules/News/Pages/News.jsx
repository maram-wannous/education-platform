import Hero from "../../../Components/Hero/Hero";
import newsHeroImage from '../../../assets/news-hero.jpg'
import NewsCarusol from "../Components/News/NewsCarusol";
import newsimg1 from './../../../assets/gallery6.jpg'
import newsimg2 from './../../../assets/gallery2.jpg'
import newsimg3 from './../../../assets/gallery3.jpg'
import newsimg4 from './../../../assets/gallery4.jpg'
import newsimg5 from './../../../assets/gallery5.jpg'
import newsimg6 from './../../../assets/gallery1.jpg'
import newsimg7 from './../../../assets/gallery2.jpg'
import newsimg8 from './../../../assets/gallery3.jpg'

export default function News() {
    const newsImg = newsHeroImage;
    const newsTitle= 'News';
    const newsSecTitle = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, in? Atque ut nostrum, mollitia enim tempora facere beatae! Saepe ad et cupiditate laboriosam veniam mollitia inventore ex fuga explicabo ipsum?";
    const newsButton= 'explore courses'

    // news info
    const newsInfo= [
        {
            newsimage: newsimg1,
            title: 'Education for Tomorrow Leaders',
        },
        {
            newsimage: newsimg2,
            title: 'Enroll Your Kids This Summer to get 30% off',
        },
        {
            newsimage: newsimg3,
            title: 'Education for Tomorrow Leaders',
        },
        {
            newsimage: newsimg4,
            title: 'Enroll Your Kids This Summer to get 30% off',
        },
        {
            newsimage: newsimg5,
            title: 'Education for Tomorrow Leaders',
        },
        {
            newsimage: newsimg6,
            title: 'Enroll Your Kids This Summer to get 30% off',
        },
        {
            newsimage: newsimg7,
            title: 'Education for Tomorrow Leaders',
        },
        {
            newsimage: newsimg8,
            title: 'Enroll Your Kids This Summer to get 30% off',
        },

    ]

    return (
        <div>
        <Hero heroPic={newsImg} title={newsTitle} secTitle={newsSecTitle} button={newsButton}  />
        <div className="news-page-section section-padding">
                <NewsCarusol newsInfo={newsInfo}/>
        </div>
        
        </div>
    );
}