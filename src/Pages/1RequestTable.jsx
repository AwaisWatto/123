 import React from 'react'
 import { Row } from 'react-bootstrap';
 import Table from 'react-bootstrap/Table';
 
 function RequestTable() {
   return (
     
 
    <Row className="mt-3"> 

    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Request Type</th>
          <th>Category</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Leave</td>
          <td>Full Day</td>
          <td>

          <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Salary</td>
          <td>50% Salary</td>
          <td>

          <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
          </td>
        </tr>
  
      </tbody>

    </Table>
    </Row>


   )
 }
 
 export default RequestTable
       