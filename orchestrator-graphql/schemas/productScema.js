const axios = require("axios");
const Redis = require("ioredis");
const redis = new Redis({
  port: 11642, // Redis port
  host: "redis-11642.c62.us-east-1-4.ec2.cloud.redislabs.com", // Redis host
  username: "default", // needs Redis >= 6
  password: "WLrOgJ8ZTJUQRKbXpUomeDfWFPVaOmo5",
  db: 0, // Defaults to 0
});

// const baseUrlUser = "http://localhost:4001/";
// const baseUrl = "http://localhost:4002/";
const baseUrl = "https://brand-sql-server.herokuapp.com/";
const baseUrlUser = "https://container-mongodb.herokuapp.com/";
const typeDefs = `#graphql
    type User {
        _id: ID
        id: Int
        username: String
        email: String
        password: String
        role: String
        phoneNumber: String
        address: String
        createdAt: String
        updatedAt: String
    }
    type Product {
        id: ID
        name: String
        slug: String
        description: String
        price: Int
        mainImg: String
        CategoryId: Int
        UserId: Int
        createdAt: String
        updatedAt: String
        Category: Category
    }
    type ProductDetail {
      id: ID
      name: String
      slug: String
      description: String
      price: Int
      mainImg: String
      CategoryId: Int
      UserId: Int
      createdAt: String
      updatedAt: String
      Category: Category
      user: User
    }
    type Category {
      id: Int
      name: String
    }
    type Message {
      message: String
    }
    type Query {
        products: [Product]
        product(id: ID): Product
        productDetail(id: ID): ProductDetail
    }
    type Mutation {
       deleteProduct(id: ID): Message
    }
`;

const resolvers = {
  Query: {
    products: async () => {
      try {
        const cache = await redis.get("productCaching");
        if (cache) {
          console.log("dari cache");
          return JSON.parse(cache);
        } else {
          console.log("dari service");
          const products = await axios.get(baseUrl);
          await redis.set("productCaching", JSON.stringify(products.data));
          return products.data;
        }
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    product: async (_, args) => {
      try {
        const product = await axios.get(`${baseUrl}${args.id}`);
        return product.data;
      } catch (error) {
        return error;
      }
    },
    productDetail: async (_, args) => {
      try {
        const product = await axios.get(`${baseUrl}${args.id}`);
        const user = await axios.get(`${baseUrlUser}${product.data.userMongoId}`);
        return { ...product.data, user: user.data };
      } catch (error) {
        return error;
      }
    },
  },
  Mutation: {
    deleteProduct: async (_, args) => {
      try {
        const deleteProduct = await axios.delete(`${baseUrl}product/${args.id}`);
        await redis.del("productCaching");
        return { message: `succes delete id ${args.id}` };
      } catch (error) {
        return error;
      }
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
