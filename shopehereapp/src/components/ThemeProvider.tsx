// theme.ts
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        customLayout: {
            flex: object;
            flexCenter: object;
            flexBetween: object;
            flexAlignItemCenter: object;
        };
        MuiIcon: object;
        LinkStyle: object;
    }
    interface ThemeOptions {
        customLayout?: {
            flex?: object;
            flexCenter?: object;
            flexBetween?: object;
            flexAlignItemCenter: object;
        };
        MuiIcon: object;
        LinkStyle: object
    }
}

const theme = createTheme({
    LinkStyle: {
        textDecoration: 'none',
        textTransform: 'none',
    },
    MuiIcon: {
        width: '30px',
        height: '30px'
    },
    typography: {
        fontFamily: 'Montserrat, Open Sans, sans-serif',
    },
    components: {
        
        MuiTypography: {
            variants: [{ props: { component: 'p' }, style: { fontSize: '14px', fontWeight: 500, } }]
        }
    },

    customLayout: {
        flex: {
            display: 'flex',
        },
        flexAlignItemCenter: {
            display: 'flex',
            alignItems: 'center'
        },
        flexCenter: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        flexBetween: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
    },
});

export default theme;
