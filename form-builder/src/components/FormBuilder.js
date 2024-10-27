import React, { useState } from 'react';
import axios from 'axios';

const FormBuilder = ({ formId, onFormSubmit }) => {  // Accept formId from parent
  const [formData, setFormData] = useState({});  // Store form data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // POST to the correct endpoint with formId
      await axios.post(`http://localhost:5000/api/forms/${formId}/responses`, {
        responseData: formData
      });
      alert('Form submitted successfully!');
      if (onFormSubmit) onFormSubmit();  // Notify parent after successful submission
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="exampleField"
        placeholder="Example Field"
        onChange={handleChange}
      />
      {/* Add more fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormBuilder;
