const db = require('../database/index')
const Client = db.client
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
  const client = {
    name: req.body.name,
    phone: req.body.phone
  }

  try {
    const newClient = await Client.create(client);
    res.status(201).json(newClient);
  } catch (err) {
    if (err.status) {
      res.status(err.status).json(err);
    }
    else {
      res.status(500).json({ message: "Erro nao identificado" });
    }
  }
};

exports.findAll = async (req, res) => {
  try {
    const allClients = await Client.findAll();
    res.json(allClients);
  } catch (err) {
    res.status(500).json({ message: "Erro nao identificado" });
  }
};

exports.findById = async (req, res) => {
  const id = req.params.id;

  try {
    const client = await Client.findByPk(id);
    res.json(client);
  } catch (err) {
    res.status(404).json({ message: "Erro nao identificado" });
  };
};

exports.update = async (req, res) => {
  const id = req.params.id;

  try {
    Client.update(req.body, {
      where: { id: id }
    })
  } catch (err) {
    res.status(500).send({
      message: "Erro ao atualizar cliente " + id
    });
  };
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  try {
    Client.destroy({
      where: { id: id }
    })
  } catch (err) {
    res.status(500).send({
      message: "Ocorreu um erro"
    });
  };
};

exports.findAllByAvaliable = async (req, res) => {
  try {

    Client.findAll({ where: { avaliable: true } })
  } catch (err) {
    res.status(500).send({
      message: ""
    });
  };
};
