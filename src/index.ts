import { createSchema, createYoga } from "graphql-yoga";
import { createServer } from "node:http";

const port = Number(process.env.API_PORT) || 4000;

import { schema } from "./schema";

const yoga = createYoga({
  schema,
});

const server = createServer(yoga);

server.listen(port, () => {
  console.info(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`);
});
