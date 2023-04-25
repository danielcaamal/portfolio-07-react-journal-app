import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from '../components/ImageGallery';


export const NoteView = () => {


    return (
        <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx = {{
                mb: 1,
            }}
        >
            <Grid item>
                <Typography
                    fontSize={39}
                    fontWeight='light'
                >
                    28 de agosto de 2023
                </Typography>

            </Grid>
            <Grid item>
                <Button color='primary' sx={{ p: 2 }}>
                    <SaveOutlined sx={{
                        fontSize: 30,
                        mr: 1,
                    }}/>
                    Save
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder="Some awesome title"
                    label='Title'
                    sx={{
                        border: 'none',
                        mb: 1,
                    }}
                >
                </TextField>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder="What happened today"
                    minRows={ 5 }
                >
                </TextField>
            </Grid>
            {/* Image gallery */}
            <ImageGallery />
        </Grid>
    );
}