const { decodeToken } = require("../helpers/jwt");
const { User, Product } = require("../models/index.js");

module.exports = {
  authentication: async (request, response, next) => {
    try {
      let token = request.headers.access_token;

      if (!token) throw { message: "Invalid token", status: 401 };

      let { id } = decodeToken(token);
      let user = await User.findByPk(id);
      if (!user) throw { message: "Invalid token", status: 401 };

      request.user = {
        id: user.id,
        email: user.email,
        role: user.role,
      };
      next();
    } catch (error) {
      next(error);
    }
  },

  authorization: async (request, response, next) => {
    try {
      let { id } = request.params;
      const product = await Product.findByPk(id);
      if (!product) throw { message: "Product not found", status: 404 };
      if (product.UserId !== request.user.id) throw { message: "You have no access", status: 403 };
      next();
    } catch (error) {
      next(error);
    }
  },

  authorizationOnlyAdmin: async (request, response, next) => {
    try {
      let role = request.user.role;
      if (role !== "admin") throw { message: "You have no access", status: 403 };
      next();
    } catch (error) {
      next(error);
    }
  },
};
