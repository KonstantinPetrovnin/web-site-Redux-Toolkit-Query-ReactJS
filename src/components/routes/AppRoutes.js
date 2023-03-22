import React from "react";
import { Route,Routes } from "react-router-dom";

import { ROUTES } from "../../utils/routes";
import SingleCategory from "../categories/SingleCategory";
import Home from "../home/Home";
import SingleProduct from '../products/SingleProduct'
import Profile from "../profile/Profile";
import Cart from "../cart/Cart";
import Prefers from "../prefers/Prefers";
 
const AppRoutes = () =>{
    return(
        <Routes>
            <Route index element = {<Home/>}/>
            <Route path='/products/:id' element = {<SingleProduct/>}/>
            <Route path= '/profile' element = {<Profile/>}/>
            <Route path='/categories/:id' element ={<SingleCategory/>}/>
            <Route path={ROUTES.CART} element ={<Cart/>}/>
            <Route path={ROUTES.PREFERS} element ={<Prefers/>}/>
        </Routes>
    )
}
export default AppRoutes