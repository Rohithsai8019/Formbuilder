const Form = require('../models/Form');
const Response = require('../models/Response');

// Create Form
const createForm = async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json(form);
  } catch (error) {
    console.error('Error creating form:', error);
    res.status(500).json({ message: 'Error creating form', error });
  }
};

// Get Form by ID
const getForm = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }
    res.json(form);
  } catch (error) {
    console.error('Error fetching form:', error);
    res.status(500).json({ message: 'Error fetching form', error });
  }
};

// Submit Response
const submitResponse = async (req, res) => {
  try {
    const response = new Response({ formId: req.params.id, responseData: req.body });
    await response.save();
    res.status(201).json(response);
  } catch (error) {
    console.error('Error submitting response:', error);
    res.status(500).json({ message: 'Error submitting response', error });
  }
};

// Get Responses for a Form
const getResponses = async (req, res) => {
  try {
    const responses = await Response.find({ formId: req.params.id });
    if (!responses.length) {
      return res.status(404).json({ message: 'No responses found for this form' });
    }
    res.json(responses);
  } catch (error) {
    console.error('Error fetching responses:', error);
    res.status(500).json({ message: 'Error fetching responses', error });
  }
};

module.exports = { createForm, getForm, submitResponse, getResponses };
