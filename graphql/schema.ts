export const typeDefs = `#graphql
    type Note{
        id: ID!
        title: String!
        content: String
        createdAt: String
        updatedAt: String
        author: User
        tags: [Tag]
    }

    type Tag{
        id: ID!
        name: String!
        notes: [Note]
        author: User
    }

    type User{
        id: ID!
        name: String
        email: String
    }

    type Query{
        notes: [Note]
        note(id: ID!): Note
        tags: [Tag]
        notesByTag(tagId: ID!): [Note]
    }

    type Mutation{
        createNote(title: String!, content: String, tags: [String]): Note!
        updateNote(id: ID!, title: String!, content: String, tags: [String]): Note
        deleteNote(id: ID!): Note
    }
`;
