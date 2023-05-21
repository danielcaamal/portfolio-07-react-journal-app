import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, Input, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components/ImageGallery";
import { useAppDispatch, useForm } from "../../hooks";
import { JournalStateNote, setActiveNote, startSavingNote, startUploadingFiles } from "../../store";
import { getLocaleDate } from "../../../utils";
import { ChangeEvent, useEffect, useRef } from "react";
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

    const fileInputRef = useRef<HTMLInputElement>(null);

    const onSaveNote = () => {
        dispatch(startSavingNote(updateNote));
    }

    const onFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) return;
        if (files.length === 0) return;
        // Only jpg, png, jpeg
        const validTypes = ["image/png", "image/jpg", "image/jpeg"];
        const validFiles = Array.from(files).filter(file => {
            return validTypes.includes(file.type);
        })
        if (validFiles.length === 0) return;
        dispatch(startUploadingFiles(validFiles, updateNote))
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
                <input
                    title="Upload image"
                    type="file"
                    multiple
                    onChange={onFileInputChange}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    accept="image/png, image/gif, image/jpeg"
                    />
                <IconButton
                    color="primary"
                    disabled={ isSaving || !isFormValid }
                    onClick={() => fileInputRef.current?.click()}
                    >
                    <UploadOutlined />
                </IconButton>
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
            <ImageGallery itemData={note.files}/>
        </Grid>
    );
}