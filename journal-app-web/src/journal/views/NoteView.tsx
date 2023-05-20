import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components/ImageGallery";
import { useAppDispatch, useForm } from "../../hooks";
import { JournalStateNote, setActiveNote, startSavingNote } from "../../store";
import { getLocaleDate } from "../../../utils";
import { useEffect } from "react";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

const formValidations = {
    title: [(value:string) => value.length > 0, "Title is required"],
    body: [(value:string) => value.length > 0, "Body is required"],
}

export const NoteView = ({ note, messageSaved, updateNote, isSaving } : { 
        note:JournalStateNote,
        messageSaved: string,
        isSaving: boolean,
        updateNote: any,
    }) => {
    
    const dispatch = useAppDispatch();
    const { onInputChange, formState, isFormValid } = useForm<JournalStateNote>(note, formValidations);
    
    const { title, body } = formState;
    
    useEffect(() => {
        dispatch(setActiveNote({ ...formState }))
    }, [formState]);

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire({
                title: messageSaved,
                icon: 'success',
                showConfirmButton: true,
            })
        }
    }, [messageSaved]);

    const onSaveNote = () => {
        dispatch(startSavingNote(updateNote));
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx = {{
                mb: 1,
            }}
            className="animate__animated animate__fadeIn animate__faster"
        >
            <Grid item>
                <Typography
                    fontSize={39}
                    fontWeight="light"
                >
                    { getLocaleDate(note.date)}
                </Typography>

            </Grid>
            <Grid item>
                <Button 
                    color="primary"
                    sx={{ p: 2 }}
                    onClick={onSaveNote}
                    disabled={ isSaving || !isFormValid }
                    >
                    <SaveOutlined sx={{
                        fontSize: 30,
                        mr: 1,
                    }}/>
                    Save
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Some awesome title"
                    label="Title"
                    name="title"
                    value={ title }
                    onChange={ onInputChange }
                    sx={{
                        border: "none",
                        mb: 1,
                        minHeight: 50,
                    }}
                >
                </TextField>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happened today"
                    minRows={ 5 }
                    label="Body"
                    name="body"
                    value={ body }
                    onChange={ onInputChange }
                >
                </TextField>
            </Grid>
            {/* Image gallery */}
            <ImageGallery />
        </Grid>
    );
}