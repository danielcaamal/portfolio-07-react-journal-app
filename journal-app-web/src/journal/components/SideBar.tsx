import { TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';

export const SideBar = ({ drawerWidth=240 } : { drawerWidth?: number }) => {

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
                        Daniel Caamal
                    </Typography>
                </Toolbar>
                <Divider/>
                <List>
                    {
                        ['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={text} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    );
}