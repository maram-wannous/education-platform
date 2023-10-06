import { AiOutlineCloseSquare, AiOutlineQuestionCircle } from 'react-icons/ai';
import './navs.css'
import { BsFillPersonFill, BsFillShieldLockFill, BsTelephoneFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { useState } from 'react';

export default function NavBar(){
    const [menuOpened, setMenuOpened] = useState(false);

    // other links menu
    const [isOpen, setIsOpen]= useState(false);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }


    return (
        <div className='navs'>
            {/* top nav */}

            <div className="container top-nav">
                <div className="left-content">
                    <div className="info">
                        <AiOutlineQuestionCircle/>
                        <span><Link>Have a questions?</Link></span>
                    </div>
                    <div className="info">
                        <BsTelephoneFill/>
                        <span><Link>10 20 123 456</Link></span>
                    </div>
                    <div className="info">
                        <FiMail/>
                        <span><Link>maram.wannous@gmail.com</Link></span>
                    </div>
                </div>
                <div className="right-content">
                    <div className="info">
                        <BsFillShieldLockFill/>
                        <span><Link>Login</Link></span>
                    </div>
                    <div className="info">
                        <BsFillPersonFill/>
                        <span><Link>Register</Link></span>
                    </div>
                </div>
            </div>

            <div className="line"></div>

            {/* bottom nav */}

            <div className="container bottom-nav">
                <div className="logo">
                    <h1>Learner</h1>
                </div>
                
                <div>
                    <div className={(menuOpened) ? 'containt active' : 'containt'} >
                        <ul className='nav-items'>
                            <li><NavLink to={"/"} onClick={() => setMenuOpened((prev)=> !prev)}>Home</NavLink></li>
                            <li><NavLink to={"about"} onClick={() => setMenuOpened((prev)=> !prev)}>About</NavLink></li>
                            <li><NavLink to={'news'} onClick={() => setMenuOpened((prev)=> !prev)}>News</NavLink></li> 
                            <li className='dropdown'>
                                    <Link to='#' className="dropdown-btn" onClick={toggleDropdown}>
                                        <span>Other Links</span>
                                        {
                                        isOpen? (<BiUpArrow/>):(<BiDownArrow/>)
                                        }
                                    </Link>
                                <ul className={isOpen ? "dropdown-content active" :"dropdown-content"}>
                                    <li><NavLink to={'coursespage'} onClick={toggleDropdown}>Courses</NavLink></li>
                                    <li><NavLink to={'teachers'} onClick={toggleDropdown}>Teachers</NavLink></li>
                                    <li><NavLink to={'students'} onClick={toggleDropdown}>Students</NavLink></li>              
                                </ul>
                            </li>
                            <li><button className='hero-btn'>enroll now</button></li>
                        </ul>
                        <div className="close-bar" onClick={() => setMenuOpened((prev)=> !prev)}>
                            <AiOutlineCloseSquare/>
                        </div>
                    </div>
                    <div className="menu-icon" onClick={() => setMenuOpened((prev)=> !prev)}>
                        <FaBars/>
                    </div>
                </div>
            </div>
        </div>
    );
}