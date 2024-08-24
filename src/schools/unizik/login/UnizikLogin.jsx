import React from 'react'
import styles from './uniziklogin.module.css'
import { FaUserAlt, FaEye } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from 'react-router-dom';

export const UnizikLogin = () => {
  return (
    <section className={styles.login_container}>
        <div className={styles.header}>
            <img src="images/logos/unizik.png" alt="" />
            <div className={styles.title}>NNAMDI AZIKIWE FEDERAL UNIVERITY</div>
        </div>
        <div className={styles.content}>
            <div className={styles.content_form}>
                <div className={styles.title}><AiOutlineLogin /> Login</div>
                <form action="">
                    <div className={styles.inputField}>
                        <input type="text" placeholder='User Name' required/>
                        <FaUserAlt />
                    </div>
                    <div className={styles.inputField}>
                        <input type="password" placeholder='Password' required/>
                        <FaEye />
                    </div>
                    <Link to = '/unizikdashboard'><button>Login</button></Link>
                </form>
            </div>
        </div>
        <footer>Powered by Highdrostorm Works Ltd.</footer>
    </section>
  )
}
