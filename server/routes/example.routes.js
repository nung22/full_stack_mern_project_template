const express = require('express');

const { 
  handleGetAllExamples,
  handleCreateExample,
  handleGetExampleById,
  handleUpdateExampleById,
  handleDeleteExampleById 
} = require('../controllers/example.controller');

const router = express.Router();

router.get('/', handleGetAllExamples);
router.post('/new', handleCreateExample);
router.get('/:id', handleGetExampleById);
router.put('/:id', handleUpdateExampleById);
router.delete('/:id', handleDeleteExampleById);

module.exports =  { exampleRouter: router }