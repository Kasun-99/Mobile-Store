import React, {useState, useEffect, useContext ,useRef} from 'react'
import {useParams} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import {Button} from 'react-bootstrap'
import { useReactToPrint } from "react-to-print";

const OrderDetails = React.forwardRef((props, ref) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current
    });


    const state = useContext(GlobalState)
    const [history,] = state.userAPI.history
    const [orderDetails, setOrderDetails] = useState([])
    const params = useParams()

    useEffect(() => {
        if(params.id){
            history.forEach(item =>{
                if(item._id === params.id) setOrderDetails(item)
            })
            
        }
        
    },[params.id, history])


    if(orderDetails.length === 0) return null;

    return (
        <div className="history-page" ref={componentRef}>
            <table >
                
                <thead>
                    <tr>
                        <th>Payment ID</th>
                        <th>Date of Purchased</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Postal Code</th>
                        <th>Country Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{orderDetails.paymentID}</td>
                        <td>{new Date(orderDetails.createdAt).toLocaleDateString()}</td>
                        <td>{orderDetails.address.recipient_name}</td>
                        <td>{orderDetails.address.line1 + " - " + orderDetails.address.city}</td>
                        <td>{orderDetails.address.postal_code}</td>
                        <td>{orderDetails.address.country_code}</td>
                    </tr>
                </tbody>
            </table>

            <table style={{margin: "30px 0px"}}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Products</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderDetails.cart.map(item =>(
                        <tr key={item._id}>
                            <td><img src={item.images.url} alt="" /></td>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>LKR {item.price * item.quantity}</td>
                        </tr>
                        ))
                    }
                    
                </tbody>
                
            </table>
            <div className="btn" onClick={handlePrint}><Button variant="danger"><i class="fas fa-print"></i></Button></div>
            
        </div>
    )
})

export default OrderDetails
