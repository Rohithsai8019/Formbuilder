import React, { useState } from 'react';
import FormBuilder from '../components/FormBuilder';
import Preview from '../components/Preview';

const CreateFormPage = () => {
  const [fields, setFields] = useState([]);
  const [formId] = useState('unique-form-id');  // Hardcoded or dynamically generated form ID

  const handleFieldsChange = (newFields) => {
    setFields(newFields);
  };

  const handleFormSubmit = () => {
    console.log('Form submitted!');
  };

  return (
    <div>
      <h1>Create a New Form</h1>
      <FormBuilder formId={formId} onFormSubmit={handleFormSubmit} />
      <Preview fields={fields} />
    </div>
  );
};

export default CreateFormPage;

