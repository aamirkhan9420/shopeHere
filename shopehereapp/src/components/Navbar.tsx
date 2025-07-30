import React from 'react'
import { Box, AppBar, Typography, Badge } from '@mui/material'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Logo } from './Logo';

export const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <NavbarMain position="static" >

                <NavInnerBox>

                    <Logo />
                    <LinkBox>
                        <Link to='/wishlist' style={{ textTransform: 'none', textDecoration: 'none', color: '#202020',display:'flex',alignItems:'center',gap:'10px' }}  >
                            <FavoriteBorderIcon style={{width:'60px',height:'60px'}}/>
                            <Typography className='linkname'>Wishlist</Typography>

                        </Link>
                        <Link to='/wishlist' style={{ textTransform: 'none', textDecoration: 'none', color: '#202020',display:'flex',alignItems:'center',gap:'10px' }}  >
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCartIcon style={{width:'60px',height:'60px'}}/>
                            </Badge>
                            <Typography className='linkname'>Cart</Typography>

                        </Link>
                        <Link to='/wishlist' style={{ textTransform: 'none', textDecoration: 'none', color: '#202020',display:'flex',alignItems:'center',gap:'10px'}}  >
                            <AccountCircleIcon style={{width:'60px',height:'60px'}}/>
                            <Typography className='linkname'>Login</Typography>

                        </Link>
                    </LinkBox>


                </NavInnerBox>

                <BottomNav>
                    <Typography>50&OFF</Typography>
                    <Typography>Free shopping and returns</Typography>
                    <Typography>Different payment methods</Typography>
                </BottomNav>
            </NavbarMain>
        </Box>
    )
}
const NavbarMain = styled(AppBar)({
    backgroundColor: '#ffffff',
    height: '180px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    fontFamily: 'Montserrat sans-serif',
});
const NavInnerBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0 200px 0 200px',
    boxSizing: 'border-box'
})
const LinkBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap:"50px",
    "& .linkname": {
        fontSize: '30px',
        fontWeight: 600,
        fontFamily: "Open Sans, sans-serif",
    }
})
const BottomNav = styled(Box)({
    width: '100%',
    height: '60px',
    backgroundColor: '#202020',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding:'10px 0 10px 0',
    boxSizing:'border-box',
    "& p":{
      fontFamily: "Open Sans, sans-serif",
    fontSize: '25px',
    fontWeight: 500,  
    }
    
});
