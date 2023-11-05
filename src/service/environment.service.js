const { getAllEnvironmentDB, getEnvironmentByIdDB } = require('../repository/environment.repository');

async function getAllEnvironment() {
    const data = await getAllEnvironmentDB();
    return data;
}

async function getEnvironmentById(id) {
    const data = await getEnvironmentByIdDB(id);
    return data;
}

module.exports = { getAllEnvironment, getEnvironmentById };