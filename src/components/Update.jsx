// import React, { useState } from 'react';
// import axios from 'axios';

// function RequestModal() {
//   const [showModal, setShowModal] = useState(false);
//   const [requestType, setRequestType] = useState('');
//   const [requestReason, setRequestReason] = useState('');
//   const [requestStatus, setRequestStatus] = useState('');
//   const [requests, setRequests] = useState([]);

//   const openModal = (type) => {
//     setRequestType(type);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const handleChange = (event) => {
//     if (event.target.name === 'requestReason') {
//       setRequestReason(event.target.value);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     axios.post('/api/submit-request', {
//       type: requestType,
//       reason: requestReason
//     })
//       .then((response) => {
//         setRequestStatus(response.data.status);
//         setRequests([...requests, { type: requestType, reason: requestReason, status: requestStatus }]);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const filterRequests = (status) => {
//     setRequestStatus(status);
//   };

//   return (
//     <div>
//       <button onClick={() => openModal('leave')}>Request Leave</button>
//       <button onClick={() => openModal('salary')}>Request Salary Advance</button>
//       {showModal && (
//         <div>
//           <form onSubmit={handleSubmit}>
//             <label>
//               Reason for Request:
//               <input type="text" name="requestReason" onChange={handleChange} />
//             </label>
//             <input type="submit" value="Submit" />
//           </form>
//           <button onClick={closeModal}>Close</button>
//         </div>
//       )}
//       <div>
//         <button onClick={() => filterRequests('pending')}>Pending</button>
//         <button onClick={() => filterRequests('completed')}>Completed</button>
//         <button onClick={() => filterRequests('rejected')}>Rejected</button>
//       </div>
//       {requests
//         .filter((request) => request.status === requestStatus || requestStatus === '')
//         .map((request) => (
//           <div key={request.id}>
//             <p>Type: {request.type}</p>
//             <p>Reason: {request.reason}</p>
//             <p>Status: {request.status}</p>
//           </div>
//         ))}
//     </div>
//   );
// }

// export default RequestModal