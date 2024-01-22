import React from 'react';
import styled from "styled-components";
import {DoctorSearchForm} from "../appointments";
import { BrowserRouter, Link, Switch, Routes,Route } from 'react-router-dom'
//import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Container = styled.div`
    //display:flex;
     //flex-direction:column;
    // align-items:center;
    // justify-content:center;
   font-size:16px;
   margin-top:10px;
   border:1px solid grey;
   height:300px;
   width:1500px;
`;
const MainContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
background-color: white;
align-items:center;
justify-content:center;
`
const Button = styled.button`
height: 40px;
margin-top:50px;
font-color: ${props => props.color ? props.color : "white"};
background-color:${props => props.bgcolor ? props.bgcolor : "blue"}

`
function createData( date, time, status, doctorname, clinicname, addressline1, city, state,reason,action
    ) {
    return { date, time, status, doctorname, clinicname, addressline1, city, state,reason,action };
  }
  
  const rows = [
    createData('10/12/2015','10:30 AM','Confirmed','Pirie Lynne',	'Care Free Cosmetic Surgery','711 E. Carefree Hwy. Ste. 208',	'Phoenix',	'AZ',	'Some Reason',''),
    createData('10/27/2015','10:30 AM','Confirmed','Chan, Chiwai Eddy',	'Orange County Pain Center','11190 Warner Ave. Ste. 308',	'Fountain Valley',	'CA',	'Some Reason',''),
    createData('11/12/2015','10:30 AM','Waitlisted','Dr. Kramer',	'Tender Laser Care','9801 Anderson Mill Rd Ste 125',	'Austin',	'TX',	'Some Reason',''),
    createData('12/12/2015','10:30 AM','Confirmed','Morello',	'Cyril','8648 E. State Rd. 70',	'Bradenton',	'FL',	'Some Reason',''),
    createData('01/12/2015','10:30 AM','Waitlisted','Joseph',	'Richard','828',	'	Morven Court Naperville',	'IL',	'Some Reason',''),
  ];
function AppointmentDetails() {
    
const handleClick = () => {
    <Link to="../../appointments">Appointments</Link>


}
    return ( 
<>
<MainContainer>
    Appointment Details Page
    <Container>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">	Doctor Name</TableCell>
            <TableCell align="center">Clinic Name</TableCell>
            <TableCell align="center">	Address Line1</TableCell>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">State</TableCell>
            <TableCell align="center">Reason</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
             // key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.doctorname}</TableCell>
              <TableCell align="center">{row.clinicname}</TableCell>
              <TableCell align="center">{row.addressline1}</TableCell>
              <TableCell align="center">{row.city}</TableCell>
              <TableCell align="center">{row.state}</TableCell>
              <TableCell align="center">{row.reason}</TableCell>
              <TableCell align="center">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </Container>
    <Button onClick={handleClick}> <Link style={{ textDecoration: 'none' , color: 'white'}}  to="../../appointments">Schedule New Appointment</Link></Button>
</MainContainer>
<Routes>
 <Route path='../../appointments' element={<DoctorSearchForm />}></Route>
    
    </Routes>
</>


     );
}

export default AppointmentDetails;