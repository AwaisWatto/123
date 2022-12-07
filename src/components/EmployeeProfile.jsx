import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './Adminlogin.css';
import { Link } from 'react-router-dom';


function AdminLogin() {

  return (
    <MDBContainer fluid className="p-5 my-5 h-custom">

      <MDBRow className='d-flex flex-row-reverse'>

        <MDBCol col='10' md='6'>
          <img src="https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg?w=740&t=st=1669812668~exp=1669813268~hmac=c6af2dbf9b8b130c1304d30e4fa2138c6c8162ff6d699eef6f97bf389e258d95" class="img-fluid" alt="Sample image" width={450} />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-bold mb-0 me-3">EMPLOYEE MANAGEMENT SYSTEM</p>

          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Admin Login</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Username ' id='formControlLg' type='Username' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default AdminLogin;