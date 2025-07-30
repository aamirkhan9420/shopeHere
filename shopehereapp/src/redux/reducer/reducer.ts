import * as actiontype from "../action/actionType"

const initialState: actiontype.InitiaStateType = {
    productList: [],
    isLoading: false,
    isErr: false
}
export const productReducer = (state = initialState, action: { type: string, payload: any }): actiontype.InitiaStateType => {
    switch (action.type) {
        case actiontype.GETPRODUCTDATAREQUEST: return { ...state, productList: [], isErr: false, isLoading: true }
        case actiontype.GETPRODUCTDATASUCCESS: return { ...state, productList: action.payload, isErr: false, isLoading: false }
        case actiontype.GETPRODUCTDATAFAILED: return { ...state, productList: [], isErr: true, isLoading: false }
        default: return state;
    }

}