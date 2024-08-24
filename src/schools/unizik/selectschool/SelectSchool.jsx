import React from 'react'
import { Link } from 'react-router-dom'
import styles from './selectschool.module.css'

export const SelectSchool = () => {
  return (
    <section className={styles.login_container}>
      <div className={styles.title}>SELECT INSTITUTION TO PROCEED</div>
      <hr />
      <div className={styles.select_school}>
        <div className={styles.login_box}>
          <img src="images/logos/unn.png" alt="" />
          <h2>UNN</h2>
        </div>
        <div className={styles.login_box}>
          <img src="images/logos/unn.png" alt="" />
          <h2>UNEC</h2>
        </div>
        <Link to = '/uniziklogin'>
          <div className={styles.login_box}>
            <img src="images/logos/unizik.png" alt="" />
            <h2>UNIZIK</h2>
          </div>
        </Link>
        <div className={styles.login_box}>
          <img src="images/logos/oko.png" alt="" />
          <h2>OKO Poly</h2>
        </div>
        <div className={styles.login_box}>
          <img src="images/logos/funai.png" alt="" />
          <h2>FUNAI</h2>
        </div>
        <div className={styles.login_box}>
          <img src="images/logos/nekede.png" alt="" />
          <h2>NEKEDE</h2>
        </div>
      </div>
      <hr />
      <Link to = '/'><div className={styles.foot}>Back to Home</div></Link>
    </section>
  )
}
