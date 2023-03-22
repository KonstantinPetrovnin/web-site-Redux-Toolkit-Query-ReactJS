import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import UserSignupForm from './UserSignupForm'
import UserLoginForm from './UserLoginForm'

import styles from '../../styles/User.module.css'
import { toggleForm ,toggleFormType} from '../../features/user/userSlice'

const UserForm = () => {

    const dispatch = useDispatch()

    const {showForm,formType} = useSelector(({user})=>user)
    

    const closeForm = () =>{
        dispatch(toggleForm(false))
    }
    const toggleCurrentType= (type)=>{
        dispatch(toggleFormType(type))
        
    }
    console.log(formType)
  
  return  (
    showForm ? (
        <> 
        <div className={styles.overlay} onClick={closeForm}/>
       {formType === 'signup' 
       ? (<UserSignupForm  toggleCurrentType = {toggleCurrentType} closeForm = {closeForm}/> )
       : (<UserLoginForm toggleCurrentType = {toggleCurrentType} closeForm = {closeForm}/>)
    } 
    </>
    )  : <></>
   
   )
  
}

export default UserForm 