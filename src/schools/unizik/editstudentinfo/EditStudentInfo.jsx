import React from 'react'
import styles from './editstudentinfo.module.css'
import { Sidenavbar } from '../../../components/sidenavbar/Sidenavbar'

export const EditStudentInfo = () => {
  return (
    <section className={styles.dashboard_container}>
        <Sidenavbar />
        <div className={styles.dash_main}>
          <h1>EDIT STUDENT INFORMATION</h1>
        </div>
    </section>
  )
}
