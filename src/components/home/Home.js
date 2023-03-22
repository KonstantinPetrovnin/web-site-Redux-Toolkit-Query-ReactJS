import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"


import Categories from "../categories/Categories"
import Poster from "../poster/Poster"
import Products from "../products/Products"
import Banner from '../banner/Banner'
import { filterByPrice } from "../../features/products/productsSlice"

const Home = () =>{
    const dispatch  = useDispatch()
    
    const {
        products:{list,filtred},
        categories
        } = useSelector((state)=>state)
        
    useEffect(() => {
      if(!list.length) return
    
      dispatch(filterByPrice(1000))
    
    }, [dispatch,list.length])
    
    return(
       <>
        <Poster/>
        <Products products = {list} amount = {5} title = 'Trending'/>
        <Categories products={categories.list} amount = {5} title = 'Worth seeing'/>
        <Banner/> 
        <Products products = {filtred}  title = 'Less than 1000$'  amount = {5}/>
       </>
    )
}
export default Home
