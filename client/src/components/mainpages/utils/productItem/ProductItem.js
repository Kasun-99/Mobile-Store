import React from 'react'
import BtnRender from './BtnRender'
import Rating from './Rating'

function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {

    return (
        <div className="product_card">
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            }
            <img src={product.images.url} alt="" />

            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>LKR{product.price}</span>
                
            </div>
            <div><Rating
                        rating = "4"
                        numReviews ={product.sold}/></div> 
            {/* {product.stock >0 ? (
                 
            ):(
                window.alert("out of stock") 
                
            )} */}
           <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
    )
}

export default ProductItem
