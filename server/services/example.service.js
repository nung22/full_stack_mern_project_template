const { Example } = require("../models/example.model");

const createExample = async (data) => {
  const example = await Example.create(data);
  return example;
};

const getAllExamples = async () => {
  const examples = await Example.find();
  return examples;
};

const getExampleById = async (exampleId) => {
  const example = await Example.findById(exampleId);
  return example;
};

const deleteExampleById = async (exampleId) => {
  const deletedExample = await Example.findByIdAndDelete(exampleId);
  return deletedExample;
};

const updateExampleById = async (exampleId, data) => {
  const updatedExample = await Example.findByIdAndUpdate(exampleId, data,
    {
      // re-run our validations
      runValidators: true,  
    }
    );
  return updatedExample;
};

module.exports = {
  createExample,
  getAllExamples,
  getExampleById,
  deleteExampleById,
  updateExampleById,
};