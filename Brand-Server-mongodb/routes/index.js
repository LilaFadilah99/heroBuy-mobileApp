const router = require("express").Router();
const Controller = require("../controllers/index.js");

router.get("/", Controller.getAllUsers);
router.get("/:id", Controller.findUserById);

module.exports = router;
