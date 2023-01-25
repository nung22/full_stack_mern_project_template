const { Example } = require("../models/example.model");
const { 
  createExample,
  getAllExamples,
  getExampleById,
  deleteExampleById,
  updateExampleById,
} = require("../services/example.service");

const handleCreateExample = async (req, res) => {
  try {
    const newExample = await createExample(req.body);
    return res.json(newExample);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const handleGetAllExamples = async (req, res) => {
  const examples = await getAllExamples();
  return res.json(examples);
};

const handleGetExampleById = async (req, res) => {
  const example = await getExampleById(req.params.id);
  return res.json(example);
};

const handleDeleteExampleById = async (req, res) => {
  try {
    const deletedExample = await deleteExampleById(req.params.id);
    return res.json(deletedExample);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const handleUpdateExampleById = async (req, res) => {
  try {
    const updatedExample = await updateExampleById(
      req.params.id,
      req.body
    );
    return res.json(updatedExample);
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  handleCreateExample,
  handleGetAllExamples,
  handleGetExampleById,
  handleDeleteExampleById,
  handleUpdateExampleById,
};
