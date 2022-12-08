import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const UserLogin = () => {
  const [validated, setValidated] = useState(false);

  
  const [selectValue, setSelectValue] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const onChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (

    
    <Container >

      <Row >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Request Type</Form.Label>
              <Form.Select
                onChange={onChange}
                aria-label="Default select example"
              >
                <option defaultValue>
                  Select Options
                </option>

                <option value="1">Leave</option>
                <option value="2">Salary</option>
                <option value="2">Others</option>
              </Form.Select>
            </Form.Group>
          </Row>

          {selectValue === "1" && (
            <div>
              <Form.Check label="Half Day" className="mb-3" type="radio" />
              <Form.Check label="Full Day" className="mb-3" type="radio" />
            </div>
          )}

          {selectValue === "2" && (
            <div>
              <Form.Check label="50% Salary" className="mb-3" type="radio" />
              <Form.Check label="Full Salary" className="mb-3" type="radio" />
            </div>
          )}

          <Form.Group className="mb-3">
            <Form.Check
              required
              label="I solemnly affirm that all the above details are correct"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          {/* <Button type="submit">Apply</Button> */}
        </Form>
      </Row>



    </Container>
  );
};

// function UserLogin() {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   const [selectValue, setSelectValue] = React.useState("");
//   const onChange = (event) => {
//     const value = event.target.value;
//     setSelectValue(value);
//   };

//   return (
//     <Container>
//       <Row>
//         <Form noValidate validated={validated} onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             <Form.Group as={Col} md="4" controlId="validationCustom01">
//               <Form.Label>Request Type</Form.Label>
              
//               <Form.Select
//                 onChange={onChange}
//                 aria-label="Default select example"
//               >
//                 <option defaultValue disabled>
//                   Select Options
//                 </option>

//                 <option value="1">Leave</option>
//                 <option value="2">Salary</option>
//               </Form.Select>
//             </Form.Group>
//           </Row>

//           {selectValue && <div> {selectValue} </div>}

//           <div>
//             <Form.Check label="Half Day" className="mb-3" type="radio" />
//             <Form.Check label="Full Day" className="mb-3" type="radio" />
//           </div>

//           <div>
//             <Form.Check label="50% Salary" className="mb-3" type="radio" />
//             <Form.Check label="Full Salary" className="mb-3" type="radio" />
//           </div>
          

//           <Form.Group className="mb-3">
//             <Form.Check
//               required
//               label="I solemnly affirm that all the details"
//               feedback="You must agree before submitting."
//               feedbackType="invalid"
//             />
//           </Form.Group>
//           <Button type="submit">Apply</Button>
//         </Form>
//       </Row>
//     </Container>
//   );
// }

export default UserLogin;

// import React from 'react'

// function UserLogin() {
//   return (

// <div class="row">
//   <div class="col-3">

//     <div
//       class="nav flex-column nav-pills text-center"
//       id="v-pills-tab"
//       role="tablist"
//       aria-orientation="vertical"
//     >
//       <a
//         class="nav-link active"
//         id="v-pills-home-tab"
//         data-mdb-toggle="pill"
//         href="#v-pills-home"
//         role="tab"
//         aria-controls="v-pills-home"
//         aria-selected="true"
//         >Home</a
//       >
//       <a
//         class="nav-link"
//         id="v-pills-profile-tab"
//         data-mdb-toggle="pill"
//         href="#v-pills-profile"
//         role="tab"
//         aria-controls="v-pills-profile"
//         aria-selected="false"
//         >Profile</a
//       >
//       <a
//         class="nav-link"
//         id="v-pills-messages-tab"
//         data-mdb-toggle="pill"
//         href="#v-pills-messages"
//         role="tab"
//         aria-controls="v-pills-messages"
//         aria-selected="false"
//         >Messages</a
//       >
//     </div>

//   </div>

//   <div class="col-9">

//     <div class="tab-content" id="v-pills-tabContent">
//       <div
//         class="tab-pane fade show active"
//         id="v-pills-home"
//         role="tabpanel"
//         aria-labelledby="v-pills-home-tab"
//       >
//         Home content
//       </div>
//       <div
//         class="tab-pane fade"
//         id="v-pills-profile"
//         role="tabpanel"
//         aria-labelledby="v-pills-profile-tab"
//       >
//         Profile content
//       </div>
//       <div
//         class="tab-pane fade"
//         id="v-pills-messages"
//         role="tabpanel"
//         aria-labelledby="v-pills-messages-tab"
//       >
//         Messages content
//       </div>
//     </div>

