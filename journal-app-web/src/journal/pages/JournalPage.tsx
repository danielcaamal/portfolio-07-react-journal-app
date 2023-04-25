import { FloatingButton } from '../components';
import { JournalLayout } from '../layouts';
import { NothingSelectedView, NoteView } from '../views';

export const JournalPage = () => {

    return (
        <JournalLayout> 
            {/* NothingSelectedView */}
            <NothingSelectedView />
            
            {/* NoteView */}
            {/* <NoteView /> */}

            {/* Floating button */}
            <FloatingButton />
        </JournalLayout>
    )
}