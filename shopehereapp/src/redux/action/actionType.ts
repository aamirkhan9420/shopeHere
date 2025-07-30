export const GETPRODUCTDATAREQUEST ='GETPRODUCTDATAREQUEST'
export const GETPRODUCTDATASUCCESS ='GETPRODUCTDATASUCCESS'
export const GETPRODUCTDATAFAILED = 'GETPRODUCTDATAFAILED'

export interface InitiaStateType{
    productList :[],
    isLoading:boolean,
    isErr:boolean
}