import React,{useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {CCol, CProgress, } from '@coreui/react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
import './summury.css'


function Summury() {
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.allProducts
    const [history,setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token

    useEffect(() => {
        if(token){
            const getHistory = async() =>{
                if(isAdmin){
                    const res = await axios.get('/api/payment', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }
            }
            getHistory()
        }
    },[token, isAdmin, setHistory])
 
    return (
        <div>
           <div className="grid-container">
                <Link to ="/productreport" style={{ textDecoration: 'none' }}>
                <div className="grid-item" >
                <CCol md sm="12" className="mb-sm-2 mb-0">
                    <div className="text-muted">ALL PRODUCTS</div>
                    <strong>{products.length} Products ({(products.length/100)}%)</strong>
                    <CProgress
                        className="progress-xs mt-2"
                        precision={1}
                        color="success"
                        value={products.length}
                    />
                </CCol>
                </div>
                </Link>
                
                
                <Link to ="/usereport" style={{ textDecoration: 'none' }}>
                <div className="grid-item">
                <CCol md sm="12" className="mb-sm-2 mb-0">
                    <div className="text-muted">CUSTOMERS</div>
                    <strong>78.706 Users (60%)</strong>
                    <CProgress
                        className="progress-xs mt-2"
                        precision={1}
                        color="warning"
                        value={40}
                    />
                </CCol>
                </div>
                </Link>

                <Link to ="/soldreport" style={{ textDecoration: 'none' }}>
                <div className="grid-item" style={{ textDecoration: 'none'}}>
                <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">SOLD ITEMS</div>
                    <strong>Average Items (40.15%)</strong>
                    <CProgress
                        className="progress-xs mt-2"
                        precision={1}
                        value={40}
                    />
                </CCol>
                </div>
                </Link>

                <div className="grid-item" style={{ textDecoration: 'none' }}>
                <CCol md sm="12" className="mb-sm-2 mb-0">
                    <div className="text-muted">ORDERS</div>
                    <strong>{history.length} Orders ({history.length/100}%)</strong>
                    <CProgress
                        className="progress-xs mt-2"
                        precision={1}
                        color="danger"
                        value={history.length}
                    />
                </CCol>
                </div>
               
    </div>
        </div>
    )
}

export default Summury
