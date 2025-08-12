import React from 'react';
import { Box, AppBar, Typography, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

import { Logo } from './Logo';
import theme from './ThemeProvider';



export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, position: 'sticky', zIndex: 10000, mb: '118px' }}>
      <NavbarMain >
        <NavInnerBox>
          <StyledLink to="/">
            <Logo />
          </StyledLink>
          <LinkBox>
            <StyledLink to="/wishlist">
              <FavoriteBorderIcon sx={theme.MuiIcon} />
              <Typography sx={linkTypographyStyle}>Wishlist</Typography>
            </StyledLink>

            <StyledLink to="/cart">
              <Badge badgeContent={4} color='warning'>
                <ShoppingCartIcon sx={theme.MuiIcon} />
              </Badge>
              <Typography sx={linkTypographyStyle}>Cart</Typography>
            </StyledLink>

            <StyledLink to="/login">
              <AccountCircleIcon sx={theme.MuiIcon} />
              <Typography sx={linkTypographyStyle}>Login</Typography>
            </StyledLink>
          </LinkBox>
          <MenuIcon className='menuicon' sx={{ ...theme.MuiIcon, ...theme.customLayout.ColorBlack }} />
        </NavInnerBox>

        <BottomNav className='marquee'>
          <Typography className='bigscreentext' component={'p'}>50% OFF</Typography>
          <Typography className='bigscreentext' component={'p'}>Free shipping and returns</Typography>
          <Typography className='bigscreentext' component={'p'}>Different payment methods</Typography>
          <Typography className='smallscreentext' component={'p'}>50% OFF &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Free shipping and returns  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Different payment methods</Typography>
        </BottomNav>


      </NavbarMain>
    </Box>
  );
};


const linkTypographyStyle = {
  fontSize: '16px',
  fontWeight: 600,

};

const NavbarMain = styled(AppBar)({
  ...theme.customLayout.BackGroundColorWhite,
  flexDirection: 'column',
  boxSizing: 'border-box',
  ...theme.customLayout.flexBetween,


});

const NavInnerBox = styled(Box)({
  ...theme.customLayout.flexBetween,
  width: '100%',
  padding: '10px 100px',
  boxSizing: 'border-box',
  [theme.breakpoints.down('md')]: {
    padding: '10px 50px',
  },
  "& .menuicon": {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  }

});

const LinkBox = styled(Box)({
  ...theme.customLayout.flexAlignItemCenter,
  gap: '50px',
  [theme.breakpoints.down('md')]: {
    gap: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
});

const StyledLink = styled(Link)({
  ...theme.customLayout.flexAlignItemCenter,
  gap: '10px',
  ...theme.customLayout.ColorBlack,
  ...theme.LinkStyle
});

const BottomNav = styled(Box)({
  width: "100%",
  height: "30px",
  ...theme.customLayout.BackGroundColorBlack,
  ...theme.customLayout.flexAlignItemCenter,
  justifyContent: "space-evenly",
  padding: "10px 0",
  boxSizing: "border-box",
  overflow: "hidden",
  "& .smallscreentext": {
    display: 'none'
  },
  [theme.breakpoints.down("sm")]: {
    "& .bigscreentext": {
      display: 'none'
    },
    "& .smallscreentext": {
      display: 'block'
    },
    justifyContent: "flex-start",

    "&  p": {
      display: "inline-block",
      whiteSpace: "nowrap",
      animation: "marquee 15s linear infinite",
    },
    "@keyframes marquee": {
      "0%": { transform: "translateX(100%)" },
      "100%": { transform: "translateX(-100%)" },
    },
  },

});