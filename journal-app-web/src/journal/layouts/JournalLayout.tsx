import { Box, Toolbar } from '@mui/material';
import { NavBar, SideBar } from '../components';
import { ErrorView, LoadingView } from '../views';

const drawerWidth = 240;

export const JournalLayout = ({ children, isLoading = false, hasError = false, error = '', findOneById }: { children: JSX.Element | JSX.Element[], isLoading?: boolean, hasError?: boolean, error?: string, findOneById:any }) => {

    return (
        <Box sx= {{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>

            {/* Navbar */}
            <NavBar drawerWidth={drawerWidth}/>

            {/* Sidebar */}
            <SideBar drawerWidth={drawerWidth} findOneById={findOneById}/>

            <Box 
                component='main'
                sx={{
                    flexGrow: 1,
                    p: 3,
                }}>
                {/* Toolbar */}
                <Toolbar />
                { !isLoading && !hasError && children}
                { isLoading && LoadingView()}
                { hasError && ErrorView({ error }) }
            </Box>
        </Box>
    );
}