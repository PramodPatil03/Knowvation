import { useOne, useUpdate } from "@refinedev/core"

export const EditProduct =()=>{
    const {data, isLoading} = useOne({resource:"products",id:123})
    const{mutate, isLoading:isUpdating} = useUpdate()
    
    if(isLoading){
     return <h1>Loading....</h1>
    }
    const updatePrice = ()=>{
        mutate({
            resource:"products",
            id:123,
            values:{
                price:Math.floor(Math.random()*100)
            }
        })
    }

   return <>
    <h1>Product Name: {data?.data.name}</h1>
    <p>Price: {data?.data.price}</p>
    <button onClick={updatePrice}>Change price</button>
   </>
}
