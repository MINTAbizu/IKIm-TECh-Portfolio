import React from 'react';
import '../About/about.css'; // Make sure to create a corresponding CSS file

function About() {
  return (
    <div className="about">
      <h1 className="abuttitle">Why Choose Us</h1>
      <div className="description">
        <p>
          At IKIM Tech, we combine innovation, expertise,<br />
          and dedication to deliver exceptional results. <br />
          Here's why we stand out:
        </p>
      </div>

      <div className="aboutcontainer">
        <div className="left-section">
          <div className="first">
            <div className="firstcard">
              <div className="cardlogo">
                <img src="./photo_2025-05-15_09-26-37.jpg" alt="Quality Services" />
              </div>
              <div className="carddescription">
                <h4>Quality Services</h4>
              </div>
            </div>
            <div className="firstcard">
              <div className="cardlogo">
                <img src="./photo_2025-05-15_09-26-37.jpg" alt="Creative Designers" />
              </div>
              <div className="carddescription">
                <h4>Creative Designers</h4>
              </div>
            </div>
          </div>

          <div className="second">
            <div className="firstcard">
              <div className="cardlogo">
                <img src="./photo_2025-05-15_09-26-37.jpg" alt="Quality Services" />
              </div>
              <div className="carddescription">
                <h4>Quality Services</h4>
              </div>
            </div>
            <div className="firstcard">
              <div className="cardlogo">
                <img src="./hero_1.jpg" alt="Creative Designers" />
              </div>
              <div className="carddescription">
                <h4>Creative Designers</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <p>
            At IKIM Tech, we combine innovation, expertise,<br />
            and dedication to deliver exceptional results. <br />
            Here's why we stand out:
          </p>
          <div className="aboutbutton">
            <a href="#">
              <button type="submit">Get Started</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;