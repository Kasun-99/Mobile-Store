import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import './Admin.css'


function AdminPanelLogin() {
    const [values , SetValue] = useState({
        email:'',
        password:''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        SetValue({...values,[name]:value})
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        try {
            await axios.post('/user/login', {...values})
            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/products";
        }catch(err){
            Swal.fire(err.response.data.msg)
        }
    }

    

   return (
    <>
          
        <div class="login-form">
      <form action="" method="post" onSubmit={onSubmit}>
          <h2 class="text-center">Admin Log-in</h2>   
          <div class="form-group">
            <div class="input-group">
                  <div class="input-group-prepend">
                      <span class="input-group-text">
                          <span class="fas fa-at"></span>
                      </span>                    
                  </div>
                  <input type="text" 
                        class="form-control" 
                        name="email"
                        value={values.email}
                        placeholder="email" 
                        required="required"
                        onChange={onChangeInput}
                        />				
              </div>
          </div>
      <div class="form-group">
              <div class="input-group">
                  <div class="input-group-prepend">
                      <span class="input-group-text">
                          <i class="fa fa-lock"></i>
                      </span>                    
                  </div>
                  <input type="password"
                        class="form-control" 
                        name="password"
                        value={values.password}
                        placeholder="Password" 
                        required="required"
                        onChange={onChangeInput}
                        />				
              </div>
          </div>        
          <div class="form-group">
              <button  type="submit" class="btn btn-primary login-btn btn-block">Log in</button>
          </div>
         
      </form>
      </div>
          </>
   );
}

export default AdminPanelLogin
