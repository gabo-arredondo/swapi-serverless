const { PersonController } = require("../controllers/people.controller");

const personController = new PersonController();

const getPeople = (event) => personController.getAllPerson();

module.exports = {
  getPeople,
};
