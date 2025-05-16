import React from 'react';
import '../Servics/services.css';

function Servises({ logo, title, descrption }) {
  return (
    <div className="containers">
      <div className="box left">
        <div className="webcontainer">
          <div className="weblogo">
            <div className='weblogoimage'>
              <img src={logo} alt="Service Logo" />
            </div>
            <div className="webtitle">
              <h2>{title}</h2>
            </div>
          </div>
          <div className="descrption">
            <p>{descrption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servises;