import React,{useState,useEffect} from 'react'
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import axios from 'axios'
import Rating from '../../utils/productItem/Rating'
import './Categories.css'


 const SamsungCategory = () => {

    const [filterItems,  setFilterItems] =useState([])
    const [filterCategory,setFilterCategory] = useState("61542d6a5219f16674be1647")
  
    
   
    useEffect(() =>{
        const getProducts = async () => {
            const res = await axios.get(`/api/allProducts`)
           
            setFilterItems(res.data)
           
        }
        getProducts()
       
    })
     
   const result = filterItems.filter(item => item.category === filterCategory)

   const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

    return (
        <div className="background">
            <h4>Samsung Devices</h4>
            <Slider {...settings}>
             
            
                
                     {
                         
                          result.map(product => (
                               <div className="grid-container">
                                  
                                        <div className="grid-item" >
                                        <Link to={`/detail/${product._id}`}><img src={product.images.url} alt=""  width="250px" height="250px"/></Link>
                                        <h5>{product.title}</h5>
                                        <div><Rating
                                                rating = "4"
                                                numReviews ={product.sold}/></div> 
                                        <span>LKR {product.price}</span>
                                    </div>
                             </div>
                          ))
                     }   
                
        
        </Slider>   
            
        </div>
        
    )
}
export default SamsungCategory