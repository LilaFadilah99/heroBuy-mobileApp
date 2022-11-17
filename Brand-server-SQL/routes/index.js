const router = require("express").Router();
const { authentication, authorization, authorizationOnlyAdmin } = require("../middlewares/auth");
const Controller = require("../controllers/index.js");

router.get("/", Controller.handleGetProduct);
router.get("/:id", Controller.getProductById);
router.delete("/product/:id", Controller.handleDeleteProduct);
// router.put("/product/:id", Controller.handleEditProduct);
// router.post("/register", Controller.adminRegister);
// router.post("/login", Controller.userLogin);
// router.post("/admin/login", Controller.userLogin);
// get produk

// router.use(authentication);
// router.get("/admin/product", Controller.adminGetProduct);
// router.post("/product", Controller.handleAddProduct);
// router.get("/admin/product/:id", Controller.adminGetProductById);
// router.post("/favorite/:id", Controller.handleAddFavorite);
// router.get("/favorite", Controller.handleGetFavorite);
// router.get("/shoppingBag", Controller.handleGetShoppingBag);
// router.post("/shoppingBag/:id", Controller.handleAddShoppingBag);
// router.delete("/favorite/:id", Controller.handleDeleteFavorite);
// router.delete("/shoppingBag/:id", Controller.handleDeleteShoppingBag);

module.exports = router;
