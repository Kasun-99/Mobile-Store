import React, {useContext, useState ,useEffect} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Header() {
    
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)
    const [user, setUser] = useState([])
    const [token] = state.token

    useEffect(() =>{
        const getUserInfo = async () => {
            const res = await axios.get('/user/info',{
                headers: {Authorization: token}
            })
            
            setUser(res.data)
          
        }
        getUserInfo()
       
    })

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        localStorage.removeItem('firstLogin')
        if(isAdmin){
            window.location.href = "/adminlogin";
        }
        else{
            window.location.href = "/";
        }
        
        
        
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Categories</Link></li>
                <li><Link to="/summury">Summury</Link></li>
                
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <li><Link to="/history">History</Link></li>
                
                <li><Link to="/acc"><i class="fas fa-user-circle">      {user.name}</i></Link></li>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1>
                    <Link to="/">{isAdmin ?'Admin DashBoard' : 'Flash Mobile' }</Link>
                </h1>
            </div>

            <ul style={styleMenu}>
                <li><Link to="/products">{isAdmin ? 'Products' : 'Shop'}</Link></li>
               

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Login ✥ Register</Link></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul>

            {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>
            }
            
        </header>
    )
}

export default Header
