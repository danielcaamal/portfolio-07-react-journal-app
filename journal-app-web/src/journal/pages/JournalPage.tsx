import { useAppDispatch, useAppSelector } from '../../hooks';
import { startNewNote } from '../../store';
import { FloatingButton } from '../components';
import { JournalLayout } from '../layouts';
import { NoteView, NothingSelectedView } from '../views';
import { useGraphql } from '../hooks';


export const JournalPage = () => {

    const dispatch = useAppDispatch();
    const { isSaving, active: note, messageSaved } = useAppSelector(state => state.journal);

    const { findOneById, addNote, updateNote, removeNote, removeFileNote, isLoading, hasError, errorMessage } = useGraphql();
    const onClickNewNote = () => {
        dispatch(startNewNote(addNote));
    }

    return (
        <JournalLayout isLoading={isLoading} hasError={hasError} error={errorMessage} findOneById={findOneById}> 
            <>
                {/* NoteView */}
                {/* NothingSelectedView */}
                { !!note ? 
                    <NoteView 
                        note={note} 
                        updateNote={updateNote} 
                        removeNote={removeNote}
                        removeFileNote={removeFileNote} 
                        messageSaved={messageSaved} 
                        isSaving={isSaving}
                        /> : 
                    <NothingSelectedView />
                }

                {/* Floating button */}
                <FloatingButton onClickNewNote={onClickNewNote} isDisabled={isSaving}/>
            </>
        </JournalLayout>
    )
}