import { createSlice } from "@reduxjs/toolkit";
import { journalInitialState } from "./journalState";

export const journalSlice = createSlice({
    name: 'journal',
    initialState: journalInitialState,
    reducers: {
        creatingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            const newNote = {
                id: action.payload.id,
                title: action.payload.title,
                body: action.payload.body,
                date: action.payload.date
            };
            state.notes = [newNote, ...state.notes];
            state.isSaving = false;
            state.messageSaved = `Saved a new note successfully!`
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
            state.messageSaved = '';
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action) => {
            const { id, title, body } = action.payload;
            state.notes = state.notes.map(note => {
                if (note.id === id) {
                    note.title = title;
                    note.body = body;
                }
                return note;
            });
            state.isSaving = false;
            state.messageSaved = `Saved ${title} successfully!`
        },
        deleteNote: (state, action) => {
            
        },
    }
});

export const { addNewEmptyNote, setActiveNote, creatingNewNote, setNotes, setSaving, updateNote, deleteNote } = journalSlice.actions;