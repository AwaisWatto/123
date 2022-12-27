import Table from 'react-bootstrap/Table';
import AdminAttendenceData from './AdminAttendenceData';

function AdminAttendence() {

  const data =(v)=>{
    return(
      <tr>
      <td>{v.Sr}</td>
      <td>{v.Name}</td>
      <td>{v.Department}</td>
      <td>{v.Date}</td>
      <td>{v.Time}</td>
      <td className='text-success'>{v.Status}</td>
    
      </tr>
    )

  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Employee Name</th>
          <th>Department</th>
          <th> Date </th>
          <th>Time </th>
          <th>Status </th>
        </tr>
      </thead>
      <tbody>
      {AdminAttendenceData.map(data)}
      </tbody>
    </Table>
  );
}

export default AdminAttendence;