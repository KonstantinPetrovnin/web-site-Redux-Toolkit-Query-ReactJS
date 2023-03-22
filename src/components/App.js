import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

import AppRoutes from "./routes/AppRoutes"
import Header from "./header/Header"
import SideBar from "./sideBar/SideBar"
import Footer from './footer/Footer'
import { getCategories } from "../features/categories/categoriesSlice"
import Poster from "./poster/Poster"
import { getProducts } from "../features/products/productsSlice"
import UserForm from "./user/UserForm"


const App = () =>{
    const dispatch  = useDispatch()
    useEffect(()=>{
        dispatch(getCategories())
        dispatch(getProducts())
    },[dispatch])
    return(
        <div className="app">  
            <Header/>
            <UserForm/>
            <div className="container">
                <SideBar/>
                <AppRoutes/>
            </div>
            <Footer/>
        </div>
    )
}

export default App