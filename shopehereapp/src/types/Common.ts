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
    onClick?:()=>void
}