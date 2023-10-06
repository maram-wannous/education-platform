import './chooseus.css'
import chooseimg1 from '../../assets/gallery2.jpg'
import Accordion from '../Accordion/Accordion';
export default function ChooseUs() {
    return(
        <div className='container choose-content'>
            <div className="image" data-aos="fade-right">
                <img src={chooseimg1} alt="" />
            </div>
            <div className="text">
                <div className="content">
                    <h3 data-aos="fade-left">Why Choose Us</h3>
                    <p data-aos="fade-left" data-aos-delay='100'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae placeat, aperiam aspernatur qui ab sapiente.</p>
                    <Accordion/>
                </div>
            </div>
        </div>
    );
}