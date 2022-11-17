const { getDatabase } = require("../config/connect");
const { ObjectId } = require("mongodb");

class User {
  static getDataUser() {
    return getDatabase().collection("user");
  }

  static async findAll() {
    let users = await User.getDataUser().find().toArray();
    return users;
  }

  static async finsByOd(id) {
    let user = await User.getDataUser().findOne({ _id: ObjectId(id) });

    return user;
  }
}

module.exports = User;
