const axios = require("axios");
const Redis = require("ioredis");
const redis = new Redis({
  port: 11642, // Redis port
  host: "redis-11642.c62.us-east-1-4.ec2.cloud.redislabs.com", // Redis host
  username: "default", // needs Redis >= 6
  password: "WLrOgJ8ZTJUQRKbXpUomeDfWFPVaOmo5",
  db: 0, // Defaults to 0
});

const baseUrl = "https://container-mongodb.herokuapp.com/";
// const baseUrl = "http://localhost:4001/";
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
  type Query {
      users: [User]
      user(_id: ID): User
    }
`;

const resolvers = {
  Query: {
    users: async () => {
      try {
        const cache = await redis.get("userCaching");

        if (cache) {
          console.log("dari cache");
          return JSON.parse(cache);
        } else {
          console.log("dari server");
          const users = await axios.get(baseUrl);
          await redis.set("userCaching", JSON.stringify(users.data));
          return users.data;
        }
      } catch (error) {
        return error;
      }
    },
    user: async (_, args) => {
      try {
        const user = await axios.get(`${baseUrl}${args._id}`);
        return user.data;
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
