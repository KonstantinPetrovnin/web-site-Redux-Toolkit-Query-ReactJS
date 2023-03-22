import { useDispatch, useSelector } from 'react-redux'
import { ROUTES } from '../../utils/routes'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { addItemToCart,addItemToPrefers } from '../../features/user/userSlice'

import styles from '../../styles/Product.module.css'


const SIZES = [1,2,3,4]


const Product = (item) =>{
  const {images,id,title,price,description} = item

  const dispatch = useDispatch()

  let copyImg = Object.assign([],images);
  
  const [currentImage,setCurrentImage] = useState()
  const [currentSize,setCurrentSize] = useState()
  

  useEffect(()=>{
    if(!copyImg.length) return

    setCurrentImage(copyImg[0])

  },[images])

  const addToCart = ()=>{
    dispatch(addItemToCart(item))
  }
  const addToPrefers = () =>{
    dispatch(addItemToPrefers(item))
  }

    return(
    <section className={styles.product}>
      
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={styles["images-list"]}>
          {copyImg.map((image, i) => (
            <div
              key={i}
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
              onClick = {()=> setCurrentImage(image)}
            />
          ))}
        </div>

      </div>

      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>{price}$</div>
        <div className={styles.color}>
          <span>Color:</span> Green
        </div>
        <div className={styles.sizes}>
          <span>Sizes:</span>

          <div className={styles.list}>
            {SIZES.map((size) => (
              <div
                onClick={() => setCurrentSize(size)}
                className={`${styles.size} ${
                  currentSize === size ? styles.active : ""
                }`}
                key={size}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <p className={styles.description}>{}</p>

        <div className={styles.actions}>
          <button
            className={styles.add}
            disabled = {!currentSize}
            onClick = {addToCart}
          >
            Add to cart
          </button>
          <button 
            className={styles.favourite}
            onClick={addToPrefers}>
            Add to favourites</button>
        </div>

        <div className={styles.bottom}>
          <div className={styles.purchase}>19 people purchased</div>

          <Link to={ROUTES.HOME}>Return to store</Link>
        </div>
      </div>
    </section>
    )
    
    
   
    
}

export default Product