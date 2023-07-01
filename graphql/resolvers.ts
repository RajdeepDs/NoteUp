import { getCurrentUser } from "@/lib/session";
import { Context } from "../app/api/graphql/route";
import GraphQLJSON from "graphql-type-json";

export const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    notes: async (parent: any, args: any, context: Context) => {
      const user = await getCurrentUser();
      const userId = user?.id;
      return await context.db.note.findMany({
        where: {
          authorId: userId,
        },
        include: {
          tags: true,
        },
      });
    },
    note: async (parent: any, args: any, context: Context) => {
      return await context.db.note.findUnique({
        where: {
          id: args.id,
        },
        include: {
          tags: true,
        },
      });
    },
    tags: async (parent: any, args: any, context: Context) => {
      const user = await getCurrentUser();
      const userId = user?.id;
      return await context.db.tag.findMany({
        where: {
          authorId: userId,
        },
        include: {
          author: true,
        },
      });
    },
    notesByTag: async (parent: any, args: any, context: Context) => {
      const user = await getCurrentUser();
      const userId = user?.id;
      return await context.db.note.findMany({
        where: {
          authorId: userId,
          tags: {
            some: {
              id: args.tagId,
            },
          },
        },
        include: {
          tags: true,
        },
      });
    },
    tagsByNoteId: async (parent: any, args: any, context: Context) => {
      return await context.db.tag.findMany({
        where: {
          notes: {
            some: {
              id: args.noteId,
            },
          },
        },
        include: {
          notes: true,
        },
      });
    },
  },
  Mutation: {
    createNote: async (parent: any, args: any, context: Context) => {
      const user = await getCurrentUser();
      const userId = user?.id;
      const tags = args.tags;
      const note = await context.db.note.create({
        data: {
          title: args.title,
          content: args.content,
          author: { connect: { id: userId } },
          tags: {
            connectOrCreate: tags?.map((tagName: String) => ({
              where: { name: tagName },
              create: {
                name: tagName,
                author: { connect: { id: userId } },
              },
            })),
          },
        },
        include: {
          tags: true,
        },
      });
      return note;
    },
    updateNote: async (parent: any, args: any, context: Context) => {
      const user = await getCurrentUser();
      const userId = user?.id;
      const tags = args.tags;
      return await context.db.note.update({
        where: {
          id: args.id,
        },
        data: {
          title: args.title,
          content: args.content,
          updatedAt: new Date(),
          tags: {
            connectOrCreate: tags?.map((tagName: String) => ({
              where: { name: tagName },
              create: {
                name: tagName,
                author: { connect: { id: userId } },
              },
            })),
          },
        },
        include: {
          tags: true,
        },
      });
    },
    deleteNote: async (parent: any, args: any, context: Context) => {
      return await context.db.note.delete({
        where: {
          id: args.id,
        },
      });
    },
    createTag: async (parent: any, args: any, context: Context) => {
      const user = await getCurrentUser();
      const userId = user?.id;
      return await context.db.tag.create({
        data: {
          name: args.name,
          author: { connect: { id: userId } },
          notes: {
            connect: { id: args.id },
          },
        },
      });
    },
    deleteTag: async (parent: any, args: any, context: Context) => {
      return await context.db.tag.delete({
        where: {
          id: args.id,
        },
      });
    },
  },
  Note: {
    author: async (parent: any, args: any, context: Context) => {
      return await context.db.note
        .findUnique({ where: { id: parent.id } })
        .author();
    },
    tags: async (parent: any, args: any, context: Context) => {
      return await context.db.note
        .findUnique({ where: { id: parent.id } })
        .tags();
    },
  },
  Tag: {
    author: async (parent: any, args: any, context: Context) => {
      return await context.db.tag
        .findUnique({ where: { id: parent.id } })
        .author();
    },
    notes: async (parent: any, args: any, context: Context) => {
      return await context.db.tag
        .findUnique({ where: { id: parent.id } })
        .notes();
    },
  },
};
