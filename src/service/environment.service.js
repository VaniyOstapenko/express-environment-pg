const { getAllEnvironmentDB, getEnvironmentByIdDB, createEnvironmentDB, updateEnvironmentDB, deleteEnvironmentDB } = require('../repository/environment.repository');

async function getAllEnvironment() {
    const data = await getAllEnvironmentDB();
    return data;
}

async function getEnvironmentById(id) {
    const data = await getEnvironmentByIdDB(id);
    return data;
}

async function createEnvironment(label, category, priority) {
    const data = await createEnvironmentDB(label, category, priority);
    if (!data.length) throw new Error('this object is not created');
    return data;
}

async function updateEnvironment(id, label, category, priority) {
    const data = await updateEnvironmentDB(id, label, category, priority);
    if (!data.length) throw new Error('id is not faund');

    return data;
}

async function deleteEnvironment(id) {
    const data = await deleteEnvironmentDB(id);
    if (!data.length) throw new Error('id is not faund');

    return data;
}

module.exports = { getAllEnvironment, getEnvironmentById, createEnvironment, updateEnvironment, deleteEnvironment };