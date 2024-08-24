import React from 'react'
import styles from './viewdoc.module.css'
import { Sidenavbar } from '../../../components/sidenavbar/Sidenavbar'

export const ViewDoc = () => {
  return (
    <section className={styles.dashboard_container}>
        <Sidenavbar />
        <div className={styles.dash_main}>
          <h1>STUDENT DOCUMENTS</h1>
        </div>
    </section>
  )
}
