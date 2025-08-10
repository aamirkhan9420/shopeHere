import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const LazyHome = React.lazy(() => import('../pages/Home'))
const LazyWishList = React.lazy(() => import('../pages/WishList'))
const LazyLogin = React.lazy(() => import('../pages/Login'))
const LazyCart = React.lazy(() => import('../pages/Cart'))

const MainLayoutLazy = React.lazy(() => import('../layout/MainLayout'))
const AuthLayoutLazy = React.lazy(() => import('../layout/AuthLayout'))


export const AllRoutes = () => {
  return (
    <Suspense fallback={<>...Loading</>}>
      <Routes>
        <Route path='/' element={
          <MainLayoutLazy>
            <LazyHome />
          </MainLayoutLazy>} 
          />
          <Route path='/Cart' element={
          <MainLayoutLazy>
            <LazyCart />
          </MainLayoutLazy>} 
          />
          <Route path='/wishlist' element={
          <MainLayoutLazy>
            <LazyWishList />
          </MainLayoutLazy>} 
          />

        <Route path='/login'
          element={
          <AuthLayoutLazy>
            <LazyLogin />
          </AuthLayoutLazy>} 
          />
      </Routes>
    </Suspense>
  )
}
