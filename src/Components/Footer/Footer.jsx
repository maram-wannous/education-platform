import { Link } from 'react-router-dom';
import './footer.css'
import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SlSocialPintarest } from 'react-icons/sl';
import gallery1 from '../../assets/gallery1.jpg'
import gallery2 from '../../assets/gallery2.jpg'
import gallery3 from '../../assets/gallery3.jpg'
import gallery4 from '../../assets/gallery4.jpg'
import gallery5 from '../../assets/gallery5.jpg'
import gallery6 from '../../assets/gallery6.jpg'

export default function Footer(){
    return (
        <div className="footer">
            <div className="container">
                <div className="box">
                    <h3>About us</h3>
                    <p className="text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur
                    </p>
                    <h3>Connect</h3>
                    <div className="social">
                        <Link><FaFacebookF/></Link>
                        <Link><FaInstagram/></Link>
                        <Link><FaTwitter/></Link>
                        <Link><FaLinkedinIn/></Link>
                        <Link><SlSocialPintarest/></Link>
                        <Link><FaGoogle/></Link>
                    </div>
                </div>
                <div className="box">
                    <h3>Projects</h3>
                    <ul>
                        <li>Web Design</li>
                        <li>Html5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                    </ul>
                </div>
                <div className="box">
                    <h3>Gallery</h3>
                    <div className='footer-gallery'>
                        <img src={gallery1} alt="" />
                        <img src={gallery2} alt="" />
                        <img src={gallery3} alt="" />
                        <img src={gallery4} alt="" />
                        <img src={gallery5} alt="" />
                        <img src={gallery6} alt="" />
                    </div>
                </div>
                <div className="box ">
                    <h3>Contact</h3>
                    <ul className='info'>
                        <li>43 Raymouth Rd. Baltemoer, london 3910</li>
                        <li>+1(123)-456-7890</li>
                        <li>+1(123)-456-7890</li>
                        <li>info@mydomain.com</li>
                    </ul>
                </div>
            </div>
            <p className="copyright">Copyright &copy; 2023. -Designed With Love By <span>Maram</span></p>
        </div>
    );
}