import React from 'react';
import styles from './about.module.css';
import { Navbar } from '../../components/navbar/Navbar';
import { Footer } from '../../components/footer/Footer';
import { CgTerrain, CgMonday } from "react-icons/cg";


export const About = () => {
  return (
    <section>
        <Navbar />
        <div className={styles.about_container}>
          <div className={styles.about_heading}>
            <h1>About Us</h1>
            <p>
              DocSture is a subsidiary of Highdrostorm Works Ltd. an IT company based 
              in Enugu State, Nigeria. We are experts in Computer software development
            </p>
          </div>
          <div className={styles.about_content}>
            <div className={styles.statement}>
              <CgTerrain className={styles.icon}/>
              <h1>Our Mission</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati voluptas veniam ex repudiandae illo.</p>
            </div>
            <div className={styles.statement}>
              <CgMonday className={styles.icon}/>
              <h1>Our Mission</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati voluptas veniam ex repudiandae illo.</p>
            </div>
          </div>
        </div>
        <Footer />
    </section>
  )
}
