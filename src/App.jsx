import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { About } from './pages/about/About'
import { Services } from './pages/services/Services'
import { Contacts } from './pages/contacts/Contacts'
import { ViewDoc } from './schools/unizik/viewdoc/ViewDoc'
import { SelectSchool } from './schools/unizik/selectschool/SelectSchool'
import { AddDoc } from './schools/unizik/adddoc/AddDoc'
import { Studentinfo } from './schools/unizik/studentinfo/Studentinfo'
import { EditStudentInfo } from './schools/unizik/editstudentinfo/EditStudentInfo'
import { UnizikLogin } from './schools/unizik/login/UnizikLogin'
import { UnizikDashboard } from './schools/unizik/dashboard/UnizikDashboard'


function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path = "/" element ={ <Home /> } />
        <Route path = "/about" element = { <About /> } />
        <Route path = "/services" element = { <Services /> } />
        <Route path = "/contacts" element = { <Contacts /> } />                
        <Route path = "/selectschool" element = { <SelectSchool /> } />
        <Route path = "/uniziklogin" element = { <UnizikLogin /> } />

        <Route path = "/unizikdashboard" element = { <UnizikDashboard /> } />
         
        <Route path = "/studentinfo" element = { <Studentinfo /> } />
        <Route path = "/adddoc" element = { <AddDoc /> } />
        <Route path = "/viewdoc" element = { <ViewDoc /> } />
        <Route path = "/editstudentinfo" element = { <EditStudentInfo /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
