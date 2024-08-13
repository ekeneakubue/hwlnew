import React from 'react'
import styles from './hero.module.css'

export const Hero = () => {
  return (
    <div className={styles.hero_container}>
        <div className={styles.hero}>
            <div className={styles.hero_left}>
                <div className={styles.content}>
                    <p>Achieve Seamless administrative data management with our comprehensive solution</p>
                    <button className={styles.explore_btn}>Explore</button>
                </div>
            </div>
            <div className={styles.hero_right}>
                <img src="images/hero-img.png" alt="" />
            </div>
        </div>
        <div className={styles.stripe}><img src="images/stripe.png" alt="" /></div>
    </div>
  )
}
