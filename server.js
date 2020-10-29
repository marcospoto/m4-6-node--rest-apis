"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {
  handleClients,
  handleClientsId,
  handleAddNewClient,
  handleDelete,
} = require("./handlers/clientHandlers");
const {
  handleWord,
  handleRdmWord,
  handleLetter,
} = require("./handlers/hangmanHandlers");

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints
  .get("/clients", handleClients)
  .get("/client/:id", handleClientsId)
  .post("/client", handleAddNewClient)
  .delete("/client/:id", handleDelete)

  .get("/hangman/word", handleRdmWord)
  .get("/hangman/word/:id", handleWord)
  .get("/hangman/guess/:id/:letter", handleLetter)

  .listen(8000, () => console.log(`Listening on port 8000`));
