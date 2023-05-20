import { gql } from '@apollo/client';

export const ADD_NOTE = gql`
    mutation createNote($createNoteInput: CreateNoteInput!) {
        createNote(createNoteInput: $createNoteInput) {
            id
            title
            body
            date
        }
    }
`;


export const FIND_NOTES_BY_USER = gql`
    query FindAllNotesByUserId($findAllNotesByUserIdId: String!) {
        findAllNotesByUserId(id: $findAllNotesByUserIdId) {
            id
            title
            body
            date
        }
    }
`;

export const UPDATE_NOTE = gql`
    mutation UpdateNote($updateNoteInput: UpdateNoteInput!) {
        updateNote(updateNoteInput: $updateNoteInput) {
            id
            title
            body
            date
        }
    }
`;

