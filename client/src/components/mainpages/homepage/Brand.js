import React from 'react'
import  './Brand.css'
import img from '../../images/Brand/Apple-Brand.jpg'
import img2 from '../../images/Brand/Sony-Brand.png'
import img3 from '../../images/Brand/Xiaomi-Brand.jpg'
import img4 from '../../images/Brand/Samsung-Brand.png'

function Brand() {
    return (
        <div>
            <h4><center>Featured Brands</center></h4>
        <div className="img-slider">
        
        <div className="slide">
            <a href="/"><img src={img} alt=""  width="150px" height="70px"/></a>

        </div>
        <div className="slide">
            <a href="/"><img src={img2} alt=""  width="150px" height="70px" /></a>

        </div>
        <div className="slide">
            <a href="/"><img src={img3} alt=""  width="150px" height="70px"/></a>

        </div>
        <div className="slide">
            <a href="/"><img src={img4} alt=""  width="150px" height="70px"/></a>
        </div>
        
        
    </div>
    </div>
    )
}

export default Brand
