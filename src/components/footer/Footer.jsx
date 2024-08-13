import React from 'react'
import styles from './footer.module.css'
import { FaMapMarkerAlt, FaRegEnvelope, FaPhoneAlt, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdAppRegistration } from "react-icons/md";

export const Footer = () => {
  return (
    <section className={styles.footer_container}>
        <div className={styles.footer}>
        
        <div className={`${styles.footer_card} ${styles.followus}`}>
            <div className={styles.brand}><span>Doc</span>Sture</div>
            <div className={styles.foot_docsture}>
                HWL is an IT company based in Enugu State, Nigeria. We are experts in Computer software 
                development, Civil Works and Renewable Energy.
            </div>
        </div>

        <div className={styles.footer_card}>
            <div className={styles.card_title}>Our Services</div>
            <div className={styles.our_company}>
                <div className={styles.useful_links}>Software Development</div>
                <div className={styles.useful_links}>Document Digitization</div>
                <div className={styles.useful_links}>Civil Works</div>
                <div className={styles.useful_links}>Renewable Energy</div>
            </div>
        </div>

        <div className={styles.footer_card}>
            <div className={styles.card_title}>Useful Links</div>
            <div className={styles.our_company}>
                <div className={styles.useful_links}>Home</div>
                <div className={styles.useful_links}>About us</div>
                <div className={styles.useful_links}>Product & Services</div>
                <div className={styles.useful_links}>Client</div>
            </div>
        </div>

        <div className={styles.footer_card}>
            <div className={styles.card_title}>Contact Us</div>
                <div className={styles.our_company}>
                    <div className={styles.useful_links}><span><FaMapMarkerAlt /> Moorehouse Street, Ogui Road, Enugu State.</span></div>
                    <div className={styles.useful_links}><span><FaRegEnvelope /> Email: admin@hwl.com</span></div>
                    <div className={styles.useful_links}><span><MdAppRegistration /> RC: 1601437</span></div>
                    <div className={styles.useful_links}><span><FaPhoneAlt /> Phone: +234 904 985 4437</span></div> 
                    <div className={styles.useful_links}>
                        <div className={styles.socials}>
                            <span><FaFacebook /></span> 
                            <span><FaInstagram /></span>    
                            <span><FaLinkedinIn /></span>
                        </div>   
                    </div>            
                </div>
            </div>
        </div>
        <hr />
        <div className={styles.copywright}>Copyright 2024 © DocSture. All rights reserved.</div>
    </section>
  )
}
