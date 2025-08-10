import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductInterFace} from '../../types/SliceTypes'

const initialState: ProductInterFace = {
    data: [],
    loading: false,
    isErr: false
}
export const FetchProducts = createAsyncThunk<[]>('products/fetchProducts', async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get('https://shoppehere.onrender.com/product/productList')
        return res.data.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue("An unknown error occurred");
    }

})
const productSlice = createSlice({
    name: 'products', initialState, reducers: {}, extraReducers: (builder) => {
        builder.addCase(FetchProducts.pending, (state) => {
            state.isErr = false
                state.loading = true
        })
        builder.addCase(FetchProducts.fulfilled, (state, action: PayloadAction<[]>) => {
            state.isErr = false
                state.data = action.payload
                state.loading = false
        })
        builder.addCase(FetchProducts.rejected, (state) => {
            state.isErr = true
                state.data = []
                state.loading = false
        })
    }
})
export default productSlice.reducer