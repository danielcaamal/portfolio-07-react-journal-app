export interface JournalState {
    isSaving: boolean;
    messageSaved: string;
    active?: JournalStateNote;
    notes: JournalStateNote[];
}

interface JournalStateNote {
    id: string;
    date: number;
    title: string;
    body: string;
}


export const journalInitialState: JournalState = {
    isSaving: true,
    messageSaved: '',
    notes: [],
} 