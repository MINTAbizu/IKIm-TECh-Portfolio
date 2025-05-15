import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import './style.css';  // Ensure this file includes your CSS styles
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../Component/image/icon/logo.jpg'
const Home = () => {
  const el = useRef(null);
  const [isSidebarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    const options = {
      strings: ["Web Development", "Mobile App Development", "UI/UX Design","Video Editing"],
            typeSpeed: 90,
            backSpeed: 90,
            backDelay: 4000,
            startDelay: 1000,
            loop: true,
            showCursor: true
    };
    const typed = new Typed(el.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarActive(prevState => !prevState);
  };

  return (
    <div>
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarActive ? 'active' : ''}`} id="sidebar">
        <ul>
          <li><a href="./index.html">Home</a></li>
          <li><a href="./projext.html">Work</a></li>
          <li><a href="./serveses.html">Services</a></li>
          <li><a href="./about.html">About</a></li>
          <li><a href="#blog-section">Blog</a></li>
          <li><a href="./contact.html">Contact</a></li>
        </ul>
      </div>

      {/* Header */}
      <header className="site-navbar py-4 bg-white" role="banner">
        <div className="container">
          <div className="row align-items-center logoicon">
             <div className="col-11 col-xl-2 logoimage">
              <a href="index.html" className="text-black h2 mb-0">
                <img src={logo}alt="" />
              </a>
             </div>
             <div className="menuicon col-12 col-md-10 text-right">
              <div className="icon-menu" id="menu-toggle" onClick={toggleSidebar}>
                <span>☰</span>
              </div>
             </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="site-blocks-cover overlay" data-aos="fade" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
              <div className="row justify-content-center mb-4">
                <div className="col-md-8 text-center typedwords">
                  <h1>We Love To Build <span className="typed-words" ref={el} /></h1>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="homebutton">
                    <a data-fancybox className="btn btn-primary btn-md">Read More</a>
                    <a data-fancybox className="btn btn-primary btn-md">Get Started Today</a>
                  </div>
      </div>

      {/* Overlay */}
      <div className={`menu-overlay ${isSidebarActive ? 'active' : ''}`} onClick={toggleSidebar}></div>

      {/* Footer */}
      <footer>
        <p>© 2025 Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;