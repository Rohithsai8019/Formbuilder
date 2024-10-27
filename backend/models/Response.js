const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  formId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Form',
    required: true,
  },
  responseData: Object  // Key-value pairs of form fields and responses
}, { timestamps: true });

const Response = mongoose.model('Response', responseSchema);
module.exports = Response;
