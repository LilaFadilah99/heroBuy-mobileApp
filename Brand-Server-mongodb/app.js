const { connect } = require("./config/connect.js");
const express = require("express");
const app = express();
const port = process.env.PORT || 4002;
const router = require("./routes/index.js");
app.use(router);

connect()
  .then(() => {
    console.log("success connect mongodb");
    app.listen(port, () => {
      console.log(`I LOVE YOU ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
