import { gql } from "@apollo/client";

export const CREATE_NOTE = gql`
  mutation CreateNote($title: String!, $content: JSON, $tags: [String]) {
    createNote(title: $title, content: $content, tags: $tags) {
      id
      title
      content
      createdAt
      updatedAt
      tags {
        id
        name
      }
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation DeleteNote($id: ID!) {
    deleteNote(id: $id) {
      id
      title
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation UpdateNote(
    $id: ID!
    $title: String!
    $content: JSON
    $tags: [String]
  ) {
    updateNote(id: $id, title: $title, content: $content, tags: $tags) {
      id
      title
      content
      createdAt
      updatedAt
      tags {
        id
        name
      }
    }
  }
`;
