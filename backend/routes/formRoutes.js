const express = require('express');
const router = express.Router();
const { createForm, getForm, submitResponse, getResponses } = require('../controllers/formController');

// POST: Create a new form
router.post('/', createForm);

// GET: Get form by ID
router.get('/:id', getForm);

// POST: Submit response to a form
router.post('/:id/responses', submitResponse);

// GET: Get all responses for a specific form
router.get('/:id/responses', getResponses);

module.exports = router;
