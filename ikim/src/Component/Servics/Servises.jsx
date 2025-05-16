import React from 'react'
import '../Servics/services.css'

function Servises({logo,title,descrption}) {
  return (
    
    <div class="containers">
    <div class="box left">
        <div class="webcontainer">
            <div class="weblogo">
               <div className='weblogoimage'> <img src={logo} alt=""/></div>
                 <div class="webtitle">
                     <h2>{title}</h2>
                 </div>
            </div>
           
            <div class="descrption">
              <p>{descrption}</p>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Servises
