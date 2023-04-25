import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";


export const FloatingButton = () => {
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
        >
            <AddOutlined/>
        </IconButton>
    );
}