//   </div>
// </div>

//  )
//  }

// // import React from 'react'

// // function UserLogin() {
// //   return (

// //     <div className="container">
// //   <div class="row mb-3">
// //   <div class="col">
// //   <h1 class="display-1">Attendence <small class="text-muted">Sheet</small> </h1>
// //   </div>
// //   </div>

// //    <table class="table">
// //   <thead>
// //     <tr>
// //     <th scope="row">Month</th>
// //       <th scope="col">1</th>
// //       <th scope="col">2</th>
// //       <th scope="col">3</th>
// //       <th scope="col">4</th>
// //       <th scope="col">5</th>
// //       <th scope="col">6</th>
// //       <th scope="col">7</th>
// //       <th scope="col">8</th>
// //       <th scope="col">9</th>
// //       <th scope="col">10</th>
// //       <th scope="col">11</th>
// //       <th scope="col">12</th>
// //       <th scope="col">13</th>
// //       <th scope="col">14</th>
// //       <th scope="col">15</th>
// //       <th scope="col">16</th>
// //       <th scope="col">17</th>
// //       <th scope="col">18</th>
// //       <th scope="col">19</th>
// //       <th scope="col">20</th>
// //       <th scope="col">21</th>
// //       <th scope="col">22</th>
// //       <th scope="col">23</th>
// //       <th scope="col">24</th>
// //       <th scope="col">25</th>
// //       <th scope="col">26</th>
// //       <th scope="col">27</th>
// //       <th scope="col">28</th>
// //       <th scope="col">29</th>
// //       <th scope="col">30</th>
// //       <th scope="col">31</th>
// //     </tr>
// //   </thead>

// //   <tbody>
// //     <tr>
// //     <th scope="row">
// //         <p>Days</p>
// //       </th>
// //       <th scope="col">Mon</th>
// //       <th scope="col">Tue</th>
// //       <th scope="col">Wed</th>
// //       <th scope="col">Thu</th>
// //       <th scope="col">Fri</th>
// //       <th scope="col">Sat</th>
// //       <th scope="col"><div class="text-danger">Sun</div></th>
// //       <th scope="col">Mon</th>
// //       <th scope="col">Tue</th>
// //       <th scope="col">Wed</th>
// //       <th scope="col">Thu</th>
// //       <th scope="col">Fri</th>
// //       <th scope="col">Sat</th>
// //       <th scope="col"><div class="text-danger">Sun</div></th>
// //       <th scope="col">Mon</th>
// //       <th scope="col">Tue</th>
// //       <th scope="col">Wed</th>
// //       <th scope="col">Thu</th>
// //       <th scope="col">Fri</th>
// //       <th scope="col">Sat</th>
// //       <th scope="col"><div class="text-danger">Sun</div></th>
// //       <th scope="col">Mon</th>
// //       <th scope="col">Tue</th>
// //       <th scope="col">Wed</th>
// //       <th scope="col">Thu</th>
// //       <th scope="col">Fri</th>
// //       <th scope="col">Sat</th>
// //       <th scope="col"><div class="text-danger">Sun</div></th>
// //       <th scope="col">Mon</th>
// //       <th scope="col">Tue</th>
// //       <th scope="col">Wed</th>
// //     </tr>

// //     <tr>
// //       <th scope="row">
// //         <p class="lead">January</p>
// //       </th>
// //       <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //       <td>
// //         <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //       <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //     </tr>

// //     <tr>
// //       <th scope="row">
// //       <p class="lead">February</p>
// //       </th>
// //       <td> <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div></td>
// //       <td> <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div></td>
// //       <td> <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div></td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //     </tr>

// //     <tr>
// //       <th scope="row">
// //       <p class="lead"> March</p>
// //       </th>
// //       <td> <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div></td>
// //       <td> <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div></td>
// //       <td> <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div></td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //         <td>
// //          <div class="form-check">
// //           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //         </div>
// //         </td>
// //     </tr>

