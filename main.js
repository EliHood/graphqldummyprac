import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import faker from "faker";
import times from "lodash.times";
import random from "lodash.random";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "./models";
import cors from 'cors';
const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});

const app = express();
server.applyMiddleware({ app });
//allow cross origin requests
app.use(cors());

db.sequelize.sync().then(() => {
  // populate author table with dummy data
  // db.Author.bulkCreate()
  // // populate post table with dummy data
  // db.Post.bulkCreate(
  //   times(10, () => ({
  //     title: faker.lorem.sentence(),
  //     content: faker.lorem.paragraph(),
  //     AuthorId: random(1, 10)
  //   }))
  // );

  // db.Author.bulkCreate(
  //   times(10, () => ({
  //     firstName: faker.name.firstName(),
  //     lastName: faker.name.lastName()
  //   }))
  // );

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});