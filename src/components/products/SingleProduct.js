import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import styles from '../../styles/Product.module.css'

import { useGetProductQuery } from '../../features/api/apiSlice'
import { ROUTES } from '../../utils/routes'
import Product from './Product'
import Products from './Products'
import { getRelatedProducts } from '../../features/products/productsSlice'


const SingleProduct = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const navigate = useNavigate()
  const {list,related} = useSelector(({products})=>products)
  const{data,isLoading,isFetching,inSuccess} = useGetProductQuery({id})

  useEffect(()=>{
    if( inSuccess){
      navigate(ROUTES.HOME)
    }
  },[inSuccess])  

  useEffect(()=>{
    if (!data || !list.length) return;
    dispatch(getRelatedProducts(data.category.id))
  },[data, dispatch, list.length])
  


  return(
    <>
      <Product {...data} />
      <Products products = {related} amount = {5} title = 'Related products'/>
    </>
      
  )
  
}

export default SingleProduct