import React, {useContext, useEffect,useState, useRef} from 'react'
import axios from 'axios'
import { useReactToPrint } from "react-to-print";
import {Button} from 'react-bootstrap'
import {GlobalState} from '../../../GlobalState'

const ProductReport = React.forwardRef((props, ref) =>{
    const state = useContext(GlobalState)
    const [token] = state.token
    const [getAllProducts, setAllProducts] = useState([])

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current
    });


    useEffect ( () =>{
        const getProducts = async () => {
            const res = await axios.get('api/allProducts', {
               header: {Authorization: token}
            })

            setAllProducts(res.data)
        }
        getProducts()
    })



    return (
        <div className="report-page" ref={componentRef}>
            <h2>All Reports</h2>
            <center>
            <table>
            <thead>
                    <tr>
                       
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Category ID</th>
                         <th>Stock</th>
                        <th>Sold Items</th>
                        <th>Create Product Date</th>
                        
                       
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        getAllProducts.map( items => (
                            <tr key={items._id}>
                                <td>{items.product_id}</td>
                                <td>{items.title}</td>
                                <td>{items.price}</td>
                                <td>{items.category}</td>
                                <td>{items.stock}</td>
                                <td>{items.sold}</td>
                                <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </center>
            <div className="btn" onClick={handlePrint}><Button variant="danger"><i class="fas fa-print"></i></Button></div>
        </div>
    )
})

export default ProductReport
