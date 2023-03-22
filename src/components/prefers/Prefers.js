import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sumBy } from "../../utils/common/common";
import { useParams } from "react-router-dom";

import { addItemToPrefers,removeItemFromPrefers,addItemToCart} from "../../features/user/userSlice";

import styles from "../../styles/Cart.module.css";

const Prefers = () => {

  
  const dispatch = useDispatch();
  
  const { prefers } = useSelector(({ user }) => user);

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToPrefers({ ...item, quantity }));
  };

//   const addToCart = ()=>{
//     dispatch(addItemToCart(item))
//   }
  const removeItem = (id) => {
    dispatch(removeItemFromPrefers(id));
  };
  const addToCart = (item)=>{
    dispatch(addItemToCart(item))
  }

  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Your prefers</h2>

      {!prefers.length ? (
        <div className={styles.empty}>Here is empty</div>
      ) : (
        <>
          <div className={styles.list}>
            {prefers.map((item) => {
              const { title, category, images, price, id, quantity } = item;

              return (
                <div className={styles.itemPrefers} key={id}>
                  <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${images[0]})` }}
                  />
                  <div className={styles.info}>
                    <h3 className={styles.name}>{title}</h3>
                    <div className={styles.category}>{category.name}</div>
                  </div>

                  <div className={styles.price}>{price}$</div>

                 


                  <div className={styles.actions}>
                        <button
                            className={styles.add}
                            // disabled = {!currentSize}
                            onClick = {()=>addToCart(item)}
                        >
                            Add to cart
                        </button>
                  </div>

                  <div
                    className={styles.close}
                    onClick={() => removeItem(item.id)}
                  >
                    <svg className="icon">
                      <use
                        xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  )
}

export default Prefers