import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: "#262254",
            light: "#5c5c8a",
        },
        secondary: {
            main: "#543884",
        },
        error: {
            main: red.A400,
        }
    }
});