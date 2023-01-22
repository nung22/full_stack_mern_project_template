const { Example } = require("../models/example.model");

const createExample = async (data) => {
  const example = await Example.create(data);
  return example;
};

const getAllExamples = async () => {
  const examples = await Example.find();
  return examples;
};

const getExampleById = async (data) => {
  const example = await Example.findById(data);
  return example;
};

const deleteExampleById = async (data) => {
  const deletedExample = await Example.findByIdAndDelete(data);
  return deletedExample;
};

const updateExampleById = async (data) => {
  const updatedExample = await Example.findByIdAndUpdate(data);
  return updatedExample;
};

module.exports = {
  createExample,
  getAllExamples,
  getExampleById,
  deleteExampleById,
  updateExampleById,
};