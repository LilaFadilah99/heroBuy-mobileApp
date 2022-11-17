const { User, Product, Category, Favorite, ShoppingBag, sequelize } = require("../models");
const { checkPassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { decode } = require("jsonwebtoken");

class Controller {
  // get product without authentication
  static async handleGetProduct(request, response, next) {
    try {
      const product = await Product.findAll({
        include: [{ model: Category, attributes: ["id", "name"] }],
      });
      response.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  // get product by id for customer
  static async getProductById(request, response, next) {
    const { id } = request.params;
    try {
      const product = await Product.findOne({
        where: { id },
        include: [{ model: Category, attributes: ["id", "name"] }],
      });

      if (!product) throw { message: "Product not found", status: 404 };
      response.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  // handle add favorite
  static async handleAddFavorite(request, response, next) {
    const { id } = request.params;
    const UserId = request.user.id;
    try {
      await sequelize.transaction(async (t) => {
        const products = await Product.findByPk(id, { transaction: t });
        if (!products) throw { message: "Product not found", status: 404 };

        const favorite = await Favorite.findOne({ where: { UserId, ProductId: id }, transaction: t });
        if (favorite) throw { message: "Favorite data has been added", status: 400 };

        const addFavorite = await Favorite.create(
          {
            UserId,
            ProductId: products.id,
          },
          { transaction: t }
        );

        response.status(201).json(addFavorite);
      });
    } catch (error) {
      // console.log(error);
      next(error);
    }
  }

  // ---------------------------------------------------------------------------------

  // edit products
  static async handleEditProduct(request, response, next) {
    const { id } = request.params;
    const { name, description, price, mainImg, CategoryId } = request.body;
    const UserId = request.user.id;
    const slug = name;
    // console.log(request.user);

    try {
      const product = await Product.findByPk(id);
      if (!product) throw { message: "Product not found", status: 404 };

      const updateProduct = await Product.update({ name, description, price, mainImg, CategoryId, UserId, slug }, { where: { id } });
      response.status(200).json({ message: `success update product id ${id}` });
    } catch (error) {
      next(error);
    }
  }

  // user register
  static async userRegister(request, response, next) {
    const { username, email, password, address } = request.body;
    const phoneNumber = +request.body;
    const role = "customer";
    try {
      const user = await User.create({ username, email, password, phoneNumber, address, role });
      response.status(201).json({
        id: user.id,
        username,
        email,
        phoneNumber,
        address,
        role: user.role,
      });
    } catch (error) {
      next(error);
    }
  }

  // admin register
  static async adminRegister(request, response, next) {
    const { username, email, password, phoneNumber, address } = request.body;
    const role = "admin";
    try {
      const user = await User.create({ username, email, password, phoneNumber, address, role });
      response.status(201).json({
        id: user.id,
        username,
        email,
        phoneNumber,
        address,
        role: user.role,
      });
    } catch (error) {
      next(error);
    }
  }

  // user login
  static async userLogin(request, response, next) {
    try {
      const { email, password } = request.body;
      if (!email || !password) throw { message: "Invalid Email/Password", statu: 401 };
      let user = await User.findOne({ where: { email } });

      if (!user || !checkPassword(password, user.password)) throw { message: "Invalid Email/Password", statu: 401 };
      response.status(200).json({ access_token: signToken({ id: user.id, email: user.email, role: user.role }), role: user.role });
    } catch (error) {
      next(error);
    }
  }

  // admin login
  static async adminLogin(request, response, next) {
    try {
      const { email, password } = request.body;
      if (!email || !password) throw { message: "Invalid Email/Password", statu: 401 };
      let user = await User.findOne({ where: { email } });

      if (!user || !checkPassword(password, user.password)) throw { message: "Invalid Email/Password", statu: 401 };
      response.status(200).json({ access_token: signToken({ id: user.id, email: user.email, role: user.role }), role: user.role });
    } catch (error) {
      next(error);
    }
  }

  // get product only for admin
  static async adminGetProduct(request, response, next) {
    const id = request.user.id;
    try {
      const product = await Product.findAll({ where: { UserId: id } });
      response.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
  // add product
  static async handleAddProduct(request, response, next) {
    try {
      const { name, description, mainImg } = request.body;
      const CategoryId = +request.body.CategoryId;
      const price = +request.body.price;
      const UserId = request.user.id;
      const slug = name;

      const product = await Product.create({ name, description, price, mainImg, CategoryId, UserId, slug });
      response.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }

  // get product by id for admin
  static async adminGetProductById(request, response, next) {
    const { id } = request.params;
    try {
      const product = await Product.findOne({
        where: { id },
        include: [
          { model: Category, attributes: ["id", "name"] },
          { model: User, attributes: ["id", "username", "email", "phoneNumber", "address", "role"] },
        ],
      });

      if (!product) throw { message: "Product not found", status: 404 };
      response.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  // add product to shopping bag
  static async handleAddShoppingBag(request, response, next) {
    const { id } = request.params;
    const UserId = request.user.id;
    try {
      await sequelize.transaction(async (t) => {
        const product = await Product.findByPk(id, { transaction: t });
        if (!product) throw { message: "Product not found", status: 404 };

        const shopping = await ShoppingBag.findOne({ where: { UserId, ProductId: id }, transaction: t });
        if (shopping) throw { message: "shoppingBag data has been added", status: 400 };

        const addShoppingBag = await ShoppingBag.create(
          {
            UserId,
            ProductId: product.id,
          },
          { transaction: t }
        );

        response.status(201).json(addShoppingBag);
      });
    } catch (error) {
      next(error);
    }
  }

  // delete product
  static async handleDeleteProduct(request, response, next) {
    const { id } = request.params;
    console.log(id);
    try {
      const deleteProduct = await Product.destroy({ where: { id } });
      if (!deleteProduct) throw { message: "favorite not found", status: 404 };
      response.status(200).json({ message: `success delete product id ${id}` });
    } catch (error) {
      next(error);
    }
  }

  // handle delete favorite
  static async handleDeleteFavorite(request, response, next) {
    const { id } = request.params;
    try {
      const deleteFavorite = await Favorite.destroy({ where: { ProductId: id, UserId: request.user.id } });
      if (!deleteFavorite) throw { message: "favorite not found", status: 404 };
      response.status(200).json({ message: `success delete favorite id ${id}` });
    } catch (error) {
      next(error);
    }
  }
  // handle delete shopping bag
  static async handleDeleteShoppingBag(request, response, next) {
    const { id } = request.params;
    console.log(request.user);
    try {
      const shoppingBag = await ShoppingBag.destroy({ where: { ProductId: id, UserId: request.user.id } });

      if (!shoppingBag) throw { message: "shoppingBag not found", status: 404 };
      response.status(200).json({ message: `success shoppingBag favorite id ${id}` });
    } catch (error) {
      next(error);
    }
  }

  // handle get data shopping bag
  static async handleGetShoppingBag(request, response, next) {
    try {
      const shooppingBag = await ShoppingBag.findAll({
        where: { UserId: request.user.id },
        include: [
          { model: Product, include: [{ model: Category, attributes: ["id", "name"] }] },
          { model: User, attributes: ["id", "username", "email", "phoneNumber", "address", "role"] },
        ],
      });
      response.status(200).json(shooppingBag);
    } catch (error) {
      next(error);
    }
  }

  // handle get favorite
  static async handleGetFavorite(request, response, next) {
    try {
      const favorite = await Favorite.findAll({
        where: { UserId: request.user.id },
        include: [
          { model: Product, include: [{ model: Category, attributes: ["id", "name"] }] },
          { model: User, attributes: ["id", "username", "email", "phoneNumber", "address", "role"] },
        ],
      });
      response.status(200).json(favorite);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
