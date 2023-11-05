const express = require('express');
const { getAllEnvironment, getEnvironmentById } = require('../service/environment.service');

const route = express.Router();

route.get('/', async (req, res) => {
    const data = await getAllEnvironment();
    res.send(data);
})

route.get('/:id', async (req, res) => {
    const { id } = req.params;
    const data = await getEnvironmentById(id);
    res.send(data);
})

module.exports = route;