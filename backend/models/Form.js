const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  fields: [
    {
      label: String,
      fieldType: String,  // e.g., text, number, date, etc.
      options: [String],  // For checkboxes, radio buttons
      required: Boolean,
    }
  ]
});

const Form = mongoose.model('Form', formSchema);
module.exports = Form;

