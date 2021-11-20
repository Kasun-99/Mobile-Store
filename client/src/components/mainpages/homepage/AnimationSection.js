import React from 'react';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'



function AnimationSection() {
  return (
      <div className='hero-container'>
        <video src='/videos/My-Video1.mp4' autoPlay loop muted />
        <h1>Best Apple Deals </h1>
        <p>What are you waiting for?</p>
      <div className='hero-btns'>
             <Link to= '/products'><Button className='btns' variant="dark"> All Products +</Button></Link>
      </div>
    </div>
    
  );
  
}

export default AnimationSection;
