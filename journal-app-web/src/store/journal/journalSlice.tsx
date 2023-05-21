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
                date: action.payload.date,
                files: []
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
            const { id, title } = action.payload;
            state.notes = state.notes.filter((note) => {
                if (note.id !== id) return note; 
            });
            state.notes = [action.payload, ...state.notes];
            state.isSaving = false;
            state.messageSaved = `Saved ${title} successfully!`
        },
        deleteFile: (state, action) => {
            const { id } = action.payload;
            if (!state?.active?.files) return;
            state.active.files = state?.active?.files.filter((file) => {
                if (file.id !== id) return file;
            });
            state.isSaving = false;
        },
        deleteNote: (state, action) => {
            
        },
    }
});

export const { addNewEmptyNote, setActiveNote, creatingNewNote, setNotes, setSaving, updateNote, deleteNote, deleteFile } = journalSlice.actions;