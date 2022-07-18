const db = require('../database/index')
const Client = db.client

exports.create = async (req, res) => {
  const client = {
    name: req.body.name,
    phone: req.body.phone
  }
  try {
    const newClient = await Client.create(client);
    res.status(201).json(newClient);
  } catch (err) {
    throw err;
  }
};

exports.findAll = async (req, res) => {
  try {
    const allClients = await Client.findAll();
    res.json(allClients);
  } catch (err) {
    throw err;
  }
};

exports.findById = async (req, res) => {
  const id = req.params.id;
  try {
    const client = await Client.findByPk(id);
    res.json(client);
  } catch (err) {
    throw err;
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Client.update(req.body, {
      where: { id: id }
    })
    res.json(response);
  } catch (err) {
    throw err;
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Client.destroy({
      where: { id: id }
    })
    res.json(response);
  } catch (err) {
    throw err;
  }
};
