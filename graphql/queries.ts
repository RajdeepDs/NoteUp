import { gql } from "@apollo/client";

export const GET_NOTES = gql`
  query Notes {
    notes {
      id
      title
      createdAt
      updatedAt
      tags {
        id
        name
      }
    }
  }
`;

export const GET_NOTE = gql`
  query Note($id: ID!) {
    note(id: $id) {
      id
      title
      content
      createdAt
      updatedAt
      tags {
        id
        name
      }
      author {
        id
        name
        email
      }
    }
  }
`;

export const GET_TAGS = gql`
  query Tags {
    tags {
      id
      name
    }
  }
`;

export const GET_NOTESBYTAG = gql`
  query NotesByTag($id: ID!) {
    notesByTag(tagId: $id) {
      id
      title
      createdAt
      updatedAt
      tags {
        id
        name
      }
    }
  }
`;

export const GET_TAGSBYNOTEID = gql`
  query TagsByNoteId($noteId: ID!) {
    tagsByNoteId(noteId: $noteId) {
      id
      name
    }
  }
`;
export const GET_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      email
  }
}
`;