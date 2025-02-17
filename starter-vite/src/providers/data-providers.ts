import type { DataProvider } from "@refinedev/core";

const API_URL = "https://api.fake-rest.refine.dev";

export const dataProvider: DataProvider = {
  getOne: async({resource, id, meta}) => {
    // throw new Error("Not implemented");
    const response = await fetch(`${API_URL}/${resource}/${id}`);
    if(response.status<200 || response.status>299){
      throw response;
    }
    const data = await response.json();
    return {data};
  },
  update: async ({resource, id, variables}) => {
    const response = await fetch(`${API_URL}/${resource}/${id}`,{
      method:"PATCH",
      body:JSON.stringify(variables),
      headers:{
        "content-type":"application/json"
      },
    })
    if(response.status<200 || response.status>299){
      throw response;
    }
    const data = await response.json();
    return { data };
    
  },
  getList: async ({resource, pagination, filters, sorters, meta}) => {
    const params = new URLSearchParams();

    if(pagination){
      params.append("_start",((pagination.current-1)*pagination.pageSize));
      params.append("_end", (pagination.current * pagination.pageSize))
    }
    if(sorters && sorters.length>0){
      params.append("_sort",sorters.map((sorter)=>sorter.field).join(","));
      params.append("_order",sorters.map(sorter=>sorter.order).join(","));
    }
    const response = await fetch(`${API_URL}/${resource}?${params.toString()}`);

    if(response.status<200 || response.status>299){
      throw response;
    }

    const data = await response.json(); 
    return { data , total:0, };
  },
  create: () => {
    throw new Error("Not implemented");
  },
  deleteOne: () => {
    throw new Error("Not implemented");
  },
  getApiUrl: () => API_URL,
  // Optional methods:
  // getMany: () => { /* ... */ },
  // createMany: () => { /* ... */ },
  // deleteMany: () => { /* ... */ },
  // updateMany: () => { /* ... */ },
  // custom: () => { /* ... */ },
};