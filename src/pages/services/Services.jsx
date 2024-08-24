import React from 'react'
import styles from './services.module.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'
import { CgTerrain, CgMonday } from "react-icons/cg";


export const Services = () => {
  return (
    <section className={styles.services_containr}>
        <Navbar />
        <div className={styles.services_container}>
          <div className={styles.services_heading}>
            <h1>Our Services</h1>
            <p>
              In today's fast-paced business environment, efficient document management is key to staying ahead. Introducing 
              DocSture – your comprehensive solution for document digitization, designed to streamline your operations and 
              enhance productivity. 
            </p>             
          </div>
          <div className={styles.banner}>
            <img src="images/digitizing.png" alt="" /> 
          </div>
          <div className={styles.services_content}>
            <div className={styles.statement}>
              <CgTerrain className={styles.icon}/>
              <h1>Our Mission</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati voluptas veniam ex repudiandae illo.</p>
            </div>
            <div className={styles.statement}>
              <CgMonday className={styles.icon}/>
              <h1>Our Mission</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati voluptas veniam ex repudiandae illo.</p>
            </div>
          </div>
        </div>
        <Footer />
    </section>
  )
}
