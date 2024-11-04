import { useList } from "@refinedev/core"

export const ShowList = ()=>{
    const {data, isLoading} = useList({
        resource:"products",
        pagination:{current:1, pageSize:10},
        filters:[{field:"material", operator:"eq",value:"rubber"}]        
    })

    if(isLoading){
        return <h1>Loading</h1>
    }

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {data?.data.map(item=>{
                    return <li key={item.id}>
                        <h3>{item.name}</h3>
                        <p>Material used: {item.material}</p>
                        <p>Product Price: {item.price}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}