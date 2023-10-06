import './App.css';
import NavBar from './Components/Navs/NavBar';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { Provider } from 'react-redux';
import store from './Store';


function App() {

  // aos script
  useEffect (() => {
    AOS.init();
  }, []);


  // handel up button
  const [showUpBtn, setShowUpBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setShowUpBtn(true);
    } else {
      setShowUpBtn(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Provider store={store}>
    <div className='app'>
        <NavBar/>
        <Outlet/>
        <Footer/>
        <div className={(showUpBtn)? "show-go-up" : "hide-go-up"} onClick={scrollToTop}>
          <BsFillArrowUpCircleFill/>
        </div>
    </div>
    </Provider>
  )
}

export default App
