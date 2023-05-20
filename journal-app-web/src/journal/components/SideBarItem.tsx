import { Edit, TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import { getLocaleDate } from '../../../utils';
import { JournalStateNote } from '../../store';
import { useMemo } from 'react';


export const SideBarItem = ({ note, onClick } : 
    { note: JournalStateNote, onClick: (note: JournalStateNote) => void }
    ) => {

    const isDraft = note.title.length === 0;

    const getBodyPreview = useMemo(() => {
        return note.body.length > 0 ? note.body.substring(0, 20) + "..." : "Empty note";
    }, [note.body]);

    return (
        <ListItem key={note.id} disablePadding>
            <ListItemButton
                onClick={() => onClick(note)}
                >
                <ListItemIcon>
                    { isDraft? <Edit/> : <TurnedInNot/> }
                </ListItemIcon>
                <Tooltip title={getBodyPreview} placement="right">
                    <Grid>
                        <ListItemText primary={ isDraft ? "DRAFT" : note.title} />
                        <ListItemText secondary={getLocaleDate(note.date)} />
                    </Grid>
                </Tooltip>
            </ListItemButton>
        </ListItem>
    );
}