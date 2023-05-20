import { Button, Grid, Typography } from "@mui/material";

export const ErrorView = ({ error= 'Por el momento los servicios no están disponibles' }: { error?: string }) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            className='animate__animated animate__fadeIn animate__faster'
            >
            <Grid
                item
                xs = { 12 }
                >
                <Typography fontSize={30}>{ParseError(error)}</Typography>
            </Grid>
            <Grid
                item
                xs = { 12 }
                mt={2}
                >
                <Button
                    variant='contained'
                    onClick={() => window.location.reload()}
                    >
                    Recargar
                </Button>
            </Grid>
        </Grid>
    );
}

export const ParseError = (error: any) => {
    const baseError = 'Por el momento los servicios no están disponibles';
    if (!error) return baseError;
    if (error === 'Bad Request Exception') return baseError;
    if (error === 'Network error: Failed to fetch') return baseError;
    return error;
}