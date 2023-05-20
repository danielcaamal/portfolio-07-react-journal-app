import { addNewEmptyNote, creatingNewNote, setActiveNote, setNotes, setSaving, updateNote as onUpdateNote } from "./journalSlice";

export const startNewNote = (addNote: any) => {
    return async (dispatch:any, getState:any) => {
        dispatch(creatingNewNote());
        const { uid } = getState().auth;
        let newNote = {
            title: '',
            body: '',
            userId: uid
        }

        const { data } = await addNote({
            variables: {
                createNoteInput: newNote
            }
        });

        newNote = { ...newNote, ...data.createNote };

        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))
    }
}

export const startLoadingNotes = (findAllByUserId: any) => {
    return async (dispatch:any, getState:any) => {
        const { id } = getState().auth;
        const { data } = await findAllByUserId({
            variables: {
                findAllNotesByUserIdId: id
            }
        });
        dispatch(setNotes(data.findAllNotesByUserId));
    }
}

export const startSavingNote = (updateNote: any) => {
    return async (dispatch:any, getState:any) => {
        dispatch(setSaving());
        const { active } = getState().journal;
        const { data } = await updateNote({
            variables: {
                updateNoteInput: {
                    id: active.id,
                    title: active.title,
                    body: active.body
                }
            }
        });

        const updatedNote = { ...active, ...data.updateNote };
        dispatch(setActiveNote(updatedNote));
        dispatch(onUpdateNote(updatedNote))
    }
}