import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SideBarItem } from './SideBarItem';
import { JournalStateNote, setActiveNote } from '../../store';

export const SideBar = ({ drawerWidth=240 } : { drawerWidth?: number }) => {

    const { displayName } = useAppSelector(state => state.auth);
    const { notes } = useAppSelector(state => state.journal);
    const dispatch = useAppDispatch();

    const onFocusItem = (note: JournalStateNote) => {
        dispatch(setActiveNote(note))
    };

    return (
        <Box
            component='nav'
            sx={{
                width: {
                    sm: drawerWidth,
                },
                flexShrink: {
                    sm: 0,
                }
            }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: {
                        xs: 'block'
                    },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth
                    }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        { displayName }
                    </Typography>
                </Toolbar>
                <Divider/>
                <List>
                    {
                        notes.map((note, index) => (
                            <SideBarItem key={note.id} note={note} onClick={onFocusItem}/>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    );
}