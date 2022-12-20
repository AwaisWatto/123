import React, { useState, useEffect } from 'react';

const HaiderLawa = () => {
  // State for storing the response from the API
  const [response, setResponse] = useState(null);

  // Function for sending a request to the API
  const sendRequest = () => {
    // Make a POST request to the API with the request data
    fetch('/api/leave-request', {
      method: 'POST',
      body: JSON.stringify({
        employeeId: 12345, // Replace with the ID of the employee
        requestType: 'advanceSalary',
        requestReason: 'I need the money for an emergency',
        requestAmount: 1000, // Replace with the amount of money requested
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // Update the state with the response from the API
        setResponse(res);
      })
      .catch((err) => {
        // Handle any errors that occur
        console.error(err);
      });
  };

  // Use useEffect to send the request when the component mounts
  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <div>
      {response && (
        // Display the response from the API
        <div>
          <p>Leave request status: {response.status}</p>
          <p>
            Requested leave dates: {response.startDate} to {response.endDate}
          </p>
          <p>Requested advance salary</p>
          </div>
      )
}
</div>
  );
}
export default HaiderLawa
