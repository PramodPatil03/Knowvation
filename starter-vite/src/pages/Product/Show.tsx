import { useOne } from "@refinedev/core"

export const ShowProduct = ()=>{
    const {data, isLoading} = useOne({resource:"products", id:123})

    if(isLoading){
        return <h1>Loading...</h1>
    }
    console.log(data)
    return <>
    <div>Product id = {data?.data.id}</div>
    <h2>Name = {data?.data.name}</h2>
    <p>Material used: {data?.data.material}</p>
    <p>{data?.data.description}</p>
    <b>Price: {data?.data.price}</b>
    </>
}
