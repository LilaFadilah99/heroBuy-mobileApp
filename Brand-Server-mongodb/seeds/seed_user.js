const { connect } = require("../config/connect");
const data = require("./db.json");

async function seedDataUser() {
  let db = await connect();
  let Users = db.collection("users");

  await Users.insertMany(data);
}
console.log("halo");

// seedDataUser();
