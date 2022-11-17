const User = require("../models/User");

class Controller {
  static async getAllUsers(request, response) {
    try {
      let users = await User.findAll();
      console.log(users);
      response.json(users);
    } catch (error) {
      response.json(error);
    }
  }

  static async findUserById(request, response) {
    try {
      let user = await User.finsByOd(request.params.id);
      response.json(user);
    } catch (error) {
      response.json(error);
    }
  }
}

module.exports = Controller;
