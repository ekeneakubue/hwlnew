import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { About } from './pages/about/About'
import { Services } from './pages/services/Services'
import { Contacts } from './pages/contacts/Contacts'
import { Dashboard } from './api/dashboard/Dashboard'
import { Studentinfo } from './api/studentinfo/Studentinfo'
import { AddDoc } from './api/adddoc/AddDoc'
import { ViewDoc } from './api/viewdoc/ViewDoc'
import { EditStudentInfo } from './api/editstudentinfo/EditStudentInfo'


function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path = "/" element ={ <Home /> } />
        <Route path = "/about" element = { <About /> } />
        <Route path = "/services" element = { <Services /> } />
        <Route path = "/contacts" element = { <Contacts /> } />
        <Route path = "/dashboard" element = { <Dashboard /> } />
        <Route path = "/studentinfo" element = { <Studentinfo /> } />
        <Route path = "/adddoc" element = { <AddDoc /> } />
        <Route path = "/viewdoc" element = { <ViewDoc /> } />
        <Route path = "/editstudentinfo" element = { <EditStudentInfo /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
