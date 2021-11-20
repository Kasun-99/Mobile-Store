import React from 'react'
import Footer from '../Footer'
import './information.css'

function AboutUs() {
    return (
    <div className="about-body">
        <div class="col-md-6">
				    <div class="pro-cat-title">
					    <div class="pro-cat-icon">
						    <a href="/"><i class="fa fa-home"></i></a>
					    </div>
							<div class="pro-cat-maintitle"><b>About-us</b></div>
					    
						</div>
			   </div>
        <div className="text-justify">
            <h5 className="text-center">About Us</h5> 
            <p>Flashmobile.lk offers a digital Directory built for increasing the online visibility of Vendors, Suppliers, services ,Providers and will be accessible to Computer/mobile businesses. The Services are offered to the Users through various modes which may include issue of coupons and vouchers & Credit card offers that can be redeemed for various Services.
                <br /><br />
                Our office is at Colombo.
                <br />
                Bambalapity.
            </p>
            
           
        </div>
        <Footer/>
    </div>
    )
}

export default AboutUs
