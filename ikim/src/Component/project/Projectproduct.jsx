import React from 'react'
import imagework from '../image/home/hero_1.jpg'
import Project from './Project'
import '../project/product.css'
import About from '../About/About'

import logoimage from '../image/icon/logo.jpg'
function Projectproduct() {
  return (
    <div>
       <div className="projectwraper">
      <Project image={imagework}title={'web devlopment'}/>
      <Project image={imagework}title={'web devlopment'}/>
      <Project image={imagework}title={'web devlopment'}/>

    </div>
     <div className="projectwraper">
      <Project image={imagework}title={'web devlopment'}/>
      <Project image={imagework}title={'web devlopment'}/>
      <Project image={imagework}title={'web devlopment'}/>

    </div>
    <div className="aboutflex">
        <About logoimage={logoimage} />
    {/* <About logoimage={logoimage} /> */}
     {/* <About logoimage={logoimage} /> */}
    </div>
   
    </div>
  )
}

export default Projectproduct
