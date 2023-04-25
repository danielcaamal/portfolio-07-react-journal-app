import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from "../layouts";

export const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <form>
                <Grid container >
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField 
                            label="Email"
                            type="email"
                            placeholder="email@email.com"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField 
                            label="Password"
                            type="password"
                            placeholder="password"
                            fullWidth
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                fullWidth
                                variant="contained"
                                type="submit"
                                >
                            <Typography sx={{ ml: 1 }}>Login</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                fullWidth
                                variant="contained"
                                type="submit"
                                >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="end"
                        >
                        <Link
                            component={RouterLink}
                            color= "inherit"
                            to="/auth/register"
                            >
                            Create an account</Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}