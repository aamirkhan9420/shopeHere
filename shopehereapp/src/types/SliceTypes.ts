export interface ProductType{
    id:number,
    title:string,
   
}
export interface ProductInterFace{
    data:ProductType[],
    loading:boolean,
    isErr:boolean
}