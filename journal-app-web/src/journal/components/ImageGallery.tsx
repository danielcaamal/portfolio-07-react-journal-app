import { Button, ImageList, ImageListItem, Divider, Box } from '@mui/material';
import { NotesFileEntity } from "../../gql/graphql";
import { useAppDispatch } from '../../hooks';
import { onRemoveNoteFile } from '../../store';


export const ImageGallery = ({ itemData, removeFileNote } : { itemData: NotesFileEntity[], removeFileNote: any }) => {

    const dispatch = useAppDispatch();

    const onRemoveFileNote = () => {
        dispatch(onRemoveNoteFile(removeFileNote, itemData[0].id))
    }

    return (
        <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
        {itemData.map((item) => (
            <ImageListItem key={item.id}>
                <img
                    title={item.title}
                    src={item.base64}
                    alt={item.title}
                    loading="lazy"
                />
                {/* Download and delete button */}
                <Box
                    alignItems='center'
                    justifyContent='space-around'
                    display='flex'
                    >
                    <Button
                        href={item.base64}
                        download={item.title}
                        >
                        Download
                    </Button>
                    <Button
                        color='error'
                        onClick={onRemoveFileNote}
                        >
                        Delete
                    </Button>
                </Box>
            </ImageListItem>
        ))}
        </ImageList>
    );
}

