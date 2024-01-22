// import logo from './logo.svg';
// import './App.css';
import { MainLogin } from "./pages/mainlogin.js";
import { MyForm } from "./pages/form";
import { DoctorSearchForm } from "./pages/appointments";
import PatientDashboard from "./pages/patientdashboard";
import styled from "styled-components";
import { TabRow, Tab } from "./pages/navbar";
import { BrowserRouter, Link, Switch, Routes, Route } from "react-router-dom";
import Profile from "./pages/patientdashboard/profile";
import AppointmentDetails from "./pages/patientdashboard/appointmentdetails";
import { PatientdashboardPg } from "./pages/patientdashboard/main";

const SiteWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  background: #90ee90;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function App() {
  return (
    <BrowserRouter>
      <SiteWrapper>
        <Header>Doctor Appointment and Scheduling System Login</Header>
        <TabRow>
          <Tab
            firstchild
            // onClick={() => setCurrentFocus('appointments')}
            // selected={currentFocus === 'appointments' ? true : false}
          >
            <Link to="/appointments">Appointments</Link>
          </Tab>
          <Tab
          // onClick={() => setCurrentFocus('patientdashboard')}
          // selected={currentFocus === 'patientdashboard' ? true : false}
          >
            <Link to="/patientdashboard">Patientdashboard</Link>
          </Tab>
          {/* <Tab onClick={() => setCurrentFocus('web')} selected={currentFocus === 'web' ? true : false}>Web component</Tab> */}
        </TabRow>

        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="appointments" element={<DoctorSearchForm />} />
          <Route path="patientdashboard/*" element={<PatientDashboard />} />
          {/* <Route path="appointmentdetails" element={<AppointmentDetails />} />
                      <Route path="profile" element={<Profile />} /> */}
          {/* <Route path='/patientdashboard/appointmentdetails' element={<AppointmentDetails />}></Route>
                      <Route path='/patientdashboard/profile' element={<Profile />}></Route> */}
        </Routes>
      </SiteWrapper>
    </BrowserRouter>
  );
}

export default App;