// //       <tr>
// //       <th scope="row">
// //       <p class="lead"> April</p>
// //       </th>
// //       </tr>

// //       <tr>
// //       <th scope="row">
// //       <p class="lead">May</p>
// //       </th>
// //       </tr>

// //       <tr>
// //       <th scope="row">
// //       <p class="lead">June</p>
// //       </th>
// //       </tr>

// //       <tr>
// //       <th scope="row">
// //       <p class="lead">July</p>
// //       </th>
// //       </tr>

// //       <tr>
// //       <th scope="row">
// //       <p class="lead">August</p>
// //       </th>
// //       </tr>

// //       <tr>
// //       <th scope="row">
// //       <p class="lead">September</p>
// //       </th>
// //       </tr>

// //       <tr>
// //       <th scope="row">
// //       <p class="lead">October</p>
// //       </th>
// //       </tr>

// //       <tr>
// //       <th scope="row">
// //       <p class="lead">November</p>
// //       </th>
// //       </tr>

// //       <tr>
// //       <th scope="row">
// //       <p class="lead">December</p>
// //       </th>
// //       </tr>

// //   </tbody>
// // </table>
// // </div>

// //   )
// // }

// // export default UserLogin

// // import * as React from 'react';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Paper from '@mui/material/Paper';

// // function createData(name, calories, fat, carbs, protein) {
// //   return { name, calories, fat, carbs, protein };
// // }

// // const rows = [
// //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   createData('Eclair', 262, 16.0, 24, 6.0),
// //   createData('Cupcake', 305, 3.7, 67, 4.3),
// //   createData('Gingerbread', 356, 16.0, 49, 3.9),
// // ];

// // export default function BasicTable() {
// //   return (
// //     <TableContainer >
// //       <Table sx={{ minWidth: 650 }} aria-label="simple table">
// //         <TableHead>
// //           <TableRow>
// //             <TableCell>Dessert (100g serving)</TableCell>
// //             <TableCell align="right">Calories</TableCell>
// //             <TableCell align="right">Fat&nbsp;(g)</TableCell>
// //             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
// //             <TableCell align="right">Protein&nbsp;(g)</TableCell>
// //             <TableCell align="right">Protein&nbsp;(g)</TableCell>
// //             <TableCell align="right">Protein&nbsp;(g)</TableCell>
// //             <TableCell align="right">Protein&nbsp;(g)</TableCell>
// //             <TableCell align="right">Protein&nbsp;(g)</TableCell>
// //             <TableCell align="right">Protein&nbsp;(g)</TableCell>
// //             <TableCell align="right">Protein&nbsp;(g)</TableCell>
// //             <TableCell align="right">Protein&nbsp;(g)</TableCell>
// //             <TableCell align="right">Protein&nbsp;(g)</TableCell>
// //             <TableCell align="right">Protein&nbsp;(g)</TableCell>
// //             <TableCell align="right">Protein&nbsp;(g)</TableCell>
// //             <TableCell align="right">Protein&nbsp;(g)</TableCell>
// //             <TableCell align="right">Protein&nbsp;(g)</TableCell>
// //             <TableCell align="right">Protein&nbsp;(g)</TableCell>
// //             <TableCell align="right">Protein&nbsp;(g)</TableCell>
// //             <TableCell align="right">Protein&nbsp;(g)</TableCell>
// //             <TableCell align="right">Protein&nbsp;(g)</TableCell>

// //           </TableRow>
// //         </TableHead>
// //         <TableBody>
// //           {rows.map((row) => (
// //             <TableRow
// //               key={row.name}
// //               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
// //             >
// //               <TableCell component="th" scope="row">
// //                 {row.name}
// //               </TableCell>
// //               <TableCell align="right">{row.calories}</TableCell>
// //               <TableCell align="right">{row.fat}</TableCell>
// //               <TableCell align="right">{row.carbs}</TableCell>
// //               <TableCell align="right">{row.protein}</TableCell>
// //               <TableCell align="right">{row.carbs}</TableCell>
// //             </TableRow>
// //           ))}
// //         </TableBody>
// //       </Table>
// //     </TableContainer>
// //   );
// // }
