import Cards from "../../../Components/Cards/cards";
import Classe from "../../../Components/Classe/Classe";
import Gategory from "../../../Components/Gategory/Gategory";
import Hero from "../../../Components/Hero/Hero";
import NewsSection from "../../../Components/NewsSection/NewsSection";
import Started from "../../../Components/Started/Started";
import heroHomeImg from '../../../assets/home-hero.jpg';
import quotimg from '../../../assets/gallery2.jpg'
import AboutSection from "../Components/AboutSection/AboutSection";
import ChooseUs from "../../../Components/ChooseUs/ChooseUs";
import { useInView } from "react-intersection-observer";
import PricingBox from "../Components/PricingBox/PricingBox";
import testimg1 from './../../../assets/pic-1.png'
import testimg2 from './../../../assets/pic-2.png'
import testimg3 from './../../../assets/pic-3.png'
import testimg4 from './../../../assets/pic-4.png'
import testimg5 from './../../../assets/pic-5.png'
import testimg6 from './../../../assets/pic-6.png'
import './home.css';
import Testimonials from "../Components/Testimonia/Testimonials";
import { Link } from "react-router-dom";

export default function Home() {

    // hero info
    const homeImg = heroHomeImg;
    const homeTitle= 'Education is the Mother of Leadership';
    const homeSubTitle = 'whatch the video';
    const homeButton= 'explore courses';

    // counter in about section
    const [aboutRef, inVew] = useInView([
        {threshold: 0.5}
    ]);

    // pricing info array
    const pricingInfo= [
        {
            title: 'Starter',
            price: '$50.99',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium Maxime numquam aliquid culpa eos.',
            state: false,
        },
        {
            title: 'Business',
            price: '$99.99',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium Maxime numquam aliquid culpa eos.',
            state: true,
        },
        {
            title: 'Premium',
            price: '$199.99',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium Maxime numquam aliquid culpa eos.',
            state: false,
        },
    ];

    // testimonials info
    const testimonials = [
        {
          name: 'John Doe',
          work: 'CEO, Founder',
          quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: testimg1,
        },
        {
          name: 'Jane Doe',
          work: 'student',
          quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          img: testimg2,
        },
        {
          name: 'Bob Smith',
          work: 'someone',
          quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          img: testimg3,
        },
        {
            name: 'Bob Smith',
            work: 'someone',
            quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            img: testimg4,
          },
          {
            name: 'Bob Smith',
            work: 'someone',
            quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            img: testimg5,
          },
          {
            name: 'Bob Smith',
            work: 'someone',
            quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            img: testimg6,
          },
      ];


    return (
        <div>

            {/* hero section */}
           <Hero heroPic={homeImg} title={homeTitle} subTitle={homeSubTitle} button={homeButton}  />

            {/* gategory section */}
           <div className="gategory-section">
                <div className="main-title">
                    <h1>Brouse Top Category</h1>
                </div>
                <Gategory/>
                <p>we have more category here. <span>Brouse all</span></p>
           </div>

           {/* started section */}
            <div className="started-section section-padding">
                <Started/>
            </div>

            {/* clasess section */}
            <div className="clasess-section section-padding">
                <div className="main-title">
                    <h1>We Have Best Education</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, vero sunt.<br/>Perferendis eius perspiciatis nostrum!</p>
                </div>
                <Classe/>
            </div>

            {/* cardes section */}
            <div className="cardes-section section-padding">
                <div className="main-title">
                    <h1>The Right Course For You</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, vero sunt.<br/>Perferendis eius perspiciatis nostrum!</p>
                </div>
                <Cards/>
                <div className="container" style={{textAlign: 'center'}}>
                    <Link to='coursespage'><button className="btn">See All Courses</button></Link>           
                </div>
            </div>

            {/* quote section */}
            <div className="quote-section">
                <Hero heroPic={quotimg}
                    title='Education For Tomorrow Leader'
                    secTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius vel cupiditate nesciunt porro suscipit nihil nulla labore quaerat quos.'
                    button='enroll now'
                />
            </div>

            {/* about section */}
            <div className="about-section section-padding" ref={aboutRef}>
                <AboutSection invew={inVew} />
            </div>

            {/* news section */}
            <div className="news-section section-padding">
                <div className="main-title">
                    <h1>School News</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, vero sunt.<br/>Perferendis eius perspiciatis nostrum!</p>
                </div>
                <NewsSection/>
            </div>

            {/* pricing section */}
            <div className="pricing-section section-padding">
                <div className="main-title">
                    <h1>Pricing</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, vero sunt.<br/>Perferendis eius perspiciatis nostrum!</p>
                </div>
                <div className="container pricing-content">
                    {
                        pricingInfo.map((i, index)=>
                        <div key={index} data-aos="fade-up" data-aos-dela={100*index}>
                        <PricingBox title={i.title} 
                                    price={i.price} 
                                    desc={i.desc} 
                                    state={i.state} />
                        </div>
                        )
                    }
                </div>
            </div>


            {/* testimonial section */}
            <div className="testimonial-section section-padding">
                <div className="main-title">
                    <h1>Testimonials</h1>
                </div>
                <Testimonials testimonials={testimonials} />
            </div>
            

            {/* choos us section */}
            <div className="choose-section section-padding">
                <ChooseUs/>
            </div>




        </div>
    );
}