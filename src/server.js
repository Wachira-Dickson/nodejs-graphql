const {ApolloServer} = require('@apollo/server');
const {startStandaloneServer} = require('@apollo/server/standalone');
const typeDefs = require('./graphgql/schema');
const resolvers = require('./graphgql/resolvers');

async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    const {url} = await startStandaloneServer(server, {
        listen: {port: 4000},
    });
    console.log(`Server is running on ${url}`);
}
startServer();