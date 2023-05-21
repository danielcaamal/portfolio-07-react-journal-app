import { gql } from '@apollo/client';

export const ADD_NOTE = gql`
    mutation createNote($createNoteInput: CreateNoteInput!) {
        createNote(createNoteInput: $createNoteInput) {
            id
            title
            body
            date
            files {
                id
                base64
                title
            }
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

export const FIND_NOTE_BY_ID= gql`
    query FindOneNoteById($findOneNoteByIdId: String!) {
        findOneNoteById(id: $findOneNoteByIdId) {
            id
            title
            body
            date
            files {
                id
                base64
                title
            }
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
            files {
                id
                base64
                title
            }
        }
    }
`;

export const DELETE_NOTE = gql`
    mutation RemoveNote($removeNoteId: String!) {
        removeNote(id: $removeNoteId) {
            id
        }
    }
`;

export const REMOVE_FILE_NOTE = gql`
    mutation RemoveFileNote($removeFileNoteId: String!) {
        removeFileNote(id: $removeFileNoteId) {
            id
        }
    }
`;
