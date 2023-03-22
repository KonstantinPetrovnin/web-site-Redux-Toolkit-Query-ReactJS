import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'

import styles from '../../styles/Header.module.css'
import { ROUTES } from '../../utils/routes'

import logo from '../../images/logo.svg'
import avatar from '../../images/avatar.jpg'
import { toggleForm } from '../../features/user/userSlice'
import { useGetProductsQuery } from '../../features/api/apiSlice'

const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [searchValue,setSearchValue] = useState('')

    const {currentUser,cart,prefers} = useSelector(({user})=>user)
    
    const handleClick = ()=>{
        if(!currentUser) dispatch(toggleForm(true))
        else navigate('/profile')
    }

    const [values,setValues]  = useState({
        name:'Guest',
        avatar:avatar
    })

    const {data,isLoading} = useGetProductsQuery({title:searchValue})
    

    useEffect(() => {
        if(!currentUser) return
        setValues(currentUser)
    }, [currentUser])

    const handleSearch = ({target:{value}}) =>{
        setSearchValue(value)
      
    }


    
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
                <img src={logo} alt="logo" />
            </Link>
        </div>

        <div className={styles.info}>
            <div className={styles.user} onClick={handleClick}>
                <div className={styles.avatar} style={{backgroundImage:`url(${values.avatar})`}}/>
                <div className={styles.username}>{values.name}</div>
            </div>
            
           


           
            <form action="" className={styles.form}>
                <div className={styles.icon}>
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
                    </svg>
                </div>
                <div className={styles.input}>
                    <input 
                        type="search" 
                        name='search' 
                        placeholder='Search for anything'
                        autoComplete='off'
                        value={searchValue}
                        onChange={handleSearch}/>
                </div>
                {searchValue && 
                <div className={styles.box}>
                    {isLoading ? 'Loading' : !data.length ? 'No result' : (
                        data.map(({title,images,id})=>{
                            return(
                                <Link key={id} 
                                    onClick={()=>setSearchValue('')} 
                                    className={styles.item} 
                                    to = {`/products/${id}`}
                                    >
                                        <div className={styles.image} style={{backgroundImage:`url(${images[0]})`}}/>
                                       
                                        <div className='styles.title'>{title}</div>
                                </Link>
                            )
                        })
                    )}
                    
                </div>}
            </form>






            <div className={styles.account}>
               
                <Link to={ROUTES.PREFERS} className = {styles.cart}>
                    <svg className={styles["icon-fav"]}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
                    </svg>
                    {!!prefers.length && (
                         <span className={styles.count}>{prefers.length}</span>
                    )}
                </Link>

                <Link to='/cart' className = {styles.cart}>
                    <svg className={styles["icon-cart"]}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
                    </svg>
                    {!!cart.length && (
                        <span className={styles.count}>{cart.length}</span>
                    )}
                    
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default Header