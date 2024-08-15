import React from 'react'
import styles from './about.module.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'

export const About = () => {
  return (
    <section className={styles.about_container}>
        <Navbar />
        <h1>About</h1>
        <Footer />
    </section>
  )
}
