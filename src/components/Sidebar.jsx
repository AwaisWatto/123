import React from 'react'
import AttendanceUser from './Attendance'
import RequestsTabs from './Requests';
import UserProfile from './UserPfile';
import {Routes , Route } from "react-router-dom"; 
import { Link } from 'react-router-dom';
import Homepage from './Homepage';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';



function Sidebar() {
  return (
    // <div className="row mt-2em "  style={{zIndex:'-2em'}}>
    <Row >
      <Col lg='2' md='10' sm='12' style={{backgroundColor:'#1976d2'}}>
    {/* <div className="col-2" style={{backgroundColor:'#1976D2'}}> */}
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
          aria-selected="true"
          color='black'>
          <div className='newbar'>
          <Link to ="/"> Homepage </Link>
          </div>
          </a
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

        <button
          class="nav-link active"
          id="Userprofile"
          data-mdb-toggle="pill"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
          ><div className='userprofile'>
          <Link to ="/userprofile"> User Profile </Link>
          </div></button
        >
      </div>
    {/* </div> */}
    </Col>
  
    {/* <div class="Col-8 col-sm-9"> */}
    <Col lg='10' sm='12' xs='9' md='12'>
      <div class="tab-content" id="v-pills-tabContent">
      <div
          class="tab-pane fade show active"
          id="v-pills-home"
          role="tabpanel"
          aria-labelledby="v-pills-home-tab">
            <Routes> 
           <Route path ="/" element= {<Homepage />}/> 
 
           </Routes>
          {/* <AttendanceUser /> */}
        </div>
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
        <Route path ="/requests" element= {<RequestsTabs />}/> 
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
    </Col>
    </Row>
  )
}

export default Sidebar
