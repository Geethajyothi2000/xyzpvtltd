import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Update from './components/Update'
import AddData from './components/AddData'
import Employee from './components/Employee'
import Aboutus from './components/Aboutus'
import Product from './components/Product'
import Contacts from './components/Contacts'
import Turnoverreport from './components/Turnoverreport'
import TurnoverCard from './components/TurnoverCard'
import UpdateCard from './components/UpdateCard'
import AddDataCard from './components/AddDataCard'
// import EmployeReport from './components/EmployeReport'


const AppCard = () => {
  return (
    <>
        <BrowserRouter>
<Routes>
    {/* <Route path= "/" element={ <Employee />} /> */}
    <Route path= "/AddDataCard" element={ <AddDataCard />} />
    <Route path= "/UpdateCard/:id" element={ <UpdateCard />} />
    <Route path= "TurnoverCard" element={ <TurnoverCard />} />
    
</Routes>
    </BrowserRouter>
    </>
  )
}

export default AppCard;