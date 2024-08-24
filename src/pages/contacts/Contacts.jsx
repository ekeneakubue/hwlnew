import React from 'react'
import styles from './contacts.module.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'

export const Contacts = () => {
  return (
    <section>
        <Navbar />
        <div className={styles.contact_container}>
          <div className={styles.contact_heading}>
            <h1>Get Intouch</h1>
            <p>
              DocSture is a subsidiary of Highdrostorm Works Ltd. an IT company based 
              in Enugu State, Nigeria. We are experts in Computer software development
            </p>
          </div>
        </div>
        <Footer />
    </section>
  )
}
