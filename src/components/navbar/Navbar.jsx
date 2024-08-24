import React, {useState} from 'react'
import { Link, NavLink } from "react-router-dom"
import styles from './styles.module.css'
import { FiMenu } from "react-icons/fi";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.hwl_navbar}>
      <div className={styles.brand}><span>Doc</span>Sture</div>      
      
      <div>        
        <FiMenu 
          className={styles.menu}
          onClick={() => {
              setMenuOpen(!menuOpen) 
          }}        
        />
      </div>

      <nav className={styles.hwl_navs}>        
        <ul className={menuOpen ? `${styles.open}` : '' }>
          <li>
            <NavLink 
              to = '/'
              onClick={() => {
                  setMenuOpen(!menuOpen) 
              }}
            >
              Home
            </NavLink> 
          </li>
          <li>
            <NavLink 
              to = '/about'
              onClick={() => {
                  setMenuOpen(!menuOpen) 
              }}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to = '/services'
              onClick={() => {
                  setMenuOpen(!menuOpen) 
              }}
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink 
              to = '/contacts'
              onClick={() => {
                  setMenuOpen(!menuOpen) 
              }}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to = '/selectschool'
              onClick={() => {
                  setMenuOpen(!menuOpen) 
              }}
              className={styles.portal_btn}
            >
              Portal
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
