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
}


export const journalInitialState: JournalState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
} 