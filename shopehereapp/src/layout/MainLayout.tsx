import React from 'react'
import { Navbar } from '../components/Navbar'
import {TypeChildren} from '../types/Common'
 const MainLayout = ({children}:TypeChildren) => {
  return (
    <>
    <Navbar />
    {children}</>
  )
}
export default MainLayout
