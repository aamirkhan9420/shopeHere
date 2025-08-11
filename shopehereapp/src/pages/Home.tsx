import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FetchProducts } from '../features/products/ProductSlice'
import { AppDispatch, RootState } from '../store'
import { useSelector } from 'react-redux'
import { Container, Grid } from '@mui/material'
import { ProductCard } from '../components/ProductCard'
import { ProductCardInterface } from '../types/Common'
import SwiperComp from '../components/SwiperComp'

const Home = () => {
  let dispatch =useDispatch<AppDispatch>()
  let {data,loading,isErr}=useSelector((state:RootState)=>state.products)
  

  useEffect(()=>{
   dispatch(FetchProducts())
  },[dispatch])
  return (
  <>
  <SwiperComp />
      <Container sx={{py:4}} >
        <Grid container  spacing={{ xs: 2,sm:2, md: 5,lg:5 }} columns={{ xs: 6, sm: 8, md: 12 }}>
          {data?.length>0&&data?.map((product:ProductCardInterface,index:number)=>(

          <Grid key={index} size={{ xs: 2, sm: 4, md: 4 ,lg:3}}>
      
        <ProductCard {...product} onClick={()=>console.log('clicked')}/>
         </Grid>
        ))}
        </Grid>
      </Container>
      </>
  )
}
export default Home 