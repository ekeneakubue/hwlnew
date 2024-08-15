import React, {useState} from 'react'
import { Link, NavLink } from "react-router-dom"
import styles from './styles.module.css'
import { FiMenu } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { FaUserEdit } from "react-icons/fa";

export const Sidenavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.hwl_sidenavbar}>
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
        <div>User</div>      
        <ul className={menuOpen ? `${styles.open}` : '' }>
          <li>
            <NavLink 
              to = '/dashboard'
              onClick={() => {
                  setMenuOpen(!menuOpen) 
              }}
            >
              <span><RxDashboard /></span> Dashboard
            </NavLink> 
          </li>
          <li>
            <NavLink 
              to = '/studentinfo'
              onClick={() => {
                  setMenuOpen(!menuOpen) 
              }}
            >
              <span><RxDashboard /></span>Student Info
            </NavLink>
          </li>
          <li>
            <NavLink 
              to = '/adddoc'
              onClick={() => {
                  setMenuOpen(!menuOpen) 
              }}
            >
              <span><RxDashboard /></span> Add Document
            </NavLink>
          </li>
          <li>
            <NavLink 
              to = '/viewdoc'
              onClick={() => {
                  setMenuOpen(!menuOpen) 
              }}
            >
              <span><RxDashboard /></span> View Document
            </NavLink>
          </li> 
          <li>
            <NavLink 
              to = '/editstudentinfo'
              onClick={() => {
                  setMenuOpen(!menuOpen) 
              }}
            >
              <span><FaUserEdit /></span> Edit Student Info
            </NavLink>
          </li> 
          <li>
            <NavLink to = '/login'>
              <span><RxDashboard /></span> Logout
            </NavLink>
          </li>         
        </ul>
      </nav>
    </header>
  )
}
