import React from 'react';
import { Box, AppBar, Typography, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Logo } from './Logo';
import theme from './ThemeProvider';



export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavbarMain position="static">
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
        </NavInnerBox>

        <BottomNav>
          <Typography component={'p'}>50% OFF</Typography>
          <Typography component={'p'}>Free shipping and returns</Typography>
          <Typography component={'p'}>Different payment methods</Typography>
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
  backgroundColor: '#ffffff',
  flexDirection: 'column',
  boxSizing: 'border-box',
  ...theme.customLayout.flexBetween,
 

});

const NavInnerBox = styled(Box)({
 ...theme.customLayout.flexBetween,
  width: '100%',
  padding: '10px 100px',
  boxSizing: 'border-box',
  border:'1px solid red',
   [theme.breakpoints.down('md')]:{
    padding: '10px 50px',
  }
});

const LinkBox = styled(Box)({
  ...theme.customLayout.flexAlignItemCenter,
  gap: '50px',
  [theme.breakpoints.down('md')]:{
    gap: '10px',
  }
});

const StyledLink = styled(Link)({
  ...theme.customLayout.flexAlignItemCenter,
  gap: '10px',
  color: '#202020',
...theme.LinkStyle
});

const BottomNav = styled(Box)({
  width: '100%',
  height: '30px',
  backgroundColor: '#202020',
  ...theme.customLayout.flexAlignItemCenter,
  justifyContent: 'space-evenly',
  padding: '10px 0',
  boxSizing: 'border-box',
  "& p": {
    color: '#ffffff',
  },
});