const express = require('express');
const { isValidEnvironmentId, isValidBody } = require('../helper/validation');
const { getAllEnvironment, getEnvironmentById, createEnvironment, updateEnvironment, deleteEnvironment } = require('../service/environment.service');
const { buildResponse } = require('../helper/buildResponse');

const route = express.Router();

route.get('/', async (req, res) => {
  const data = await getAllEnvironment();
  buildResponse(res, 200, data);
});

route.get('/:id', isValidEnvironmentId, async (req, res) => {
  const { id } = req.params;
  const data = await getEnvironmentById(id);
  buildResponse(res, 200, data);
});

route.post('/', isValidBody, async (req, res) => {
  try {
    const { label, category, priority } = req.body;
    const data = await createEnvironment(label, category, priority);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:id', isValidEnvironmentId, isValidBody, async (req, res) => {
  try {
    const { id } = req.params;
    const { label, category, priority } = req.body;
    const data = await updateEnvironment(id, label, category, priority);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:id', isValidEnvironmentId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteEnvironment(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = route;
