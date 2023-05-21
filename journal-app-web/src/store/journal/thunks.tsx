import { addNewEmptyNote, creatingNewNote, setActiveNote, setNotes, setSaving, updateNote as onUpdateNote, deleteFile, deleteNote, updateNoteFiles } from "./journalSlice";

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

export const startGetDetailNote = (findOneById: any, id: string) => {
    return async (dispatch:any, getState:any) => {
        const { data } = await findOneById({
            variables: {
                findOneNoteByIdId: id
            }
        });
        dispatch(setActiveNote(data.findOneNoteById));
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

export const startUploadingFiles = (uploadFiles: File[], updateNote: any) => {
    return async (dispatch:any, getState:any) => {
        dispatch(setSaving());
        const { active } = getState().journal;

        const filesInBase64Array = await Promise.all(
            uploadFiles.map(file => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve({ title: file.name,  base64: reader.result });
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                })
            })
        );
        
        const { data } = await updateNote({
            variables: {
                updateNoteInput: {
                    id: active.id,
                    files: filesInBase64Array
                }
            }
        });

        const updatedNote = { ...active, ...data.updateNote };
        dispatch(setActiveNote(updatedNote));
        dispatch(onUpdateNote(updatedNote))
    }
}

export const onRemoveNoteFile = (removeFileNote: any, id: string) => {
    return async (dispatch:any, getState:any) => {
        dispatch(setSaving());
        const { active } = getState().journal;
        const { data } = await removeFileNote({
            variables: {
                removeFileNoteId: id
            }
        });
        dispatch(deleteFile(data.removeFileNote));
        dispatch(updateNoteFiles());
    }
}

export const startRemovingNote = (removeNote: any, id: string) => {
    return async (dispatch:any, getState:any) => {
        dispatch(setSaving());
        const { data } = await removeNote({
            variables: {
                removeNoteId: id
            }
        });
        dispatch(deleteNote(data.removeNote))
        dispatch(setActiveNote(null));
    }
}