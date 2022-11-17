const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const userSchema = require("./schemas/userSchema");
const productSchema = require("./schemas/productScema");
const port = process.env.PORT || 4000;

async function runApoloServer() {
  const server = new ApolloServer({
    typeDefs: [userSchema.typeDefs, productSchema.typeDefs],
    resolvers: [userSchema.resolvers, productSchema.resolvers],
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: port },
  });
  console.log(`🚀  Server ready at ${url}`);
}

runApoloServer();
