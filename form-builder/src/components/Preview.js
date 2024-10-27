import React from 'react';

const Preview = ({ fields }) => {
  return (
    <div>
      <h2>Preview</h2>
      <form>
        {fields.map((field, index) => (
          <div key={index}>
            <label>{field.label}</label>
            {field.fieldType === 'text' && <input type="text" name={field.label} />}
            {field.fieldType === 'number' && <input type="number" name={field.label} />}
            {field.fieldType === 'date' && <input type="date" name={field.label} />}
            {/* Add more field types as needed */}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Preview;

