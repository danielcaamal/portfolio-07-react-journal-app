import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from "../layouts";

export const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <form>
                <Grid container >
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField 
                            label="Full name"
                            type="text"
                            placeholder="Your name"
                            fullWidth
                        />
                    </Grid>
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
                        <Grid item xs={12} sm={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                type="submit"
                                >
                            <Typography>Register</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="end"
                        >
                        <Typography>
                            Already registered?
                            <Link
                                sx= {{ ml: 1 }}
                                component={RouterLink}
                                color= "inherit"
                                to="/auth/login"
                                >Sign in
                            </Link>
                        </Typography>
                        
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}