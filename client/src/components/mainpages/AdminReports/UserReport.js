import React, {useContext, useEffect,useState, useRef} from 'react'
import axios from 'axios'
import { useReactToPrint } from "react-to-print";
import {Button} from 'react-bootstrap'
import {GlobalState} from '../../../GlobalState'

const UserReport = React.forwardRef((props, ref) => {
    const state = useContext(GlobalState)
        const [isAdmin] = state.userAPI.isAdmin
        const [getAllUsers, setAllUsers] = useState([])
        const [filteritems,setFilteritems] = useState(0)
        const [token] = state.token

        const componentRef = useRef();
        const handlePrint = useReactToPrint({
          content: () => componentRef.current
        });

        
        
        useEffect(() =>{
            const getAllUserInfo = async() =>{
                 const res = await  axios.get('/user/allinfo',{
                    headers:{Authorization:token}
                })
                setAllUsers(res.data)
            }
            getAllUserInfo()
        })

        const result = getAllUsers.filter(item => item.role === filteritems)
    return (
        
        <div className="report-page" ref={componentRef}>
            <h2>All Reports</h2>
            <center>
            <table>
            <thead>
                    <tr>
                        
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        <th>Contact Number</th>
                        <th>Customer Date of Create Account</th>  
                    </tr>
                </thead>
                <tbody>
                    {result.map(items => (
                         <tr key={items._id}>
                                    <td>{items.name}</td>
                                    <td>{(items.email).toLowerCase()}</td>
                                    <td>{items.number}</td>
                                    <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                         </tr>
                    ))}
                </tbody>
            </table>
            </center>
            <div className="btn" onClick={handlePrint}><Button variant="danger"><i class="fas fa-print"></i></Button></div>
        </div>
    )
})

export default UserReport
