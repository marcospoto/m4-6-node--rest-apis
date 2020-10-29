const { v4: uuidv4 } = require("uuid");
const { clients } = require("../data/clients");

// write your handlers here...
const handleClients = (req, res) => {
  res.status(200).json({
    status: 200,
    data: clients,
  });
};

const handleClientsId = (req, res) => {
  const { id } = req.params;
  const client = clients.find((client) => client.id === id);
  if (!client) {
    res.status(200).json({
      status: "error",
      message: "client not found",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: client,
    });
  }
};

const handleAddNewClient = (req, res) => {
  const newClient = req.body;
  const {
    isActive,
    age,
    name,
    gender,
    company,
    email,
    phone,
    address,
  } = newClient;

  newClient.id = uuidv4();

  const isExistingClient = clients.find(
    (client) => newClient.email.toLowerCase() === client.email.toLowerCase()
  );
  if (isExistingClient) {
    res.status(200).json({
      status: "error",
      message: "repeat-customer",
    });
  } else {
    clients.push(newClient);
    res.status(200).json({
      status: 200,
      message: "Client added",
    });
  }
};

const handleDelete = (req, res) => {
  const { id } = req.params;
  const client = clients.find((client) => client.id === id);
  if (!client) {
    res.status(200).json({
      status: "error",
      message: "Client not found",
    });
  } else {
    clients.splice(client, 1);
    res.status(200).json({
      status: 200,
      message: "Client has been deleted",
    });
  }
};
module.exports = {
  handleClients,
  handleClientsId,
  handleAddNewClient,
  handleDelete,
  handleDelete,
};
