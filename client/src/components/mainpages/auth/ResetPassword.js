import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import {showErrMsg, showSuccessMsg} from './Notification'

const init ={
    password:'',
    cf_password:'',
    err:'',
    sucess:''
}
function ResetPassword() {

    const[data,setData] =useState(init);
    const {token} = useParams();
    const {password, cf_password, err,success} =data

    const isLength = password => {
        if(password.length < 6) return true
        return false
    }
    
    const isMatch = (password, cf_password) => {
        if(password === cf_password) return true
        return false
    }
    const handleChangeInput = e => {
        const {name,value} = e.target
        setData({...data, [name]:value,err:'',sucess:''})
    }
    const handlerResetPass = async () => {
        if(isLength(password))
            return setData({...data, err:"Password must be at least 6 characters.", success:''})
        if(isMatch(password, cf_password))
            return setData({...data, err:"Password did not match.", success:''})

            try {
                const res = await axios.post('/user/reset',{password},{
                    headers:{Authorization:token}
                })

                return setData({...data, err:'', success:res.data.msg})
            }catch(e) {
                e.response.data.msg && setData({...data, err:e.response.data.msg, success:''})
                
            }
    }

    return (
        <div className="login-page">
            <form>
            {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                <h2>Reset password</h2>
                <input type="password" name="password" id="password"required
                placeholder="New Password" value={password} onChange={handleChangeInput} />
                
                <input type="password" name="cf_password" id="cf_password" required autoComplete="on"
                placeholder="Confirm Password" value={cf_password} onChange={handleChangeInput} />

                <div className="row">
                    <button type="submit"onChange={handlerResetPass}>Reset Password</button>
                    
                </div>
            </form>
            
        </div>
    )
}

export default ResetPassword
