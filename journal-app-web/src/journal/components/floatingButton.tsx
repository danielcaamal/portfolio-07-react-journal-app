import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";


export const FloatingButton = ({ onClickNewNote, isDisabled = false }: {
    onClickNewNote: () => void,
    isDisabled?: boolean
}) => {
    return (
        <IconButton
            size= 'large'
            sx={{
                color: 'white',
                backgroundColor: 'error.main',
                ':hover': {
                    backgroundColor: 'error.main',
                    opacity: 0.9
                },
                position: 'fixed',
                bottom: 50,
                right: 50,
            }}
            onClick={onClickNewNote}
            disabled={isDisabled}
        >
            <AddOutlined/>
        </IconButton>
    );
}