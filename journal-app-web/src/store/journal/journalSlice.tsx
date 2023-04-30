import { createSlice } from "@reduxjs/toolkit";
import { journalInitialState } from "./journalState";

export const journalSlice = createSlice({
    name: 'journal',
    initialState: journalInitialState,
    reducers: {
        addNewEmptyNote: (state, action) => {
            state.active = {
                id: '',
                date: new Date().getTime(),
                title: '',
                body: ''
            };
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state, action) => {
            state.isSaving = action.payload;
        },
        updateNote: (state, action) => {

        },
        deleteNoteById: (state, action) => {
            
        },
    }
});