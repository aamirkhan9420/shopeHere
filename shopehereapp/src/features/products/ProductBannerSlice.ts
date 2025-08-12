import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductInterFace } from "../../types/SliceTypes";
const initialState: ProductInterFace = {
    data: [],
    loading: false,
    isErr: false
}
export const FetchProductBanner = createAsyncThunk('products/fetchProductsBanner', async (_, { rejectWithValue }) => {
    try {
        let data = await axios.get('https://shoppehere.onrender.com/banner/bannerdata')
        return data?.data?.data

    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue("An unknown error occurred");
    }
})

const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(FetchProductBanner.pending, (state) => {
            state.isErr = false
            state.loading = true
        })
        builder.addCase(FetchProductBanner.fulfilled, (state, action: PayloadAction<[]>) => {
            state.isErr = false
            state.loading = false
            state.data = action.payload

        })
        builder.addCase(FetchProductBanner.rejected, (state) => {
            state.isErr = true
                state.loading = false
        })
    }
})
export default bannerSlice.reducer