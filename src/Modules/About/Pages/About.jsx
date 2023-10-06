import ChooseUs from "../../../Components/ChooseUs/ChooseUs";
import Classe from "../../../Components/Classe/Classe";
import Hero from "../../../Components/Hero/Hero";
import Started from "../../../Components/Started/Started";
import aboutHeroImage from '../../../assets/about-hero.jpg'
import Teams from "../Components/Teams/Teams";
import teamimg1 from './../../../assets/team1.jpg'
import teamimg2 from './../../../assets/team2.jpg'
import teamimg3 from './../../../assets/team3.jpg'
import teamimg4 from './../../../assets/team4.jpg'

export default function About() {

    const aboutImg = aboutHeroImage;
    const aboutTitle= 'About Us';
    const aboutSecTitle = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, in? Atque ut nostrum, mollitia enim tempora facere beatae! Saepe ad et cupiditate laboriosam veniam mollitia inventore ex fuga explicabo ipsum?";
    const aboutButton= 'explore courses'

    // teams info
    const teamsInfo = [
        {
            image: teamimg1,
            name: 'Mina Collin',
            work: 'Teacher in Math',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eum molestias officiis accusantium odit iure totam.',
            faceURL: '#',
            twitURL: '#',
            linkedURL: '#',
        },
        {
            image: teamimg2,
            name: 'Anderson Mathew',
            work: 'Teacher in Music',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eum molestias officiis accusantium odit iure totam.',
            faceURL: '#',
            twitURL: '#',
            linkedURL: '#',
        },
        {
            image: teamimg3,
            name: 'Cinthia Misso',
            work: 'Teacher in English',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eum molestias officiis accusantium odit iure totam.',
            faceURL: '#',
            twitURL: '#',
            linkedURL: '#',
        },
        {
            image: teamimg4,
            name: 'Mina Collin',
            work: 'Teacher in Math',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eum molestias officiis accusantium odit iure totam.',
            faceURL: '#',
            twitURL: '#',
            linkedURL: '#',
        },
    ]

    return (
        <div>

            {/* hero section */}
            <Hero heroPic={aboutImg} title={aboutTitle} secTitle={aboutSecTitle} button={aboutButton}  />

            {/* started section */}
            <div className="started-section section-padding">
                <Started/>
            </div>

            {/* team section */}
            <div className="team-section section-padding">
                <div className="main-title">
                    <h1>Our Team</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, vero sunt.<br/>Perferendis eius perspiciatis nostrum!</p>
                </div>
                <Teams teamsInfo={teamsInfo} />
            </div>

            {/* clasess section */}
            <div className="clasess-section section-padding">
                <div className="main-title">
                    <h1>We Have Best Education</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, vero sunt.<br/>Perferendis eius perspiciatis nostrum!</p>
                </div>
                <Classe/>
            </div>

            {/* choos us section */}
            <div className="choose-section section-padding">
                <ChooseUs/>
            </div>
        </div>
    );
}