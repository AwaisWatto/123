import React from 'react'
import { Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function RequestTable2() {
  return (
    

   <Row className="mt-3"> 

   <Table hover style={{width:'100em'}}>
     <thead>
       <tr>
         <th>#</th>
         <th>Request Type</th>
         <th>Category</th>
         <th>Reason</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td>1</td>
         <td>Leave</td>
         <td>Full Day</td>
         <td style={{ width:"8cm"}}>
         Something Here.


         </td>
       </tr>
       <tr>
         <td>2</td>
         <td>Salary</td>
         <td>50% Salary</td>
         <td>
Something Here
         </td>
       </tr>
 
     </tbody>

   </Table>
   </Row>


  )
}

export default RequestTable2
      