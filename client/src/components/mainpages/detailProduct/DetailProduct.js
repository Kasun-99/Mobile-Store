import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'


function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [allproducts] = state.productsAPI.allProducts
    const addCart = state.userAPI.addCart
    const [detailProduct, setDetailProduct] = useState([])

    // useEffect(() =>{
    //     if(params.id){

    //         products.forEach(product => {
    //             if(product._id === params.id) setDetailProduct(product)
    //         })
    //     }
    //     console.log(products);
    // },[params.id, products])

    useEffect(() =>{
        if(params.id){

            allproducts.forEach(allproduct => {
                if(allproduct._id === params.id) setDetailProduct(allproduct)
            })
        }
        
    },[params.id, allproducts])

    if(detailProduct.length === 0) return(<><div><p>error</p></div> </>); //return null

    return (
        <>
            <div className="detail">
                <img src={detailProduct.images.url} alt="" />
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailProduct.title}</h2>
                        <h6>#id: {detailProduct.product_id}</h6>
                        {detailProduct.stock >0 ? (<span className="sucess"><h6>In Stock</h6></span>) :(
                             <span className="error"><h6>Unavailable</h6></span>
                         )}
                    </div>
                    
                    <span>LKR {detailProduct.price}</span>
                    <p>{detailProduct.description}</p>
                    <p>{detailProduct.content}</p>
                    <p>Sold: {detailProduct.sold}</p>
                    {detailProduct.stock >0 ?(
                        <Link to="/cart" className="cart"
                        onClick={() => addCart(detailProduct)}>
                            Buy Now
                        </Link>
                    ):(
                        <span className="error"><h6>Out of Stock</h6></span>
                    )}
                    
                </div>
            </div>

            <div>
                <h2>Related products</h2>
                <div className="products">
                    {
                        products.map(product => {
                            return product.category === detailProduct.category 
                                ? <ProductItem key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DetailProduct
