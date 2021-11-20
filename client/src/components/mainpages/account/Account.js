import React, { useState,useEffect,useContext } from 'react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
import './account.css';
import {showSuccessMsg, showErrMsg} from '../auth/Notification'

const initialState = {
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function Account() {
    const state = useContext(GlobalState)
    const [user, setUser] = useState([])
    const [token] = state.token

    const [data, setData] = useState(initialState)
    const { name,password, cf_password, err, success} = data

    const isLength = (password) => {
        if(password.length < 6) return true
        return false
    }
    
    const isMatch = (password, cf_password) => {
        if(password === cf_password) return true
        return false
    }

    const handleChangeInput = e =>{
        const {name,value} = e.target
        setData({...data, [name]:value, err:'', success: ''})
    }

    const updateInfor = () => {
        try {
            axios.patch('/user/update', {
                name: name ? name : user.name,
            },{
                headers: {Authorization: token}
            })

            setData({...data, err: '' , success: "Updated Success!"})
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }
    
    const updatePassword = () =>{
       
        if(isLength(password))
        return setData({...data, err: "Password must be at least 6 characters.", success: ''})

        if(!isMatch(password, cf_password))
        return setData({...data, err: "Password did not match.", success: ''})
            
        try {
            
            axios.post('/user/reset', {password},{
            headers: {Authorization: token}
           
        }
        )
        console.log("Api Sucess")
            return setData({...data, err: '' , success: "Updated Success!"})

        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    const handleUpdate = () => {
        if(name) updateInfor()
        if(password) updatePassword()
    }

    useEffect(() =>{
        const getUserInfo = async () => {
            const res = await axios.get('/user/info',{
                headers: {Authorization: token}
            })
           
            setUser(res.data)
          
        }
        getUserInfo()
       
    })

    return (
        <>

            <div className="signup-form">
           
              <form action="" method="post">
              {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
              <center><i class="fas fa-user-circle fa-7x"></i></center>
              <h2>PERSONAL DETAILS</h2>
            <p>Please Use this form to change your personal details</p>
                <hr />
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <span className="fa fa-user"></span>
                            </span>
                        </div>
                        <input type="text"
                               className="form-control"
                               id="name" 
                               name="name"
                               defaultValue={user.name}
                               placeholder="Username" required="required" 
                               onChange={handleChangeInput} />
                    </div>
                    
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-paper-plane"></i>
                            </span>
                        </div>
                        <input type="email"
                               className="form-control" 
                               name="email" 
                               defaultValue={user.email}
                               onChange={handleChangeInput} placeholder="Email Address" required="required" disabled />
                    </div>

                </div>
            
               
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                                <i className="fa fa-check"></i>
                            </span>
                        </div>
                        <input type="password" 
                               className="form-control" 
                               name="password"
                               id="password" 
                               value={data.password}
                               onChange={handleChangeInput}
                        placeholder="New Password" required="required" />
                    </div>
                   
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                                <i className="fa fa-check"></i>
                            </span>
                        </div>
                        <input type="password" 
                               className="form-control" 
                               name="cf_password"
                               id="cf_password" 
                               value={data.cf_password}
                               onChange={handleChangeInput}
                        placeholder="Confirm Password" required="required" />
                    </div>
                   
                </div>
               
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg" onClick={handleUpdate}>Update</button>
                </div>
                
            </form>
            </div>

        </>
    )
}

export default Account
