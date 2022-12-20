import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyModal from './SendReq';
import { Container } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';

function RequestsTabs() {
  return (
    <Container>
    <Row className='mb-4'>
    {/* <HaiderLawa /> */}
      <MyModal />
    </Row>

    <Row className='mt-5'>

        <Col>
      <Button  style={{display: "flex",justifyContent: "center",alignItems: "center",padding: "13px", backgroundColor: "#404040"}}><h5>Pending Requests <Badge className='mt-2' bg="link"> 1</Badge></h5></Button>{' '}
      </Col>
      <Col>
      <Button style={{display: "flex",justifyContent: "center",alignItems: "center",padding: "13px", backgroundColor: "#009000"}}><h5>Completed Requests <Badge className='mt-2' bg="link"> 2</Badge></h5></Button>{' '}
      </Col>
      <Col>
      <Button style={{display: "flex",justifyContent: "center",alignItems: "center",padding: "13px",backgroundColor: "#f00000"}} ><h5>Rejected Requests <Badge className='mt-2' bg="link"> 1</Badge></h5></Button>
      </Col>
      </Row>
      <Row className="mt-3"> 

    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Request Type</th>
          <th>Condition</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Leave</td>
          <td>Full Day</td>
          <td>

          <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
          &nbsp;
            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Salary</td>
          <td>50% Salary</td>
          <td>

          <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
          &nbsp;
            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
          </td>
        </tr>
  
      </tbody>
    
    </Table>
    </Row>
      
      </Container>
  );
}

export default RequestsTabs;