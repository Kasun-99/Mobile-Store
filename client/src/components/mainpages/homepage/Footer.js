import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import img from '../../images/logo.png';
import img2 from '../../images/footer-payment.png';

function Footer() {
    return (
        <div className='footer-container'>
      <div className="footer-note">
          <div className="item"><i class="fas fa-sync-alt"></i>  Cash on Delivery</div>
          <div className="item"><i class="fas fa-truck"></i> IslandWide Shipping</div>
          <div className="item"><i class="fas fa-shield-alt"></i>  100% Authentic Products</div>
          <div className="item"><i className="far fa-thumbs-up"></i>   Amazing Deals</div>
          
      </div>
     
     
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/Apple'>Apple Devices</Link>
            <Link to='/samsung'>Samsung Devices</Link>
            <Link to='/sony'>Sony Devices</Link>
            <Link to='/AppleAccessories'>Acessories</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Quick Links</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/privancy_policy'>Privacy Policy</Link>
            <Link to='/service'>Terms of Service</Link>
            <Link to='/about'>About-us</Link>
          </div>
        
        
         
          <div className='footer-link-items'>
            <h2>FlashMobile.lk</h2>
            <div>
            <span>
              <i class="fas fa-map-marker-alt"></i>
            </span>
            No 64 "Sanasa Buliding", Dewalapola junction, Dewalapola, SriLanka,
          </div>
          <div>
            <span>
            <i class="fas fa-at"></i>
            </span>
            flash@gmail.com
          </div>
          <div>
            <span>
            <i class="fas fa-phone-alt"></i>
            </span>
            076-931-1939
          </div>
          <div>
            <span>
            <i class="fas fa-paper-plane"></i>
            </span>
            Dewalapola, SriLanka
          </div>
          </div>
          </div>
       
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={img} alt="" />
              <i className='fab fa-typo3'/>
            </Link>
          </div>
          <small className='website-rights'>FLASHMOBILE © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
        <hr/>
        <div className="img">
          <img src={img2} alt="payments"/></div>
      </section>
            
            <p className="copyright">Copyright @ 2021 All rights reserved |<i>Flash Mobile</i></p>
              
    </div>
    )
}

export default Footer

