// src/components/FieldComponent.js
import React from 'react';

const FieldComponent = ({ field, removeField }) => {
  const renderField = () => {
    switch (field.type) {
      case 'text':
        return <input type="text" placeholder="Text Field" />;
      case 'number':
        return <input type="number" placeholder="Number Field" />;
      case 'date':
        return <input type="date" />;
      // Add more case statements for different field types as needed
      default:
        return null;
    }
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      {renderField()}
      <button onClick={() => removeField(field.id)}>Remove</button>
    </div>
  );
};

export default FieldComponent;
