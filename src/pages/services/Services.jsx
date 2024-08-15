import React from 'react'
import styles from './services.module.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'

export const Services = () => {
  return (
    <section className={styles.services_containr}>
        <Navbar />
        <div className={styles.services}>Services</div>
        <Footer />
    </section>
  )
}
