import { Box, CircularProgress, Grid, Typography } from "@mui/material";

export const LoadingView = () => {
    return (
        <Grid
            container
            display="flex"
            direction="column"
            justifyContent="center"
            alignItems="center"
            minHeight="90vh"
            className='animate__animated animate__fadeIn animate__faster'
            >
            <Grid
                item
                xs = { 12 }
                >
                <CircularProgress color="secondary" />
            </Grid>
        </Grid>
    );
}