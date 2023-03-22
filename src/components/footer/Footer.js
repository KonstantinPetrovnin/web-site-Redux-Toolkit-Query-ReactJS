import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../../styles/Footer.module.css'
import { ROUTES } from '../../utils/routes'
import logo from '../../images/logo.svg'

export const Footer = () => {
  return (
    <div>
      <section className={styles.footer}>

        <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
                <img src={logo} alt="logo" />
            </Link>
        </div>

        <div className= {styles.rights}>
          Developed by {' '}
           <a href=''
              target='_blank'
              rel = 'noreferrer'
               >
            Petrovnin</a>
        </div>

        <div className={styles.socials}>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
            </svg>
          </a>

          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
            </svg>
          </a>

          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
            </svg>
          </a>
          <a href="">
            <svg className="icon" >
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#scroll`} />
            </svg>
          </a>
          
        </div>

      </section>
    </div>
  )
}

export default Footer