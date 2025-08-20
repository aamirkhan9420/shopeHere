import React from 'react'
import { Button, Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import theme from './ThemeProvider';

const FilterComp = () => {
    const categories = [
        "HOODIES",
        "DRESSES",
        "SUITS",
        "SHOES",
        "T-SHIRTS",
        "JEANS",
        "JACKETS",
        "BAGS",
    ];
    return (
        <Grid container spacing={2} justifyContent={'center'} sx={{ paddingTop: 4 }}>
            {categories.map((item, index) => (
                <Grid key={index} >
                    <StyledButton variant="outlined">{item}</StyledButton>
                </Grid>
            ))}
        </Grid>
    )
}

export default FilterComp

const StyledButton =styled(Button)({
    borderRadius: "8px",
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "14px",
    padding: "8px 20px",
    minWidth:'100px',
    ...theme.customLayout.ColorBlack,
    borderColor: "#d1d5db",
    "&:hover": {
        borderColor: theme.customLayout.ColorBlack,
       ...theme.customLayout.BackGroundColorWhite,
    },
})