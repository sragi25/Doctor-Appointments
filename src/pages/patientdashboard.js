import React, { useState, useLayoutEffect } from 'react'
import styled from "styled-components";
import { BrowserRouter, Link, Switch, Routes,Route } from 'react-router-dom'

import {TabRow, Tab} from "./navbar"
import Profile from "./patientdashboard/profile"
import AppointmentDetails from "./patientdashboard/appointmentdetails"
import {PatientdashboardPg} from "./patientdashboard/main"
import {
    useLocation,
    NavLink,
    Outlet,
    useSearchParams,
  } from 'react-router-dom';
 
  
//   function QueryNavLink({ to, ...props }) {
//     let location = useLocation();
//     return <NavLink to={to + location.search} {...props} />;
//   }
function PatientDashboard() {
   
    // const [componentView, setComponentView] = useState(true);
    // const [currentFocus, setCurrentFocus] = useState('appointmentdetails');

    // React.useEffect(() => {
    //     const storedView = Boolean(localStorage.getItem("cView") || false)
    //     setComponentView(storedView)
    //   }, [])
    
    //   React.useEffect(() => {
    //     localStorage.setItem("cView", componentView)
    //   }, [componentView])
    
    //   React.useEffect(() => {
    //     const storedFocus = localStorage.getItem("focusView") || 'appointmentdetails'
    //     setCurrentFocus(storedFocus)
    //   }, [])
    
    //   React.useEffect(() => {
    //     localStorage.setItem("focusView", currentFocus)
    //   }, [currentFocus])
    
    return ( 
      
<>

<TabRow>
                
                  <Tab >
                  <Link to="/patientdashboard/appointmentdetails">Appointments Details</Link>  </Tab>
                  <Tab >
                  <Link to="/patientdashboard/profile">Profile</Link>

                  </Tab>
                </TabRow>
                <Outlet />
        
 <Routes>
 <Route path='appointmentdetails' element={<AppointmentDetails />}></Route>
 <Route path='profile' element={<Profile />}></Route>
      
    </Routes>
</>
     );
}

export default PatientDashboard;

