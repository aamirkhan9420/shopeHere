import {ReactNode} from 'react'
 export  interface TypeChildren{
    children:ReactNode
}
export interface ProductCardInterface{
    id:number
    name:string,
    img:string,
    text:string,
    price:number|string,
    color:string[],
    type: string,
    size: string[],
    gender: string,
    inCart:false,
    quantity:number,
    offerText:string
    onClick?:()=>void
}