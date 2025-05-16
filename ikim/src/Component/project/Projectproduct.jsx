import React from 'react'
import imagework from '../image/home/hero_1.jpg'
import Project from './Project'
import '../project/product.css'
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
    </div>
  )
}

export default Projectproduct
