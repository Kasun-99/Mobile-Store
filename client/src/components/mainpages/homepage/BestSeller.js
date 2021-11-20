import React from 'react';
import {Link} from 'react-router-dom';
import  './BestSeller.css';


function BestSeller() {

    return (
        <div className="background">
            <h4>Best Sellers</h4>
        <div className="grid-container">
        
        <div className="grid-item">
            <Link to="/detail/615c7640c4625930488f5699"><img src="https://res.cloudinary.com/flashmobile-shop/image/upload/v1635789235/Ecommerce/preview_1_xuxczn.png" alt=""  width="250px" height="250px"/></Link>
            <h5>Sony Xperia XZ2</h5>
            <span>LKR 10200 LKR</span>
        </div>
        <div className="grid-item">
            <Link to="/detail/6154914c7c7fea64cc7f0327"><img src="https://res.cloudinary.com/flashmobile-shop/image/upload/v1632932169/Ecommerce/wqpod9excwiod6aocyig.png" alt=""  width="250px" height="250px" /></Link>
            <h5>Apple iPhone 12 mini</h5>
            <span>LKR 172000 LKR</span>
        </div>
        <div className="grid-item">
            <Link to="/detail/615493707c7fea64cc7f032e"><img src="https://res.cloudinary.com/flashmobile-shop/image/upload/v1632932715/Ecommerce/sebubsr9qxtglwp8wzzs.jpg" alt=""  width="250px" height="250px"/></Link>
            <h5>Samsung Galaxy M11</h5>
            <span>LKR 31000 LKR</span>
        </div>
        <div className="grid-item">
            <Link to="/detail/6154930c7c7fea64cc7f032c"><img src="https://res.cloudinary.com/flashmobile-shop/image/upload/v1632933208/Ecommerce/uhbcsit0xankb6qkuwei.jpg" alt=""  width="250px" height="250px"/></Link>
            <h5>Samsung Galaxy A21s</h5>
            <span>39000 LKR</span>
        </div>
        <div className="grid-item">
            <Link to="/detail/615490ef7c7fea64cc7f0325"><img src="https://res.cloudinary.com/flashmobile-shop/image/upload/v1632932076/Ecommerce/vw657abyyl4afhn9na7z.png" alt=""  width="250px" height="250px"/></Link>
            <h5>Apple iPhone 11 Pro</h5>
            <span>234900 LKR</span>
        </div>
        <div className="grid-item">
            <Link to="/detail/615c752ec4625930488f5698"><img src="https://res.cloudinary.com/flashmobile-shop/image/upload/v1633449253/Ecommerce/cw8fiihzkqmaz8b3y0cd.jpg" alt=""  width="250px" height="250px"/></Link>
            <h5>Sony Xperia XZ1</h5>
            <span>24000 LKR</span>
        </div>
        <div className="grid-item">
            <Link to="/detail/6186ba3e5dc9d332646cdceb"><img src="https://res.cloudinary.com/flashmobile-shop/image/upload/v1636219417/Ecommerce/pt0bbrhor8gtokazfg3z.png" alt=""  width="250px" height="250px"/></Link>
            <h5>Air Pods Pro</h5>
            <span>5000 LKR</span>
        </div>
        <div className="grid-item">
            <Link to="/detail/615c7fbbc4625930488f56a6"><img src="https://res.cloudinary.com/flashmobile-shop/image/upload/v1633451947/Ecommerce/v65fuwqu4akkfuxsd7gk.jpg" alt=""  width="250px" height="250px"/></Link>
            <h5>Silicon Cover</h5>
            <span>1500 LKR</span>
        </div>
        
        
    </div>
    </div>
    )
}

export default BestSeller
