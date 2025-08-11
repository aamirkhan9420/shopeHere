import {configureStore} from '@reduxjs/toolkit'
import ProductSlice from  './features/products/ProductSlice'
import productSlice from  './features/products/ProductBannerSlice'

export const store=configureStore({
    reducer:{products:ProductSlice,banner:productSlice}
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;