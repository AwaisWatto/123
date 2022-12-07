import React from 'react'
import AttendanceUser from './Attendance'
import AdminLogin from './Adminlogin';
import UserProfile from './UserPfile';
import {Routes , Route } from "react-router-dom"; 
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <div className="row mt-3">
    <div className="col-2">
      <div
        class="nav flex-column nav-pills text-center"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <a
          class="nav-link active"
          id="v-pills-home-tab"
          data-mdb-toggle="pill"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true">
          <div className='newbar'>
          <Link to ="/attendance-user"> Attendance </Link>
          </div>
          </a
        >
        <a
          class="nav-link active"
          id="Requests"
          data-mdb-toggle="pill"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
          ><div className='requestcontent'>
          <Link to ="/requests"> Requests </Link>
          </div>
          </a
        >

        <a
          class="nav-link"
          id="Userprofile"
          data-mdb-toggle="pill"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
          ><div className='userprofile'>
          <Link to ="/userprofile"> User Profile </Link>
          </div></a
        >
      </div>
    </div>
  
    <div class="Col-8 col-sm-9">
      <div class="tab-content" id="v-pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="v-pills-home"
          role="tabpanel"
          aria-labelledby="v-pills-home-tab">
            <Routes> 
           <Route path ="/attendance-user" element= {<AttendanceUser />}/> 
 
           </Routes>
          {/* <AttendanceUser /> */}
        </div>
        <div
          class="tab-pane fade show active"
          id="v-pills-profile"
          role="tabpanel"
          aria-labelledby="v-pills-profile-tab"
        >
          <Routes> 
        <Route path ="/requests" element= {<AdminLogin />}/> 
        </Routes>        
        </div>
        <div
          class="tab-pane fade show active"
          id="userprofile"
          role="tabpanel"
          aria-labelledby="v-pills-userprofile-tab"
        ><Routes> 
        <Route path ="/UserProfile" element= {<UserProfile />}/> 
        </Routes>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Sidebar
