import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResponsePage = ({ formId }) => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/forms/${formId}/responses`);
        setResponses(res.data);
      } catch (error) {
        console.error('Error fetching responses:', error);
      }
    };

    fetchResponses();
  }, [formId]);

  return (
    <div>
      <h1>Form Responses</h1>
      <ul>
        {responses.map((response) => (
          <li key={response._id}>
            {JSON.stringify(response.responseData)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponsePage;
