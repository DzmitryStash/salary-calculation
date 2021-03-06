import { createMuiTheme } from "@material-ui/core";
import { deepPurple, amber } from "@material-ui/core/colors";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: deepPurple[500],
        },
        secondary: {
            main: amber[500],
            contrastText: deepPurple[900],
        }
    }
})

theme.props = {
    MuiButton: {
        disableElevation: false,
        fullWidth: true
    },
    MuiTableSortLabel: {
        active: true
    }
}

theme.overrides = {
    MuiButton: {
        root: {
            textTransForm: 'none'
        },
        containedPrimary: {
            "&hover": {
                backgroundColor: amber[500],
                color: deepPurple[900],
            }
        },
        containedSecondary: {
            fontWeight: 700,
        }
    },
    MuiLink: {
        button: {
            color: 'black'
        }
    },
    MuiTableSortLabel: {
        root: {
            color: 'white'
        }
    }
}