import React from 'react'
import styled from '@emotion/styled'
import theme from './ThemeProvider';
export const Logo = () => {
  return (
    <ImageStyled src="https://i.ibb.co/3Y92YdRF/logo-Image.png" alt="" />
  )
}
const ImageStyled = styled('img')({
  padding:'10px',
  boxSizing:'border-box',
  width:'200px',
  [theme.breakpoints.down('sm')]:{
   width:'150px'
  }
})