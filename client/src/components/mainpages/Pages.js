import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Summury from './summury/Summury'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'
import Notifications from '../mainpages/Notifications/Notifications'
import AboutUs from './homepage/information/AboutUs'
import Contact from './homepage/information/Contact'
import PrivancyPolicy from './homepage/information/PrivancyPolicy'
import Service from './homepage/information/Services'
import Account from '../mainpages/account/Account'
import AdminPanelLogin from './utils/AdminLogin/AdminPanelLogin'
import {GlobalState} from '../../GlobalState'
import FogotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'
import ComponentToPrint from './report/ComponentToPrint'
import UserReport from './AdminReports/UserReport'
import ProductReport from './AdminReports/ProductReport'
import SoldReport from './AdminReports/SoldReport'

function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
             <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />
            <Route path="/forgotPW" exact component={isLogged ? NotFound : FogotPassword} />
            <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPassword} exact />
            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/notifications" exact component={isAdmin ? Notifications : NotFound} />


            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />
            <Route path="/summury" exact component={isAdmin ? Summury : NotFound} />

            <Route path="/cart" exact component={Cart} />
            <Route path='/about' exact component={AboutUs} />
            <Route path='/privancy_policy' exact component={PrivancyPolicy} />
            <Route path='/service' exact component={Service} />
            <Route path='/contact' exact component={Contact}/>
            <Route path='/acc' exact component={Account} />
            <Route path='/adminlogin' exact component={AdminPanelLogin}/>
            <Route path="/report" exact component={ComponentToPrint} />
            <Route path="/usereport" exact component={isAdmin ? UserReport : NotFound} />
            <Route path="/productreport" exact component={isAdmin ? ProductReport : NotFound} />
            <Route path="/soldreport" exact component={isAdmin ? SoldReport : NotFound} />
            <Route path="*" exact component={NotFound} />


           
        </Switch>
    )
}

export default Pages
