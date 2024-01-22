import React, {useLayoutEffect} from "react"


import AppointmentDetails from './appointmentdetails'
import Profile from './profile'

function PatientdashboardPg(props) {
    
      useLayoutEffect(() => { props.pgconfig(true);  });

    return(
        <>
     
        {props.content === 'appointmentdetails' && <AppointmentDetails />}
        {props.content === 'profile' && <Profile />}
        
          </>
    )
}





export {PatientdashboardPg}