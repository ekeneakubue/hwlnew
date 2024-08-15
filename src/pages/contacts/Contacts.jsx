import React from 'react'
import styles from './contacts.module.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'

export const Contacts = () => {
  return (
    <section className={styles.contacts_containr}>
        <Navbar />
        <div className={styles.contactus}>Contact Us</div>
        <Footer />
    </section>
  )
}
