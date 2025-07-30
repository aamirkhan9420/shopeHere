import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const LazyHome =React.lazy(()=>import('../pages/Home'))
const LazyWishList =React.lazy(()=>import('../pages/WishList'))

export const AllRoutes = () => {
  return (
    <Suspense fallback={<>...Loading</>}>
        <Routes>
            <Route path='/' element={<LazyHome/>} />
            <Route path='/wishlist' element={<LazyWishList/>} />
        </Routes>
    </Suspense>
  )
}
