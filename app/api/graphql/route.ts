import { ApolloServer } from "@apollo/server";
import { PrismaClient } from "@prisma/client";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

import { db } from "@/lib/db";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers";

export type Context = {
  db: PrismaClient;
};

const apolloServer = new ApolloServer<Context>({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, db }),
});

export async function GET(request: Request) {
  return handler(request);
}

export async function POST(request: Request) {
  return handler(request);
}
