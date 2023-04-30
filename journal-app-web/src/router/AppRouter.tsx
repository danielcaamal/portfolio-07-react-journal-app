import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth';
import { JournalRoutes } from '../journal';
import { AuthStatus } from '../store/auth';
import { CheckingAuth } from '../ui';
import { useCheckAuth } from '../hooks';

export const AppRouter = () => {

    const { status } = useCheckAuth();

    if (status === AuthStatus.CHECKING) return <CheckingAuth />

    return (
        <Routes>
            {
                status === AuthStatus.AUTHENTICATED ?
                <Route path="/*" element={ <JournalRoutes/> } /> :
                <Route path="/auth/*" element={ <AuthRoutes/> } />
            }
            <Route path="/*" element={ <Navigate to='/auth/login'/> } />
        </Routes>
    )
}