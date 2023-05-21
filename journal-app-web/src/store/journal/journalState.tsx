import { NotesFileEntity } from "../../gql/graphql";

export interface JournalState {
    isSaving: boolean;
    messageSaved: string;
    active?: JournalStateNote;
    notes: JournalStateNote[];
}

export interface JournalStateNote {
    id: string;
    date: string;
    title: string;
    body: string;
    files: NotesFileEntity[];
}


export const journalInitialState: JournalState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
} 