export const typeDefs = `#graphql
    scalar JSON

    type Note{
        id: ID!
        title: String!
        content: JSON
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
        name: String!
        email: String!
    }

    type Query{
        notes: [Note]
        note(id: ID!): Note
        tags: [Tag]
        notesByTag(tagId: ID!): [Note]
        tagsByNoteId(noteId: ID!): [Tag]
    }

    type Mutation{
        createNote(title: String!, content: JSON, tags: [String]): Note!
        updateNote(id: ID!, title: String!, content: JSON, tags: [String]): Note
        deleteNote(id: ID!): Note
        createTag(name: String!, id: ID!): Tag!
        deleteTag(id: ID!): Tag
    }
`;
