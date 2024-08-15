import React from 'react'
import styles from './adddoc.module.css'
import { Sidenavbar } from '../../components/sidenavbar/Sidenavbar'

export const AddDoc = () => {
  return (
    <section className={styles.dashboard_container}>
        <Sidenavbar />
        <div className={styles.dash_main}>
          <h1>UPLOAD STUDENT DOCUMENTS</h1>
        </div>
    </section>
  )
}
