// theme.ts
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        customLayout: {
            flex: object;
            flexCenter: object;
            flexBetween: object;
            flexAlignItemCenter: object;
            BackGroundColorWhite:object;
            BackGroundColorBlack:object;
            ColorWhite:object;
            ColorBlack:object;
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
            BackGroundColorWhite:object;
            BackGroundColorBlack:object;
            ColorWhite:object;
            ColorBlack:object;
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
            variants: [{ props: { component: 'p' }, style: { fontSize: '14px', fontWeight: 500,color:'#ffffff' } }]
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
        BackGroundColorWhite:{backgroundColor:'#ffffff'},
        BackGroundColorBlack:{backgroundColor:'#202020'},
        ColorWhite:{color:'#ffffff'},
        ColorBlack:{color:'#202020',}

    },
});

export default theme;
