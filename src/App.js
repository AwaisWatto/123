import React from 'react';
import './App.css';
import AdminLogin from './components/Adminlogin';
import PrimarySearchAppBar from './components/Navbar';
import ResponsiveAppBar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {Routes , Route } from "react-router-dom"; 
import { Link } from 'react-router-dom';
import AttendanceUser from './components/Attendance';
import UserProfile from './components/UserPfile';
import Parent from './Parent';
import Homepage from './components/Homepage';


function App() {
  return (
    <div>
      {/* <AdminLogin /> */}
      {/* <PersistentDrawerLeft /> */}
      {/* <PrimarySearchAppBar /> */}
      {/* <Sidebar /> */}
      <div className='App'>
        {/* <Parent /> */}
        <Parent />
        
        {/* <ResponsiveAppBar /> */}
           {/* <div className='Sidebar'> */}
            {/* <Sidebar /> */}
            
         {/* <Sidebar>
         <Link to ="/attendance-user"> Attendance </Link>
         <Link to ="/requests"> requests </Link>
         <Link to ="/Employee-Profile"> Employee Profile </Link>
         </Sidebar>
         <Routes>
           <Route path ="/attendance-user" element= {<AttendanceUser />}/> 
         <Route path ="/requests" element= {<AdminLogin />}/>
         <Route path ="/Employee-Profile" element= {<UserProfile />}/>
         </Routes> */}
        </div>
      </div>

  
  );
}

export default App;
