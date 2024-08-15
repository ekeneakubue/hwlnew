import React from 'react'
import styles from './dashboard.module.css'
import { Sidenavbar } from '../../components/sidenavbar/Sidenavbar'

export const Dashboard = () => {
  return (
    <section className={styles.dashboard_container}>
        <Sidenavbar />
        <div className={styles.dash_main}>
          <h1>DASHBOARD</h1>
        </div>
    </section>
  )
}
