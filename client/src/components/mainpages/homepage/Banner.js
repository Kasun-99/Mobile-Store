import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import './Banner.css';
function Banner() {
  return (
    <div>
      
        <div class="collection__container">
          <div class="collection__box">
              <img src="https://res.cloudinary.com/flashmobile-shop/image/upload/v1635749560/Ecommerce/Banners/preview_qfn0ae.png" alt=""/>
            
              <div class="collection__btn">
              <Link to ='detail/6186b9c95dc9d332646cdce9'><Button variant="primary">Shop Now</Button></Link>
              </div>
          </div>
          <div class="collection__box">
              <img src="https://res.cloudinary.com/flashmobile-shop/image/upload/v1635749561/Ecommerce/Banners/preview_ak6ffd.jpg" alt=""/>

              <div class="collection__btn">
              <Link to="detail/6186ba3e5dc9d332646cdceb"><Button className="btn"variant="light">Shop Now</Button></Link>
              </div>
            </div>
          </div>

    </div>
      
  )
}

export default Banner
