const express = require('express');
const { isValidEnvironmentId, isValidBody } = require('../helper/validation');
const { getAllEnvironment, getEnvironmentById, createEnvironment, updateEnvironment, deleteEnvironment } = require('../service/environment.service');

const route = express.Router();

route.get('/', async (req, res) => {
    const data = await getAllEnvironment();
    res.send(data);
})

route.get('/:id', isValidEnvironmentId, async (req, res) => {
    const { id } = req.params;
    const data = await getEnvironmentById(id);
    res.send(data);
})

route.post('/', isValidBody, async (req, res) => {
    try {
        const { label, category, priority } = req.body;
        const data = await createEnvironment(label, category, priority);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

route.put('/:id', isValidEnvironmentId, isValidBody, async (req, res) => {
    try {
        const { id } = req.params;
        const { label, category, priority } = req.body;
        const data = await updateEnvironment(id, label, category, priority);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

route.delete('/:id', isValidEnvironmentId, async (req, res) => {
    const { id } = req.params;
    const data = await deleteEnvironment(id);
    res.send(data);
})

module.exports = route;