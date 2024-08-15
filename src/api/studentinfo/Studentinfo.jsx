import React from 'react'
import styles from './studentinfo.module.css'
import { Sidenavbar } from '../../components/sidenavbar/Sidenavbar'

export const Studentinfo = () => {
  return (
    <section className={styles.dashboard_container}>
        <Sidenavbar />
        <div className={styles.dash_main}>
          <h1>STUDENT RECORD</h1>
        </div>
    </section>
  )
}
