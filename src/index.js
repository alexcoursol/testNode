import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

import schema from './schema';
import resolvers from './resolvers';
import models, { sequelize } from './models';
 
const app = express();
 
app.use(cors());
 
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
    context: async () => ({
      models,
      me: await models.User.findByUsername('alex'), // TODO Add jwt auth.
    })
  }
});

server.applyMiddleware({ app, path: '/graphql' });

sequelize.sync().then(async () => {
  app.listen({ port: 8000 }, () => {
    /* eslint no-console: 0 */
    console.log('Apollo Server on http://localhost:8000/graphql');
  });
});

export default app;