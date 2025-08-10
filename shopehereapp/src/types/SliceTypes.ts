import { ProductCardInterface } from "./Common";

export interface ProductType{
    id:number,
    title:string,
   
}
export interface ProductInterFace{
    data:ProductCardInterface[],
    loading:boolean,
    isErr:boolean
}