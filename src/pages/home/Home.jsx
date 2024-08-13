import React from 'react'
import styles from './home.module.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Hero } from '../../components/hero/Hero'
import { Footer } from '../../components/footer/Footer'

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <div className={styles.whyus_container}>
          <h2>Why Choose HWL?</h2>
          <div className={styles.whyus}>
            <div className={styles.whyus_card}>
              <h2> High Quality Services </h2>
              <hr />
              <p>
                A brand for a company is like a reputation for a person. We take pride in our 
                services to all our esteemed customers, knowing fully well that thier full 
                satisfaction from our services is our source of strength and encouragement.
              </p>
            </div>

            <div className={styles.whyus_card}>
              <h2> Fast Response/Delivery </h2>
              <hr />
              <p>
                Our fast response & delivery services takes away the hassle customers undergo 
                when they are looking for Professional that will digitize their document or handle 
                their civil works and deliver on time.
              </p>
            </div>

            <div className={styles.whyus_card}>
              <h2> Our Experiences </h2>
              <hr />
              <p>
                We have been in business for more than 8 years now.
              </p>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}
