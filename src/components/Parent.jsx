import React from 'react'
import AdminLogin from './Adminlogin'
import ResponsiveAppBar from './Navbar'
import Sidebar from './Sidebar'
import { Col, Row } from 'react-bootstrap'




function Parent() {
  return (
    <div>
        <ResponsiveAppBar />
        <Sidebar />
        
        {/* <Col style={{zIndex:'15', position:'absolute'}} md={{ span: 8, offset: 3 }}><AdminLogin /></Col> */}
        
   

        </div>
  )
}

export default Parent